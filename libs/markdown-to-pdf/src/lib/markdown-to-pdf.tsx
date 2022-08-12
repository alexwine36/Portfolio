import type { Root } from 'mdast';
import pdf from 'pdfjs';
import { parseToDoc } from '../utilities/parse-mdast';
const fonts = {
  CourierBold: require('pdfjs/font/Courier-Bold.js'),
  CourierBoldOblique: require('pdfjs/font/Courier-BoldOblique.js'),
  CourierOblique: require('pdfjs/font/Courier-Oblique.js'),
  Courier: require('pdfjs/font/Courier.js'),
  HelveticaBold: require('pdfjs/font/Helvetica-Bold.js'),
  HelveticaBoldOblique: require('pdfjs/font/Helvetica-BoldOblique.js'),
  HelveticaOblique: require('pdfjs/font/Helvetica-Oblique.js'),
  Helvetica: require('pdfjs/font/Helvetica.js'),
  Symbol: require('pdfjs/font/Symbol.js'),
  TimesBold: require('pdfjs/font/Times-Bold.js'),
  TimesBoldItalic: require('pdfjs/font/Times-BoldItalic.js'),
  TimesItalic: require('pdfjs/font/Times-Italic.js'),
  TimesRoman: require('pdfjs/font/Times-Roman.js'),
  ZapfDingbats: require('pdfjs/font/ZapfDingbats.js'),
};

type SectionData = {
  title: string;
  pretitle: string;
  subtitle: string;
  content: string[];
  rawContent: Root;
};

export const generatePdfResume = (data?: {
  work: SectionData[];
  education: SectionData[];
  skills: { category: string; skills: string[] }[];
}) => {
  const doc = new pdf.Document({
    font: require('pdfjs/font/Helvetica'),
    properties: {
      title: 'Alex Wine | Portfolio',
      author: 'Alex Wine',
      creationDate: new Date(),
    },
  });

  // const header = doc
  //   .header()
  //   .table({ widths: [null], paddingBottom: 1 * pdf.cm })
  //   .row();
  // // header.cell().image(logo, { height: 2*pdf.cm })
  // header
  //   .cell()
  //   .text({ textAlign: 'right' })
  //   .add(
  //     'A Portable Document Format (PDF) generation library targeting both the server- and client-side.'
  //   )
  //   .add('https://github.com/rkusa/pdfjs', {
  //     link: 'https://github.com/rkusa/pdfjs',
  //     underline: true,
  //     color: 0x569cd6,
  //   });

  doc.footer().pageNumber(
    function (curr, total) {
      return `${curr} / ${total}`;
    },
    { textAlign: 'center' }
  );

  // const cell = doc.cell({ paddingBottom: 0.5 * pdf.cm });
  // cell.text('Features:', { fontSize: 16, font: fonts.HelveticaBold });
  // cell
  //   .text({ fontSize: 14, lineHeight: 1.35 })
  //   .add('-')
  //   .add('different', { color: 0xf8dc3f })
  //   .add('font', { font: fonts.TimesRoman })
  //   .add('styling', { underline: true })
  //   .add('options', { fontSize: 9 });
  // cell.text('- Images (JPEGs, other PDFs)');
  // cell.text('- Tables (fixed layout, header row)');
  // cell.text('- AFM fonts and');
  // cell.text(
  //   '- OTF font embedding (as CID fonts, i.e., support for fonts with large character sets)',
  //   {
  //     font: fonts.TimesBold,
  //   }
  // );
  // cell.text('- Add existing PDFs (merge them or add them as page templates)');

  // doc
  //   .cell({ paddingBottom: 0.5 * pdf.cm })
  //   .text()
  //   .add('For more information visit the')
  //   .add('Documentation', {
  //     link: 'https://github.com/rkusa/pdfjs/tree/master/docs',
  //     underline: true,
  //     color: 0x569cd6,
  //   });

  const info = doc
    .table({ widths: ['*', 3 * pdf.cm, 6 * pdf.cm], paddingBottom: 1 * pdf.cm })
    .header({ alignment: 'center', lineHeight: 1.5 });

  info
    .cell({ alignment: 'center' })
    .text({ lineHeight: 1 })
    .add('Alex Wine', { font: fonts.TimesRoman, fontSize: 24 })
    .br()
    .add('Developer'.toUpperCase(), { fontSize: 12, lineHeight: 2 })
    .br()
    .add('Portfolio', {
      link: 'https://alex-wine-portfolio.netlify.app/',
      // underline: true,
      color: 0x569cd6,
    })
    .add(' | ')
    .add('LinkedIn', {
      link: 'https://www.linkedin.com/in/alexwine/',
      // underline: true,
      color: 0x569cd6,
    });

  info
    .cell({ font: fonts.HelveticaBold, fontSize: 10 })
    .text()
    .add('Phone'.toUpperCase())
    .br()
    .add('Email'.toUpperCase())
    .br()
    .add('Location'.toUpperCase());

  info
    .cell({ font: fonts.TimesRoman, fontSize: 10 })
    .text()
    .add('505.629.7298', {
      link: 'tel:505-629-7298',
    })
    .br()
    .add('alexwine36@gmail.com')
    .br()
    .add('Albuquerque, NM');

  if (data?.work) {
    createTable(doc, { name: 'Experience', rows: data.work });

    doc.pageBreak();
  }

  if (data?.education) {
    createTable(doc, { name: 'Education', rows: data.education });
  }

  const table = doc.table({
    widths: [5 * pdf.cm, null],
    // [1.5 * pdf.cm, 1.5 * pdf.cm, null, 2 * pdf.cm, 2.5 * pdf.cm],
    borderHorizontalWidths: function (i) {
      return i < 2 ? 1 : 0.1;
    },
    padding: 5,
  });

  const tr = table.header({ font: fonts.HelveticaBold });
  tr.cell('Skills');

  data?.skills.forEach((category) => {
    const row = table.row();
    row.cell().text({ fontSize: 10 }).add(category.category);
    const details = row.cell().text({ fontSize: 10 });
    //  skills = category.skills.join(', ');
    details.add(category.skills.join(', '));
    // .forEach((skill) => {
    //   details.add(skill);
    // });
  });

  // createTable(doc, data);

  // doc.
  return doc;
};

