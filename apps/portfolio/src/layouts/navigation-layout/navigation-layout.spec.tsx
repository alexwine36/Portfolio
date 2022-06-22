import { render } from "@testing-library/react"

import NavigationLayout from "./navigation-layout"

describe("NavigationLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<NavigationLayout />)
    expect(baseElement).toBeTruthy()
  })
})
