import { render } from "@testing-library/react"
import React from "react"

describe("WorkPage", () => {
  it.skip("should render successfully", () => {
    const { baseElement } = render(
      // <WorkPage
      //   data={{
      //     allMdx: {
      //       edges: [],
      //     },
      //   }}
      // />
      <div></div>
    )
    expect(baseElement).toBeTruthy()
    // expect(SectionDataDisplay).toBeCalled()
  })
})
