import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [data, setData] = useState([]);

  // fetch data
  const fetchData = async () => {
    await axios.get("http://localhost:3000/api/users").then((res) => {
      setData(res.data.user);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);

  // create post
  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3000/api/users", {
        name,
        description,
        url,
      })
      .then(() => {
        fetchData();
        setUrl("");
        setName("");
        setDescription("");
      });
  };

  //delete post
  const deletePost = (id) => {
    axios.delete("http://localhost:3000/api/users/"+id)
    .then(()=> fetchData());
  }

  return (
    <>
      <form className="form-create" onSubmit={formSubmit}>
        <input
          type="text"
          placeholder="Enter profile url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Create</button>
      </form>
      <div className="users">
        {data.map((users) => {
          return (
            <div className="user">
              <img src={users.url} />
              <h3>{users.name}</h3>
              <p>{users.description}</p>
              <button onClick={()=>deletePost(users._id)}>Delete</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
