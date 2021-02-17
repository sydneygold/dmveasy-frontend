import React, { useState } from 'react';

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
    optometristTitle: '',
    optPhoneAreaCode: 0,
    optPhone: 0,

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
    <div>
      <form onSubmit={handleSubmit} >
          <label>First Name:</label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantName(event)} 
            autoComplete='on'
            name='firstName'
            placeholder='First Name' />
            <br />
          <label>Mi:</label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantName(event)} 
            autoComplete='on'
            name='mi'
            placeholder='Middle Name' />
            <br />
          <label>last Name:</label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantName(event)} 
            autoComplete='on'
            name='lastName'
            placeholder='Last Name' />
            <br />
          <label>Suffix</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantSuffix'
            placeholder='Suffix' />
            <br />
          <label>Height</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantHeight'
            placeholder='Height' />
            <br />
          <label>Weight:</label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantWeight'
            placeholder='Weight' />
            <br />
          <label>Hair:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantHairColor'
            placeholder='Hair Color' />
            <br />
          <label>Eye Color:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantEyeColor'
            placeholder='Eye Color' />
            <br />
          <label>Drivers License Number:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DLIDnumber'
            placeholder='License Number' />
            <br />
          <label>Month</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantDOBMonth'
            placeholder='01' />
            <br />
          <label>Day</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantDOBDay'
            placeholder='12' />
            <br />
          <label>Year</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantDOBYear'
            placeholder='1987' />
            <br />
          <label>Current Motorcycle</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='currentMotorcyleEndorse'
            placeholder='Endorse?' />
            <br />
          <label>Retain Motorcycle</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='retainMotorcyleEndorse'
            placeholder='Endorse?' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='drivingPrivilege'
            placeholder='privilege' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='outOfStateLicense'
            placeholder='out of state' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='outOfStateLicenseText'
            placeholder='out of state text' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='drivingAbility'
            placeholder='driving ability' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeResidentAddress(event)} 
            autoComplete='on'
            name='street1'
            placeholder='Street' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeResidentAddress(event)} 
            autoComplete='on'
            name='city'
            placeholder='City' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeResidentAddress(event)} 
            autoComplete='on'
            name='state'
            placeholder='State' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeResidentAddress(event)} 
            autoComplete='on'
            name='zip'
            placeholder='Zipcode' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeResidentAddress(event)} 
            autoComplete='on'
            name='country'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeMailingAddress(event)} 
            autoComplete='on'
            name='street1'
            placeholder='Street' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeMailingAddress(event)} 
            autoComplete='on'
            name='city'
            placeholder='City' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeMailingAddress(event)} 
            autoComplete='on'
            name='state'
            placeholder='State' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeMailingAddress(event)} 
            autoComplete='on'
            name='zip'
            placeholder='Zipcode' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeMailingAddress(event)} 
            autoComplete='on'
            name='country'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantFullName(event)} 
            autoComplete='on'
            name='firstName'
            placeholder='First Name' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantFullName(event)} 
            autoComplete='on'
            name='mi'
            placeholder='Middle Name' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeApplicantFullName(event)} 
            autoComplete='on'
            name='lastName'
            placeholder='Last Name' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='applicantDLIDNumber'
            placeholder='DLID Number' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='visionCheck'
            placeholder='Vision Check' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optometristEvalDate'
            placeholder='Date of Evaluation' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optometristSignDate'
            placeholder="Today's Date" />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optometristLicenseNumber'
            placeholder='Optometrist License Number' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optometristTitle'
            placeholder='Optimetrist Title' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristAddress(event)} 
            autoComplete='on'
            name='street1'
            placeholder='Street' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristAddress(event)} 
            autoComplete='on'
            name='city'
            placeholder='City' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristAddress(event)} 
            autoComplete='on'
            name='state'
            placeholder='State' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristAddress(event)} 
            autoComplete='on'
            name='zip'
            placeholder='Zipcode' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristAddress(event)} 
            autoComplete='on'
            name='country'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optPhoneAreaCode'
            placeholder='(123)' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='optPhone'
            placeholder='123-4567' />
            <br />
          <button type='submit' className=''>Submit Somthing</button>
        </form>
    </div>
  );
}

export default RenewalForm;
