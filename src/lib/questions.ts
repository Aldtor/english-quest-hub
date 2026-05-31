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
  { id: "g3", question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], answer: 2, explanation: "Second conditional uses 'were' for all subjects in formal English.", difficulty: "Medium" },
  { id: "g4", question: "By next year, she ___ here for a decade.", options: ["will work", "will be working", "will have worked", "works"], answer: 2, explanation: "Future perfect describes an action completed before a future point.", difficulty: "Hard" },
  { id: "g5", question: "Neither of the answers ___ correct.", options: ["are", "is", "were", "be"], answer: 1, explanation: "'Neither' is singular and takes a singular verb.", difficulty: "Medium" },
  { id: "g6", question: "I look forward to ___ from you.", options: ["hear", "hearing", "heard", "be hearing"], answer: 1, explanation: "After 'look forward to', use the -ing form ('to' is a preposition here).", difficulty: "Medium" },
  { id: "g7", question: "The book ___ on the table is mine.", options: ["lay", "laying", "lying", "lied"], answer: 2, explanation: "'Lying' (to be at rest) is correct; 'laying' requires an object.", difficulty: "Hard" },
  { id: "g8", question: "She has been working here ___ 2019.", options: ["for", "since", "from", "during"], answer: 1, explanation: "'Since' is used with a specific point in time.", difficulty: "Easy" },
  { id: "g9", question: "Hardly had he arrived ___ the phone rang.", options: ["than", "when", "then", "that"], answer: 1, explanation: "'Hardly...when' is the fixed inversion structure.", difficulty: "Hard" },
  { id: "g10", question: "The committee ___ divided over the issue.", options: ["is", "are", "be", "being"], answer: 0, explanation: "Collective nouns typically take a singular verb when acting as a unit (US usage).", difficulty: "Medium" },
  { id: "g11", question: "I wish I ___ taller.", options: ["am", "was", "were", "be"], answer: 2, explanation: "After 'wish' for present unreal situations, use 'were' for all subjects.", difficulty: "Medium" },
  { id: "g12", question: "She suggested that he ___ a doctor.", options: ["sees", "see", "saw", "seeing"], answer: 1, explanation: "After 'suggest that', use the base form (subjunctive).", difficulty: "Hard" },
  { id: "g13", question: "Each of the students ___ a textbook.", options: ["have", "has", "are having", "having"], answer: 1, explanation: "'Each' is singular and takes a singular verb.", difficulty: "Medium" },
  { id: "g14", question: "We ___ dinner when the lights went out.", options: ["have", "had", "were having", "are having"], answer: 2, explanation: "Past continuous shows an ongoing action interrupted by a past event.", difficulty: "Easy" },
  { id: "g15", question: "This is the man ___ car was stolen.", options: ["who", "whom", "whose", "which"], answer: 2, explanation: "'Whose' shows possession in a relative clause.", difficulty: "Medium" },
  { id: "g16", question: "Not only ___ late, but he also forgot the report.", options: ["he was", "was he", "he is", "is he"], answer: 1, explanation: "After 'not only' at the start of a sentence, invert subject and auxiliary.", difficulty: "Hard" },
  { id: "g17", question: "If she ___ harder, she would have passed.", options: ["studied", "had studied", "studies", "would study"], answer: 1, explanation: "Third conditional uses 'had + past participle' in the if-clause.", difficulty: "Hard" },
  { id: "g18", question: "He denied ___ the money.", options: ["to take", "taking", "take", "taken"], answer: 1, explanation: "'Deny' is followed by the gerund (-ing form).", difficulty: "Medium" },
  { id: "g19", question: "There ___ a lot of news today.", options: ["are", "is", "were", "have"], answer: 1, explanation: "'News' is uncountable and takes a singular verb.", difficulty: "Easy" },
  { id: "g20", question: "She runs ___ than her brother.", options: ["faster", "more fast", "fastest", "most fast"], answer: 0, explanation: "Short adverbs form comparatives with -er.", difficulty: "Easy" },
  { id: "g21", question: "By the time we arrived, the train ___.", options: ["left", "has left", "had left", "was leaving"], answer: 2, explanation: "Past perfect shows an action completed before another past action.", difficulty: "Medium" },
  { id: "g22", question: "I'd rather you ___ that.", options: ["don't do", "didn't do", "won't do", "not do"], answer: 1, explanation: "'Would rather + subject' uses the past simple for present preference.", difficulty: "Hard" },
  { id: "g23", question: "Either Tom or his friends ___ coming.", options: ["is", "are", "was", "has"], answer: 1, explanation: "With 'either...or', the verb agrees with the nearest subject.", difficulty: "Medium" },
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
  { id: "v9", question: "What does 'ostentatious' mean?", options: ["Modest", "Showy and pretentious", "Quiet", "Honest"], answer: 1, explanation: "Ostentatious means designed to impress or attract attention.", difficulty: "Hard" },
  { id: "v10", question: "What does 'gregarious' mean?", options: ["Solitary", "Sociable", "Aggressive", "Cautious"], answer: 1, explanation: "Gregarious means fond of company; sociable.", difficulty: "Medium" },
  { id: "v11", question: "What does 'tenacious' mean?", options: ["Weak", "Persistent", "Forgetful", "Generous"], answer: 1, explanation: "Tenacious means holding firmly; persistent.", difficulty: "Medium" },
  { id: "v12", question: "What does 'mitigate' mean?", options: ["Worsen", "Make less severe", "Ignore", "Celebrate"], answer: 1, explanation: "Mitigate means to reduce the severity of something.", difficulty: "Medium" },
  { id: "v13", question: "What does 'esoteric' mean?", options: ["Common", "Understood by few", "Loud", "Ancient"], answer: 1, explanation: "Esoteric means intended for or understood by only a small group.", difficulty: "Hard" },
  { id: "v14", question: "What does 'placate' mean?", options: ["Anger", "Calm or soothe", "Confuse", "Ignore"], answer: 1, explanation: "Placate means to make someone less angry or hostile.", difficulty: "Medium" },
  { id: "v15", question: "What does 'quintessential' mean?", options: ["Unusual", "Representing the most perfect example", "Outdated", "Forgotten"], answer: 1, explanation: "Quintessential means representing the most perfect example of a quality.", difficulty: "Hard" },
  { id: "v16", question: "What does 'frugal' mean?", options: ["Wasteful", "Sparing or economical", "Generous", "Rich"], answer: 1, explanation: "Frugal means careful with money or resources.", difficulty: "Easy" },
  { id: "v17", question: "What does 'ambivalent' mean?", options: ["Certain", "Having mixed feelings", "Excited", "Disinterested"], answer: 1, explanation: "Ambivalent means having mixed or contradictory feelings.", difficulty: "Medium" },
  { id: "v18", question: "What does 'pernicious' mean?", options: ["Helpful", "Harmful in a gradual way", "Loud", "Quick"], answer: 1, explanation: "Pernicious means having a harmful effect, especially gradually.", difficulty: "Hard" },
  { id: "v19", question: "What does 'eloquent' mean?", options: ["Silent", "Fluent and persuasive in speech", "Quiet", "Rude"], answer: 1, explanation: "Eloquent means fluent or persuasive in speaking or writing.", difficulty: "Easy" },
  { id: "v20", question: "What does 'reticent' mean?", options: ["Talkative", "Reserved or restrained", "Angry", "Honest"], answer: 1, explanation: "Reticent means not revealing one's thoughts readily.", difficulty: "Hard" },
];

