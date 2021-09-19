import React from 'react'

const Appointments = ({ patient, doctors }) => {

  const displayDoc = (id) => {
    let fullName
    doctors.map((d) => {
      if (d.id === id) {
        fullName = d.first_name + " " + d.last_name
      }
    })
    return fullName
  }

  return (
    <>
      <h1>{patient.first_name} {patient.last_name}'s Appointments</h1>
      <a href={`/patients/${patient.id}/appointments/new`}>Add Appointment</a>
      <br />
      <h2>Doctors</h2> 
      { doctors.map((d) => (
        <div>
          <p>{displayDoc(d.id)}</p>
          <a href={`/patients/${patient.id}/appointments/${d.id}`} data-method="delete">
            Delete
          </a>
        </div>
      ))}
    </>  
  )
}

export default Appointments;