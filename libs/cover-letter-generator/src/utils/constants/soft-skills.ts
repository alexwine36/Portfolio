export const softSkillArray = [
  {
    noun: 'collaboration',
    adj: 'collaborative',
    adv: 'collaboratively',
    verb: 'collaborate',
  },
  {
    noun: 'communication',
    adj: 'communicative',
    adv: 'in a communicative manner',
    verb: 'communicate',
  },
  {
    noun: 'critical thinker',
  },
  {
    noun: 'critical thinking',
  },
  {
    noun: 'customer service',
  },
  {
    noun: 'decision-making',
  },
  {
    noun: 'delegation',
    verb: 'delegate',
  },
  {
    noun: 'enthusiasm',
    adj: 'enthusiastic',
    verb: 'enthuse',
  },
  {
    noun: 'innovation',
    verb: 'innovate',
    adj: 'innovative',
    adv: 'innovatively',
  },
  {
    noun: 'interpersonal relationships',
  },
  {
    noun: 'leadership',
    adj: 'leading',
    verb: 'lead',
  },
  {
    noun: 'management',
    verb: 'manage',
  },
  {
    noun: 'motivation',
    verb: 'motivate',
    adj: 'motivated',
  },
  {
    adj: 'self-modivated',
  },
  {
    noun: 'observation',
    verb: 'observe',
    adj: 'observant',
    adv: 'observantly',
  },
  {
    noun: 'planning',
    verb: 'plan',
  },
  {
    noun: 'problem-solving',
  },

  {
    noun: 'team-building',
  },
  {
    noun: 'teamwork',
    adj: 'teamwide',
  },
  {
    noun: 'time-management',
  },
  {
    noun: 'team player',
  },
  {
    adj: 'curious',
  },
];

// export const softSkillArray: {
//   adj?: string;
//   adv?: string;
//   verb?: string;
//   noun: string;
// }[] = Object.entries(softSkills).map(([noun, entries]) => ({
//   noun: noun.toLowerCase(),
//   ...entries,
// }));

export const getData = (pos: keyof typeof softSkillArray[0]): string[] => {
  return softSkillArray
    .filter((skill) => pos in skill)
    .map((s) => s[pos]) as string[];
};

export const softSkillAdj = getData('adj');
export const softSkillNoun = getData('noun');
export const softSkillVerb = getData('verb');

// export const getSkill = (skill: keyof typeof softSkills) => {
//   // console.log(Gerunds);
//   // console.log(Irregular);
//   // console.log(EnglishVerbs);

//   const VerbsData = mergeVerbsData(Irregular, Gerunds);

//   // const wordnet = new natural.WordNet();

//   // const tokenizer = new natural.WordTokenizer();
//   // const language = 'EN';
//   // const defaultCategory = 'N';
//   // // const defaultCategoryCapitalized = 'NNP';
//   // const lexicon = new natural.Lexicon(language, defaultCategory);
//   // const ruleSet = new natural.RuleSet('EN');
//   // const tagger = new natural.BrillPOSTagger(lexicon, ruleSet);

//   // const res = tagger.tag(tokenizer.tokenize(skill.toLowerCase()));
//   // console.log(res);

//   // wordnet.lookup(skill, (result) => {
//   //   console.log(JSON.stringify(result, null, 2));
//   // });
//   const skillObj = softSkills[skill];

//   if ('verb' in skillObj) {
//     const vSkill = skillObj['verb'];
//     [
//       'SIMPLE_PAST',
//       'SIMPLE_PRESENT',
//       'SIMPLE_FUTURE',
//       'PROGRESSIVE_PAST',
//       'PROGRESSIVE_PRESENT',
//       'PROGRESSIVE_FUTURE',
//       'PERFECT_PAST',
//       'PERFECT_PRESENT',
//       'PERFECT_FUTURE',
//       'PERFECT_PROGRESSIVE_PAST',
//       'PERFECT_PROGRESSIVE_PRESENT',
//       'PERFECT_PROGRESSIVE_FUTURE',
//     ].forEach((tense) => {
//       console.log(tense, getConjugation(VerbsData, vSkill, tense, 'S', {}));
//     });
//   }

//   // // eats
//   // console.log(getConjugation(VerbsData, skill, 'PRESENT', 'S', {}));

//   // console.log(getConjugation(VerbsData, skill, 'PERFECT_PAST', 'S', {}));

//   // // ate
//   // console.log(getConjugation(VerbsData, skill, 'SIMPLE_PAST', 'S', {}));

//   // // swimming
//   // console.log(getIngPart(VerbsData[skill], skill));
// };
