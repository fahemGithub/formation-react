import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })
  const submit = (e) => {
    e.preventDefault();
    console.log(formData);
  }
  const changeValue = (e) => {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev, [name]: value
    }))

  }

  return (
        <form onSubmit={submit}>
            <label>Name: </label>
            <input type='text' name='name' value={formData.name} onChange={changeValue}/>
            <br />
            <label>Password: </label>
            <input type='password' name='password' value={formData.password} onChange={changeValue}/>
            <button type='submit'>Submit</button>
        </form>
    );
}
