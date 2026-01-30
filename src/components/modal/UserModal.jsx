import { useEffect, useState } from "react";

export default function UserModal({ onClose, onSubmit, initialData }) {

    const [formData, setformData] = useState({
        name: "",
        email: "",
        avatar: ""
    })
    useEffect(() => {
        if (initialData) {
            setformData({
                name: initialData.name,
                email: initialData.email,
                avatar: initialData.avatar
            })
        } else {
            setformData({
                name: "",
                email: "",
                avatar: ""
            })

        }
    }, [initialData])

    const handleSumbit = () => {
        if (!formData.name.trim() || !formData.email.trim() || !formData.avatar.trim()) {
            alert("không được để trống");
            return;
        }
        const newUser = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            avatar: formData.avatar.trim()
        }
        console.log(newUser);
        onSubmit(newUser);
        onClose();

    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h3> {initialData ? "Edit User" : "Add User"}</h3>

                <input placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setformData({ ...formData, name: e.target.value })}

                />
                <input placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setformData({ ...formData, email: e.target.value })}

                />
                <input placeholder="Avatar URL"
                    value={formData.avatar}
                    onChange={(e) => setformData({ ...formData, avatar: e.target.value })}

                />

                <div className="modal-actions">
                    <button className="btn-success
                    
                    "
                        onClick={handleSumbit}>
                        {initialData ? "Update" : "Add"}
                    </button>

                    <button className="btn-danger" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
