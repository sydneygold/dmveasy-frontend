import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/colorado-logo.png'

const RenewalForm = () => {

  // const PDFUrl = 'https://app.useanvil.com/api/v1/fill/2H1hdiXvYLA1abriziAV.pdf'
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
    <div className='flex flex-col justify-center'>
      <img className='pt-4 object-contain h-16' src={logo} alt='colorado-logo'/>
      <div className='flex justify-evenly border-b-4 border-green-700'>
        <div className='header flex flex-col'>
          <h1 className='font-serif Georgia font-black text-3xl'>
            Driver's License or ID Card Renewal Form
          </h1>
          <p className='font-sans Roboto italic'>
            Please enter your information as it appears on your current driver license or ID card.
          </p>
        </div>
      </div>
      <form className='mx-auto pt-4 w-3/4' onSubmit={handleSubmit} >
        <div className='applicant-name flex justify-between'>
          <label className='font-sans Roboto font-medium'>Applicant Name:</label>
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)}
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='firstName'
              placeholder='First Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='mi'
              placeholder='Middle Name' />
            <input 
              type="text" 
              onChange={(event) => onChangeApplicantName(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='lastName'
            placeholder='Last Name' />
            <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='applicantSuffix'
              placeholder='Suffix' />
        </div>
        <div className='applicant-physical flex items-center justify-between'>
          <label className='font-sans Roboto font-medium'>Height:</label>
            <input 
              type="integer" 
              onChange={(event) => onChange(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='applicantHeight'
              placeholder="ex: 5'8" />
          <label className='font-sans Roboto font-medium'>Weight:</label>
            <input 
              type="integer" 
              onChange={(event) => onChange(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='applicantWeight'
              placeholder='ex: 170' />
            <label className='font-sans Roboto font-medium'>Hair Color:</label>
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='applicantHairColor'
                placeholder='ex: Black' />
            <label className='font-sans Roboto font-medium'>Eye Color:</label>
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='applicantEyeColor'
                placeholder='ex: Brown' />
        </div>
        <div className='license-number flex justify-start'>
          <label className='font-sans Roboto font-medium pr-8'>Drivers License Number:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
            autoComplete='on'
            name='DLIDNumber'
            placeholder='ex: 123456789' />
        </div>
        <div className='dob flex justify-between'>
          <label className='font-sans Roboto font-medium'>Date of Birth:</label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
            autoComplete='on'
            name='DOBMonth'
            placeholder='Month' />
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
            autoComplete='on'
            name='DOBDAY'
            placeholder='Day' />
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
            autoComplete='on'
            name='DOBYear'
            placeholder='Year' />
        </div>
        <div className='residential flex justify-between'>
          <label className='font-sans Roboto font-medium'>
            Residential Address:
          </label>
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='street1'
              placeholder='Street' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='city'
              placeholder='City' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='state'
              placeholder='State' />
            <input 
              type="text" 
              onChange={(event) => onChangeResidentAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='zip'
              placeholder='Zip Code' />
        </div>
        <div className='mailing justify-between'>
          <label className='font-sans Roboto font-medium'>
            Mailing Address:
          </label>
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='street1'
              placeholder='Street' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)}
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300' 
              autoComplete='on'
              name='city'
              placeholder='City' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='state'
              placeholder='State' />
            <input 
              type="text" 
              onChange={(event) => onChangeMailingAddress(event)} 
              className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              autoComplete='on'
              name='zip'
              placeholder='Zip Code' />
        </div>
        <div className='questions flex flex-col'>
          <div className='flex justify-start items-center'>
            <label className='font-sans Roboto font-medium pr-8'>
              Is your driving privilege under suspension, revocation, or denial in Colorado or any other state?
            </label>
              <input
                type='radio'
                value='No'
                name='drivingPrivilege'
                className='m-2 pr-8'
              /> No
              <input
                type='radio'
                value='Yes'
                name='drivingPrivilege'
                className='m-2 pr-8'
              /> Yes
          </div>
          <div className='flex justify-start items-center'>
            <label className='font-sans Roboto font-medium pr-8'>Do you have a valid driver license from any other state?</label>
              <input
                type='radio'
                value='No'
                name='outOfStateLicense'
                className='m-2 pr-8'
              /> No
              <input
                type='radio'
                value='Yes'
                name='outOfStateLicense'
                className='m-2 pr-8'
              /> Yes
            <label className='font-sans Roboto font-medium px-8'>
              If yes, please enter the State:
              <input 
              type="text" 
              onChange={(event) => onChange(event)} 
              name='outOfStateLicenseText'
              className='m-2 pr-8 border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
              placeholder='CA' />
            </label>
          </div>
          <div className='flex justify-start items-center'>
            <label className='font-sans Roboto font-medium pr-8'>Do you currently possess a Motorcycle endorsement?</label>
              <input
                  type='radio'
                  value='No'
                  name='currentMotorcyleEndorse'
                  className='m-2 pr-8'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='currentMotorcyleEndorse'
                  className='m-2 pr-8'
                /> Yes
            <label className='font-sans Roboto font-medium px-8'>
              Do you wish to retain this Motorcycle endorsement?
            </label>
              <input
                  type='radio'
                  value='No'
                  name='retainMotorcyleEndorse'
                  className='m-2 pr-8'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='retainMotorcyleEndorse'
                  className='m-2 pr-8'
                /> Yes
          </div>
          <div className='flex justify-start items-center'>
            <label className='font-sans Roboto font-medium'>
            During the past 2 years have you had any physical, mental, or emotional conditions that would interfere with your ability to safely operate a motor vehicle including heart problems, diabetes, paralysis, epilepsy, seizures, lapses of consciousness, or dizziness?
            </label>
              <input
                  type='radio'
                  value='No'
                  name='drivingAbility'
                  className='m-2 pr-8'
                /> No
                <input
                  type='radio'
                  value='Yes'
                  name='drivingAbility'
                  className='m-2 pr-8'
                /> Yes
          </div>
        </div>
        <div className='optometrist flex flex-col pt-4'>
          <h2 className='font-semibold'>Vision Examination Result</h2>
          <div className='applicant-name flex justify-between'>
            <label className='font-sans Roboto font-medium pr-8'>Applicant Full Name:</label>
              <input 
                type="text" 
                onChange={(event) => onChangeApplicantFullName(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='firstName'
                placeholder='First Name' />
              <input 
                type="text" 
                onChange={(event) => onChangeApplicantFullName(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='mi'
                placeholder='Middle Name' />
              <input 
                type="text" 
                onChange={(event) => onChangeApplicantFullName(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='lastName'
                placeholder='Last Name' />
          </div>
          <div>
            <label className='font-sans Roboto font-medium pr-4'>Applicant License Number:</label>
              <input 
                type="integer" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='applicantDLIDNumber'
                placeholder='ex: 123456789' />
          </div>
          <div className='opt-info flex flex-col'>
            <h3 className='font-sans Roboto font-semibold'>Optometrist Information</h3>
            <div className='flex justify-between'>
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='optometristFullName'
                placeholder='Full Name' />
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='optometristTitle'
                placeholder='Title' />
              <input 
                type="text" 
                onChange={(event) => onChange(event)} 
                className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                autoComplete='on'
                name='optometristLicenseNumber'
                placeholder='Medical License #' />
              <label>Phone Number:</label>
                <input 
                  type="text" 
                  onChange={(event) => onChange(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='optPhoneAreaCode'
                  placeholder='303' />
                <input 
                  type="text" 
                  onChange={(event) => onChange(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='optPhone'
                  placeholder='1234567' />
            </div>
            <div className='opt-address flex justify-between'>
              <label className='font-sans Roboto font-medium pr-4'>Address:</label>
                <input 
                  type="text" 
                  onChange={(event) => onChangeOptometristAddress(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='street1'
                  placeholder='Street' />
                <input 
                  type="text" 
                  onChange={(event) => onChangeOptometristAddress(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='city'
                  placeholder='City' />
                <input 
                  type="text" 
                  onChange={(event) => onChangeOptometristAddress(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='state'
                  placeholder='State' />
                <input 
                  type="text" 
                  onChange={(event) => onChangeOptometristAddress(event)} 
                  className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                  autoComplete='on'
                  name='zip'
                  placeholder='Zip Code' />
            </div>
            <div className='opt-auth flex flex-col'>
              <div class='flex items-center justify-between'>
                <p className='font-sans Roboto font-medium'>
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
              <div>
                <label className='font-sans Roboto font-medium pr-4'>
                  Date of Evalution:
                </label>      
                  <input 
                    type="text" 
                    onChange={(event) => onChange(event)} 
                    className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
                    autoComplete='on'
                    name='optometristEvalDate'
                    placeholder='MM/DD/YYYY' />
              </div>
            </div>
        </div>
        <div className='applicant-sign'>
          <label className='font-sans Roboto font-medium pr-4'>Applicant Signature</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            className='border-b-4 border-gray-200 focus:outline-none focus:border-blue-700 transition duration-500 placeholder-grey-300'
            autoComplete='on'
            name='applicantSignDate'
            placeholder='MM/DD/YYYY' />
        </div>
        </div>
        <div>
          <button 
            type='submit' 
            className='m-4 pt-2 pb-2 pl-4 pr-4 text-white bg-green-700 font-sans Roboto font-semibold rounded-lg'>
              Submit
          </button>
          <Link to='/getstarted'>
            <button 
              className="m-4 pt-1 pb-1 pl-4 pr-4 text-yellow-400 border-4 border-solid border-yellow-400 font-sans Roboto font-semibold rounded-lg">
              Back
            </button>
          </Link>
        </div>
        </form>
    </div>
  );
}

export default RenewalForm;
