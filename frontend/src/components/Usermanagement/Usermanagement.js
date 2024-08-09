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
    { name: 'Administrator', username: "admin", email: 'oricadmin@juw.edu.pk', role: 'Admin', faculty: 'Faculty of Science', department: 'IT' },
    { name: 'Manager ORIC', username: "manager", email: 'oricmanager@juw.edu.pk', role: 'Manager', faculty: 'Faculty of Pharmacy', department: 'ORIC' },
    { name: 'Researcher ORIC', username: "researcher", email: 'oricresearcher@juw.edu.pk', role: 'Researcher', faculty: 'Faculty of Social Sciences', department: 'ORIC' },
    { name: 'Muhammad Yasir', username: "yasir", email: 'yasir@juw.edu.pk', role: 'Researcher', faculty: 'Faculty of Business Administration', department: 'IT' },
    { name: 'Syed Abu Fahar', username: "fahar", email: 'fahar@juw.edu.pk', role: 'Admin', faculty: 'Faculty of Allied Medical Sciences', department: 'IT' },
    { name: 'Syed Abu Fahar', username: "safahar", email: 'sa.fahar@outlook.com', role: 'Manager', faculty: 'Faculty of Science', department: 'IT' },
  ];


  return (
    <>
    <div className="whole-page-container">
      <Sidebar />
      <div className="user-management">
        <div className="user-management-card">
          <h4>Users and Roles</h4>
          <button type="button" className="create-user-btn" onClick={openModal}>
            ADD NEW USER
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
        <button>SEARCH</button>
        <h5>Current Users</h5>
        <div className="usermanagement-table-container">
          <div className='list add flex-col'>
            <div className="list-table">
              <div className="list-table-format title">
                <b>Name</b>
                <b>Username</b>
                <b>User Role</b>
                <b>Department</b>
                <b>Email</b>
                <b>Actions</b>
              </div>
              {users.map((user, index)=>{
                return (
                  <div key={index} className='list-table-format'>
                    <p>{user.name}</p>
                    <p>{user.username}</p>
                    <p>{user.role}</p>
                    <p>{user.department}</p>
                    <p>{user.email}</p>
                    <button>Edit</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
      </>
  );
};

export default UserManagement;

