import React from "react";
import { GlobalContextProvider } from "../contexts/GlobalContext";
import Header from "./Header";

export default function DefaultLayout({ children }) {
  return (
    <GlobalContextProvider>
      <Header />
      <main className="container mt-4">{children}</main>
    </GlobalContextProvider>
  );
}
