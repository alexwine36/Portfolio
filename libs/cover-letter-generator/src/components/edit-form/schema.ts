import { FormProps } from '@rjsf/core';

export const schema: FormProps['schema'] = {
  title: 'Cover Letter Edit',
  description: 'A simple generator for cover letters.',
  type: 'object',

  definitions: {
    text: {
      type: 'object',
      properties: {
        style: {
          type: 'string',
          title: 'Style',
          enum: ['Header', 'Emphasis', 'Normal'],
          default: 'Normal',
        },
        text: {
          type: 'string',
          title: 'Text',
        },
      },
    },
  },
  required: ['Header'],
  properties: {
    Header: {
      type: 'array',
      items: {
        $ref: '#/definitions/text',
        title: 'Line',
      },
    },
    To: {
      type: 'array',
      items: {
        $ref: '#/definitions/text',
        title: 'Line',
      },
    },

    Body: {
      type: 'array',
      title: 'Body',
      items: {
        type: 'string',
        title: 'line',
      },
    },
  },
};
