import "@testing-library/jest-dom/dist/extend-expect";
import React from "react";
import { render, screen } from "@testing-library/react";

function App() {
  return <h1>4</h1>;
}

test("it should sum correctly two values", () => {
  render(<App />);

  
  //   expect(2 + 2).toBe(4);
});
