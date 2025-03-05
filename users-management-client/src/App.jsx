import { use, useEffect, useState } from "react";
import "./App.css";
import { data } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUsers = [...users, data];
        setUsers(newUsers);
        form.reset();
      });
  };

  return (
    <>
      <h1 className="text-center text-2xl  bg-gray-900 ">
        User Management System
      </h1>
      {/* Form Design Start */}
      <div className="min-h-screen flex justify-center items-center bg-gray-900">
        <div className="w-full max-w-sm p-6 bg-gray-800 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Add User
          </h2>
          <form onSubmit={handleAddUser}>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="input input-bordered w-full mt-2 bg-gray-700 text-white placeholder-gray-400"
                placeholder="Enter your name"
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-300"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                className="input input-bordered w-full mt-2 bg-gray-700 text-white placeholder-gray-400"
                placeholder="Enter your email"
              />
            </div>

            <div className="mt-6">
              <button type="submit" className="btn btn-primary w-full">
                Add User
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* Form Design End */}

      <div>
        {users.map((user) => (
          <li key={user.id}> {user.name} </li>
        ))}
      </div>
    </>
  );
}

export default App;
