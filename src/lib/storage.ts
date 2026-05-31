import { useEffect, useState, useCallback } from "react";

const KEY = "englishquest:v1";

export interface ProgressState {
  bestScore: number; // percent
  totalQuizzes: number;
  streak: number;
  lastVisit: string | null; // YYYY-MM-DD
  lastDailyDate: string | null;
  lastDailyScore: number | null;
  categoryCompletions: Record<string, number>;
  theme: "light" | "dark";
}

const defaultState: ProgressState = {
  bestScore: 0,
  totalQuizzes: 0,
  streak: 0,
  lastVisit: null,
  lastDailyDate: null,
  lastDailyScore: null,
  categoryCompletions: {},
  theme: "light",
};

function read(): ProgressState {
  if (typeof window === "undefined") return defaultState;
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState;
    return { ...defaultState, ...JSON.parse(raw) };
  } catch {
    return defaultState;
  }
}

function write(state: ProgressState) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent("eq:progress"));
}

export function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

export function useProgress() {
  const [state, setState] = useState<ProgressState>(defaultState);

  useEffect(() => {
    setState(read());
    const handler = () => setState(read());
    window.addEventListener("eq:progress", handler);
    window.addEventListener("storage", handler);
    return () => {
      window.removeEventListener("eq:progress", handler);
      window.removeEventListener("storage", handler);
    };
  }, []);

  const update = useCallback((patch: Partial<ProgressState> | ((s: ProgressState) => ProgressState)) => {
    const current = read();
    const next = typeof patch === "function" ? patch(current) : { ...current, ...patch };
    write(next);
    setState(next);
  }, []);

  return [state, update] as const;
}

export function recordQuizCompletion(percent: number, categorySlug: string) {
  const s = read();
  const today = todayKey();
  let streak = s.streak;
  if (s.lastVisit !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yKey = yesterday.toISOString().slice(0, 10);
    streak = s.lastVisit === yKey ? s.streak + 1 : 1;
  } else if (streak === 0) {
    streak = 1;
  }
  write({
    ...s,
    bestScore: Math.max(s.bestScore, Math.round(percent)),
    totalQuizzes: s.totalQuizzes + 1,
    streak,
    lastVisit: today,
    categoryCompletions: {
      ...s.categoryCompletions,
      [categorySlug]: (s.categoryCompletions[categorySlug] ?? 0) + 1,
    },
  });
}

export function recordDaily(percent: number) {
  const s = read();
  write({ ...s, lastDailyDate: todayKey(), lastDailyScore: Math.round(percent) });
}
