import React from "react";
import { Routes, Route } from "react-router-dom";

// === Components === //
import { Home, USDi, ETHi, PageNotFound } from "./pages";
import { Layout } from "./components";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="usdi" element={<USDi />} />
        <Route path="ethi" element={<ETHi />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
