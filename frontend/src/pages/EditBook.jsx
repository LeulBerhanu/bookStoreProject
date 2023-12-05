import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function EditBook() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [data, setData] = useState({ title: "", author: "", publishYear: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    axios
      .put(`http://localhost:5555/books/${id}`, data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        navigate("/");
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  };

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              name="title"
              value={data?.title}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={handleChange}
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              name="author"
              value={data?.author}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={handleChange}
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              name="publishYear"
              value={data?.publishYear}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="p-2 bg-sky-300 m-8">
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditBook;
