import { render } from "@testing-library/react"

import SectionDataDisplay from "./section-data-display"

describe("SectionDataDisplay", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SectionDataDisplay />)
    expect(baseElement).toBeTruthy()
  })
})