const synonyms: Question[] = [
  { id: "s1", question: "Choose a synonym for 'happy':", options: ["Sad", "Joyful", "Angry", "Tired"], answer: 1, explanation: "'Joyful' shares the meaning of 'happy'.", difficulty: "Easy" },
  { id: "s2", question: "Choose a synonym for 'brave':", options: ["Cowardly", "Valiant", "Weak", "Quiet"], answer: 1, explanation: "'Valiant' means showing courage.", difficulty: "Easy" },
  { id: "s3", question: "Choose a synonym for 'abundant':", options: ["Scarce", "Plentiful", "Tiny", "Empty"], answer: 1, explanation: "'Plentiful' means existing in large quantities.", difficulty: "Medium" },
  { id: "s4", question: "Choose a synonym for 'astute':", options: ["Foolish", "Shrewd", "Slow", "Kind"], answer: 1, explanation: "'Shrewd' shares the meaning of sharp judgment.", difficulty: "Hard" },
  { id: "s5", question: "Choose a synonym for 'rapid':", options: ["Slow", "Swift", "Heavy", "Soft"], answer: 1, explanation: "'Swift' means moving quickly.", difficulty: "Easy" },
  { id: "s6", question: "Choose a synonym for 'enormous':", options: ["Tiny", "Massive", "Average", "Narrow"], answer: 1, explanation: "'Massive' shares the meaning of very large.", difficulty: "Easy" },
  { id: "s7", question: "Choose a synonym for 'reluctant':", options: ["Eager", "Unwilling", "Excited", "Ready"], answer: 1, explanation: "'Unwilling' shares the same meaning as 'reluctant'.", difficulty: "Medium" },
  { id: "s8", question: "Choose a synonym for 'diligent':", options: ["Lazy", "Industrious", "Careless", "Quick"], answer: 1, explanation: "'Industrious' means hardworking and persistent.", difficulty: "Medium" },
  { id: "s9", question: "Choose a synonym for 'fragile':", options: ["Strong", "Delicate", "Heavy", "Smooth"], answer: 1, explanation: "'Delicate' means easily broken — same as 'fragile'.", difficulty: "Easy" },
  { id: "s10", question: "Choose a synonym for 'obscure':", options: ["Famous", "Unclear", "Bright", "Open"], answer: 1, explanation: "'Unclear' shares 'obscure's meaning of not well-known or difficult to see.", difficulty: "Medium" },
  { id: "s11", question: "Choose a synonym for 'jubilant':", options: ["Mournful", "Elated", "Tired", "Calm"], answer: 1, explanation: "'Elated' means feeling great happiness — like 'jubilant'.", difficulty: "Hard" },
  { id: "s12", question: "Choose a synonym for 'novice':", options: ["Expert", "Beginner", "Teacher", "Leader"], answer: 1, explanation: "A novice is a beginner at something.", difficulty: "Easy" },
  { id: "s13", question: "Choose a synonym for 'innate':", options: ["Learned", "Inborn", "Foreign", "Rare"], answer: 1, explanation: "'Innate' qualities are inborn, not acquired.", difficulty: "Hard" },
  { id: "s14", question: "Choose a synonym for 'cease':", options: ["Begin", "Stop", "Continue", "Grow"], answer: 1, explanation: "To cease is to stop.", difficulty: "Easy" },
  { id: "s15", question: "Choose a synonym for 'meager':", options: ["Plentiful", "Scanty", "Heavy", "Rich"], answer: 1, explanation: "'Meager' means lacking in quantity — scanty.", difficulty: "Medium" },
];

