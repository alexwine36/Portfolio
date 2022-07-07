import pdf from 'pdfjs';

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
const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cum id fugiunt, re eadem quae Peripatetici, verba. Tenesne igitur, inquam, Hieronymus Rhodius quid dicat esse summum bonum, quo putet omnia referri oportere? Quia nec honesto quic quam honestius nec turpi turpius.';

export const generatePdfResume = (data?: {
  work: {
    title: string;
    pretitle: string;
    subtitle: string;
    content: string[];
  }[];
}) => {
  const doc = new pdf.Document({ font: require('pdfjs/font/Helvetica') });

  const header = doc
    .header()
    .table({ widths: [null], paddingBottom: 1 * pdf.cm })
    .row();
  // header.cell().image(logo, { height: 2*pdf.cm })
  header
    .cell()
    .text({ textAlign: 'right' })
    .add(
      'A Portable Document Format (PDF) generation library targeting both the server- and client-side.'
    )
    .add('https://github.com/rkusa/pdfjs', {
      link: 'https://github.com/rkusa/pdfjs',
      underline: true,
      color: 0x569cd6,
    });

  doc.footer().pageNumber(
    function (curr, total) {
      return curr + ' / ' + total;
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

  doc
    .cell({ paddingBottom: 0.5 * pdf.cm })
    .text()
    .add('For more information visit the')
    .add('Documentation', {
      link: 'https://github.com/rkusa/pdfjs/tree/master/docs',
      underline: true,
      color: 0x569cd6,
    });

  const table = doc.table({
    widths: [5 * pdf.cm, null],
    // [1.5 * pdf.cm, 1.5 * pdf.cm, null, 2 * pdf.cm, 2.5 * pdf.cm],
    borderHorizontalWidths: function (i) {
      return i < 2 ? 1 : 0.1;
    },
    padding: 5,
  });

  const tr = table.header({ font: fonts.HelveticaBold });
  tr.cell('Experience');
  tr.cell('');
  // tr.cell('Price', { textAlign: 'right' });

  function addRow(qty: string, name: string, desc: string[], price: string) {
    const tr = table.row();
    const details = tr.cell().text({ fontSize: 10 });

    details
      .add(name, { font: fonts.HelveticaBold })
      .br()
      .add(qty)
      .br()
      .add(price);

    const article = tr.cell().text({ fontSize: 10 });
    article
      // .add(name, { font: fonts.HelveticaBold })
      // .br()
      .add(desc.join('\n'), { fontSize: 10, textAlign: 'justify' });

    // tr.cell(price, { textAlign: 'right' });
  }

  // addRow("2", 'Article A', lorem, "500");
  // addRow("1", 'Article B', lorem, "250");
  // addRow("2", 'Article C', lorem, "330");
  // addRow("3", 'Article D', lorem, "1220");
  // addRow("2", 'Article E', lorem, "120");
  // addRow("5", 'Article F', lorem, "50");

  data.work.forEach((work) => {
    const { title, subtitle, pretitle, content } = work;

    addRow(subtitle, title, content, pretitle);
  });

  // doc.
  return doc;
};

export const renderPDF = async (doc: pdf.Document) => {
  const buf = await doc.asBuffer();
  const blob = new Blob([buf], { type: 'application/pdf' });
  return URL.createObjectURL(blob);
};
