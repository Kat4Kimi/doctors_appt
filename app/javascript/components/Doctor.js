import React  from "react";
const Doctor =({doctor, patients, first_name, last_name}) => {
  const {id } = doctor;
  return (
    <>
      <div className="doctor-card">
        <h1> {first_name} {last_name}</h1>
        <hr />
        <h6> Patients</h6>
        <ul>
          { patients.map((patient) => (
            <li>
              <a href={`/patients/${patient.id}`}>{patient.name}</a>
            </li>
          ))}
        </ul>
        <a href={`/doctors/${id}`} data-method="delete">Delete
        </a>
      </div>
    </>

  );
}

export default Doctor;