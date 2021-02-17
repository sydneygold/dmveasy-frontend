import React from 'react';
import RenewalForm from './RenewalForm.js';
import Uploads from './Uploads.js';

const GetStarted = () => {

  let existingToken = localStorage.getItem("token")

  return (
    <>
    {existingToken
      ? <RenewalForm />
      : <Uploads />
    }
    </>
  );
}

export default GetStarted;
