import React from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Shop } from "./components/shop";

function App() {
  return (
    <div className="page-wrapper">
    <div className="content-wrapper">
        < Header />
        <Shop/>
    </div>
      < Footer />
    </div>
  );
}

export default App;
