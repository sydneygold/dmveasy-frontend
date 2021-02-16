import React from 'react';
import RenewalForm from './RenewalForm.js';
import Uploads from './Uploads.js';


const GetStarted = () => {

  let existingToken = localStorage.getItem("token")

  return (
    <>
    {existingToken
      ? <Uploads />
      : <RenewalForm />
    }
    </>
  );
}

export default GetStarted;
