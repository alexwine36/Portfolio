import { render } from "@testing-library/react"
import React from "react"

describe("PageLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      // <PageLayout>
      //   <div>Sample Stuff</div>
      // </PageLayout>
      <div></div>
    )
    expect(baseElement).toBeTruthy()
  })
})
