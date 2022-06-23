import { render } from "@testing-library/react"
import React from "react"
import { pages } from "../../utilities/pages"
import ParallaxSectionDisplay from "./index"

describe("ParallaxSectionDisplay", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <ParallaxSectionDisplay page={pages["work"]}>
        <div>Sample</div>
      </ParallaxSectionDisplay>
    )
    expect(baseElement).toBeTruthy()
  })
})
