import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"
import Timer from "../Timer"

test("stopwatch starts", () => {
  render(<Timer />);

  //haetaan aika
  const time = screen.getByText("00:00.00");
  expect(time).toBeInTheDocument();

  //haetaan start-painike
  const startButton = screen.getByText(/start/i)
  fireEvent.click(startButton);

  //jos aika ei ole enää 0, sekuntikello on käynnistynyt
  expect(time).not.toBe("00:00.00");
})