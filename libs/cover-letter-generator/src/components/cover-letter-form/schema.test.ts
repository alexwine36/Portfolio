import fs from 'fs';
import { compile } from 'json-schema-to-typescript';
import path from 'path';
import { schema } from './schema';
describe('CoverLetterForm', () => {
  test('should create type', async () => {
    const res = await compile(schema as any, 'CoverLetterData');
    console.log(res);
    try {
      const output = path.join(__dirname, 'form-data.ts');
      console.log(output);

      fs.writeFileSync(output, res);
      // expect(true);
    } catch (error) {
      console.log(error);
    }
  });
});
