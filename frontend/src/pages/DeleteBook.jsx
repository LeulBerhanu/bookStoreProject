import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

function DeleteBook() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { id } = useParams();

  // useEffect(() => {

  // }, [])

  const handleDelete = async () => {
    setLoading(true);
    try {
      axios.delete(`http://localhost:5555/books/${id}`).then((res) => {
        console.log(res);
        setLoading(false);
        navigate("..");
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid place-content-center">
      {loading ? <Spinner /> : null}
      <button className="bg-slate-100 p-10" onClick={handleDelete}>
        <h1>Delete Book?</h1>
      </button>
    </div>
  );
}

export default DeleteBook;
