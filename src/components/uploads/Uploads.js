import React, { useState, useEffect } from 'react'; 
import '../../uploads.css'
import UploadsHeader from './UpLoadsHeader'
import ImageUploadForm from './ImageUploadForm'
import CheckList from './CheckList'

const Uploads = () => {

  const [ checked, setChecked ] = useState([])

  const userId = localStorage.getItem('userId');

  useEffect( () => {
    getUser()
  }, [])

  const getUser = () => {
    fetch('https://us-central1-dmveasy-a82ea.cloudfunctions.net/getUser', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },  
      body: JSON.stringify({userId})
    })
    .then(response => response.json())
    .then(user => {
      user.checked ? setChecked(user.checked) : console.log("No Submited Images")
    })
    .catch(error => console.error(error))
  }

  useEffect( () => {
    updateUserSubmittedList()
  }, [checked])

  const updateUserSubmittedList = () => {
    if ( checked.length > 0 ) {
      fetch('https://us-central1-dmveasy-a82ea.cloudfunctions.net/updateUser', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            userId: userId,
            checked: checked
        })
      }).then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.error(error))
    }
  }

  return (
    <>
      <UploadsHeader/>
      <div id="photo"></div>
      <div id="uploads-main">
        <section className="upload-section">
          <h1 className="title" id="uploads-title">Upload New Files</h1>
          <div className="border-line"></div>
          <ImageUploadForm 
            setChecked={setChecked}
            checked={checked}
          />
        </section>
        <section className="upload-section">
          <h1 className="title" id="checklist-title">Checklist</h1>
          <div className="border-line"></div>
        <CheckList checked={checked}/>
        </section>
      </div>
    </>
  );
}

export default Uploads;
