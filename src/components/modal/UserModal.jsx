import { useState } from "react";

export default function UserModal({ onClose, onSubmit }) {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [avatar, setavatar] = useState("");
    const handleAdd = () => {
        if (!name.trim() || !email.trim() || !avatar.trim()) {
            alert("không được để trống ");
            return;
        }
        const newUser = {
            name: name.trim(),
            email: email.trim(),
            avatar: avatar.trim()
        }
        console.log(newUser);
        onSubmit(newUser);
        onClose();

    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3>Add User</h3>

                <input placeholder="Name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}

                />
                <input placeholder="Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}

                />
                <input placeholder="Avatar URL"
                    value={avatar}
                    onChange={(e) => setavatar(e.target.value)}

                />

                <div className="modal-actions">
                    <button className="btn-success
                    
                    "
                        onClick={handleAdd}>
                        Add
                    </button>

                    <button className="btn-danger" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
