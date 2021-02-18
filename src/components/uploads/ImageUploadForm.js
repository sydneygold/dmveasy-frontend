import React, { useState } from 'react'

export default function ImageUploadForm({ setChecked, checked }) {

    const [ folder, setFolder ] = useState('Proof of Residence (1)');
    const [ image, setImage] = useState(null);
    const [ isButtonDisabled, setButtonDisabled ] = useState(true)
    const userId = localStorage.getItem('userId');

    const onFormSubmit = (event) => {
        event.preventDefault();
        
        if ( checked.includes(folder)) {
          alert("This file has already been uploaded, try another file type")
        } else {
          setChecked([...checked, folder])
    
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
          .then(result => alert(result.message))
          .catch(error => console.error(error))
        }
    }

    const onChange = (event) => {
        setImage({
          image: event.target.files[0]
        });
        setButtonDisabled(!isButtonDisabled)
    };

    return (
        <form id="upload-form" onSubmit={onFormSubmit}>
            <label>Select Image Type:</label>
            <select id="folder-select" onChange={(event) => setFolder(event.target.value)}>
              <option>Proof of Residence (1)</option>
              <option>Proof of Residence (2)</option>
              <option>Birth Certificate or Valid Passport</option>
              <option>Social Security Card or W2</option>
              <option>Eye Exam (If Applicable)</option>
            </select>
            <input type='file' name='image' onChange={onChange}></input>
            <button disabled={isButtonDisabled ? true : false} id="upload-button" type='submit'>Upload</button>
        </form>
    )
}
