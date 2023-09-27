import React from "react";

const List = ({ users }) => {
  return (
    <section>
      <ul className="users">
        {users.map((person) => {
          const { login, avatar_url, html_url } = users;
          return (
            <li key={person.id}>
              <img src={person.avatar_url} alt={login} />
              <div>
                <h4>{person.login}</h4>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
export default List;
