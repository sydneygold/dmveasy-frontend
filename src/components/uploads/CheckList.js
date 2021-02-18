import React from 'react'

export default function CheckList({ checked }) {

    return (
        <table id="checklist-table">
        <tbody>
        <tr className="checklist-row">
            <th className="column-header">Forms</th>
            <th className="column-header">Submitted</th>
            <th className="column-header">Approved</th>
        </tr>
        <tr className="checklist-row">
            <td>Proof of Residence (1)</td>
            <td><input 
                id="Proof of Residence (1)" 
                checked={checked.includes("Proof of Residence (1)") ? true : false} 
                name="checkbox" 
                className="checkbox" 
                type="checkbox"
                readOnly
            /></td>
            <td><input className="checkbox" type="hidden" value="submitted"/></td>
        </tr>
        <tr className="checklist-row">
            <td>Proof of Residence (2)</td>
            <td><input 
                id="Proof of Residence (2)" 
                checked={checked.includes("Proof of Residence (2)") ? true : false} 
                name="checkbox" 
                className="checkbox" 
                type="checkbox"
                readOnly
            /></td>              
            <td><input className="checkbox" type="hidden" value="submitted"/></td>
        </tr>
        <tr className="checklist-row">
            <td>Birth Certificate or Valid Passport</td>
            <td><input 
                id="Birth Certificate or Valid Passport" 
                checked={checked.includes("Birth Certificate or Valid Passport") ? true : false} 
                name="checkbox" 
                className="checkbox" 
                type="checkbox"
                readOnly
            /></td>              
            <td><input className="checkbox" type="hidden" value="submitted"/></td>
        </tr>
        <tr className="checklist-row">
            <td>Social Security Card or W2</td>
            <td><input 
                id="Social Security Card or W2" 
                checked={checked.includes("Social Security Card or W2") ? true : false} 
                name="checkbox" 
                className="checkbox" 
                type="checkbox"
                readOnly
            /></td>              
            <td><input className="checkbox" type="hidden" value="submitted"/></td>
        </tr>
        <tr className="checklist-row">
            <td>Eye Exam (If Applicable)</td>
            <td><input 
                id="Eye Exam (If Applicable)" 
                checked={checked.includes("Eye Exam (If Applicable)") ? true : false} 
                name="checkbox" 
                className="checkbox" 
                type="checkbox"
                readOnly
            /></td>              
            <td><input className="checkbox" type="hidden" value="submitted"/></td>
        </tr>
        </tbody>
        </table>
    )
}
