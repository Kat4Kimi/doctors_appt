import React from 'react';

const PatientEdit = ({ patient }) => {
  const {first_name, last_name, id } = patient
	const defaultFirstName = first_name ? first_name : ""
	const defaultLastName = last_name ? last_name : ""
  return (
    <>
      <h1>Edit a Patient</h1>
      <form action={`/patients/${id}`} method="post">
        {/* important hidden field to be able to edit */}
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          defaultValue={defaultFirstName}
          name="patient[first_name]"
        />
				<input
          type="text"
          defaultValue={defaultLastName}
          name="patient[last_name]"
					/>
        <button type="submit">Update</button>
      </form>
    </>
  )
}

export default PatientEdit;

