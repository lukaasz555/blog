import React from "react";
/* import { render } from "@testing-library/react"; */
import { ThemeProvider } from "styled-components";
import { theme } from "assets/theme";

export const renderWithThemeProvider = (children) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
