import React, { useState, Fragment } from 'react';
import { v4 as uuid4 } from 'uuid'
import AddUserForm from './components/AddUserForm';
import UserTable from './components/UserTable';
import EditUserForm from './components/EditUserForm';
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer'



const App = () => {

  const usersData = [
    { id: uuid4(), name: 'Tania', username: 'floppydiskette', age: 25 },
    { id: uuid4(), name: 'Craig', username: 'siliconeidolon', age: 32 },
    { id: uuid4(), name: 'Ben', username: 'benisphere', age: 34 },
  ]

  const [users, setUsers] = useState(usersData)

  //Agregar User

  const addUser = (user) => {
    user.id = uuid4()
    setUsers([
      ...users,
      user
    ])
  }


  //Eliminar Users

  const deleteUser = (id) => {
    const arrayFiltrado = users.filter(user => user.id !== id)
    setUsers(arrayFiltrado)
  }


  //Editar Users

  const [editing, setEditing] = useState(false)

  const [currentUser, setCurrentUser] = useState({
    id: null,
    name: '',
    username: '',
    age: null
  });

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({
      id: user.id,
      name: user.name,
      username: user.username,
      age: user.age
    })
  }


  const updateUser = (id, updateUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updateUser : user)))
  }




  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row flex-row">
          <div className="flex-large col-md my-3">
            {
              editing ? (
                <div>
                  <h2 className="text" > Edit user</h2>
                  <hr className="my-2" />
                  <EditUserForm
                    currentUser={currentUser}
                    updateUser={updateUser}
                  />
                </div>
              ) : (
                  <div>
                    <h2 className="text" >Add user</h2>
                    <hr className="my-2" />
                    <AddUserForm addUser={addUser} />
                  </div>
                )
            }

          </div>

          <div className="flex-large col-md my-3">
            <h2 className="text" >View User</h2>
            <hr className="my-2" />

            <UserTable
              users={users}
              deleteUser={deleteUser}
              editRow={editRow}
            />
          </div>
        </div>

      </div>
      <Footer />
    </Fragment >
  );
}

export default App;
