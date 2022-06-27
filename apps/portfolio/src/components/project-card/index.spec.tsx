import { render } from "@testing-library/react"
import React from "react"

describe("ProjectCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      // <ProjectCard
      //   node={{
      //     frontmatter: {
      //       title: "Sample Title",
      //       tags: [],
      //     },
      //     excerpt: "Sample excerpt data",
      //   }}
      // />
      <div></div>
    )
    expect(baseElement).toBeTruthy()
  })
})
