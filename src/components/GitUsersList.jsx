import { useContext } from "react";
import { GitSearcherContext } from "./GitSearcherProvider";

export default function GitUsersList() {
  const { users, isLoading } = useContext(GitSearcherContext);
  return (
    <div className="users-grid">
      {isLoading ? <p>Loading...</p> : ""}
      {users.length === 0 ? (
        <p>No results</p>
      ) : (
        users.map((user) => {
          return (
            <div className="user-item" key={user.id}>
              <img src={user.avatar_url} alt={`${user.login}-avatar`} />
              <a href={user.url}>{user.login}</a>
            </div>
          );
        })
      )}
    </div>
  );
}
