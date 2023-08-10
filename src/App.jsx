//可用箭頭函式或是function
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Week1 from "./components/week1/Week1";
import Week2 from "./components/week2/Week2";
import Week3 from "./components/week3/Week3";
import Week4 from "./components/week4/Week4";

function App() {
  return (
    <div>
      <Header />
      <Week1 />
      <hr />
      <Week2 />
      <hr />
      <Week3 />
      <hr />
      <Week4 />
    </div>
  );
}

export default App;
