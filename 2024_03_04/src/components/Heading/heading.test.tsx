import {render, unmountComponentAtNode} from "react-dom";
import Heading from "./index.tsx";

let container: HTMLDivElement | null = null

describe('Heading', () => {
  beforeEach(() => {
    container = document.createElement("div")
    document.body.appendChild(container)
  })

  afterEach(() => {
    if (container) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  })

  it('should render sample heading', () => {
    // Arrange
    const title = 'Sample Heading'
    const level = 2
    // Act
    render(<Heading title={title} level={level} />, container)
    // Assert
    expect(container!.textContent).toBe(title)
  })
})