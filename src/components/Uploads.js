import React, { useState } from 'react';
import logo from '../images/colorado-logo.png';
// import axios from 'axios' 

const Uploads = () => {

  const [ folder, setFolder ] = useState('Proof of Residence (2)');
  const [ image, setImage] = useState(null);

  let userId = localStorage.getItem('userId');
  //we need to set up an error that won't let them send an image, could conditionally render the button to upload to only show if our image state is != null
  const onFormSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    console.log("the usersId",userId)
    formData.append('userId', userId);
    formData.append('folder', folder);
    formData.append('image', image.image, image.image.name);
    fetch('http://localhost:5001/dmveasy-a82ea/us-central1/uploadImage', {
      method: 'POST',
      headers: {},
      body: formData
    })
    .then(response => response.json())
    .then(result => console.log(result))
  };
  const onChange = (event) => {
    setImage({
      image: event.target.files[0]
    });
  };

  return (
    <div>
      <form id="form" name="myform" onSubmit={onFormSubmit}>
        <select onChange={(event) => setFolder(event.target.value)}>
          <option>Proof of Residence (1)</option>
          <option>Proof of Residence (2)</option>
          <option>Birth Certificate or Valid Passport</option>
          <option>Social Security Card or W2</option>
          <option>Eye Exam (If Applicable)</option>
        </select>
        <input type='file' name='image' onChange={onChange}></input>
        <button type='submit'>Convert</button>
      </form>
    </div>
  );
}

export default Uploads;
