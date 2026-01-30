import { upload } from "@testing-library/user-event/dist/upload";

export default function UserCard({ user, Delete, UpdateUser }) {
    return (
        <div className="card">
            <img
                src={`${user.avatar}`}
                alt=""
            />

            <h3>{user.name}</h3>
            <p>{user.email}</p>

            <div className="actions">
                <button className="btn-success"
                    onClick={() => UpdateUser(user)}
                >
                    <span>
                        <i className="fa-solid fa-pen"></i>
                    </span>{" "}
                    Update
                </button>

                <button className="btn-danger"
                    onClick={() => Delete(user)}
                >
                    <span>
                        <i className="fa-solid fa-trash-can"></i>
                    </span>{" "}
                    Delete
                </button>
            </div>
        </div>
    );
}
