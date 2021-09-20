import React from 'react';

const DoctorEdit = ({ doctor }) => {
  const { first_name, last_name, id } = doctor
  const defaultFirstName = first_name ? first_name : ""
  const defaultLastName = last_name ? last_name : ""

  return (
    <>
      <h1>Edit Doctor</h1>
      <form action={`/doctors/${id}`} method="post">
        {/*is there an important hidden field to edit? */}
        <input type="hidden" first_name="_method" value="patch" />
        <input
          type="text"
          defaultValue={defaultFirstName}
          first_name="doctor[first_name]"
        />
        
        <input type="hidden" last_name="_method" value="patch" />
        <input
          type="text"
          defaultValue={defaultLastName}
          first_name="doctor[last_name]"
        />
        <button type='submit'>Update</button>
      </form>
    </>
  )

}

export default DoctorEdit;