export const renderPDF = async (doc: pdf.Document) => {
  const buf = await doc.asBuffer();
  const blob = new Blob([buf], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
};
function createTable(
  doc: pdf.Document,
  data: {
    name: string;
    rows: {
      title: string;
      pretitle: string;
      subtitle: string;
      content: string[];
      rawContent: Root;
    }[];
  }
) {
  const { name, rows } = data;
  const table = doc.table({
    widths: [5 * pdf.cm, null],
    // [1.5 * pdf.cm, 1.5 * pdf.cm, null, 2 * pdf.cm, 2.5 * pdf.cm],
    borderHorizontalWidths: function (i) {
      return i < 2 ? 1 : 0.1;
    },
    padding: 5,
  });

  const tr = table.header({ font: fonts.HelveticaBold });
  tr.cell(name);
  tr.cell('');
  // tr.cell('Price', { textAlign: 'right' });
  function addRow(data: {
    subtitle: string;
    title: string;
    content: string[];
    rawContent: Root;
    pretitle: string;
  }) {
    const { subtitle, title, rawContent, pretitle } = data;
    const tr = table.row();
    const details = tr.cell().text({ fontSize: 10 });

    details
      .add(title, { font: fonts.HelveticaBold })
      .br()
      .add(subtitle)
      .br()
      .add(pretitle);

    const article = tr.cell().text({ fontSize: 10 });

    parseToDoc(rawContent, article);
    // article
    //   // .add(title, { font: fonts.HelveticaBold })
    //   // .br()
    //   .add(content.join('\n'), { fontSize: 10, textAlign: 'justify' });
    // tr.cell(pretitle, { textAlign: 'right' });
  }

  rows.forEach((row) => {
    addRow(row);
  });
}
