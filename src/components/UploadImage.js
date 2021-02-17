import React, { useState } from 'react';
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
    const formData = new FormData();
    console.log(event.target.files[0])
    // let currentFormData = formData.append('document', event.target.files[0])
    fetch('http://localhost:5001/dmveasy-a82ea/us-central1/uploadImage', { mode: 'no-cors'}, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST',
        'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7Q0vAPYV6vaXrhS5',
        'Authorization': 'Bearer' + localStorage.getItem('token')
      },
      body: JSON.stringifyf(formData)
    })
    .then(result => console.log('the result', result.body))
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
    <div>
      <form onSubmit={onFormSubmit}>
        <input type='file' name='image' onChange={onChange}></input>
        <button type='submit'>Convert</button>
      </form>
    </div>
  );
}
export default Uploads;