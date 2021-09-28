import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ background: theme.bg, color: theme.syntax }}
    >
      <ul>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          The ways of kings
        </li>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          The name of wind
        </li>
        <li style={{ background: theme.ui, color: theme.syntax }}>
          The final empire
        </li>
      </ul>
    </div>
  );
};

export default BookList;
