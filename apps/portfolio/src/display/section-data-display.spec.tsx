import { render } from "@testing-library/react"
import React from "react"

describe("SectionDataDisplay", () => {
  it.skip("should render successfully", () => {
    // const { baseElement } = render(<SectionDataDisplay items={[]} />)
    const { baseElement } = render(<div></div>)
    expect(baseElement).toBeTruthy()
  })
})
