import React, { useState } from 'react';
// import axios from 'axios' 

const Uploads = () => {

  let userId = 'T1t7duwx5dZbGY1Kkm7XGsF3DaJ2';
  let folder = 'eyeexam';

  const [ image, setImage] = useState(null);

  //we need to set up an error that won't let them send an image, could conditionally render the button to upload to only show if our image state is != null
  const uploadImage = (event) => {
    event.preventDefault();
    
    const formData = new FormData();
    
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
      <form id="form" name="myform" onSubmit={uploadImage}>
        <input type='file' name='image' onChange={onChange}></input>
        <button type='submit'>Convert</button>
      </form>
    </div>
  );
}

export default Uploads;
