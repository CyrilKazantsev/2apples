import React from "react";
import "./styles.css";

export const Header = ({children}) => {
  return (
      <header className="header">
        <div className="header__wrapper container">
            {children}
        </div>
      </header>
  );
};
