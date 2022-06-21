import { render } from "@testing-library/react"
import React from "react"
import WorkPage from "."
const props: any = {}
describe("WorkPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<WorkPage {...props} />)
    expect(baseElement).toBeTruthy()
  })
})
