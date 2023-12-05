import React from "react";
import { Link } from "react-router-dom";

function Books() {
  return (
    <div className="min-h-screen grid place-content-center">
      <Link to="/books" className="p-10 text-2xl border hover:bg-slate-50">
        To books
      </Link>
    </div>
  );
}

export default Books;
