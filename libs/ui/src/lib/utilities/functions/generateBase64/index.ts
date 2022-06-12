import { Base64 } from 'js-base64';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export const generateBase64 = (element: React.ReactElement<any, any>) => {
  const raw = ReactDOMServer.renderToString(element);
  const res = Base64.encodeURI(raw);

  return `data:image/svg+xml;base64,${res}`;
};

export const generateBackgroundUri = (
  element: React.ReactElement<any, any>
) => {
  const uri = generateBase64(element);
  return `url(${uri})`;
};
