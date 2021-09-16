import React from 'react'

const AppointmentNew = ({ patient, appointment, doctors }) => {
  const { date, time, reason, doctor_id  } = appointment;
  const defaultDate = date ? date : "";
  const defaultTime = time ? time : "";
  const defaultReason = reason ? reason : "";
  const defaultDoctor = doctor_id ? doctor_id : "";
  return (
    <>
      <h1>Add Appointment</h1>
      <form action={`/patients/${patient.id}/appointments`} method="post">
        <label for="doctor_id">Choose a Doctor:</label>
        <select name="appointment[doctor_id]" id="doctor_id" defaultValue={defaultDoctor}>
          { doctors.map((d) => (
            <option value={d.id}>{`${d.first_name} ${d.last_name}`}</option>
          ))}
        </select>
        <input
          type='date'
          required
          placeholder="Appointment Date"
          defaultValue={defaultDate}
          name="appointment[date]"
        />
        <input
          type='time'
          required
          placeholder="Appointment Time"
          defaultValue={defaultTime}
          name="appointment[time]"
        />
        <input
          type='text'
          required
          placeholder="Reason for visit"
          defaultValue={defaultReason}
          name="appointment[reason]"
        />
        <button type="submit">Add</button>
      </form>  
    </>
  )
}

export default AppointmentNew;