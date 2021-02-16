import React, { useState } from 'react';
import logo from '../images/colorado-logo.png';
// import axios from 'axios' 

const Uploads = () => {

  let userId = 'T1t7duwx5dZbGY1Kkm7XGsF3DaJ2';
  let folder = 'eyeexam';

  const [ image, setImage] = useState(null);

  //we need to set up an error that won't let them send an image, could conditionally render the button to upload to only show if our image state is != null
  const uploadImage = (event) => {
    event.preventDefault();

    const eyeExam = document.querySelector('#eye-exam')
    const formData = new FormData(eyeExam);
    const eyeExamInput = document.querySelector('.eye-exam-input');
    console.log(eyeExamInput.files[0])
    // let currentFormData = formData.append('document', event.target.files[0])

    fetch('http://localhost:5001/dmveasy-a82ea/us-central1/uploadImage', { mode: 'no-cors'}, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer' + localStorage.getItem('token')
      },
      body: JSON.stringify(formData)
    })
    .then(result => console.log(formData, 'formData'))
    
    // formData.append('myImage', file);
    //     const config = {
    //         headers: {
    //           'Access-Control-Allow-Origin': '*',
    //           'Access-Control-Allow-Methods': 'POST',
    //           'Content-Type': 'multipart/form-data'
    //         }
    //     };
    //     axios.post("http://localhost:5001/dmveasy-a82ea/us-central1/uploadImage", formData, config)
    //       .then((response) => {
    //           alert("The file is successfully uploaded");
    //       }).catch((error) => {
    //     });
  }
    
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
      <div className='eye-exam-container border-2 border-gray-500'>
        <form id='eye-exam' onSubmit={onFormSubmit}>
          <h1>Eye Exam</h1>
          <input 
            className='eye-exam-input' 
            type='file' 
            name='image' 
            onChange={onChange} />
          <button 
            className='border-2 border-purple-500 p-2'
            type='submit'>
            Submit
          </button>
        </form>
      </div>
      <div className='proof-address-container'>
        <form id='proof-address'>
          <h1>Proof of Address</h1>
          <p>Please submit two (2) forms</p>
          <input 
            className='address-input' 
            type='file' 
            name='address-proof' 
            onChange={onChange} />
            <button type='submit'>
              Submit
            </button>
        </form>
      </div>
    <div>
      <form id="form" name="myform" onSubmit={uploadImage}>
        <input type='file' name='image' onChange={onChange}></input>
        <button type='submit'>Convert</button>
      </form>
    </div>
  );
}

export default Uploads;
