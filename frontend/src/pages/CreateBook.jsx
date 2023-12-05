import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

function CreateBook() {
  const navigate = useNavigate();

  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("http://localhost:5555/books", data)
      .then((res) => {
        setLoading(false);
        console.log(res);
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
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Title</label>
            <input
              type="text"
              value={data.title}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Author</label>
            <input
              type="text"
              value={data.author}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, author: e.target.value }))
              }
            />
          </div>

          <div className="my-4">
            <label className="text-xl mr-4 text-gray-500">Publish Year</label>
            <input
              type="number"
              value={data.publishYear}
              className="border-2 border-gray-500 px-4 py-2 w-full"
              onChange={(e) =>
                setData((prev) => ({ ...prev, publishYear: e.target.value }))
              }
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

export default CreateBook;
