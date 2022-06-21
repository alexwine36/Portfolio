import { graphql, useStaticQuery } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

/* eslint-disable-next-line */
export interface QueryComponentProps {}

export function QueryComponent(props: QueryComponentProps) {
  const data = useStaticQuery(graphql`
    query MDXQuery {
      mdx {
        body
      }
    }
  `)
  return (
    <div>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  )
}

export default QueryComponent
