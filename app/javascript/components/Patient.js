import React from 'react';

const Patient = ({ patient }) => {
  const { first_name, last_name, id } = patient
  return (
    <>
      <h1>{first_name} {last_name}</h1>
      
      <br />
      
      <a href="/">Back</a>
      <br />
      <a href={`/patients/${id}/appointments`}>Appointments</a>
    </>
  )
}

export default Patient;