const antonyms: Question[] = [
  { id: "a1", question: "Choose the antonym of 'generous':", options: ["Kind", "Stingy", "Wealthy", "Friendly"], answer: 1, explanation: "'Stingy' is the opposite of 'generous'.", difficulty: "Easy" },
  { id: "a2", question: "Choose the antonym of 'ancient':", options: ["Old", "Modern", "Historic", "Vintage"], answer: 1, explanation: "'Modern' is the opposite of 'ancient'.", difficulty: "Easy" },
  { id: "a3", question: "Choose the antonym of 'transparent':", options: ["Clear", "Opaque", "Bright", "Glass"], answer: 1, explanation: "'Opaque' means not able to be seen through.", difficulty: "Medium" },
  { id: "a4", question: "Choose the antonym of 'verbose':", options: ["Wordy", "Concise", "Loud", "Quiet"], answer: 1, explanation: "'Concise' is the opposite of 'verbose'.", difficulty: "Hard" },
  { id: "a5", question: "Choose the antonym of 'humble':", options: ["Modest", "Arrogant", "Quiet", "Friendly"], answer: 1, explanation: "'Arrogant' is the opposite of 'humble'.", difficulty: "Medium" },
  { id: "a6", question: "Choose the antonym of 'expand':", options: ["Grow", "Contract", "Stretch", "Build"], answer: 1, explanation: "'Contract' means to shrink or become smaller.", difficulty: "Easy" },
  { id: "a7", question: "Choose the antonym of 'frequent':", options: ["Often", "Rare", "Common", "Usual"], answer: 1, explanation: "'Rare' is the opposite of 'frequent'.", difficulty: "Easy" },
  { id: "a8", question: "Choose the antonym of 'optimistic':", options: ["Hopeful", "Pessimistic", "Cheerful", "Bright"], answer: 1, explanation: "'Pessimistic' is the opposite of 'optimistic'.", difficulty: "Easy" },
  { id: "a9", question: "Choose the antonym of 'benevolent':", options: ["Kind", "Malevolent", "Generous", "Loving"], answer: 1, explanation: "'Malevolent' means wishing harm — opposite of benevolent.", difficulty: "Medium" },
  { id: "a10", question: "Choose the antonym of 'futile':", options: ["Useless", "Effective", "Empty", "Vain"], answer: 1, explanation: "'Futile' means useless; 'effective' is its opposite.", difficulty: "Medium" },
  { id: "a11", question: "Choose the antonym of 'sporadic':", options: ["Continuous", "Random", "Sudden", "Brief"], answer: 0, explanation: "'Sporadic' means occasional; 'continuous' is the opposite.", difficulty: "Hard" },
  { id: "a12", question: "Choose the antonym of 'lethargic':", options: ["Energetic", "Tired", "Slow", "Sleepy"], answer: 0, explanation: "'Lethargic' means sluggish; 'energetic' is the opposite.", difficulty: "Medium" },
  { id: "a13", question: "Choose the antonym of 'austere':", options: ["Strict", "Lavish", "Plain", "Serious"], answer: 1, explanation: "'Austere' means severe or plain; 'lavish' is the opposite.", difficulty: "Hard" },
  { id: "a14", question: "Choose the antonym of 'vague':", options: ["Unclear", "Precise", "Brief", "Soft"], answer: 1, explanation: "'Precise' is the opposite of 'vague'.", difficulty: "Easy" },
  { id: "a15", question: "Choose the antonym of 'docile':", options: ["Obedient", "Unruly", "Calm", "Friendly"], answer: 1, explanation: "'Docile' means easily managed; 'unruly' is the opposite.", difficulty: "Hard" },
];

