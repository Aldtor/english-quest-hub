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
  { id: "g1", question: "Neither of the boys ___ willing to apologize.", options: ["are", "is", "were", "have"], answer: 1, explanation: "Neither is singular and takes a singular verb.", difficulty: "Easy" },
  { id: "g2", question: "She ___ her homework before dinner every day.", options: ["complete", "completes", "completed", "completing"], answer: 1, explanation: "Third-person singular subjects take verbs ending in -s.", difficulty: "Easy" },
  { id: "g3", question: "The committee ___ divided in its opinion.", options: ["is", "are", "be", "have"], answer: 0, explanation: "Committee is treated as a singular collective noun.", difficulty: "Easy" },
  { id: "g4", question: "I have lived here ___ five years.", options: ["since", "for", "from", "by"], answer: 1, explanation: "Use 'for' to indicate a duration of time.", difficulty: "Easy" },
  { id: "g5", question: "If I ___ rich, I would travel the world.", options: ["am", "was", "were", "be"], answer: 2, explanation: "Use 'were' in hypothetical conditional sentences.", difficulty: "Easy" },
  { id: "g6", question: "The train ___ before we reached the station.", options: ["leave", "left", "had left", "has left"], answer: 2, explanation: "Past perfect is used for an action completed before another past action.", difficulty: "Easy" },
  { id: "g7", question: "Each of the students ___ received a certificate.", options: ["have", "has", "are", "were"], answer: 1, explanation: "Each is singular and takes 'has'.", difficulty: "Easy" },
  { id: "g8", question: "He is good ___ mathematics.", options: ["at", "in", "on", "for"], answer: 0, explanation: "The correct preposition is 'good at'.", difficulty: "Easy" },
  { id: "g9", question: "She asked me where ___.", options: ["was I going", "I was going", "am I going", "I am going"], answer: 1, explanation: "Indirect questions use normal statement word order.", difficulty: "Easy" },
  { id: "g10", question: "There ___ many books on the shelf.", options: ["is", "was", "are", "has"], answer: 2, explanation: "The plural noun 'books' requires 'are'.", difficulty: "Easy" },
  { id: "g11", question: "Hardly had I arrived ___ it started raining.", options: ["than", "then", "when", "that"], answer: 2, explanation: "The correct expression is 'Hardly...when'.", difficulty: "Easy" },
  { id: "g12", question: "He speaks English ___ than his brother.", options: ["better", "best", "good", "well"], answer: 0, explanation: "Comparisons between two people use the comparative form.", difficulty: "Easy" },
  { id: "g13", question: "The news ___ surprising.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'News' is treated as a singular noun.", difficulty: "Easy" },
  { id: "g14", question: "By next year, she ___ her degree.", options: ["will complete", "will have completed", "completed", "completes"], answer: 1, explanation: "Future perfect indicates completion before a future point.", difficulty: "Easy" },
  { id: "g15", question: "The teacher, along with the students, ___ present.", options: ["are", "were", "is", "have"], answer: 2, explanation: "The subject is 'teacher', which is singular.", difficulty: "Easy" },
  { id: "g16", question: "You had better ___ the truth.", options: ["tell", "told", "telling", "to tell"], answer: 0, explanation: "'Had better' is followed by the base verb.", difficulty: "Easy" },
  { id: "g17", question: "He insisted ___ paying the bill.", options: ["on", "for", "at", "with"], answer: 0, explanation: "The correct phrase is 'insisted on'.", difficulty: "Easy" },
  { id: "g18", question: "She has been working here ___ 2021.", options: ["for", "since", "from", "during"], answer: 1, explanation: "Use 'since' with a specific point in time.", difficulty: "Easy" },
  { id: "g19", question: "Not only the students but also the teacher ___ excited.", options: ["are", "were", "is", "have"], answer: 2, explanation: "The verb agrees with the nearest subject, 'teacher'.", difficulty: "Easy" },
  { id: "g20", question: "Would you mind ___ the window?", options: ["close", "closed", "closing", "to close"], answer: 2, explanation: "'Would you mind' is followed by a gerund.", difficulty: "Easy" },
  { id: "g21", question: "Scarcely had he entered the room ___ the phone rang.", options: ["than", "then", "when", "that"], answer: 2, explanation: "The correct structure is 'Scarcely...when'.", difficulty: "Easy" },
  { id: "g22", question: "The furniture ___ made of wood.", options: ["are", "were", "is", "have"], answer: 2, explanation: "Furniture is an uncountable noun and takes a singular verb.", difficulty: "Easy" },
  { id: "g23", question: "She wishes she ___ more time.", options: ["has", "had", "have", "having"], answer: 1, explanation: "After 'wish', use the past tense to express an unreal situation.", difficulty: "Easy" },
  { id: "g24", question: "I prefer tea ___ coffee.", options: ["than", "to", "over", "with"], answer: 1, explanation: "The correct phrase is 'prefer A to B'.", difficulty: "Easy" },
  { id: "g25", question: "The doctor advised him ___ smoking.", options: ["quit", "quitting", "to quit", "quitted"], answer: 2, explanation: "Advise is followed by an infinitive.", difficulty: "Easy" },
  { id: "g26", question: "No sooner had they arrived ___ dinner was served.", options: ["than", "when", "then", "that"], answer: 0, explanation: "The correct expression is 'No sooner...than'.", difficulty: "Easy" },
  { id: "g27", question: "The police ___ investigating the case.", options: ["is", "was", "are", "has"], answer: 2, explanation: "'Police' is treated as a plural noun.", difficulty: "Easy" },
  { id: "g28", question: "She has never ___ such a beautiful place before.", options: ["see", "saw", "seen", "seeing"], answer: 2, explanation: "Present perfect uses the past participle.", difficulty: "Easy" },
  { id: "g29", question: "One of my friends ___ abroad.", options: ["live", "lives", "living", "have lived"], answer: 1, explanation: "The subject is 'one', which is singular.", difficulty: "Easy" },
  { id: "g30", question: "He is taller ___ his brother.", options: ["then", "than", "that", "from"], answer: 1, explanation: "Use 'than' for comparisons.", difficulty: "Easy" },
  { id: "g31", question: "Neither the manager nor the employees ___ aware of the change.", options: ["was", "is", "are", "has"], answer: 2, explanation: "The verb agrees with the nearest subject 'employees'.", difficulty: "Easy" },
  { id: "g32", question: "The meeting was postponed ___ the bad weather.", options: ["because", "because of", "due", "since of"], answer: 1, explanation: "'Because of' is followed by a noun phrase.", difficulty: "Easy" },
  { id: "g33", question: "He would rather ___ at home tonight.", options: ["stay", "stays", "stayed", "staying"], answer: 0, explanation: "'Would rather' is followed by the base verb.", difficulty: "Easy" },
  { id: "g34", question: "If she had studied harder, she ___ the exam.", options: ["would pass", "would have passed", "will pass", "passes"], answer: 1, explanation: "Third conditional uses 'would have + past participle'.", difficulty: "Medium" },
  { id: "g35", question: "The number of students ___ increasing every year.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'The number' is singular.", difficulty: "Medium" },
  { id: "g36", question: "I am looking forward to ___ you soon.", options: ["see", "saw", "seeing", "seen"], answer: 2, explanation: "'To' here is a preposition and is followed by a gerund.", difficulty: "Medium" },
  { id: "g37", question: "She was born ___ 15th August.", options: ["in", "on", "at", "for"], answer: 1, explanation: "Use 'on' with specific dates.", difficulty: "Medium" },
  { id: "g38", question: "The cake ___ by my mother yesterday.", options: ["made", "was made", "is made", "has made"], answer: 1, explanation: "The sentence is in the passive voice.", difficulty: "Medium" },
  { id: "g39", question: "Either John or his sisters ___ responsible.", options: ["is", "was", "are", "has"], answer: 2, explanation: "The verb agrees with the nearest subject 'sisters'.", difficulty: "Medium" },
  { id: "g40", question: "He apologized ___ being late.", options: ["for", "to", "at", "with"], answer: 0, explanation: "The correct phrase is 'apologized for'.", difficulty: "Medium" },
  { id: "g41", question: "The children were excited ___ the picnic.", options: ["about", "for", "with", "at"], answer: 0, explanation: "The correct phrase is 'excited about'.", difficulty: "Medium" },
  { id: "g42", question: "He has been working here ___ ten years.", options: ["since", "for", "from", "during"], answer: 1, explanation: "'For' is used with a period of time.", difficulty: "Medium" },
  { id: "g43", question: "The book ___ on the table belongs to me.", options: ["lying", "laying", "lies", "laid"], answer: 0, explanation: "'Lying' correctly describes the book's position.", difficulty: "Medium" },
  { id: "g44", question: "She can speak French ___ English.", options: ["besides", "beside", "and", "also"], answer: 0, explanation: "'Besides' means 'in addition to'.", difficulty: "Medium" },
  { id: "g45", question: "Everybody ___ invited to the party.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'Everybody' is singular.", difficulty: "Medium" },
  { id: "g46", question: "The match was cancelled ___ heavy rain.", options: ["because", "because of", "due", "for"], answer: 1, explanation: "'Because of' is followed by a noun phrase.", difficulty: "Medium" },
  { id: "g47", question: "He denied ___ the window.", options: ["break", "breaking", "broke", "to break"], answer: 1, explanation: "'Deny' is followed by a gerund.", difficulty: "Medium" },
  { id: "g48", question: "This is the most interesting book I have ever ___.", options: ["read", "reading", "reads", "to read"], answer: 0, explanation: "Use the past participle after 'have'.", difficulty: "Medium" },
  { id: "g49", question: "She insisted that he ___ immediately.", options: ["leave", "leaves", "left", "leaving"], answer: 0, explanation: "Subjunctive mood uses the base form.", difficulty: "Medium" },
  { id: "g50", question: "There is hardly ___ sugar left.", options: ["some", "any", "many", "few"], answer: 1, explanation: "'Hardly any' is the correct expression.", difficulty: "Medium" },
  { id: "g51", question: "Neither the players nor the coach ___ satisfied.", options: ["was", "were", "is", "has"], answer: 0, explanation: "The verb agrees with the nearest singular subject 'coach'.", difficulty: "Medium" },
  { id: "g52", question: "The teacher made the students ___ the assignment again.", options: ["do", "doing", "did", "to do"], answer: 0, explanation: "'Make' is followed by the base verb.", difficulty: "Medium" },
  { id: "g53", question: "I wish I ___ how to swim.", options: ["know", "knew", "knowing", "known"], answer: 1, explanation: "Use past tense after 'wish' for present unreal situations.", difficulty: "Medium" },
  { id: "g54", question: "He succeeded ___ solving the problem.", options: ["at", "in", "on", "for"], answer: 1, explanation: "The correct phrase is 'succeeded in'.", difficulty: "Medium" },
  { id: "g55", question: "The audience ___ clapping loudly.", options: ["was", "were", "has", "be"], answer: 0, explanation: "'Audience' is treated as a singular collective noun here.", difficulty: "Medium" },
  { id: "g56", question: "She is one of the best players who ___ ever played for the team.", options: ["has", "have", "was", "is"], answer: 1, explanation: "'Who' refers to players (plural).", difficulty: "Medium" },
  { id: "g57", question: "The report must ___ before Friday.", options: ["submit", "submitted", "be submitted", "submitting"], answer: 2, explanation: "Passive form is required.", difficulty: "Medium" },
  { id: "g58", question: "He is interested ___ learning Spanish.", options: ["on", "in", "at", "for"], answer: 1, explanation: "The correct phrase is 'interested in'.", difficulty: "Medium" },
  { id: "g59", question: "By the time we arrived, the movie ___.", options: ["started", "has started", "had started", "starts"], answer: 2, explanation: "Past perfect indicates an earlier past action.", difficulty: "Medium" },
  { id: "g60", question: "Not until the end of the story ___ the truth.", options: ["I understood", "did I understand", "I understand", "understood I"], answer: 1, explanation: "Negative adverbials at the beginning require inversion.", difficulty: "Medium" },
  { id: "g61", question: "The quality of these products ___ improved significantly.", options: ["have", "has", "are", "were"], answer: 1, explanation: "The subject is 'quality', which is singular.", difficulty: "Medium" },
  { id: "g62", question: "She rarely ___ mistakes in her reports.", options: ["make", "makes", "made", "making"], answer: 1, explanation: "Third-person singular subjects take verbs ending in -s.", difficulty: "Medium" },
  { id: "g63", question: "Had I known the truth, I ___ differently.", options: ["act", "would act", "would have acted", "acted"], answer: 2, explanation: "Third conditional requires 'would have + past participle'.", difficulty: "Medium" },
  { id: "g64", question: "He is accustomed to ___ early.", options: ["wake", "wakes", "waking", "woke"], answer: 2, explanation: "'Accustomed to' is followed by a gerund.", difficulty: "Medium" },
  { id: "g65", question: "The team ___ practicing for the final match.", options: ["is", "are", "have", "were"], answer: 0, explanation: "Team is treated as a singular collective noun.", difficulty: "Medium" },
  { id: "g66", question: "I would rather you ___ tomorrow.", options: ["come", "came", "coming", "comes"], answer: 1, explanation: "After 'would rather', use past tense for preferences about others.", difficulty: "Medium" },
  { id: "g67", question: "She is capable ___ solving complex problems.", options: ["for", "of", "at", "with"], answer: 1, explanation: "The correct phrase is 'capable of'.", difficulty: "Hard" },
  { id: "g68", question: "The principal, along with the teachers, ___ attending the ceremony.", options: ["are", "were", "is", "have"], answer: 2, explanation: "The main subject is 'principal', which is singular.", difficulty: "Hard" },
  { id: "g69", question: "Few students know how to solve the problem, ___?", options: ["do they", "don't they", "doesn't it", "aren't they"], answer: 0, explanation: "The statement is negative in meaning, so the tag is positive.", difficulty: "Hard" },
  { id: "g70", question: "The movie was so boring that I could hardly keep my eyes ___.", options: ["open", "opened", "opening", "opens"], answer: 0, explanation: "After 'keep', an adjective can describe the state.", difficulty: "Hard" },
  { id: "g71", question: "Each employee must bring ___ own identification card.", options: ["their", "his or her", "our", "your"], answer: 1, explanation: "'Each employee' is singular.", difficulty: "Hard" },
  { id: "g72", question: "No one except the managers ___ allowed to enter.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'No one' is singular.", difficulty: "Hard" },
  { id: "g73", question: "The project was completed ahead ___ schedule.", options: ["from", "of", "at", "with"], answer: 1, explanation: "The correct phrase is 'ahead of schedule'.", difficulty: "Hard" },
  { id: "g74", question: "He has difficulty ___ people's names.", options: ["remember", "remembering", "remembered", "remembers"], answer: 1, explanation: "'Difficulty' is followed by a gerund.", difficulty: "Hard" },
  { id: "g75", question: "The more you practice, the ___ you become.", options: ["good", "better", "best", "well"], answer: 1, explanation: "The comparative structure is 'the more..., the better...'.", difficulty: "Hard" },
  { id: "g76", question: "Neither the CEO nor the directors ___ available for comment.", options: ["was", "is", "are", "has"], answer: 2, explanation: "The verb agrees with the nearest plural subject 'directors'.", difficulty: "Hard" },
  { id: "g77", question: "She objected to ___ treated unfairly.", options: ["be", "being", "been", "is"], answer: 1, explanation: "'Object to' is followed by a gerund.", difficulty: "Hard" },
  { id: "g78", question: "The package ___ before noon tomorrow.", options: ["will deliver", "will be delivered", "delivers", "delivered"], answer: 1, explanation: "Future passive voice is required.", difficulty: "Hard" },
  { id: "g79", question: "One of the reasons for his success ___ his determination.", options: ["are", "were", "is", "have"], answer: 2, explanation: "The subject is 'one', which is singular.", difficulty: "Hard" },
  { id: "g80", question: "Little ___ about the incident until the report was released.", options: ["was known", "knew", "knows", "has known"], answer: 0, explanation: "Passive voice is needed because the information was unknown.", difficulty: "Hard" },
  { id: "g81", question: "By next month, they ___ the bridge.", options: ["complete", "completed", "will complete", "will have completed"], answer: 3, explanation: "Future perfect is used for an action completed before a future time.", difficulty: "Hard" },
  { id: "g82", question: "The information ___ accurate.", options: ["are", "were", "is", "have"], answer: 2, explanation: "'Information' is an uncountable noun and takes a singular verb.", difficulty: "Hard" },
  { id: "g83", question: "She prevented him from ___ the secret.", options: ["tell", "telling", "told", "to tell"], answer: 1, explanation: "'Prevent from' is followed by a gerund.", difficulty: "Hard" },
  { id: "g84", question: "Not only John but also his friends ___ attending the event.", options: ["is", "was", "are", "has"], answer: 2, explanation: "The verb agrees with the nearest subject 'friends'.", difficulty: "Hard" },
  { id: "g85", question: "He acted as though he ___ everything.", options: ["know", "knows", "knew", "known"], answer: 2, explanation: "Past tense is used after 'as though' for unreal situations.", difficulty: "Hard" },
  { id: "g86", question: "She is responsible ___ managing the project.", options: ["for", "of", "with", "to"], answer: 0, explanation: "The correct phrase is 'responsible for'.", difficulty: "Hard" },
  { id: "g87", question: "The students demanded that the exam ___ postponed.", options: ["be", "is", "was", "being"], answer: 0, explanation: "The subjunctive mood uses the base form of the verb.", difficulty: "Hard" },
  { id: "g88", question: "I am used to ___ in a busy city.", options: ["live", "living", "lived", "lives"], answer: 1, explanation: "'Used to' in this context is followed by a gerund.", difficulty: "Hard" },
  { id: "g89", question: "The jury ___ unable to reach a decision.", options: ["was", "were", "have", "are"], answer: 0, explanation: "The jury is treated as a single unit.", difficulty: "Hard" },
  { id: "g90", question: "She would have helped if you ___ asked.", options: ["have", "had", "has", "would"], answer: 1, explanation: "Third conditional uses 'if + had + past participle'.", difficulty: "Hard" },
  { id: "g91", question: "The company is known ___ its excellent service.", options: ["for", "to", "with", "by"], answer: 0, explanation: "The correct phrase is 'known for'.", difficulty: "Hard" },
  { id: "g92", question: "There ___ a number of reasons for the delay.", options: ["is", "was", "are", "has"], answer: 2, explanation: "'A number of' takes a plural verb.", difficulty: "Hard" },
  { id: "g93", question: "He admitted ___ the mistake.", options: ["make", "making", "made", "to make"], answer: 1, explanation: "'Admit' is followed by a gerund.", difficulty: "Hard" },
  { id: "g94", question: "The cake tastes ___.", options: ["well", "good", "better", "nicely"], answer: 1, explanation: "Linking verbs take adjectives, not adverbs.", difficulty: "Hard" },
  { id: "g95", question: "Seldom ___ such dedication in an employee.", options: ["I have seen", "have I seen", "I saw", "did seen"], answer: 1, explanation: "Negative adverbs at the beginning require inversion.", difficulty: "Hard" },
  { id: "g96", question: "The teacher asked whether everyone ___ finished the test.", options: ["has", "have", "had", "having"], answer: 2, explanation: "Past perfect fits the reported question.", difficulty: "Hard" },
  { id: "g97", question: "He is confident ___ winning the competition.", options: ["for", "of", "with", "at"], answer: 1, explanation: "The correct phrase is 'confident of'.", difficulty: "Hard" },
  { id: "g98", question: "The equipment ___ delivered yesterday.", options: ["were", "was", "are", "have"], answer: 1, explanation: "'Equipment' is an uncountable noun and takes a singular verb.", difficulty: "Hard" },
  { id: "g99", question: "She suggested ___ a short break.", options: ["take", "taking", "took", "to take"], answer: 1, explanation: "'Suggest' is followed by a gerund.", difficulty: "Hard" },
  { id: "g100", question: "Had they left earlier, they ___ the train.", options: ["would catch", "would have caught", "will catch", "caught"], answer: 1, explanation: "Third conditional expresses an unreal past result.", difficulty: "Hard" },
];

