import { render } from "@testing-library/react"

import QueryComponent from "./query-component"

describe("QueryComponent", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<QueryComponent />)
    expect(baseElement).toBeTruthy()
  })
})