const fillBlanks: Question[] = [
  { id: "f1", question: "She is good ___ mathematics.", options: ["in", "at", "on", "with"], answer: 1, explanation: "We say 'good at' a subject or skill.", difficulty: "Easy" },
  { id: "f2", question: "We arrived ___ the airport on time.", options: ["to", "in", "at", "on"], answer: 2, explanation: "We use 'at' with specific points like airports.", difficulty: "Easy" },
  { id: "f3", question: "The cat jumped ___ the table.", options: ["onto", "into", "in", "at"], answer: 0, explanation: "'Onto' indicates movement to a surface.", difficulty: "Medium" },
  { id: "f4", question: "He apologized ___ being late.", options: ["of", "about", "for", "to"], answer: 2, explanation: "We apologize 'for' something.", difficulty: "Medium" },
  { id: "f5", question: "I'm not familiar ___ this software.", options: ["of", "with", "to", "about"], answer: 1, explanation: "We say 'familiar with' something.", difficulty: "Medium" },
  { id: "f6", question: "She has a strong interest ___ astronomy.", options: ["on", "for", "in", "of"], answer: 2, explanation: "'Interest in' is the correct collocation.", difficulty: "Easy" },
  { id: "f7", question: "He's responsible ___ the entire team.", options: ["of", "for", "to", "with"], answer: 1, explanation: "We are 'responsible for' something or someone.", difficulty: "Medium" },
  { id: "f8", question: "The results are consistent ___ our hypothesis.", options: ["to", "with", "for", "of"], answer: 1, explanation: "'Consistent with' is the standard collocation.", difficulty: "Medium" },
  { id: "f9", question: "She insisted ___ paying the bill.", options: ["in", "for", "on", "to"], answer: 2, explanation: "'Insist on' something or doing something.", difficulty: "Medium" },
  { id: "f10", question: "They congratulated him ___ his promotion.", options: ["for", "on", "about", "with"], answer: 1, explanation: "We congratulate someone 'on' an achievement.", difficulty: "Easy" },
  { id: "f11", question: "I'm capable ___ handling this myself.", options: ["of", "for", "to", "in"], answer: 0, explanation: "'Capable of' + gerund is the correct form.", difficulty: "Easy" },
  { id: "f12", question: "He's been accused ___ stealing.", options: ["for", "of", "with", "about"], answer: 1, explanation: "Someone is accused 'of' a crime.", difficulty: "Medium" },
  { id: "f13", question: "She's married ___ a doctor.", options: ["with", "to", "by", "of"], answer: 1, explanation: "In English, you marry or are married 'to' someone.", difficulty: "Easy" },
  { id: "f14", question: "We must comply ___ the regulations.", options: ["to", "with", "for", "on"], answer: 1, explanation: "'Comply with' rules or regulations.", difficulty: "Hard" },
  { id: "f15", question: "He's known ___ his honesty.", options: ["by", "for", "of", "with"], answer: 1, explanation: "People are 'known for' their qualities.", difficulty: "Medium" },
];

