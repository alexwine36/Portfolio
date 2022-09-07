import { getAAn } from 'english-a-an';
import englishAAnList from 'english-a-an-list/dist/aan.json';

import {
  CoverLetterForm,
  Strengths,
} from '../../components/cover-letter-form/form-data';
import { CoverLetterEdit } from '../../components/edit-form/form-data';
const formatGreeting = (data: CoverLetterForm['Company']): string => {
  if (data) {
    const { contact, job } = data;
    if (contact) {
      return `Dear ${contact},`;
    }
    if (job) {
      return `Dear ${job} Hiring Team Manager,`;
    }
  }
  return `To Whom It May Concern,`;
};

function* getItem<T>(list: T[], pageSize = 1) {
  for (let index = 0; index < list.length; index += pageSize) {
    yield list[index];
    //list.slice(index, index + pageSize);
  }
}

const formatAAN = (data: string | void) => {
  if (typeof data === 'string') {
    const contracts = {};
    return `${getAAn(contracts, englishAAnList as any, data)} ${data}`;
  }
};

const formatPossesive = (data: string) => {
  if (data.toLowerCase().endsWith('s')) {
    return `${data}'`;
  }
  return `${data}'s`;
};
const formatIntro = (
  data: CoverLetterForm & {
    adjGen: Generator<Strengths, void, unknown>;
  }
): string => {
  const { Personal, Company, adjGen } = data;
  const { job = '', name } = Company || {};
  const { firstName, lastName } = Personal;

  const sentences = [
    `My name is ${firstName} ${lastName}.`,
    `I am thrilled to be applying for the ${job} role at ${name}.`,
    `After reviewing your job description, I believe you're looking for ${formatAAN(
      adjGen.next()['value']
    )} applicant that can be relied upon to fully engage with the role and develop in ${formatAAN(
      adjGen.next()['value']
    )} manner.`,
    name
      ? `My skills and qualifications are an ideal match to the ${job} requirements and will bring immediate value to ${formatPossesive(
          name
        )} goals.`
      : `Given these requirements, I believe I would be a great fit for this position.`,
  ];
  return sentences.join(' ');
};

const formatList = (list: string[]) => {
  const data = [...list];
  if (data.length >= 3) {
    const last = data.pop() as string;
    data.push(`and ${last}`);
    return data.join(', ');
  }
  return data.join(' and ');
};

const formatBody = (
  data: CoverLetterForm & {
    adjGen: Generator<Strengths, void, unknown>;
    nouns: string[];
  }
): string => {
  const { adjGen, nouns } = data;
  const sentences = [
    `I am ${formatAAN(
      adjGen.next()['value']
    )} professional who has impacted business outcomes through effective ${formatList(
      nouns
    )}.`,
  ];

  return sentences.join(' ');
};

const formatClosing = (): string => {
  const sentences = [
    'I am constantly learning and growing as developer, which has helped me gain experience in many domains and languages.',
    'In addition to this job posting, my resume is attached for your reference. Thank you for your time.',
  ];

  return sentences.join(' ');
};

const formatSalutation = (data: CoverLetterForm['Personal']): string[] => {
  const { firstName, lastName } = data;
  return ['Sincerely,', `${firstName} ${lastName}`];
};

export const formatBodyData = (
  data: CoverLetterForm
): CoverLetterEdit['Body'] => {
  const { Personal, Company, Strengths } = data;
  // const { softSkills } = Strengths;

  const {
    adjectives = [],
    nouns = [],
    // verbs = [],
  } = Strengths?.softSkills || {};
  const adjGen = getItem(adjectives);

  return [
    formatGreeting(Company),
    formatIntro({ ...data, adjGen }),
    formatBody({
      ...data,
      adjGen,
      nouns,
    }),
    formatClosing(),
    ...formatSalutation(Personal),
  ];
};
