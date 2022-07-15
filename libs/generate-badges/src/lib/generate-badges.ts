import { makeBadge } from 'badge-maker';
import * as fs from 'fs-extra';
import * as path from 'path';

export interface Total {
  lines: Lines;
  statements: Statements;
  functions: Functions;
  branches: Branches;
  branchesTrue: BranchesTrue;
}

export interface Lines {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export interface Statements {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export interface Functions {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export interface Branches {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

export interface BranchesTrue {
  total: number;
  covered: number;
  skipped: number;
  pct: number;
}

interface Root {
  total: Total;
}

const generateBadge = (value: number, name: string, outputDir: string) => {
  const colorFormat = (value: number) => {
    if (value < 65) {
      return 'red';
    }
    if (value >= 80) {
      return 'green';
    } else return 'yellow';
  };
  const svg = makeBadge({
    label: name,
    message: `${value}%`,
    color: colorFormat(value),
    style: 'flat-square',
  });

  fs.writeFileSync(getPath(`${outputDir}/${name}.svg`), svg);
};

const getPath = (loc: string) => {
  const sections = loc.split('/');

  const location = path.join(process.cwd(), ...sections);
  console.log(location);

  return location;
};

export function generateBadges(file: string, outputDir = 'assets'): string {
  try {
    const summaryObj: Root = fs.readJSONSync(getPath(file));
    try {
      fs.mkdirSync(getPath(outputDir), {
        recursive: true,
      });
    } catch (error) {
      console.log('Folder exists');
    }

    if ('total' in summaryObj) {
      const lineRate = summaryObj.total.lines.pct;
      const functionRate = summaryObj.total.functions.pct;
      const branchRate = summaryObj.total.branches.pct;

      const percent = Math.floor((functionRate + lineRate + branchRate) / 3);

      const data = {
        coverage: percent,
        functions: functionRate,
        lines: lineRate,
        branches: branchRate,
      };

      Object.entries(data).map(([name, percent]) => {
        generateBadge(percent, name, outputDir);
      });
    }
  } catch (error) {
    console.error(error);
  }

  return 'malformed file found';
}