const sentenceCorrection: Question[] = [
  { id: "sc1", question: "Find the correct version: 'Me and him went to the store.'", options: ["Me and him went to the store.", "Him and me went to the store.", "He and I went to the store.", "I and he went to the store."], answer: 2, explanation: "Use subject pronouns 'He and I' as the subject.", difficulty: "Medium" },
  { id: "sc2", question: "Find the correct version: 'There is many reasons to learn.'", options: ["There is many reasons to learn.", "There are many reasons to learn.", "There be many reasons to learn.", "There many reasons to learn."], answer: 1, explanation: "'Reasons' is plural, so use 'are'.", difficulty: "Easy" },
  { id: "sc3", question: "Find the correct version: 'She don't have no money.'", options: ["She don't have no money.", "She doesn't have no money.", "She doesn't have any money.", "She not has any money."], answer: 2, explanation: "Avoid double negatives; use 'doesn't have any'.", difficulty: "Medium" },
  { id: "sc4", question: "Find the correct version: 'The team are playing well.' (US English)", options: ["The team are playing well.", "The team is playing well.", "The team be playing well.", "Team is play well."], answer: 1, explanation: "In US English, collective nouns take singular verbs.", difficulty: "Hard" },
  { id: "sc5", question: "Find the correct version: 'I have went there before.'", options: ["I have went there before.", "I have gone there before.", "I has gone there before.", "I have go there before."], answer: 1, explanation: "Present perfect uses past participle 'gone'.", difficulty: "Easy" },
  { id: "sc6", question: "Find the correct version: 'He is more taller than me.'", options: ["He is more taller than me.", "He is taller than me.", "He is most tall than me.", "He is more tall than me."], answer: 1, explanation: "Don't double up comparatives: just 'taller'.", difficulty: "Easy" },
  { id: "sc7", question: "Find the correct version: 'The amount of people grew.'", options: ["The amount of people grew.", "The number of people grew.", "The amount of peoples grew.", "Amount of people grew."], answer: 1, explanation: "Use 'number' with countable nouns and 'amount' with uncountable.", difficulty: "Medium" },
  { id: "sc8", question: "Find the correct version: 'Between you and I, this is wrong.'", options: ["Between you and I, this is wrong.", "Between you and me, this is wrong.", "Between I and you, this is wrong.", "Among you and I, this is wrong."], answer: 1, explanation: "After prepositions, use object pronouns: 'between you and me'.", difficulty: "Hard" },
  { id: "sc9", question: "Find the correct version: 'Each of the boys have a bike.'", options: ["Each of the boys have a bike.", "Each of the boys has a bike.", "Each of the boy have a bike.", "Each of the boys having a bike."], answer: 1, explanation: "'Each' is singular and takes a singular verb.", difficulty: "Medium" },
  { id: "sc10", question: "Find the correct version: 'If I would have known, I would have called.'", options: ["If I would have known, I would have called.", "If I had known, I would have called.", "If I have known, I would have called.", "If I knew, I would have called."], answer: 1, explanation: "Third conditional: 'If + had + past participle, would have + past participle'.", difficulty: "Hard" },
  { id: "sc11", question: "Find the correct version: 'She is taller than him.'", options: ["She is taller than him.", "She is taller than he.", "She is taller than he is.", "Both A and C"], answer: 3, explanation: "Both informal ('than him') and formal ('than he is') are accepted.", difficulty: "Medium" },
  { id: "sc12", question: "Find the correct version: 'I could of done it.'", options: ["I could of done it.", "I could have done it.", "I could had done it.", "I could did it."], answer: 1, explanation: "'Could have' (often heard as 'could've'), never 'could of'.", difficulty: "Easy" },
];

