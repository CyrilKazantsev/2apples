import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Logo } from "./components/Logo";
import { Schedule } from "./components/Schedule/Schedule";
import jsonData from "./data.json";

export const App = () => {
  const [cards, setCards] = useState(jsonData);
  console.log(cards.map((e) => console.log(e.days)));

  return (
    <>
      <Header>
        <Logo />
      </Header>
      <main className="content container">
        <Schedule data={cards} />
      </main>
      <Footer />
    </>
  );
};
