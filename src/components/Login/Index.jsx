import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Index(props) {
  const [form, setForm] = useState();
  useEffect(() => {
    window.MemberStack.reload();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('CLICK');
  };
  return (
    <div>
      <h1> LOGIN PAGE</h1>
      <form data-ms-form='login'>
        <label htmlFor='username'>
          <b>Username</b>
        </label>
        <input
          data-ms-member='email'
          type='text'
          placeholder='Enter Username'
          name='username'
          required
          onChange={handleChange}
        />
        <label htmlFor='password'>
          <b>Password</b>
        </label>
        <input
          data-ms-member='password'
          type='password'
          placeholder='Enter Password'
          name='password'
          required
          onChange={handleChange}
        />
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </form>
      <Link to='/signup'>Sign up</Link>
    </div>
  );
}