const reading: Question[] = [
  { id: "r1", question: "Passage: 'Bees pollinate roughly one-third of the food we eat. Without them, many crops would fail.' — What is the main idea?", options: ["Bees make honey.", "Bees are vital to food production.", "Bees live in hives.", "Bees sting humans."], answer: 1, explanation: "The passage emphasizes the bees' role in food production.", difficulty: "Easy" },
  { id: "r2", question: "Passage: 'Despite the rain, the marathon proceeded as planned.' — What can we infer?", options: ["The marathon was cancelled.", "The marathon was rescheduled.", "The marathon went on regardless of weather.", "The marathon was shortened."], answer: 2, explanation: "'Despite the rain' and 'proceeded as planned' indicate it continued.", difficulty: "Medium" },
  { id: "r3", question: "Passage: 'The novel's protagonist undergoes a profound transformation by the final chapter.' — What does 'protagonist' mean?", options: ["Antagonist", "Main character", "Narrator", "Author"], answer: 1, explanation: "The protagonist is the main character of a story.", difficulty: "Medium" },
  { id: "r4", question: "Passage: 'Although the experiment yielded inconclusive results, the team remained optimistic.' — Tone?", options: ["Pessimistic", "Hopeful", "Angry", "Indifferent"], answer: 1, explanation: "'Remained optimistic' signals a hopeful tone.", difficulty: "Hard" },
  { id: "r5", question: "Passage: 'Renewable energy sources are increasingly affordable.' — What does 'affordable' mean?", options: ["Expensive", "Reasonably priced", "Free", "Unavailable"], answer: 1, explanation: "Affordable means within someone's financial means.", difficulty: "Easy" },
  { id: "r6", question: "Passage: 'The CEO's resignation came as a bolt from the blue to investors.' — 'Bolt from the blue' suggests the news was:", options: ["Expected", "Sudden and surprising", "Welcome", "Slow to arrive"], answer: 1, explanation: "The idiom describes a completely unexpected event.", difficulty: "Medium" },
  { id: "r7", question: "Passage: 'While critics dismissed the film, audiences embraced it wholeheartedly.' — The relationship between critics and audiences is:", options: ["Identical", "Contrasting", "Complementary", "Unclear"], answer: 1, explanation: "'While' signals contrast between the two reactions.", difficulty: "Medium" },
  { id: "r8", question: "Passage: 'The new policy was ostensibly designed to help workers, but in practice it benefited only executives.' — 'Ostensibly' implies the stated purpose was:", options: ["Genuine", "Apparent but not real", "Hidden", "Obvious"], answer: 1, explanation: "'Ostensibly' suggests something appears true on the surface but may not be.", difficulty: "Hard" },
  { id: "r9", question: "Passage: 'Years of meticulous research culminated in a single, elegant equation.' — 'Culminated' means:", options: ["Began", "Reached a climax", "Failed", "Continued"], answer: 1, explanation: "'Culminate' means to reach a climax or end point.", difficulty: "Hard" },
  { id: "r10", question: "Passage: 'Solar panels have become commonplace on suburban rooftops.' — 'Commonplace' suggests they are now:", options: ["Rare", "Ordinary and widespread", "Forbidden", "Expensive"], answer: 1, explanation: "'Commonplace' means usual or ordinary.", difficulty: "Easy" },
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
