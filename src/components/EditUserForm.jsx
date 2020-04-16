import React from 'react'
import { useForm } from 'react-hook-form'


const EditUserForm = (props) => {


    const { register, errors, handleSubmit, setValue } = useForm({
        defaultValues: props.currentUser
    });

    setValue('name', props.currentUser.name);
    setValue('username', props.currentUser.username)
    setValue('age', props.currentUser.age)


    const onSubmit = (data, e) => {
        console.log(data);
        data.id = props.currentUser.id

        props.updateUser(props.currentUser.id, data)

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
                    <label className="col-form-label">Username: </label>
                    <input type="text" className="form-control" name="username" ref={
                        register({
                            required: { value: true, message: 'Field is required' }
                        })
                    } />
                </div>
                <div className="form-group">
                    <label className="col-form-label">Age: </label>
                    <input type="number" className="form-control" name="age" ref={
                        register({
                            required: { value: true, message: 'Field is required' }
                        })
                    } />
                </div>
                <div>
                    {errors?.username?.message}
                </div>
                <button type="submit" className=" btn btn-success mt-2">Edit User</button>
            </form>
        </div>
    );
}

export default EditUserForm;