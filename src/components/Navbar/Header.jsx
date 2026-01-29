import React from 'react'

export default function Header({ onAdd }) {
    return (
        <div className="header">
            <h1>CRUD User</h1>
            <button className="btn-primary"
                onClick={onAdd}

            >Add User</button>
        </div>
    )
}
