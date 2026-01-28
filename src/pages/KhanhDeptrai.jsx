import React, { useEffect, useState } from 'react'
import Header from '../components/Navbar/Header'
import UserList from '../components/containertrai/UserList'
import "../styles/Khanhdepzai.css";
import { enPoint } from '../const/Enpoint';

export default function KhanhDeptrai() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState(null)
  const [isDelete, setisDelete] = useState(false);
  useEffect(() => {
    fetch(enPoint())
      .then(res => res.json())
      .then(data => setusers(data))
      .catch((err) => {
        console.log("Lỗi ", err);
      })
  }, [!isDelete])
  useEffect(() => {
    if (user?.id) {
      fetch(enPoint(user.id), { method: "DELETE" })
        .then(res => res.json())
        .then((data) => {
          setisDelete((!isDelete));
        })
    }

  }, [user?.id])
  const handleDelete = (user) => {
    setuser(user);
  }
  const handleUpdate = () => {
    console.log("Update user");
  }


  return (
    <div className="container">
      <Header />
      <UserList
        users={users}
        onDelete={handleDelete}
        setUpdateUser={handleUpdate}

      />
    </div>
  )
}
