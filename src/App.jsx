import { useEffect, useState } from "react";
import InforUser from "./components/InforUser";
import { enPoint } from "./const/Enpoint";

const App = () => {
  const [dataUser, setDataUser] = useState([]);
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState("");
  const [user, setUser] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    fetch(enPoint())
      .then((res) => res.json())
      .then((data) => setDataUser(data))
      .catch((err) => {
        console.log(err);
      });
  }, [isDelete]);

  useEffect(() => {
    if (user?.id) {
      fetch(enPoint(user?.id), { method: "delete" })
        .then((data) => data.json())
        .then((data) => {setIsDelete(!isDelete)});
    }
  }, [user?.id]);

  const handleSubmit = () => {};

  const handleDelete = (user) => {
    setUser(user);
  };

  const handleEdit = (user) => {};

  return (
    <div className="container">
      <h2>User Manager</h2>

      <div className="form">
        <input
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Avatar URL"
          value={avatar}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <button className="btn submit" onClick={handleSubmit}>
          {"Thêm user"}
        </button>
      </div>

      <div className="list">
        {dataUser.map((user) => (
          <InforUser
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onEdit={handleEdit}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
