import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Modal from "react-modal";
import "./usermanagement.css";


const UserManagement = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    department: "",
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const handleFacultyChange = (e) => {
    setSelectedFaculty(e.target.value);
    setSelectedDepartment("");
  };

  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    resetForm();
    setModalIsOpen(false);
  };

  const resetForm = () => {
    setData({
      name: "",
      email: "",
      password: "",
      role: "",
      department: "",
    });
    setSelectedFaculty("");
    setSelectedDepartment("");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form Data:", data);
    closeModal();
  };
  
  const handleInput = (e, setData) => {
    setData(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  
  console.log(data)

  const faculties = {
    "Faculty of Science": [
      "Department of Biochemistry",
      "Department of Biotechnology",
      "Department of Botany",
      "Department of Chemistry",
      "Department of Computer Science & Software Engineering",
      "Department of Food Science & Technology",
      "Department of Mathematics",
      "Department of Microbiology",
      "Department of Zoology",
    ],
    "Faculty of Pharmacy": [
      "Department of Pharmaceutical Chemistry",
      "Department of Pharmacology",
      "Department of Pharmacognosy",
      "Department of Pharmacy Practice",
      "Department of Pharmaceutics",
    ],
    "Faculty of Social Sciences": [
      "Department of English",
      "Department of International Relations",
      "Department of Education and Teachers Education",
      "Department of Islamic Learning",
      "Department of Media Studies",
      "Department of Visual Studies",
      "Department of Psychology",
    ],
    "Faculty of Business Administration, Commerce & Economics": [
      "Department of Business Administration",
      "Department of Commerce",
      "Department of Economics",
    ],
    "Faculty of Allied Medical Sciences": [],
  };


  const users = [
    { name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'Administrator', faculty: 'Faculty of Science', department: 'Department of Physics' },
    { name: 'Bob Smith', email: 'bob.smith@example.com', role: 'Researcher', faculty: 'Faculty of Pharmacy', department: 'Department of Pharmacology' },
    { name: 'Charlie Brown', email: 'charlie.brown@example.com', role: 'Faculty Member', faculty: 'Faculty of Social Sciences', department: 'Department of Sociology' },
    { name: 'Diane Harris', email: 'diane.harris@example.com', role: 'Researcher', faculty: 'Faculty of Business Administration', department: 'Department of Marketing' },
    { name: 'Eve Davis', email: 'eve.davis@example.com', role: 'Administrator', faculty: 'Faculty of Allied Medical Sciences', department: 'Department of Nursing' },
    { name: 'Frank Miller', email: 'frank.miller@example.com', role: 'Faculty Member', faculty: 'Faculty of Science', department: 'Department of Chemistry' },
    { name: 'Grace Lee', email: 'grace.lee@example.com', role: 'Researcher', faculty: 'Faculty of Pharmacy', department: 'Department of Clinical Pharmacy' },
    { name: 'Henry Wilson', email: 'henry.wilson@example.com', role: 'Administrator', faculty: 'Faculty of Social Sciences', department: 'Department of Psychology' },
  ];

  return (
    <>
    <div className="whole-page-container">
      <Sidebar />
      <div className="user-management">
        I am inside usermanagement
        {/* <UserAndGroup/> */}
        <button type="button" onClick={openModal}>
          Create User
        </button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Create User Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <h2>Create User</h2>
          <form className="create-user" onSubmit={handleSubmit}>
            <div className="create-user-left">
              <p className="title">User Information</p>
              <div className="multi-fields">
                <input
                  required
                  name="name"
                  onChange={handleInputChange}
                  value={data.name}
                  type="text"
                  placeholder="Name"
                />
              <input
                required
                name="email"
                onChange={handleInputChange}
                value={data.email}
                type="email"
                placeholder="Email Address"
              />
              <input
                required
                name="password"
                onChange={handleInputChange}
                value={data.password}
                type="password"
                placeholder="Password"
              />
              </div>
              <div className="multi-fields">
                  <select
                    name="role"
                    value={data.role}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Role</option>
                    <option value="Admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="FacultyHead">Faculty Head</option>
                    <option value="DepartmentHead">Department Head</option>
                    <option value="ResearchIndividual">Research Individual</option>
                  </select>
              </div>
              <div className="multi-fields">
                <div>
                  <select
                    id="faculty"
                    value={selectedFaculty}
                    onChange={handleFacultyChange}
                  >
                    <option value="">-- Select Faculty --</option>
                    {Object.keys(faculties).map((faculty) => (
                      <option key={faculty} value={faculty}>
                        {faculty}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select
                    id="department"
                    name="department"
                    value={selectedDepartment}
                    onChange={(e) => {
                      handleDepartmentChange(e);
                      handleInputChange(e);
                    }}
                    disabled={!selectedFaculty}
                  >
                    <option value="">-- Select Department --</option>
                    {selectedFaculty &&
                      faculties[selectedFaculty].map((department) => (
                        <option key={department} value={department}>
                          {department}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
            </div>
            <button className="submit-button" type="submit">Submit</button>
          </form>
        </Modal>
      </div>
      
    </div>
          <div className="table-container">
          <table className="user-management-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Faculty</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>{user.faculty}</td>
                  <td>{user.department}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
  );
};

export default UserManagement;

