import React from 'react'

const UserTable = (props) => {

    return (
        <div className="container mt-3">
            <table className="table table-hover">
                <thead className="text-info ">
                    <tr className="table-info">
                        <th>Name</th>
                        <th>Username</th>
                        <th>Age</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.users.length > 0 ?
                            props.users.map(user => (
                                <tr className="table-light" key={user.id}>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.age}</td>
                                    <td>
                                        <button
                                            type="button"
                                            className="btn btn-success d-inline mx-2"
                                            onClick={() => { props.editRow(user) }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-danger d-inline"
                                            onClick={() => { props.deleteUser(user.id) }}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={3}>No users</td>
                                </tr>
                            )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UserTable;