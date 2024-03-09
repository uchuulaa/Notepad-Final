import React from "react";
import { createRoot } from "react-dom/client";
import App from "../src/components/App";
//ReactDOM.render(<h1>Hello</h1>, document.getElementById("root"));
//Note keeper part 3
//1 Implement the add note functio
//create constant that keeps track of the title and content
//pass the new note back to App
//Add new note to array
//take array and render separate note components
//2 Implement the delete note functionality
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