const vocabulary: Question[] = [
  { id: "v1", question: "What does 'abundant' mean?", options: ["Scarce", "Plentiful", "Tiny", "Weak"], answer: 1, explanation: "Abundant means existing in large quantities.", difficulty: "Easy" },
  { id: "v2", question: "What does 'cautious' mean?", options: ["Careful", "Angry", "Lazy", "Fearless"], answer: 0, explanation: "Cautious means being careful to avoid danger or mistakes.", difficulty: "Easy" },
  { id: "v3", question: "What does 'generous' mean?", options: ["Selfish", "Kind and giving", "Poor", "Strict"], answer: 1, explanation: "A generous person is willing to give or share.", difficulty: "Easy" },
  { id: "v4", question: "What does 'fragile' mean?", options: ["Strong", "Heavy", "Easily broken", "Expensive"], answer: 2, explanation: "Fragile objects can break easily.", difficulty: "Easy" },
  { id: "v5", question: "What does 'ancient' mean?", options: ["Modern", "Very old", "Beautiful", "Rare"], answer: 1, explanation: "Ancient refers to something extremely old.", difficulty: "Easy" },
  { id: "v6", question: "What does 'diligent' mean?", options: ["Hardworking", "Lazy", "Rude", "Funny"], answer: 0, explanation: "Diligent means showing effort and care in work.", difficulty: "Easy" },
  { id: "v7", question: "What does 'reluctant' mean?", options: ["Eager", "Unwilling", "Excited", "Curious"], answer: 1, explanation: "Reluctant means not wanting to do something.", difficulty: "Easy" },
  { id: "v8", question: "What does 'vivid' mean?", options: ["Dull", "Bright and clear", "Small", "Weak"], answer: 1, explanation: "Vivid describes something very clear and detailed.", difficulty: "Easy" },
  { id: "v9", question: "What does 'humble' mean?", options: ["Proud", "Modest", "Rich", "Famous"], answer: 1, explanation: "A humble person does not boast.", difficulty: "Easy" },
  { id: "v10", question: "What does 'swift' mean?", options: ["Slow", "Fast", "Heavy", "Quiet"], answer: 1, explanation: "Swift means moving quickly.", difficulty: "Easy" },
  { id: "v11", question: "What does 'obsolete' mean?", options: ["New", "Outdated", "Useful", "Popular"], answer: 1, explanation: "Obsolete means no longer in use.", difficulty: "Easy" },
  { id: "v12", question: "What does 'transparent' mean?", options: ["Dark", "See-through", "Hard", "Heavy"], answer: 1, explanation: "Transparent materials allow light to pass through.", difficulty: "Easy" },
  { id: "v13", question: "What does 'hostile' mean?", options: ["Friendly", "Aggressive", "Funny", "Helpful"], answer: 1, explanation: "Hostile means unfriendly or antagonistic.", difficulty: "Easy" },
  { id: "v14", question: "What does 'fortunate' mean?", options: ["Lucky", "Poor", "Sad", "Careless"], answer: 0, explanation: "Fortunate means having good luck.", difficulty: "Easy" },
  { id: "v15", question: "What does 'scarce' mean?", options: ["Abundant", "Rare", "Heavy", "Cheap"], answer: 1, explanation: "Scarce means available in small amounts.", difficulty: "Easy" },
  { id: "v16", question: "What does 'precise' mean?", options: ["Accurate", "Confusing", "Large", "Messy"], answer: 0, explanation: "Precise means exact and accurate.", difficulty: "Easy" },
  { id: "v17", question: "What does 'adapt' mean?", options: ["Refuse", "Adjust", "Destroy", "Forget"], answer: 1, explanation: "Adapt means to change to fit new conditions.", difficulty: "Easy" },
  { id: "v18", question: "What does 'grateful' mean?", options: ["Thankful", "Angry", "Hungry", "Busy"], answer: 0, explanation: "Grateful means feeling appreciation.", difficulty: "Easy" },
  { id: "v19", question: "What does 'expand' mean?", options: ["Shrink", "Grow larger", "Hide", "Break"], answer: 1, explanation: "Expand means to increase in size.", difficulty: "Easy" },
  { id: "v20", question: "What does 'temporary' mean?", options: ["Permanent", "Short-term", "Dangerous", "Ancient"], answer: 1, explanation: "Temporary means lasting for a limited time.", difficulty: "Easy" },
  { id: "v21", question: "What does 'brilliant' mean?", options: ["Dull", "Intelligent", "Weak", "Careless"], answer: 1, explanation: "Brilliant often means highly intelligent or exceptionally talented.", difficulty: "Easy" },
  { id: "v22", question: "What does 'vanish' mean?", options: ["Appear", "Disappear", "Grow", "Remain"], answer: 1, explanation: "Vanish means to disappear suddenly.", difficulty: "Easy" },
  { id: "v23", question: "What does 'eager' mean?", options: ["Uninterested", "Excited and willing", "Angry", "Confused"], answer: 1, explanation: "Eager means enthusiastic about doing something.", difficulty: "Easy" },
  { id: "v24", question: "What does 'loyal' mean?", options: ["Faithful", "Dishonest", "Cruel", "Lazy"], answer: 0, explanation: "A loyal person remains faithful and supportive.", difficulty: "Easy" },
  { id: "v25", question: "What does 'brief' mean?", options: ["Long", "Short", "Expensive", "Complicated"], answer: 1, explanation: "Brief means lasting a short time.", difficulty: "Easy" },
  { id: "v26", question: "What does 'sincere' mean?", options: ["Honest", "Fake", "Funny", "Proud"], answer: 0, explanation: "Sincere means genuine and honest.", difficulty: "Easy" },
  { id: "v27", question: "What does 'vast' mean?", options: ["Tiny", "Huge", "Narrow", "Weak"], answer: 1, explanation: "Vast means extremely large.", difficulty: "Easy" },
  { id: "v28", question: "What does 'timid' mean?", options: ["Brave", "Shy", "Strong", "Smart"], answer: 1, explanation: "Timid means lacking confidence or courage.", difficulty: "Easy" },
  { id: "v29", question: "What does 'reliable' mean?", options: ["Trustworthy", "Lazy", "Dangerous", "Weak"], answer: 0, explanation: "Reliable means dependable.", difficulty: "Easy" },
  { id: "v30", question: "What does 'dense' mean?", options: ["Thin", "Thick", "Fast", "Expensive"], answer: 1, explanation: "Dense means closely packed together.", difficulty: "Easy" },
  { id: "v31", question: "What does 'generally' mean?", options: ["Usually", "Never", "Rarely", "Suddenly"], answer: 0, explanation: "Generally means in most cases.", difficulty: "Easy" },
  { id: "v32", question: "What does 'frequent' mean?", options: ["Rare", "Occasional", "Happening often", "Difficult"], answer: 2, explanation: "Frequent means occurring repeatedly.", difficulty: "Easy" },
  { id: "v33", question: "What does 'confident' mean?", options: ["Certain", "Afraid", "Weak", "Unsure"], answer: 0, explanation: "Confident means feeling sure about something.", difficulty: "Easy" },
  { id: "v34", question: "What does 'resist' mean?", options: ["Accept", "Oppose", "Ignore", "Encourage"], answer: 1, explanation: "Resist means to fight against something.", difficulty: "Medium" },
  { id: "v35", question: "What does 'generous' mean?", options: ["Kind and giving", "Selfish", "Greedy", "Angry"], answer: 0, explanation: "Generous people willingly share with others.", difficulty: "Medium" },
  { id: "v36", question: "What does 'endure' mean?", options: ["Suffer patiently", "Celebrate", "Forget", "Refuse"], answer: 0, explanation: "Endure means to tolerate hardship.", difficulty: "Medium" },
  { id: "v37", question: "What does 'minor' mean?", options: ["Major", "Small", "Ancient", "Important"], answer: 1, explanation: "Minor means less important or smaller.", difficulty: "Medium" },
  { id: "v38", question: "What does 'scarcity' mean?", options: ["Abundance", "Shortage", "Happiness", "Growth"], answer: 1, explanation: "Scarcity means a lack of something.", difficulty: "Medium" },
  { id: "v39", question: "What does 'modify' mean?", options: ["Destroy", "Change", "Hide", "Lose"], answer: 1, explanation: "Modify means to alter or adjust.", difficulty: "Medium" },
  { id: "v40", question: "What does 'extraordinary' mean?", options: ["Ordinary", "Remarkable", "Common", "Average"], answer: 1, explanation: "Extraordinary means very unusual or impressive.", difficulty: "Medium" },
  { id: "v41", question: "What does 'astonish' mean?", options: ["Bore", "Surprise greatly", "Hide", "Forget"], answer: 1, explanation: "Astonish means to surprise someone very much.", difficulty: "Medium" },
  { id: "v42", question: "What does 'benevolent' mean?", options: ["Kind", "Cruel", "Lazy", "Silent"], answer: 0, explanation: "Benevolent means well-meaning and kind.", difficulty: "Medium" },
  { id: "v43", question: "What does 'commence' mean?", options: ["Finish", "Begin", "Delay", "Stop"], answer: 1, explanation: "Commence means to start something.", difficulty: "Medium" },
  { id: "v44", question: "What does 'deteriorate' mean?", options: ["Improve", "Worsen", "Repair", "Expand"], answer: 1, explanation: "Deteriorate means to become worse.", difficulty: "Medium" },
  { id: "v45", question: "What does 'eliminate' mean?", options: ["Remove", "Add", "Protect", "Ignore"], answer: 0, explanation: "Eliminate means to completely remove.", difficulty: "Medium" },
  { id: "v46", question: "What does 'foster' mean?", options: ["Discourage", "Encourage growth", "Destroy", "Forget"], answer: 1, explanation: "Foster means to support development.", difficulty: "Medium" },
  { id: "v47", question: "What does 'genuine' mean?", options: ["Fake", "Real", "Weak", "Rare"], answer: 1, explanation: "Genuine means authentic or real.", difficulty: "Medium" },
  { id: "v48", question: "What does 'hinder' mean?", options: ["Help", "Delay", "Reward", "Promote"], answer: 1, explanation: "Hinder means to create difficulties or delays.", difficulty: "Medium" },
  { id: "v49", question: "What does 'immense' mean?", options: ["Tiny", "Extremely large", "Fragile", "Light"], answer: 1, explanation: "Immense means huge in size.", difficulty: "Medium" },
  { id: "v50", question: "What does 'justify' mean?", options: ["Blame", "Prove right", "Hide", "Ignore"], answer: 1, explanation: "Justify means to show that something is reasonable.", difficulty: "Medium" },
  { id: "v51", question: "What does 'keen' mean?", options: ["Interested", "Bored", "Weak", "Careless"], answer: 0, explanation: "Keen means eager or interested.", difficulty: "Medium" },
  { id: "v52", question: "What does 'liberate' mean?", options: ["Capture", "Free", "Punish", "Hide"], answer: 1, explanation: "Liberate means to set free.", difficulty: "Medium" },
  { id: "v53", question: "What does 'mandatory' mean?", options: ["Optional", "Required", "Dangerous", "Temporary"], answer: 1, explanation: "Mandatory means required by rule.", difficulty: "Medium" },
  { id: "v54", question: "What does 'notable' mean?", options: ["Unimportant", "Remarkable", "Ordinary", "Silent"], answer: 1, explanation: "Notable means worthy of attention.", difficulty: "Medium" },
  { id: "v55", question: "What does 'obtain' mean?", options: ["Lose", "Acquire", "Destroy", "Forget"], answer: 1, explanation: "Obtain means to get something.", difficulty: "Medium" },
  { id: "v56", question: "What does 'perceive' mean?", options: ["Notice", "Ignore", "Hide", "Reject"], answer: 0, explanation: "Perceive means to become aware of.", difficulty: "Medium" },
  { id: "v57", question: "What does 'quit' mean?", options: ["Continue", "Stop", "Expand", "Repair"], answer: 1, explanation: "Quit means to stop doing something.", difficulty: "Medium" },
  { id: "v58", question: "What does 'retain' mean?", options: ["Forget", "Keep", "Remove", "Break"], answer: 1, explanation: "Retain means to continue having something.", difficulty: "Medium" },
  { id: "v59", question: "What does 'sufficient' mean?", options: ["Enough", "Scarce", "Huge", "Weak"], answer: 0, explanation: "Sufficient means adequate or enough.", difficulty: "Medium" },
  { id: "v60", question: "What does 'terminate' mean?", options: ["Start", "End", "Improve", "Repair"], answer: 1, explanation: "Terminate means to bring something to an end.", difficulty: "Medium" },
  { id: "v61", question: "What does 'abandon' mean?", options: ["Keep", "Leave behind", "Repair", "Protect"], answer: 1, explanation: "Abandon means to leave something or someone behind.", difficulty: "Hard" },
  { id: "v62", question: "What does 'accurate' mean?", options: ["Incorrect", "Exact", "Difficult", "Temporary"], answer: 1, explanation: "Accurate means correct and precise.", difficulty: "Hard" },
  { id: "v63", question: "What does 'ambitious' mean?", options: ["Lazy", "Having strong goals", "Weak", "Careless"], answer: 1, explanation: "Ambitious people are determined to achieve success.", difficulty: "Hard" },
  { id: "v64", question: "What does 'appreciate' mean?", options: ["Ignore", "Value", "Destroy", "Refuse"], answer: 1, explanation: "Appreciate means to recognize the worth of something.", difficulty: "Hard" },
  { id: "v65", question: "What does 'arduous' mean?", options: ["Easy", "Difficult", "Funny", "Short"], answer: 1, explanation: "Arduous means requiring a lot of effort.", difficulty: "Hard" },
  { id: "v66", question: "What does 'assume' mean?", options: ["Question", "Suppose", "Reject", "Forget"], answer: 1, explanation: "Assume means to believe something without proof.", difficulty: "Hard" },
  { id: "v67", question: "What does 'authentic' mean?", options: ["Fake", "Genuine", "Broken", "Rare"], answer: 1, explanation: "Authentic means real and original.", difficulty: "Hard" },
  { id: "v68", question: "What does 'awkward' mean?", options: ["Comfortable", "Uncomfortable", "Strong", "Exciting"], answer: 1, explanation: "Awkward describes an uncomfortable situation.", difficulty: "Hard" },
  { id: "v69", question: "What does 'beneficial' mean?", options: ["Harmful", "Helpful", "Expensive", "Temporary"], answer: 1, explanation: "Beneficial means producing good results.", difficulty: "Hard" },
  { id: "v70", question: "What does 'calculate' mean?", options: ["Estimate mathematically", "Destroy", "Forget", "Delay"], answer: 0, explanation: "Calculate means to determine using mathematics.", difficulty: "Hard" },
  { id: "v71", question: "What does 'capable' mean?", options: ["Unable", "Able", "Weak", "Confused"], answer: 1, explanation: "Capable means having the ability to do something.", difficulty: "Hard" },
  { id: "v72", question: "What does 'clarify' mean?", options: ["Confuse", "Explain clearly", "Hide", "Reject"], answer: 1, explanation: "Clarify means to make something easier to understand.", difficulty: "Hard" },
  { id: "v73", question: "What does 'cooperate' mean?", options: ["Argue", "Work together", "Compete", "Ignore"], answer: 1, explanation: "Cooperate means to work jointly toward a goal.", difficulty: "Hard" },
  { id: "v74", question: "What does 'crucial' mean?", options: ["Unimportant", "Extremely important", "Funny", "Cheap"], answer: 1, explanation: "Crucial means very important.", difficulty: "Hard" },
  { id: "v75", question: "What does 'decline' mean?", options: ["Increase", "Refuse or decrease", "Accept", "Repair"], answer: 1, explanation: "Decline can mean to refuse or become less.", difficulty: "Hard" },
  { id: "v76", question: "What does 'dedicate' mean?", options: ["Commit", "Avoid", "Forget", "Hide"], answer: 0, explanation: "Dedicate means to devote yourself to something.", difficulty: "Hard" },
  { id: "v77", question: "What does 'efficient' mean?", options: ["Wasteful", "Productive", "Slow", "Confused"], answer: 1, explanation: "Efficient means achieving results with minimal waste.", difficulty: "Hard" },
  { id: "v78", question: "What does 'encounter' mean?", options: ["Avoid", "Meet unexpectedly", "Hide", "Lose"], answer: 1, explanation: "Encounter means to come across something unexpectedly.", difficulty: "Hard" },
  { id: "v79", question: "What does 'essential' mean?", options: ["Optional", "Necessary", "Rare", "Expensive"], answer: 1, explanation: "Essential means absolutely necessary.", difficulty: "Hard" },
  { id: "v80", question: "What does 'evaluate' mean?", options: ["Ignore", "Assess", "Destroy", "Hide"], answer: 1, explanation: "Evaluate means to judge or determine value.", difficulty: "Hard" },
  { id: "v81", question: "What does 'flourish' mean?", options: ["Decline", "Prosper", "Hide", "Fail"], answer: 1, explanation: "Flourish means to grow or develop successfully.", difficulty: "Hard" },
  { id: "v82", question: "What does 'frequent' mean?", options: ["Rare", "Occurring often", "Expensive", "Difficult"], answer: 1, explanation: "Frequent means happening repeatedly.", difficulty: "Hard" },
  { id: "v83", question: "What does 'graceful' mean?", options: ["Clumsy", "Elegant", "Loud", "Rude"], answer: 1, explanation: "Graceful means moving in a smooth and attractive way.", difficulty: "Hard" },
  { id: "v84", question: "What does 'hesitate' mean?", options: ["Act quickly", "Pause before acting", "Celebrate", "Ignore"], answer: 1, explanation: "Hesitate means to be uncertain before doing something.", difficulty: "Hard" },
  { id: "v85", question: "What does 'identical' mean?", options: ["Different", "Exactly the same", "Broken", "Rare"], answer: 1, explanation: "Identical means completely alike.", difficulty: "Hard" },
  { id: "v86", question: "What does 'illustrate' mean?", options: ["Confuse", "Explain with examples", "Hide", "Destroy"], answer: 1, explanation: "Illustrate means to make something clear through examples.", difficulty: "Hard" },
  { id: "v87", question: "What does 'inspire' mean?", options: ["Discourage", "Motivate", "Ignore", "Delay"], answer: 1, explanation: "Inspire means to encourage someone to do something.", difficulty: "Hard" },
  { id: "v88", question: "What does 'investigate' mean?", options: ["Ignore", "Examine carefully", "Hide", "Forget"], answer: 1, explanation: "Investigate means to look into something thoroughly.", difficulty: "Hard" },
  { id: "v89", question: "What does 'justify' mean?", options: ["Condemn", "Give reasons for", "Destroy", "Avoid"], answer: 1, explanation: "Justify means to show that something is reasonable.", difficulty: "Hard" },
  { id: "v90", question: "What does 'keen' mean?", options: ["Interested", "Bored", "Weak", "Angry"], answer: 0, explanation: "Keen means eager or enthusiastic.", difficulty: "Hard" },
  { id: "v91", question: "What does 'legitimate' mean?", options: ["Illegal", "Lawful", "Rare", "Temporary"], answer: 1, explanation: "Legitimate means lawful or valid.", difficulty: "Hard" },
  { id: "v92", question: "What does 'maintain' mean?", options: ["Abandon", "Keep in good condition", "Destroy", "Forget"], answer: 1, explanation: "Maintain means to preserve or continue.", difficulty: "Hard" },
  { id: "v93", question: "What does 'navigate' mean?", options: ["Get lost", "Find a route", "Sleep", "Hide"], answer: 1, explanation: "Navigate means to plan and follow a path.", difficulty: "Hard" },
  { id: "v94", question: "What does 'obstacle' mean?", options: ["Advantage", "Barrier", "Reward", "Solution"], answer: 1, explanation: "An obstacle is something that blocks progress.", difficulty: "Hard" },
  { id: "v95", question: "What does 'persuade' mean?", options: ["Convince", "Ignore", "Punish", "Delay"], answer: 0, explanation: "Persuade means to convince someone.", difficulty: "Hard" },
  { id: "v96", question: "What does 'qualify' mean?", options: ["Become eligible", "Fail", "Ignore", "Destroy"], answer: 0, explanation: "Qualify means to meet the required conditions.", difficulty: "Hard" },
  { id: "v97", question: "What does 'reveal' mean?", options: ["Hide", "Show", "Destroy", "Forget"], answer: 1, explanation: "Reveal means to make known.", difficulty: "Hard" },
  { id: "v98", question: "What does 'significant' mean?", options: ["Unimportant", "Important", "Rare", "Temporary"], answer: 1, explanation: "Significant means important or meaningful.", difficulty: "Hard" },
  { id: "v99", question: "What does 'transform' mean?", options: ["Keep unchanged", "Change completely", "Hide", "Delay"], answer: 1, explanation: "Transform means to change form or appearance.", difficulty: "Hard" },
  { id: "v100", question: "What does 'utilize' mean?", options: ["Waste", "Use", "Ignore", "Destroy"], answer: 1, explanation: "Utilize means to make practical use of something.", difficulty: "Hard" },
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
