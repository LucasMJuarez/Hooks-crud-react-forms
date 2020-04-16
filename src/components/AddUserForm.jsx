import React from 'react'
import { useForm } from 'react-hook-form'


const AddUserForm = (props) => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        //Lo mandamos a la table luego de capturar los datos por form
        props.addUser(data)
        e.target.reset();
    }

    return (
        <div className="container mt-3">
            <form onSubmit={handleSubmit(onSubmit)} >

                <div className="form-group">
                    <label className="col-form-label">Name: </label>
                    <input type="text" className="form-control" autoFocus name="name" ref={
                        register({
                            required: { value: true, message: 'Field is required' }
                        })
                    } />
                </div>
                <div>
                    {errors?.name?.message}
                </div>
                <div className="form-group">
                    <label className=" col-form-label">Username: </label>
                    <input type="text" className="form-control" name="username" ref={
                        register({
                            required: { value: true, message: 'Field is required' }
                        })
                    } />
                </div>
                <div className="form-group">
                    <label className=" col-form-label">Age: </label>
                    <input type="number" className="form-control" name="age" ref={
                        register({
                            required: { value: true, message: 'Field is required' }
                        })
                    } />
                </div>
                <div>
                    {errors?.username?.message}
                </div>
                <button type="submit" className=" btn btn-primary mt-2">Add new user</button>
            </form>
        </div >
    );
}

export default AddUserForm;