import React from 'react';
import RenewalForm from './RenewalForm.js';
import Uploads from './Uploads.js';


const GetStarted = ({ userId }) => {

  let existingToken = localStorage.getItem("token")

  return (
    <>
    {existingToken
      ? <Uploads userId={userId} />
      : <RenewalForm userId={userId}/>
    }
    </>
  );
}

export default GetStarted;
