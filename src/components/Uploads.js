import React, { useState } from 'react';
import logo from '../images/colorado-logo.png';
// import axios from 'axios' 

const Uploads = () => {

  let userId = 'T1t7duwx5dZbGY1Kkm7XGsF3DaJ2';
  let folder = 'eyeexam';

  const [ image, setImage] = useState(null);

//   const setAuthorizationHeader = (token) => {
//     const FBIdToken = `Bearer ${token}`
//     localStorage.setItem('FBIdToken', FBIdToken)
//     axios.defaults.headers.common['Authorization'] = FBIdToken
// }

  const onFormSubmit = (event) => {
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

  const onChange = (event) => {
    setImage({
      image: event.target.files[0]
    })
  }

  return (
    <div className='getting-started flex'>
    <div className='forms-section w-3/4'>
      <div class="flex items-center justify-between bg-grey-lighter px-4 py-9 border-b-2 border-blue">
        <h1 className='font-bold'>Eye Exam</h1>
        <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:text-blue-600">
          <span class="mt-2 text-base leading-normal">Select a file</span>
          <input 
            className='eye-exam-input' 
            type='file' 
            name='image' 
            class="hidden" 
            onChange={onChange} />
        </label>
      </div>
      <div class="flex items-center justify-between bg-grey-lighter px-4 py-8 border-b-2 border-blue">
        <h1 className='font-bold'>Proof of Address</h1>
        <label class="w-64 flex flex-col items-center px-4 py-6 bg-white rounded-lg shadow-lg tracking-wide uppercase border border-blue-600 cursor-pointer hover:text-blue-600">
          <span class="mt-2 text-base leading-normal">Select at least 2 files</span>
          <input 
            className='eye-exam-input' 
            type='file' 
            name='image' 
            class="hidden" 
            onChange={onChange} />
        </label>
      </div>
    </div>
      <aside className='w-1/4 flex flex-col items-center mt-4'>
        <img 
            className="h-24"
            src={logo}
        />
        <h1 className='text-xl'>Required Forms</h1>
      </aside>
      {/* <div className='eye-exam-container border-2 border-gray-500'>
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
      </div> */}
      {/* <div className='proof-address-container'>
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
      </div> */}
    </div>
  );
}

export default Uploads;
