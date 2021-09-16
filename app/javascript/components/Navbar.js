import React from "react";

const Navbar = () => (
  <nav>
    <ul>
      <li>
        <a href="/patients">Patients</a>
      </li>
      <li>
        <a href="/patients/new">New Patient</a>
      </li>
      <li>
        <a href="/doctors">Doctors</a>
      </li>
      <li>
        <a href="/doctors/new">New Doctor</a>
      </li>
    </ul>
  </nav>
)

export default Navbar;