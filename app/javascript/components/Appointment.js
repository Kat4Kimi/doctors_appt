import React from "react";

const Appointment = ({ appointment }) => {
  const { date, time, reason, id } = appointment;
  return (
    <>
      <h1>
        {date}
        {time}
      </h1>
      <hr />
      <h2>Reason for visit:</h2>
      <p>{reason}</p>
      <br />
      <a href={`/patients/${id}/appointments`}>Back to Appointments</a>
    </>
  );
};
export default Appointment;
