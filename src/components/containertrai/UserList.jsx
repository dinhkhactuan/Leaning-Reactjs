import UserCard from "../FeaturesTable/UserCard";

export default function UserList({ users, onDelete, setUpdateUser }) {



  return (
    <div className="listview">
      <div className="user-grid">
        {users.map((user) => {
          return <UserCard key={user.id}
            user={user}
            Delete={onDelete}
            UpdateUser={setUpdateUser}
          />

        })}
      </div>
    </div>
  );
}
