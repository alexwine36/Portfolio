import styled from '@emotion/styled';
import { rgbToHex, useTheme } from '@mui/material';
import { Chart } from 'react-google-charts';

/* eslint-disable-next-line */
export interface GanttChartExampleProps {}

const StyledGanttChartExample = styled.div`
  color: pink;
  svg > g:nth-child(2) > rect {
    fill: transparent;
  }
`;

export function GanttChartExample(props: GanttChartExampleProps) {
  const theme = useTheme();
  const columns = [
    { type: 'string', label: 'Task ID' },
    { type: 'string', label: 'Task Name' },
    { type: 'string', label: 'Resource' },
    { type: 'date', label: 'Start Date' },
    { type: 'date', label: 'End Date' },
    { type: 'number', label: 'Duration' },
    { type: 'number', label: 'Percent Complete' },
    { type: 'string', label: 'Dependencies' },
  ];

  const rows = [
    [
      'Research',
      'Find horses',
      null,
      new Date(2015, 0, 1),
      new Date(2015, 0, 5),
      null,
      0,
      null,
    ],
    [
      'Write',
      'Write paper',
      'write',
      null,
      new Date(2015, 0, 9),
      3 * 24 * 60 * 60 * 1000,
      0,
      'Research,Outline',
    ],
    [
      'Cite',
      'Create bibliography',
      'write',
      null,
      new Date(2015, 0, 7),
      1 * 24 * 60 * 60 * 1000,
      20,
      'Research',
    ],
    [
      'Complete',
      'Hand in paper',
      'complete',
      null,
      new Date(2015, 0, 10),
      1 * 24 * 60 * 60 * 1000,
      0,
      'Cite,Write',
    ],
    [
      'Outline',
      'Outline paper',
      'write',
      null,
      new Date(2015, 0, 6),
      1 * 24 * 60 * 60 * 1000,
      100,
      'Research',
    ],
  ];

  const data = [columns, ...rows];
  const palette = ['primary', 'secondary', 'success', 'warning'].map((col) => {
    console.log(theme.palette[col]);

    const data = {
      color: rgbToHex(theme.palette[col].main),
      dark: rgbToHex(theme.palette[col].dark),
      light: rgbToHex(theme.palette[col].light),
    };

    console.log(data);
    return data;
  });

  //   {
  //     color: '#cccccc',
  //     dark: '#333333',
  //     light: '#eeeeee',
  //   },

  // theme.palette.primary.
  return (
    <StyledGanttChartExample>
      <Chart
        options={{
          backgroundColor: 'rgba(255,255,255,0)',
          gantt: {
            palette,
            labelStyle: {
              fontName: theme.typography.body1.fontFamily,
            },
            backgroundColor: { fill: 'rgba(255,255,255,0)' },
            criticalPathEnabled: false,
            innerGridTrack: { fillOpacity: '10%' },
            innerGridDarkTrack: { fillOpacity: '10%' },
            innerGridHorizLine: {
              stroke: theme.palette.divider,
            },
            arrow: {
              color: theme.palette.text.primary,
            },
          },
        }}
        chartType="Gantt"
        data={data}
      ></Chart>
    </StyledGanttChartExample>
  );
}

export default GanttChartExample;
