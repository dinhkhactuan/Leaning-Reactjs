const InforUser = ({ user, onDelete, onEdit, setUser }) => {
  
  return (
    <div className="user-card">
      <img className="avatar" src={user.avatar} alt={user.username} />

      <div className="user-info">
        <h4>{user.username}</h4>
        <span>ID: {user.id}</span>
      </div>

      <div className="actions">
        <button className="btn edit" onClick={() => onEdit(user)}>
          ✏️
        </button>
        <button className="btn delete" onClick={() => onDelete(user)}>
          🗑️
        </button>
      </div>
    </div>
  );
};

export default InforUser;
