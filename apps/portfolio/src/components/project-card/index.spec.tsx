import { render } from "@testing-library/react"
import React from "react"

import ProjectCard from "./index"

describe("ProjectCard", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ProjectCard
        node={{
          excerpt: "Sample excerpt data",
        }}
      />
    )
    expect(baseElement).toBeTruthy()
  })
})
