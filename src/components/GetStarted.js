import React, { useState } from 'react';

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dob: ''
  })


  const onChange = (event) => setFormData({...formData,
    [event.target.name]: event.target.value})

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div>
      <section>
        <div>
          <button>

          </button>
        </div>
      </section>
      <section>
        <form onSubmit={handleSubmit} >
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='firstName'
            placeholder='First Name' />
            <br />
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='lastName'
            placeholder='Last Name' />
            <br />
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='dob'
            placeholder='Date of Birth' />
          <button type='submit' className=''>Submit Somthing</button>
        </form>
      </section>
    </div>
  );
}

export default GetStarted;
