import { useEffect, useState } from "react";
import "./App.css";
import { data } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <>
      <h1>User Management System</h1>
      <p>{users.length}</p>
    </>
  );
}

export default App;
