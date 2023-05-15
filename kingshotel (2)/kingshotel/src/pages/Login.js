
import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import React from "react";

const LoginComponenent = () => {
  return (
    <>
      <Hero hero="signupHero">
        <Card style={{ width: "50rem", marginTop: "-15rem" }} className='card'>
          <Card.Body>
            <Card.Title className='cardTitle'>
              <h3> Welcome to the Luxury </h3> </Card.Title>
        <form className='form-control-login'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            className='form-control-login'
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            className='form-control-login'
          />

          <button type='submit' className='btn-primary btn'>
            Login
          </button>
          <p style={{padding:"5px"}}>
            {" "}
            Dont have an account?
            <Link to={"./signup"}> SignUp </Link>
          </p>
        </form>
      </Card.Body>
    </Card>
      </Hero>
   </>
  );
};

export default LoginComponenent;
