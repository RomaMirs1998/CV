import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App, { Nav, Footer } from "./App.jsx";   // <- Nav/Footer werden gleich exportiert
import Team from "./Team.jsx";                  // <- neue Seite
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      {/* Layout: Nav + Footer auf beiden Seiten */}
      <Route
        path="/"
        element={
          <>
            <App />
          </>
        }
      />
      <Route
        path="/team"
        element={
          <>
            <Nav />
            <Team />
            <Footer />
          </>
        }
      />
    </Routes>
  </BrowserRouter>
);
