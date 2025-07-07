import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch(`/api/students/${id}`)
      .then(response => response.json())
      .then(data => {
        setName(data.name);
        setEmail(data.email);
      });
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();
    fetch(`/api/students/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <br />
        <label>
          Email:
          <input type="email" value={email} onChange={event => setEmail(event.target.value)} />
        </label>
        <br />
        <button type="submit">Update Student</button>
      </form>
    </div>
  );
}

export default EditStudent;