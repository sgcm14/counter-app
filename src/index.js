import React from "react";

//import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

// import PrimeraApp from "./PrimeraApp";
import './index.css';
import CounterApp from "./CounterApp";

const divRoot = document.querySelector("#root");

// ReactDOM.render(saludo, divRoot);
const root = createRoot(divRoot);
// root.render(<PrimeraApp saludo="Hola, Soy Goku"/>);
root.render(<CounterApp value={5}/>);
