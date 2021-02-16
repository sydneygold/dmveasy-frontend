// import fs from 'fs';
// import Anvil from '@anvilco/anvil';
//   const pdfTemplateID = '2H1hdiXvYLA1abriziAV'; 
//   const apiKey = 'Wx80argqSv0H9JwdXERZXswx32AW6GAR';
  

// const AnvilPDF = () => {
//   const renewalFormData = {
//     "title": "DMV License Renewal",
//     "fontSize": 10,
//     "textColor": "#333333",
//     "data": {
//       "cast23b4f5606cbe11eb926f8fc705e71741": {
//         "firstName": "Robin",
//         "mi": "W",
//         "lastName": "Smith"
//       },
//       "Name": {
//         "firstName": "Robin",
//         "mi": "W",
//         "lastName": "Smith"
//       },
//       "cast3ab5c8706cbe11eb926f8fc705e71741": {
//         "firstName": "Robin",
//         "mi": "W",
//         "lastName": "Smith"
//       },
//       "Suffix": {
//         "firstName": "Robin",
//         "mi": "W",
//         "lastName": "Smith"
//       },
//       "height": 12345,
//       "Weight": 12345,
//       "Hair": "Hair",
//       "Eye": "Eye",
//       "license": 12345,
//       "castfcc6b8c06cbe11eb926f8fc705e71741": 12345,
//       "DOB": "2021-02-12",
//       "no": true,
//       "yes": true,
//       "cast60a971106cc011eb926f8fc705e71741": {
//         "street1": "123 Main St #234",
//         "city": "San Francisco",
//         "state": "CA",
//         "zip": "94106",
//         "country": "US"
//       },
//       "cast1b1a52d06cc111eb926f8fc705e71741": {
//         "street1": "123 Main St #234",
//         "city": "San Francisco",
//         "state": "CA",
//         "zip": "94106",
//         "country": "US"
//       },
//       "cast13d3e0806cc211eb926f8fc705e71741": "2021-02-12",
//       "cast18079f206cc211eb926f8fc705e71741": "2021-02-12",
//       "cast20b9b9f06cc211eb926f8fc705e71741": 12345,
//       "cast257742006cc211eb926f8fc705e71741": "Optometrist/Ophthalmologist (Please Print Name)",
//       "cast2aa58d406cc211eb926f8fc705e71741": "Title",
//       "cast94ad42506cc211eb926f8fc705e71741": {
//         "street1": "123 Main St #234",
//         "city": "San Francisco",
//         "state": "CA",
//         "zip": "94106",
//         "country": "US"
//       },
//       "cast4a4e1ae06cc211eb926f8fc705e71741": {
//         "num": "5554443333",
//         "region": "US",
//         "baseRegion": "US"
//       },
//       "Required": true,
//       "Not": true
//     }
//   };

//     const anvilClient = new Anvil({ apiKey })
//     const {
//       statusCode,
//       data
//     } = await anvilClient.fillPDF(pdfTemplateID, renewalFormData)
    
//     console.log(statusCode) // 200
    
//     fs.writeFileSync('output.pdf', data, { encoding: null })
  
//   return (
//     <>
//       <section>
//         {}
//       </section>
//     </>
//   )

// };

// export default AnvilPDF;