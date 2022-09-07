/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type FirstName = string;
export type LastName = string;
export type Phone = string;
export type Email = string;
export type CompanyName = string;
export type JobTitle = string;
export type ContactName = string;
export type Street = string;
export type City = string;
export type State = string;
/**
 * @minItems 1
 */
export type SoftSkillAdjectives = [Strengths, ...Strengths[]];
export type Strengths =
  | "collaborative"
  | "communicative"
  | "enthusiastic"
  | "innovative"
  | "leading"
  | "motivated"
  | "self-modivated"
  | "observant"
  | "teamwide";
/**
 * @minItems 1
 */
export type SoftSkillNouns = [Strengths1, ...Strengths1[]];
export type Strengths1 =
  | "collaboration"
  | "communication"
  | "critical thinker"
  | "critical thinking"
  | "customer service"
  | "decision-making"
  | "delegation"
  | "enthusiasm"
  | "innovation"
  | "interpersonal relationships"
  | "leadership"
  | "management"
  | "motivation"
  | "observation"
  | "planning"
  | "problem-solving"
  | "team-building"
  | "teamwork"
  | "time-management";
export type Skills =
  | "React"
  | "Javascript"
  | "Typescript"
  | "Frontend Design"
  | "Rust"
  | "Node JS"
  | "Python"
  | "Prisma"
  | "GraphQL"
  | "API"
  | "Express"
  | "Pulumi"
  | "Serverless"
  | "AWS"
  | "GCP"
  | "Step Functions"
  | "MySQL"
  | "PostgreSQL"
  | "MongoDB"
  | "Redis"
  | "Tableau"
  | "Jupyter"
  | "GitLab CI"
  | "Docker"
  | "Jest"
  | "Kubernetes"
  | "Containerization"
  | "GitHub Actions"
  | "Project Management"
  | "Account Management"
  | "Blender"
  | "Fusion 360"
  | "3D Printing";
export type HardSkills = Skills[];
export type Skills1 = string;
export type OtherSkills = Skills1[];

/**
 * A simple generator for cover letters.
 */
export interface CoverLetterForm {
  Personal: {
    firstName: FirstName;
    lastName: LastName;
    phone?: Phone;
    email?: Email;
    [k: string]: unknown;
  };
  Company: {
    name?: CompanyName;
    job?: JobTitle;
    contact?: ContactName;
    address?: CompanyAddress;
    [k: string]: unknown;
  };
  Strengths: {
    softSkills?: SoftSkills;
    hardSkills?: HardSkills;
    otherHardSkills?: OtherSkills;
    [k: string]: unknown;
  };
  [k: string]: unknown;
}
export interface CompanyAddress {
  street_address?: Street;
  city?: City;
  state?: State;
  [k: string]: unknown;
}
export interface SoftSkills {
  adjectives?: SoftSkillAdjectives;
  nouns?: SoftSkillNouns;
  [k: string]: unknown;
}
