import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import { HeroBanner } from "../../../../../libs/ui/src"
import { HeroBannerQuery } from "../../../graphql-types"

/* eslint-disable-next-line */
export interface HeroBannerImplementationProps {}

const StyledHeroBannerImplementation = styled.div`
  // color: pink;
`

const formatSrcSet = (d: string) => {
  const data = d.split("\n")
  return data
    .map(s => {
      const [url, size] = s.split(" ")

      return `url(${url}) ${size.replace(",", "")}`
    })
    .join(",\n")
  // console.log(data)
}

export function HeroBannerImplementation(props: HeroBannerImplementationProps) {
  const { mountains, background } = useStaticQuery<HeroBannerQuery>(graphql`
    query HeroBanner {
      mountains: file(name: { eq: "mountains" }) {
        childImageSharp {
          ...ImageSharpFragment
        }
      }
      background: file(name: { eq: "background" }) {
        childImageSharp {
          ...ImageSharpFragment
        }
      }
    }

    fragment ImageSharpFragment on ImageSharp {
      fixed(jpegProgressive: true, width: 1500) {
        src
        srcSet
        width
      }
    }
  `)

  console.log(mountains, background)

  const src = formatSrcSet(mountains.childImageSharp.fixed.srcSet)
  console.log(src)

  return (
    <StyledHeroBannerImplementation>
      <HeroBanner
        fg={{
          srcSet: formatSrcSet(mountains.childImageSharp.fixed.srcSet),
          src: mountains.childImageSharp.fixed.src,
        }}
        bg={{
          srcSet: formatSrcSet(background.childImageSharp.fixed.srcSet),
          src: background.childImageSharp.fixed.src,
        }}
      />
    </StyledHeroBannerImplementation>
  )
}

export default HeroBannerImplementation
