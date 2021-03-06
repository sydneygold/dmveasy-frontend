import React, { useState } from 'react'

export default function ImageUploadForm({ setChecked, checked }) {

    const [ folder, setFolder ] = useState('Proof of Residence (1)');
    const [ image, setImage] = useState("");
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
          
          fetch('https://us-central1-dmveasy-a82ea.cloudfunctions.net/uploadFile', {
            method: 'POST',
            headers: {},
            body: formData
          })
          .then(response => response.json())
          .then(result => alert(result.message))
          .catch(error => console.error(error))
        }
    }

    const onChangeFileSelect = (event) => {
        if ( event.target.files[0] !== undefined) {
            setImage({
                image: event.target.files[0]
            });
        } else {
            setImage("")
        }
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
            <input type='file' name='image' onChange={onChangeFileSelect}></input>
            <button className='m-4 pt-2 pb-2 pl-4 pr-4 text-white bg-blue-700 font-sans Roboto font-semibold rounded-lg' disabled={image === "" ? true : false} id="upload-button" type='submit'>Upload</button>
        </form>
    )
}
