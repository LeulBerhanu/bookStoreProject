import axios from "axios";
import React, { useState } from "react";

function CreateBook() {
  const [data, setData] = useState({});
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5555/books", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <h1>Create Book</h1>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">
          Title
          <input
            type="text"
            value={data.title}
            className="border"
            onChange={(e) =>
              setData((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </label>

        <label htmlFor="">
          Author
          <input
            type="text"
            value={data.author}
            className="border"
            onChange={(e) =>
              setData((prev) => ({ ...prev, author: e.target.value }))
            }
          />
        </label>

        <label htmlFor="">
          Publish Year
          <input
            type="number"
            value={data.publishYear}
            className="border"
            onChange={(e) =>
              setData((prev) => ({ ...prev, publishYear: e.target.value }))
            }
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreateBook;
