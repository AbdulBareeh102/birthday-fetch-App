import { useState, useEffect } from "react";
import List from "./List";

const url = "https://api.github.com/users";
function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return (
    <main>
      <section className="container">
        <h3>{users.length} birthdays today</h3>
        <List users={users} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setUsers([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;
