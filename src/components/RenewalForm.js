import React, { useState } from 'react';

const RenewalForm = () => {

  const PDFUrl = 'https://app.useanvil.com/api/v1/fill/2H1hdiXvYLA1abriziAV.pdf'
  const baseURL = 'http://localhost:2021/anvil'

  const [formData, setFormData] = useState({
    applicantSuffix: '',
    applicantHeight: '',
    applicantWeight: 0,
    applicantHairColor: '',
    applicantEyeColor: '',
    DLIDnumber: '',
    applicantDOBMonth: '',
    applicantDOBDay: '',
    applicantDOBYear: '',
    currentMotorcyleEndorse: '',
    retainMotorcyleEndorse: '',
    drivingPrivilege: '',
    outOfStateLicense: '',
    outOfStateLicenseText: '',
    drivingAbility: '',
    applicantDLIDNumber: '',
    visionCheck: '',
    optometristEvalDate: '',
    optometristSignDate: '',
    optometristLicenseNumber: '',
    optometristFullName: '',
    optometristTitle: '',
    optPhoneAreaCode: 0,
    optPhone: 0,
    applicantSignDate: ''
  })
  
  const [applicantName, setApplicantName ] = useState({
    firstName: '',
    mi: '',
    lastName: ''
  })
  
  const [ residentAddress, setResidentAddress ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 

  const [ mailingAddress, setMailingAddress ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 
  
  const [applicantFullName, setApplicantFullName ] = useState({
    firstName: '',
    mi: '',
    lastName: ''
  })

  const [ optometristAddress, setOptometristAddress ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 

  const onChange = (event) => setFormData({...formData,
    [event.target.name]: event.target.value})

  const onChangeApplicantName = (event) => setApplicantName({...applicantName,
    [event.target.name]: event.target.value})

    
  const onChangeResidentAddress = (event) => setResidentAddress({...residentAddress,
    [event.target.name]: event.target.value})
      
  const onChangeMailingAddress = (event) => setMailingAddress({...mailingAddress,
    [event.target.name]: event.target.value})

  const onChangeApplicantFullName = (event) => setApplicantFullName({...applicantFullName,
    [event.target.name]: event.target.value})

  const onChangeOptometristAddress = (event) => setOptometristAddress({...optometristAddress,
  [event.target.name]: event.target.value})
  
  const createRenewalForm = (formData, residentAddress, mailingAddress, applicantName, optometristAddress, applicantFullName) => {

    const userId = localStorage.getItem('userId')
  
    fetch(baseURL, {
      method: 'POST',
      headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId,
                formData, 
                residentAddress, 
                mailingAddress, 
                applicantName, 
                optometristAddress, 
                applicantFullName
              })
            })
            .then((response) => response.json())
            .then(result => console.log(result))         
  }
          
  const handleSubmit = (event) => {
    event.preventDefault();
    createRenewalForm(formData, residentAddress, mailingAddress, applicantName, optometristAddress, applicantFullName);
  }
          
  return (
    <div className='main flex flex-col'>
      <div className='header'>
        <h1>Driver's License or ID Card Renewal Form</h1>
        <p>Please enter your information as it appears on your current driver license or ID card.</p>
      </div>
      <form onSubmit={handleSubmit} >
        <div className='applicant-name'>
          <label>Applicant Name:
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)} 
              autoComplete='on'
              name='firstName'
              placeholder='First Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)} 
              autoComplete='on'
              name='mi'
              placeholder='Middle Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)} 
              autoComplete='on'
              name='lastName'
            placeholder='Last Name' />
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantSuffix'
              placeholder='Suffix' />
          </label>
        </div>
        <div className='applicant-physical'>
          <label>Height
            <input 
              type="integer" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantHeight'
              placeholder='Height' />
            </label>
          <label>Weight:
            <input 
              type="integer" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantWeight'
              placeholder='Weight' />
          </label>
          <label>Hair Color:
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantHairColor'
              placeholder='Hair Color' />
          </label>
          <label>Eye Color:
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantEyeColor'
              placeholder='Eye Color' />
          </label>
        </div>
        <div className='license-number'>
          <label>Drivers License Number:
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DLIDNumber'
            placeholder='License Number' />
          </label>
        </div>
        <div className='dob flex justify-evenly'>
          <label>Date of Birth</label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBMonth'
            placeholder='Month' />
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBDAY'
            placeholder='Day' />
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBYear'
            placeholder='Year' />
        </div>
        <div className='residential'>
          <label>Residential Address:
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              autoComplete='on'
              name='street1'
              placeholder='Street' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              autoComplete='on'
              name='city'
              placeholder='City' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              autoComplete='on'
              name='state'
              placeholder='State' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              autoComplete='on'
              name='zip'
              placeholder='Zipcode' />
          </label>
        </div>
        <div className='mailing'>
          <label>Mailing Address:
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              autoComplete='on'
              name='street1'
              placeholder='Street' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              autoComplete='on'
              name='city'
              placeholder='City' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              autoComplete='on'
              name='state'
              placeholder='State' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              autoComplete='on'
              name='zip'
              placeholder='Zipcode' />
          </label>
        </div>
        <div className='questions flex flex-col'>
            <label>Is your driving privilege under suspension, revocation, or denial in Colorado or any other state?
              <input
                type='radio'
                value='No'
                name='drivingPrivilege'
              /> No
              <input
                type='radio'
                value='Yes'
                name='drivingPrivilege'
              /> Yes
            </label>
            <label>Do you have a valid driver license from any other state?
              <input
                type='radio'
                value='No'
                name='outOfStateLicense'
              /> No
              <input
                type='radio'
                value='Yes'
                name='outOfStateLicense'
              /> Yes
            </label>
            <label>
              If yes, please enter the State:
              <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              name='outOfStateLicenseText'
              placeholder='CA' />
            </label>
            <label>
              Do you currently possess a Motorcycle endorsement?
              <input
                  type='radio'
                  value='No'
                  name='currentMotorcyleEndorse'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='currentMotorcyleEndorse'
                /> Yes
            </label>
            <label>
              Do you wish to retain this Motorcycle endorsement?
              <input
                  type='radio'
                  value='No'
                  name='retainMotorcyleEndorse'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='retainMotorcyleEndorse'
                /> Yes
            </label>
            <label>
            During the past 2 years have you had any physical, mental, or emotional conditions that would interfere with your ability to safely operate a motor vehicle including heart problems, diabetes, paralysis, epilepsy, seizures, lapses of consciousness, or dizziness?
              <input
                  type='radio'
                  value='No'
                  name='drivingAbility'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='drivingAbility'
                /> Yes
            </label>
        </div>
        <div className='optometrist flex flex-col'>
          <h2 className='font-semibold'>Vision Examination Result</h2>
          <label>Applicant Full Name:
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantFullName(event)} 
              autoComplete='on'
              name='firstName'
              placeholder='First Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantFullName(event)} 
              autoComplete='on'
              name='mi'
              placeholder='Middle Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantFullName(event)} 
              autoComplete='on'
              name='lastName'
              placeholder='Last Name' />
          </label>
          <label>Applicant License Number:
            <input 
              type="integer" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='applicantDLIDNumber'
              placeholder='License Number (no dashes)' />
          </label>
          <label>Optometrist information
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='optometristFullName'
              placeholder='Optimetrist Full Name' />
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='optometristTitle'
              placeholder='Title' />
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='optometristLicenseNumber'
              placeholder='Optometrist License Number' />
            <label>Phone Number:
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                autoComplete='on'
                name='optPhoneAreaCode'
                placeholder='303' />
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                autoComplete='on'
                name='optPhone'
                placeholder='1234567' />
            </label>
            <label>Address:
              <input 
                type="text" 
                onChange={(event) => onChangeOptometristAddress(event)} 
                autoComplete='on'
                name='street1'
                placeholder='Street' />
              <input 
                type="text" 
                onChange={(event) => onChangeOptometristAddress(event)} 
                autoComplete='on'
                name='city'
                placeholder='City' />
              <input 
                type="text" 
                onChange={(event) => onChangeOptometristAddress(event)} 
                autoComplete='on'
                name='state'
                placeholder='State' />
              <input 
                type="text" 
                onChange={(event) => onChangeOptometristAddress(event)} 
                autoComplete='on'
                name='zip'
                placeholder='Zipcode' />
            </label>
          </label>
          <div>
            <p>
              I have examined the above stated applicant's vision and found it to meet the minimum of 20/40 in the better eye as required by law.
            </p>
            <input
              type='radio'
              value='No'
              name='visionCheck'
            /> No
            <input
              type='radio'
              value='Yes'
              name='visionCheck'
            /> Yes
          </div>
          <label>
            Date of Evalution:
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              autoComplete='on'
              name='optometristEvalDate'
              placeholder='MM/DD/YYYY' />
          </label>      
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantSignDate'
            placeholder='MM/DD/YYYY' />
        </div>
          <button type='submit' className=''>Submit</button>
        </form>
    </div>
  );
}

export default RenewalForm;
