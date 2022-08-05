const path = require('path');
const visit = require('unist-util-visit');
const puppeteer = require('puppeteer');

async function render(browser, definition, theme, viewport, mermaidOptions) {
  const page = await browser.newPage();
  page.setViewport(viewport);
  await page.goto(`file://${path.join(__dirname, 'render.html')}`);
  await page.addScriptTag({
    path: require.resolve('mermaid/dist/mermaid.min.js'),
  });
  const res = await page.$eval(
    '#container',
    (container, definition, theme, mermaidOptions) => {
      container.innerHTML = `<div class="mermaid">${definition}</div>`;
      // console.log('MERMER', mermaidOptions);
      try {
        window.mermaid.initialize({
          ...mermaidOptions,
          theme,
        });
        window.mermaid.init();
        return container.innerHTML;
      } catch (e) {
        return `${e}`;
      }
    },
    definition,
    theme,
    mermaidOptions
  );

  // await page.screenshot({
  //   // Screenshot the website using defined options

  //   path: `${path.join(
  //     __dirname,
  //     'shots',

  //     `screenshot-${Math.floor(Math.random() * 100)}.png`
  //   )}`, // Save the screenshot in current directory

  //   fullPage: true, // take a fullpage screenshot
  // });

  return res;
}


function mermaidNodes(markdownAST, language) {
  const result = [];
  visit(markdownAST, 'code', (node) => {
    if ((node.lang || '').toLowerCase() === language) {
      result.push(node);
    }
  });
  return result;
}

module.exports = async (
  { markdownAST },
  {
    language = 'mermaid',
    theme = 'default',
    viewport = { height: 200, width: 200 },
    mermaidOptions = {},
  }
) => {
  // Check if there is a match before launching anything
  let nodes = mermaidNodes(markdownAST, language);
  if (nodes.length === 0) {
    // No nodes to process
    return;
  }
  // console.log('OPTIONS', mermaidOptions);
  // Launch virtual browser
  let browser;
  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    await Promise.all(
      nodes.map(async (node) => {
        node.type = 'html';
        node.value = await render(browser, node.value, theme, viewport, {
          securityLevel: 'loose',
          ...mermaidOptions,
        });
      })
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
};
