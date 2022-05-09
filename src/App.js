import react from "react";
import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Col, Row } from "react-bootstrap";
import Header from "./components/header";
import Products from "./components/products";

function App() {
  const [name, Sname] = useState("test");
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}

export default App;
