import { fireEvent, getByPlaceholderText, getByText, render, screen } from "@testing-library/react"
import App from "../App"
import userEvent from "@testing-library/user-event";
import React from 'react'
import SavedTimes from '../SavedTimes';
import Timer from '../Timer'

test("list for saved times is empty", () => {
  render(<App />);

  //jos näytöltä löytyy ilmoitus tyhjästä listasta, ok
  const list = screen.getByText(/List empty/i);
  expect(list).toBeInTheDocument;
}) 

test("values are saved to list", () => {
  render(<App />);

  //painetaan start-painiketta
  const startButton = screen.getByText("Start");
  fireEvent.click(startButton);

  //etsitään input
  const input = screen.getByPlaceholderText("title");
  expect(input).toBeInTheDocument();

  //haetaan save-button
  const saveButton = screen.getByText("Save");
  expect(saveButton).toBeInTheDocument();

  //kirjoitetaan nimi kenttään ja painetaan savea
  userEvent.type(input, "Jeppe");
  fireEvent.click(saveButton);

  //haetaan oikea nimi
  const item = screen.getByText(/jeppe/i);
  expect(item).toBeInTheDocument();

  //jos tunniste löytyy näytöltä, ok

});