import React from 'react';

const PatientNew = ({ patient }) => {
  // in case of failed form still save the 
  // users input
  // continue the pattern for all fields
  const { name } = patient
  const defaultName = name ? name : ""
  return (
    <>
      <h1>New Patient Form</h1>
      
            

      <form action='/patients' method="post">
        <input
          type="text"
          defaultValue={defaultName}
          name="patient[first_name]"
					

          // optional
          required
          placeholder="Name"
        />
				 <input
          type="text"
          defaultValue={defaultName}
          name="patient[last_name]"
					

          // optional
          required
          placeholder="Last Name"
        />
        <button type='submit'>Add Patient</button>
      </form>
    </>
  )
}

export default PatientNew;