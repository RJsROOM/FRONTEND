import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const oldUsers = [...allUsers];
    oldUsers.push({ userName, userRole, imageUrl, userDesc });
    setAllUsers(oldUsers);

    setUserName("");
    setUserRole("");
    setImageUrl("");
    setUserDesc("");
  };

  const deleteHandler = (idx)=>{
    const copyUsers=[...allUsers];
    copyUsers.splice(idx,1);
    setAllUsers(copyUsers);
  }

  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [userDesc, setUserDesc] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  return (
    <div className="h-screen bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="p-2  flex flex-wrap"
      >
        <input
          required
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter your name"
        />

        <input
          required
          value={imageUrl}
          onChange={(e) => {
            setImageUrl(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Image url"
        />

        <input
          required
          value={userRole}
          onChange={(e) => {
            setUserRole(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter role"
        />

        <input
          required
          value={userDesc}
          onChange={(e) => {
            setUserDesc(e.target.value);
          }}
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]"
          type="text"
          placeholder="Enter Description"
        />

        <button className="px-5 py-2 cursor-pointer active:scale-98 text-xl font-semibold bg-emerald-600 rounded m-2 w-[92%]">
          Create user
        </button>
      </form>
      <div className="px-4 py-10 gap-4 flex flex-wrap">
        {allUsers.map((elem, idx) => {
          return (
            <Card
              idx={idx}
              elem={elem}
              deleteHandler={deleteHandler}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
