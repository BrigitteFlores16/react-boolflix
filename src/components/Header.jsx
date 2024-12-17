import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ onSearch }) {
  return (
    <header className="bg-dark text-light p-3">
      <div className="container d-flex justify-content-between align-items-center text-danger">
        <h1>BOOLFLIX</h1>
        <SearchBar handleSearch={onSearch} />
      </div>
    </header>
  );
}
