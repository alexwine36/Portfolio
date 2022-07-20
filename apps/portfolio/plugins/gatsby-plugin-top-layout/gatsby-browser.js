/* eslint-disable import/prefer-default-export */
import TopLayout from './TopLayout';

// export const onInitialClientRender = () => {
//   window.onload = () => {
//     // eslint-disable-next-line no-undef
//     mermaid.initialize({ startOnLoad: true, theme: "dark" })
//   }
// }

export const wrapRootElement = ({ element }) => {
  return <TopLayout>{element}</TopLayout>;
};
