export type Difficulty = "Easy" | "Medium" | "Hard";

export interface Question {
  id: string;
  question: string;
  options: string[];
  answer: number; // index 0-3
  explanation: string;
  difficulty: Difficulty;
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string; // lucide icon name
  accent: string; // tailwind gradient classes
  questions: Question[];
}

const grammar: Question[] = [
  { id: "g1", question: "Choose the correct sentence:", options: ["He don't like coffee.", "He doesn't likes coffee.", "He doesn't like coffee.", "He not like coffee."], answer: 2, explanation: "'Doesn't' is followed by the base form of the verb.", difficulty: "Easy" },
  { id: "g2", question: "She ___ to the gym every morning.", options: ["go", "going", "goes", "gone"], answer: 2, explanation: "Third-person singular present takes -s: 'goes'.", difficulty: "Easy" },
  { id: "g3", question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], answer: 2, explanation: "Second conditional uses 'were' for all subjects.", difficulty: "Medium" },
  { id: "g4", question: "By next year, she ___ here for a decade.", options: ["will work", "will be working", "will have worked", "works"], answer: 2, explanation: "Future perfect describes an action completed before a future point.", difficulty: "Hard" },
  { id: "g5", question: "Neither of the answers ___ correct.", options: ["are", "is", "were", "be"], answer: 1, explanation: "'Neither' is singular and takes a singular verb.", difficulty: "Medium" },
  { id: "g6", question: "I look forward to ___ from you.", options: ["hear", "hearing", "heard", "be hearing"], answer: 1, explanation: "After 'look forward to', use the -ing form.", difficulty: "Medium" },
  { id: "g7", question: "The book ___ on the table is mine.", options: ["lay", "laying", "lying", "lied"], answer: 2, explanation: "'Lying' (to be at rest) is correct; 'laying' requires an object.", difficulty: "Hard" },
  { id: "g8", question: "She has been working here ___ 2019.", options: ["for", "since", "from", "during"], answer: 1, explanation: "'Since' is used with a specific point in time.", difficulty: "Easy" },
];

const vocabulary: Question[] = [
  { id: "v1", question: "What does 'ubiquitous' mean?", options: ["Rare", "Present everywhere", "Ancient", "Unusual"], answer: 1, explanation: "Ubiquitous means present, appearing, or found everywhere.", difficulty: "Medium" },
  { id: "v2", question: "What does 'meticulous' mean?", options: ["Careless", "Very careful and precise", "Lazy", "Quick"], answer: 1, explanation: "Meticulous means showing great attention to detail.", difficulty: "Medium" },
  { id: "v3", question: "Choose the meaning of 'benevolent':", options: ["Cruel", "Kind and generous", "Wealthy", "Silent"], answer: 1, explanation: "Benevolent means well-meaning and kindly.", difficulty: "Easy" },
  { id: "v4", question: "What does 'ephemeral' mean?", options: ["Long-lasting", "Short-lived", "Heavy", "Bright"], answer: 1, explanation: "Ephemeral describes something lasting for a very short time.", difficulty: "Hard" },
  { id: "v5", question: "What does 'pragmatic' mean?", options: ["Idealistic", "Practical", "Emotional", "Theoretical"], answer: 1, explanation: "Pragmatic means dealing with things sensibly and realistically.", difficulty: "Medium" },
  { id: "v6", question: "What does 'candid' mean?", options: ["Secretive", "Honest and direct", "Funny", "Shy"], answer: 1, explanation: "Candid means truthful and straightforward.", difficulty: "Easy" },
  { id: "v7", question: "What does 'arduous' mean?", options: ["Easy", "Difficult and tiring", "Pleasant", "Brief"], answer: 1, explanation: "Arduous means involving strenuous effort.", difficulty: "Medium" },
  { id: "v8", question: "What does 'lucid' mean?", options: ["Confusing", "Clear and easy to understand", "Loud", "Dark"], answer: 1, explanation: "Lucid means expressed clearly; easy to understand.", difficulty: "Easy" },
];

