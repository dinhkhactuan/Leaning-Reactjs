import React, { useEffect, useState } from 'react'
import Header from '../components/Navbar/Header'
import UserList from '../components/containertrai/UserList'
import "../styles/Khanhdepzai.css";
import { enPoint } from '../const/Enpoint';
import axios from 'axios';
import UserModal from '../components/modal/UserModal';
export default function KhanhDeptrai() {
  const [users, setusers] = useState([]);
  const [user, setuser] = useState(null)
  const [isDelete, setisDelete] = useState(false);
  const [showFrom, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null); // add và update

  // useEffect(() => {
  //   fetch(enPoint())
  //     .then(res => res.json())
  //     .then(data => setusers(data))
  //     .catch((err) => {
  //       console.log("Lỗi ", err);
  //     })
  // }, [!isDelete])
  const getUsers = async () => {
    try {
      const res = await axios.get(enPoint());
      setusers(res.data);
      console.log(res.data);
    } catch (error) {

    }


  }
  const addUser = async (newUser) => {
    try {
      const res = await axios.post(enPoint(), newUser)
      console.log(res.data);
      await getUsers();
      setShowForm(false);
    } catch (error) {
      console.log(error);
    }
  }
  const updateUser = async (id, payload) => {
    try {
      const res = await axios.put(enPoint(id), payload);
      await getUsers();
      setShowForm(false);
      setEditingUser(null);
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    getUsers()

  }, [!isDelete])
  const deleteUser = async (id) => {
    try {
      await axios.delete(enPoint(id));
      setisDelete(!isDelete);
    } catch (error) {

    }
  }

  useEffect(() => {
    if (user?.id) {
      deleteUser(user.id);
    }

  }, [user?.id])
  const handleDelete = (user) => {
    setuser(user);
  }
  const handleUpdate = (user) => {
    setEditingUser(user);
    setShowForm(true)

  }

  const openAddForm = () => {
    setShowForm(true);
  }
  const CloseAddForm = () => {
    setShowForm(false);
  }

  return (
    <div className="container">
      <Header
        onAdd={openAddForm}
      />
      {showFrom && (
        <UserModal
          onClose={() => {
            setShowForm(false);
            setEditingUser(null);
          }}
          initialData={editingUser}

          onSubmit={(formData) => {
            if (editingUser?.id) {
              updateUser(editingUser.id, formData);
            } else {
              addUser(formData);
            }
          }}
        />
      )}

      <UserList
        users={users}
        onDelete={handleDelete}
        setUpdateUser={handleUpdate}

      />
    </div>
  )
}
