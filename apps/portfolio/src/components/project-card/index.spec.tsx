import { render } from "@testing-library/react"
import React from "react"

import ProjectCard from "./index"

describe("ProjectCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ProjectCard
        node={{
          frontmatter: {
            title: "Sample Title",
            tags: [],
          },
          excerpt: "Sample excerpt data",
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