const synonyms: Question[] = [
  { id: "s1", question: "Choose a synonym for 'happy':", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1, explanation: "'Joyful' shares the meaning of 'happy'.", difficulty: "Easy" },
  { id: "s2", question: "Choose a synonym for 'brave':", options: ["Cowardly", "Valiant", "Weak", "Quiet"], answer: 1, explanation: "'Valiant' means showing courage.", difficulty: "Easy" },
  { id: "s3", question: "Choose a synonym for 'abundant':", options: ["Scarce", "Plentiful", "Tiny", "Empty"], answer: 1, explanation: "'Plentiful' means existing in large quantities.", difficulty: "Medium" },
  { id: "s4", question: "Choose a synonym for 'astute':", options: ["Foolish", "Shrewd", "Slow", "Kind"], answer: 1, explanation: "'Shrewd' shares the meaning of sharp judgment.", difficulty: "Hard" },
  { id: "s5", question: "Choose a synonym for 'rapid':", options: ["Slow", "Swift", "Heavy", "Soft"], answer: 1, explanation: "'Swift' means moving quickly.", difficulty: "Easy" },
  { id: "s6", question: "Choose a synonym for 'enormous':", options: ["Tiny", "Massive", "Average", "Narrow"], answer: 1, explanation: "'Massive' shares the meaning of very large.", difficulty: "Easy" },
  { id: "s7", question: "Choose a synonym for 'reluctant':", options: ["Eager", "Unwilling", "Excited", "Ready"], answer: 1, explanation: "'Unwilling' shares the same meaning as 'reluctant'.", difficulty: "Medium" },
];

const antonyms: Question[] = [
  { id: "a1", question: "Choose the antonym of 'generous':", options: ["Kind", "Stingy", "Wealthy", "Friendly"], answer: 1, explanation: "'Stingy' is the opposite of 'generous'.", difficulty: "Easy" },
  { id: "a2", question: "Choose the antonym of 'ancient':", options: ["Old", "Modern", "Historic", "Vintage"], answer: 1, explanation: "'Modern' is the opposite of 'ancient'.", difficulty: "Easy" },
  { id: "a3", question: "Choose the antonym of 'transparent':", options: ["Clear", "Opaque", "Bright", "Glass"], answer: 1, explanation: "'Opaque' means not able to be seen through.", difficulty: "Medium" },
  { id: "a4", question: "Choose the antonym of 'verbose':", options: ["Wordy", "Concise", "Loud", "Quiet"], answer: 1, explanation: "'Concise' is the opposite of 'verbose'.", difficulty: "Hard" },
  { id: "a5", question: "Choose the antonym of 'humble':", options: ["Modest", "Arrogant", "Quiet", "Friendly"], answer: 1, explanation: "'Arrogant' is the opposite of 'humble'.", difficulty: "Medium" },
  { id: "a6", question: "Choose the antonym of 'expand':", options: ["Grow", "Contract", "Stretch", "Build"], answer: 1, explanation: "'Contract' means to shrink or become smaller.", difficulty: "Easy" },
  { id: "a7", question: "Choose the antonym of 'frequent':", options: ["Often", "Rare", "Common", "Usual"], answer: 1, explanation: "'Rare' is the opposite of 'frequent'.", difficulty: "Easy" },
];

const fillBlanks: Question[] = [
  { id: "f1", question: "She is good ___ mathematics.", options: ["in", "at", "on", "with"], answer: 1, explanation: "We say 'good at' a subject or skill.", difficulty: "Easy" },
  { id: "f2", question: "We arrived ___ the airport on time.", options: ["to", "in", "at", "on"], answer: 2, explanation: "We use 'at' with specific points like airports.", difficulty: "Easy" },
  { id: "f3", question: "The cat jumped ___ the table.", options: ["onto", "into", "in", "at"], answer: 0, explanation: "'Onto' indicates movement to a surface.", difficulty: "Medium" },
  { id: "f4", question: "He apologized ___ being late.", options: ["of", "about", "for", "to"], answer: 2, explanation: "We apologize 'for' something.", difficulty: "Medium" },
  { id: "f5", question: "I'm not familiar ___ this software.", options: ["of", "with", "to", "about"], answer: 1, explanation: "We say 'familiar with' something.", difficulty: "Medium" },
  { id: "f6", question: "She has a strong interest ___ astronomy.", options: ["on", "for", "in", "of"], answer: 2, explanation: "'Interest in' is the correct collocation.", difficulty: "Easy" },
  { id: "f7", question: "He's responsible ___ the entire team.", options: ["of", "for", "to", "with"], answer: 1, explanation: "We are 'responsible for' something or someone.", difficulty: "Medium" },
];

