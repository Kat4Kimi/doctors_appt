import React from 'react';

const Patients = ({ patients }) => {

  return (
    <>
      <h1>Patients  Index</h1>
      <a href="/patients/new">New Patient</a>
      
      { 
        patients.map( (patient) => (
          <div>
            <h5>{patient.first_name}{patient.last_name}</h5>

            <a href={`/patients/${patient.id}`}>Show</a>
            {' '}  
            <a href={`/patients/${patient.id}/edit`}>Edit</a>
            {' '}
            <a href={`/patients/${patient.id}`} 
              data-method="delete">
             
                Delete
            </a>
          </div>
        ))
      }
    </>
  )
}

export default Patients;