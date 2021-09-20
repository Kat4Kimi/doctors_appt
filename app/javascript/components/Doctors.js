import React from "react";

const Doctors =({ doctors }) => {
  return (
    <>
      <h1>Doctors</h1>
      <a href="/doctors/new">Add Doctor</a>
      <br />
      <h2>{ doctors.length <= 0 ? "No Doctors" : "" }</h2>
      { doctors.map((doctor) => (
      <div>
        <a href={`/doctors/${doctor.id}`}>{doctor.first_name} {doctor.last_name}</a>
      </div>
    ))}
    </>
  )
}

export default Doctors;