const sentenceCorrection: Question[] = [
  { id: "sc1", question: "Find the correct version: 'Me and him went to the store.'", options: ["Me and him went to the store.", "Him and me went to the store.", "He and I went to the store.", "I and he went to the store."], answer: 2, explanation: "Use subject pronouns 'He and I' as the subject.", difficulty: "Medium" },
  { id: "sc2", question: "Find the correct version: 'There is many reasons to learn.'", options: ["There is many reasons to learn.", "There are many reasons to learn.", "There be many reasons to learn.", "There many reasons to learn."], answer: 1, explanation: "'Reasons' is plural, so use 'are'.", difficulty: "Easy" },
  { id: "sc3", question: "Find the correct version: 'She don't have no money.'", options: ["She don't have no money.", "She doesn't have no money.", "She doesn't have any money.", "She not has any money."], answer: 2, explanation: "Avoid double negatives; use 'doesn't have any'.", difficulty: "Medium" },
  { id: "sc4", question: "Find the correct version: 'The team are playing well.' (US English)", options: ["The team are playing well.", "The team is playing well.", "The team be playing well.", "Team is play well."], answer: 1, explanation: "In US English, collective nouns take singular verbs.", difficulty: "Hard" },
  { id: "sc5", question: "Find the correct version: 'I have went there before.'", options: ["I have went there before.", "I have gone there before.", "I has gone there before.", "I have go there before."], answer: 1, explanation: "Present perfect uses past participle 'gone'.", difficulty: "Easy" },
  { id: "sc6", question: "Find the correct version: 'He is more taller than me.'", options: ["He is more taller than me.", "He is taller than me.", "He is most tall than me.", "He is more tall than me."], answer: 1, explanation: "Don't double up comparatives: just 'taller'.", difficulty: "Easy" },
];

const reading: Question[] = [
  { id: "r1", question: "Passage: 'Bees pollinate roughly one-third of the food we eat. Without them, many crops would fail.' — What is the main idea?", options: ["Bees make honey.", "Bees are vital to food production.", "Bees live in hives.", "Bees sting humans."], answer: 1, explanation: "The passage emphasizes the bees' role in food production.", difficulty: "Easy" },
  { id: "r2", question: "Passage: 'Despite the rain, the marathon proceeded as planned.' — What can we infer?", options: ["The marathon was cancelled.", "The marathon was rescheduled.", "The marathon went on regardless of weather.", "The marathon was shortened."], answer: 2, explanation: "'Despite the rain' and 'proceeded as planned' indicate it continued.", difficulty: "Medium" },
  { id: "r3", question: "Passage: 'The novel's protagonist undergoes a profound transformation by the final chapter.' — What does 'protagonist' mean?", options: ["Antagonist", "Main character", "Narrator", "Author"], answer: 1, explanation: "The protagonist is the main character of a story.", difficulty: "Medium" },
  { id: "r4", question: "Passage: 'Although the experiment yielded inconclusive results, the team remained optimistic.' — Tone?", options: ["Pessimistic", "Hopeful", "Angry", "Indifferent"], answer: 1, explanation: "'Remained optimistic' signals a hopeful tone.", difficulty: "Hard" },
  { id: "r5", question: "Passage: 'Renewable energy sources are increasingly affordable.' — What does 'affordable' mean?", options: ["Expensive", "Reasonably priced", "Free", "Unavailable"], answer: 1, explanation: "Affordable means within someone's financial means.", difficulty: "Easy" },
];

export const categories: Category[] = [
  { slug: "grammar", name: "Grammar", description: "Master the rules that shape every sentence.", icon: "BookMarked", accent: "from-stone-700 to-stone-900", questions: grammar },
  { slug: "vocabulary", name: "Vocabulary", description: "Expand your word power with curated picks.", icon: "Feather", accent: "from-stone-700 to-stone-900", questions: vocabulary },
  { slug: "synonyms", name: "Synonyms", description: "Find the perfect word with similar meaning.", icon: "ArrowLeftRight", accent: "from-stone-700 to-stone-900", questions: synonyms },
  { slug: "antonyms", name: "Antonyms", description: "Identify opposites and sharpen contrast.", icon: "Repeat", accent: "from-stone-700 to-stone-900", questions: antonyms },
  { slug: "fill-blanks", name: "Fill the Blanks", description: "Complete sentences with the right word.", icon: "PenTool", accent: "from-stone-700 to-stone-900", questions: fillBlanks },
  { slug: "sentence-correction", name: "Sentence Correction", description: "Spot and fix grammatical errors.", icon: "SpellCheck", accent: "from-stone-700 to-stone-900", questions: sentenceCorrection },
  { slug: "reading", name: "Reading Comprehension", description: "Read passages and answer thoughtfully.", icon: "ScrollText", accent: "from-stone-700 to-stone-900", questions: reading },
  { slug: "mixed", name: "Mixed Practice", description: "A random blend from every category.", icon: "Library", accent: "from-stone-700 to-stone-900", questions: [] },
];

export function getCategory(slug: string): Category | undefined {
  if (slug === "mixed") {
    const all = categories.flatMap((c) => c.questions);
    return { ...categories.find((c) => c.slug === "mixed")!, questions: all };
  }
  return categories.find((c) => c.slug === slug);
}

export function getDailyQuestions(seed: string, count = 5): Question[] {
  const all = categories.flatMap((c) => c.questions);
  // simple deterministic shuffle using seed
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const rand = () => {
    h = (h * 1664525 + 1013904223) >>> 0;
    return h / 0xffffffff;
  };
  const arr = [...all];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, count);
}

export function shuffleQuestions<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
