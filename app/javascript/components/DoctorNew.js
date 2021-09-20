import React from 'react';

const DoctorNew = ({ doctor}) => {
  const {first_name, last_name, errors } = doctor;
  const defaultFirstName = first_name ? first_name : "";
  const defaultLastName = last_name ? last_name : "";
  return (
    <>
    <h1>Add Doctors</h1>
    { errors && errors }
    <form action="/doctors" method="post">
      <input
        placeholder="First Name"
        type="text"
        defaultValue={defaultFirstName}
        name="doctor[first_name]"
        />
        <input
          placeholder="Last Name"
          type="text"
          defaultValue={defaultLastName}
          name="doctor[last_name]"
          />
          <button type= 'submit'>Add Doctor</button>
      </form> 
    </>
  );
}

export default DoctorNew;