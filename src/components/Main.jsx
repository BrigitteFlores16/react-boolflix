import React from "react";
import ProductionList from "./ProductionList";

export default function Main({ movies }) {
  return (
    <main className="container mt-4 ">
      <ProductionList movies={movies} />
    </main>
  );
}
