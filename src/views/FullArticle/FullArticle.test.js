import React from "react";
import FullArticle from "./FullArticle";
import { render, screen } from "@testing-library/react";
import { renderWithThemeProvider } from "renderWithThemeProvider";

describe("render FullArticle component", () => {
  it("should render FullArticle", () => {
    const item = (
      <FullArticle
        img="https://83437-254797-raikfcquaxqncofqfm.stackpathdns.com/17166-large_default/obrazek-obrazki-18paz.jpg"
        id="5345453"
        title="Media: Iwona Duda złoży rezygnację z funkcji prezesa PKO BP"
        short="Lorem ipsum."
        category="gpw"
        content="Lorem ipsum. Lorem ipsum."
        date="2000-01-01"
        source="https://www.bankier.pl/wiadomosc/Iwona-Duda-zlozy-rezygnacje-z-funkcji-prezesa-PKO-BP-media-8387126.html"
      />
    );
    renderWithThemeProvider(item);
    console.log(item);
    expect(item.props.category).toBe("gpw");
    screen.debug();
  });
});
