import Card from "react-bootstrap/Card";
import Hero from "../components/Hero";
const React = require("react");
const { useState,useEffect } = require("react");


const CreateUserForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const handleSubmit = async (event) => {
        event.preventDefault();

        try {
          const response = await fetch('/api/users/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });

          if (!response.ok) {
            throw new Error(`HTTP error ${response.status}`);
          }

          const data = await response.json();
          console.log('User created:', data);
        } catch (error) {
          console.error('Error creating user:', error);
        }
      };

      const data = await response.json();
      console.log("User created:", data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch('/api/v1/users')
        .then(response => response.json())
        .then(data => {
          setGroups(data);
          setLoading(false);
        })
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Hero hero="loginHero">
      <Card style={{ width: "50rem", marginTop: "-15rem" }} className='card'>
        <Card.Body>
          <Card.Title className='cardTitle'>
            <h3> Welcome to the Luxury </h3>
            </Card.Title>
          <form onSubmit={handleSubmit} className='form-control-login'>
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              placeholder='Username'
              required
              className='form-control-login'
            />
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              placeholder='Password'
              required
              className='form-control-login'
            />
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email'
              required
              className='form-control-login'
            />
            <input
              type='text'
              name='firstName'
              value={formData.firstName}
              onChange={handleChange}
              placeholder='First Name'
              required
              className='form-control-login'
            />
            <input
              type='text'
              name='lastName'
              value={formData.lastName}
              onChange={handleChange}
              placeholder='Last Name'
              required
              className='form-control-login'
            />
            <button type='submit' className='btn-primary btn'>
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
