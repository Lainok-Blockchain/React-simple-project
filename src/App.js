import React from "react";
import Tweet from "./Tweet";
import { useState } from "react";

const App = () => {
  const [users, setUsers] = useState([
    { name: "Lainok Abilkconch", message: "Iam the one" },
    { name: "Alfed", message: "iam the previos one" },
    { name: "stanly Mathai", message: "iam the genisis one" }
  ]);
  console.log(`name is ${users.message}`);
  return (
    <div className="app">
      <button>incriment</button>
      <strong>Lainok Blockchain</strong>
      {users.map((user)=>(
        <Tweet name={user.name} message={user.message} />
        // <Tweet name={users.name} message={users.message} />
        // <Tweet name={users.name} message={users.message} />
      ))}
    </div>
  );
};

export default App;
