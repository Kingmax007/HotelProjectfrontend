import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";
import { React, useState, useEffect } from 'react';
import axios from 'axios';

export function CreateUserForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');



      const createUser = () => {
          // event.preventDefault();
          axios.post('/api/v1/users', {
              username,
              password,
              email,
              firstName,
              lastName
          })
              .then(function (response) {
                  console.log(response);
                  // perform any desired action for successful response
              })
              .catch(function (error) {
                  console.log(error);
                  // perform any desired action for error
              });
      }


      return (
    <>
      <Hero hero="loginHero">
      <Card style={{ width: "50rem", marginTop: "-15rem" }} className='card'>
        <Card.Body>
          <Card.Title className='cardTitle'>
            <h3> Welcome to the Luxury </h3>
            </Card.Title>
          <form className='form-control-login'>
            <input
              type='text'
              name='username'
              value={username}
              onChange={(event) =>setUsername(event.target.value)}
              placeholder='Username'
              required
              className='form-control-login'
            />
            <input
              type='password'
              name='password'
              value={password}
              onChange={(event) =>setPassword(event.target.value)}
              placeholder='Password'
              required
              className='form-control-login'
            />
            <input
              type='email'
              name='email'
              value={email}
              onChange={(event) =>setEmail(event.target.value)}
              placeholder='Email'
              required
              className='form-control-login'
            />
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(event) =>setFirstName(event.target.value)}
              placeholder='First Name'
              required
              className='form-control-login'
            />
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(event) =>setLastName(event.target.value)}
              placeholder='Last Name'
              required
              className='form-control-login'
            />
            <button type='submit' className='btn-primary btn' onClick={createUser}>
              Create User
            </button>
          </form>
        </Card.Body>
      </Card>

        {/*<div>*/}
          {/*{groups.map(group =>*/}
          {/*    <div key={group.id}>*/}
          {/*      {group.lastName}  {group.firstName} <hr/> <br/>*/}
          {/*      {group.email}  {group.loyalty} <hr/> <br/>*/}
          {/*    </div>*/}
          {/*)}*/}
          {/*</div>*/}
      </Hero>
    </>
  );
};

export default CreateUserForm;
