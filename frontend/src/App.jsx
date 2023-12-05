import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateBook from "./pages/CreateBook";
import ShowBook from "./pages/ShowBook";
import EditBook from "./pages/EditBook";
import DeleteBook from "./pages/DeleteBook";
import Books from "./pages/Books";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/books">
        <Route index element={<Home />} />
        <Route path="create" element={<CreateBook />} />
        <Route path="details/:id" element={<ShowBook />} />
        <Route path="edit/:id" element={<EditBook />} />
        <Route path="delete/:id" element={<DeleteBook />} />
      </Route>
    </Routes>
  );
}

export default App;
