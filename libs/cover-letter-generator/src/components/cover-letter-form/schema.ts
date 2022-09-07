import { FormProps } from '@rjsf/core';
import { softSkillAdj, softSkillNoun } from '../../utils/constants/soft-skills';
export const schema: FormProps['schema'] = {
  title: 'Cover Letter Form',
  description: 'A simple generator for cover letters.',
  type: 'object',
  // required: ['Personal.firstName'],
  definitions: {
    address: {
      type: 'object',
      properties: {
        street_address: { type: 'string', title: 'Street' },
        city: { type: 'string', title: 'City' },
        state: { type: 'string', title: 'State' },
      },
      // required: ['street_address', 'city', 'state'],
    },
  },
  required: ['Personal', 'Company', 'Strengths'],
  properties: {
    Personal: {
      type: 'object',
      required: ['firstName', 'lastName'],

      properties: {
        firstName: {
          type: 'string',
          title: 'First name',
          // default: 'Chuck',
        },
        lastName: {
          type: 'string',
          title: 'Last name',
        },
        phone: {
          type: 'string',
          title: 'Phone',
          // format: 'tel',
          // minLength: 10,
        },
        email: {
          type: 'string',
          format: 'email',
          title: 'Email',
        },
      },
    },
    Company: {
      type: 'object',
      // dependencies: {
      //   name: ['address'],
      // },
      properties: {
        name: {
          type: 'string',
          title: 'Company Name',
        },
        job: {
          type: 'string',
          title: 'Job Title',
        },
        contact: {
          type: 'string',
          title: 'Contact Name',
        },
        address: {
          $ref: '#/definitions/address',
          title: 'Company Address',
        },
      },
    },
    Strengths: {
      type: 'object',
      // required: ['softSkills'],
      properties: {
        softSkills: {
          title: 'Soft Skills',
          type: 'object',
          properties: {
            adjectives: {
              default: [],
              minItems: 3,
              maxItems: 3,
              type: 'array',
              title: 'Soft Skill Adjectives',
              items: {
                type: 'string',
                title: 'Strengths',
                enum: softSkillAdj,
              },
              uniqueItems: true,
            },
            nouns: {
              minItems: 1,
              default: [],
              type: 'array',
              title: 'Soft Skill Nouns',
              items: {
                type: 'string',
                title: 'Strengths',
                enum: softSkillNoun,
              },
              uniqueItems: true,
            },
            // verbs: {
            //   minItems: 1,
            //   default: [],
            //   type: 'array',
            //   title: 'Soft Skill Verbs',
            //   items: {
            //     type: 'string',
            //     title: 'Strengths',
            //     enum: softSkillVerb,
            //   },
            //   uniqueItems: true,
            // },
          },
        },

        hardSkills: {
          type: 'array',
          title: 'Hard Skills',
          uniqueItems: true,
          items: {
            type: 'string',
            title: 'Skills',
            enum: [
              'React',
              'Javascript',
              'Typescript',
              'Frontend Design',
              'Rust',
              'Node JS',
              'Python',
              'Prisma',
              'GraphQL',
              'API',
              'Express',
              'Pulumi',
              'Serverless',
              'AWS',
              'GCP',
              'Step Functions',
              'MySQL',
              'PostgreSQL',
              'MongoDB',
              'Redis',
              'Tableau',
              'Jupyter',
              'GitLab CI',
              'Docker',
              'Jest',
              'Kubernetes',
              'Containerization',
              'GitHub Actions',
              'Project Management',
              'Account Management',
              'Blender',
              'Fusion 360',
              '3D Printing',
            ],
          },
        },
        otherHardSkills: {
          type: 'array',
          title: 'Other Skills',
          items: {
            type: 'string',
            title: 'Skills',
          },
        },
        // style: {
        //   type: 'string',
        //   title: 'Working Style',
        //   enum: Object.keys(workingStyle),
        // },
      },
    },
  },
};

// console.log(JSON.stringify(schema, null, 2));
