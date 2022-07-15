import { render } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Skills } from '.';

const data: Queries.SkillsPageQuery = {
  allSkillsYaml: {
    group: [
      {
        fieldValue: 'Backend Development',
        totalCount: 13,
        sum: 57,
        nodes: [
          {
            date: '8 years ago',
            rating: 5,
            skill: 'Typescript',
          },
          {
            date: '10 years ago',
            rating: 5,
            skill: 'Node JS',
          },
          {
            date: '9 years ago',
            rating: 4,
            skill: 'Python',
          },
          {
            date: '6 years ago',
            rating: 5,
            skill: 'Prisma',
          },
          {
            date: '6 years ago',
            rating: 5,
            skill: 'GraphQL',
          },
          {
            date: '9 years ago',
            rating: 5,
            skill: 'API',
          },
          {
            date: '2 years ago',
            rating: 4,
            skill: 'Pulumi',
          },
          {
            date: '3 years ago',
            rating: 4,
            skill: 'Serverless',
          },
          {
            date: '4 years ago',
            rating: 4,
            skill: 'AWS',
          },
          {
            date: '6 years ago',
            rating: 4,
            skill: 'GCP',
          },
          {
            date: '3 years ago',
            rating: 4,
            skill: 'Step Functions',
          },
          {
            date: '7 years ago',
            rating: 4,
            skill: 'Kubernetes',
          },
          {
            date: '7 years ago',
            rating: 4,
            skill: 'Containerization',
          },
        ],
      },
      {
        fieldValue: 'CAD/CAM',
        totalCount: 3,
        sum: 10,
        nodes: [
          {
            date: '4 years ago',
            rating: 3,
            skill: 'Blender',
          },
          {
            date: '6 years ago',
            rating: 4,
            skill: 'Fusion 360',
          },
          {
            date: '6 years ago',
            rating: 3,
            skill: '3D Printing',
          },
        ],
      },
      {
        fieldValue: 'CI/CD',
        totalCount: 7,
        sum: 28,
        nodes: [
          {
            date: '2 years ago',
            rating: 4,
            skill: 'Pulumi',
          },
          {
            date: '7 years ago',
            rating: 5,
            skill: 'GitLab CI',
          },
          {
            date: '9 years ago',
            rating: 4,
            skill: 'Docker',
          },
          {
            date: '8 years ago',
            rating: 4,
            skill: 'Jest',
          },
          {
            date: '7 years ago',
            rating: 4,
            skill: 'Kubernetes',
          },
          {
            date: '7 years ago',
            rating: 4,
            skill: 'Containerization',
          },
          {
            date: '6 months ago',
            rating: 3,
            skill: 'Github Actions',
          },
        ],
      },
      {
        fieldValue: 'Data Analysis',
        totalCount: 3,
        sum: 13,
        nodes: [
          {
            date: '9 years ago',
            rating: 4,
            skill: 'Python',
          },
          {
            date: '5 years ago',
            rating: 5,
            skill: 'Tableau',
          },
          {
            date: '6 years ago',
            rating: 4,
            skill: 'Jupyter',
          },
        ],
      },
      {
        fieldValue: 'Database',
        totalCount: 4,
        sum: 14,
        nodes: [
          {
            date: '11 years ago',
            rating: 4,
            skill: 'MySQL',
          },
          {
            date: '11 years ago',
            rating: 4,
            skill: 'PostgreSQL',
          },
          {
            date: '11 years ago',
            rating: 3,
            skill: 'MongoDB',
          },
          {
            date: '11 years ago',
            rating: 3,
            skill: 'Redis',
          },
        ],
      },
      {
        fieldValue: 'General',
        totalCount: 2,
        sum: 9,
        nodes: [
          {
            date: '10 years ago',
            rating: 5,
            skill: 'Project Management',
          },
          {
            date: '5 years ago',
            rating: 4,
            skill: 'Account Management',
          },
        ],
      },
      {
        fieldValue: 'Web Development',
        totalCount: 6,
        sum: 26,
        nodes: [
          {
            date: '10 years ago',
            rating: 5,
            skill: 'React',
          },
          {
            date: '11 years ago',
            rating: 5,
            skill: 'Javascript',
          },
          {
            date: '8 years ago',
            rating: 5,
            skill: 'Typescript',
          },
          {
            date: '10 years ago',
            rating: 4,
            skill: 'Frontend Design',
          },
          {
            date: '2 years ago',
            rating: 3,
            skill: 'Rust',
          },
          {
            date: '8 years ago',
            rating: 4,
            skill: 'Jest',
          },
        ],
      },
    ],
  },
  tags: {
    group: [
      {
        field: 'frontmatter.tags',
        fieldValue: '3D Printing',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Fusion 360',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'GraphQL',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Jupyter',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Kubernetes',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'MySQL',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Node JS',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'PostgreSQL',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Python',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'React',
      },
      {
        field: 'frontmatter.tags',
        fieldValue: 'Typescript',
      },
    ],
  },
};

const props: any = {};

describe('Skills Page', () => {
  test('should render without exploding', () => {
    const { baseElement } = render(
      <HelmetProvider>
        <Skills data={data} {...props} />
      </HelmetProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
