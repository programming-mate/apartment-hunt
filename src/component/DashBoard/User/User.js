import React from 'react';
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


const Input = ({ label, register, required }) => (
    <>
      <label>{label}</label>
      <input name={label} ref={register({ required })} />
    </>
  );
  
  // you can use React.forwardRef to pass the ref too
const Select = React.forwardRef(({ label }, ref) => (
    <>
      <label>{label}</label>
      <select name={label} ref={ref}>
        <option value="Pending" className="text-primary" style={{color:'red'}}>Pending</option>
        <option value="Done" className="text-warning">Done</option>
        <option value="On Going" className="text-danger">On Going</option>
              
      </select>
    </>
  ));


const User = (props) => {
    const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
    const { name, email, phone, message, status } = props.user;
    const handleChange = (e) => {
        const status = e.target.value
        console.log(status)
    }
    console.log('user')
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{message}</td>
                <td>
                    <form onSubmit={handleSubmit(onSubmit)}  onChange={handleChange} >
                    <Select  ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    </form>
                </td>
            </tr>
        </>
    );
};

export default User;