import React, { useState } from 'react';

const RenewalForm = () => {

  const PDFUrl = 'https://app.useanvil.com/api/v1/fill/2H1hdiXvYLA1abriziAV.pdf'
  const baseURL = 'http://localhost:2021/anvil'

  const [formData, setFormData] = useState({
    SuffiX: '',
    ApplicantHeight: '',
    ApplicantWeight: '',
    ApplicantHairColor: '',
    ApplicantEyeColor: '',
    DLIDNumber: '',
    DOBMonth: '',
    DrivingPrivilegeNo: true,
    DrivingPrivilegeYes: true,
    OtherStateNo: true,
    OtherStateYes: true,
    SafetyNo: true,
    SafetyYes: true,
    Required: true,
    Not: true,
    DOBDay: '',
    DOBYear: ''
  })
  
  const [ COAddress, setCOAddress ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 

  const [ COMailing, setCOMailing ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 
  
  const [ApplicantName, setApplicantName ] = useState({
    firstName: '',
    lastName: '',
    dob: '',
  })
  
  const [ OptometristAddress, setOptometristAddress ] = useState({
    street1: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  }) 

  const [ OptometristPhone, setOptometristPhone ] = useState({
    num: '',
    region: 'US',
    baseRegion: 'US'
  }) 

  const [Name, setName ] = useState({
    firstName: '',
    lastName: '',
    dob: '',
  })


  const onChange = (event) => setFormData({...formData,
    [event.target.name]: event.target.value})

  const onChangeApplicantName = (event) => setApplicantName({...ApplicantName,
    [event.target.name]: event.target.value})

    
  const onChangeCOAddress = (event) => setCOAddress({...COAddress,
    [event.target.name]: event.target.value})
      
  const onChangeCOMailing = (event) => setCOMailing({...COMailing,
    [event.target.name]: event.target.value})

  const onChangeName = (event) => setName({...Name,
    [event.target.name]: event.target.value})

  const onChangeOptometristAddress = (event) => setOptometristAddress({...OptometristAddress,
  [event.target.name]: event.target.value})

  const onChangeOptometristPhone = (event) => setOptometristPhone({...OptometristPhone,
  [event.target.name]: event.target.value})

  const createRenewalForm = (formData, COMailing, COAddress, ApplicantName, OptometristAddress, OptometristPhone, Name) => {
    // console.log('form data and stuff', formData, COMailing, COAddress, ApplicantName, OptometristAddress, OptometristPhone, Name)

  const userId = localStorage.getItem('userId')
  
    fetch(baseURL, {
      method: 'POST',
      headers: {
                'Accept': 'application/json',
                // 'Access-Control-Allow-Origin': '*',
                // 'Apikey': 'Wx80argqSv0H9JwdXERZXswx32AW6GAR',
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                userId,
                formData, 
                COMailing, 
                COAddress, 
                ApplicantName, 
                OptometristAddress, 
                OptometristPhone, 
                Name
              })
            })
            .then((response) => response.json())
            .then(result => console.log(result))
              
          }
          
  const handleSubmit = (event) => {
    event.preventDefault();
    createRenewalForm(formData, COMailing, COAddress, ApplicantName, OptometristAddress, OptometristPhone, Name);
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
            name='Suffix'
            placeholder='Suffix' />
            <br />
          <label>Height</label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='ApplicantHeight'
            placeholder='Height' />
            <br />
          <label>Weight:</label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='ApplicantWeight'
            placeholder='Weight' />
            <br />
          <label>Hair:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='ApplicantHairColor'
            placeholder='Hair Color' />
            <br />
          <label>Eye Color:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='ApplicantEyeColor'
            placeholder='Eye Color' />
            <br />
          <label>Drivers License Number:</label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DLIDNumber'
            placeholder='License Number' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBMonth'
            placeholder='Date of Birth' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOAddress(event)} 
            autoComplete='on'
            name='street1'
            placeholder='Street' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOAddress(event)} 
            autoComplete='on'
            name='city'
            placeholder='City' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOAddress(event)} 
            autoComplete='on'
            name='state'
            placeholder='State' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOAddress(event)} 
            autoComplete='on'
            name='zip'
            placeholder='Zipcode' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOAddress(event)} 
            autoComplete='on'
            name='country'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOMailing(event)} 
            autoComplete='on'
            name='street1'
            placeholder='Street' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOMailing(event)} 
            autoComplete='on'
            name='city'
            placeholder='City' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOMailing(event)} 
            autoComplete='on'
            name='state'
            placeholder='State' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOMailing(event)} 
            autoComplete='on'
            name='zip'
            placeholder='Zipcode' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeCOMailing(event)} 
            autoComplete='on'
            name='country'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeName(event)} 
            autoComplete='on'
            name='firstName'
            placeholder='First Name' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeName(event)} 
            autoComplete='on'
            name='mi'
            placeholder='Middle Name' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeName(event)} 
            autoComplete='on'
            name='lastName'
            placeholder='Last Name' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='licenseNumber'
            placeholder='Country' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOE'
            placeholder='Date of Evaluation' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DateToday'
            placeholder="Today's Date" />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='OptometristLicenseNumber'
            placeholder='Optometrist License Number' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='OptometristName'
            placeholder='Optimetrist Name' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='OptometristTitle'
            placeholder='Title' />
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
            type="text" 
            onChange={(event) => onChangeOptometristPhone(event)} 
            autoComplete='on'
            name='num'
            placeholder='(123)' />
            <br />
          {/* <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristPhone(event)} 
            autoComplete='on'
            name='region'
            placeholder='US' />
            <br />
          <label></label>
          <input 
            type="text" 
            onChange={(event) => onChangeOptometristPhone(event)} 
            autoComplete='on'
            name='baseRegion'
            placeholder='US' />
            <br /> */}
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DrivingPrivilegeNo'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DrivingPrivilegeYes'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='OtherStateNo'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='OtherStateYes'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='SafetyNo'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='SafetyYes'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='Required'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='Not'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="boolean" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='Not'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBDAY'
            placeholder='' />
            <br />
          <label></label>
          <input 
            type="integer" 
            onChange={(event) => onChange(event)} 
            autoComplete='on'
            name='DOBYear'
            placeholder='' />
            <br />
          <button type='submit' className=''>Submit Somthing</button>
        </form>
    </div>
  );
}

export default RenewalForm;
