// src/components/StudentForm.jsx
import React, { useState } from 'react';

const StudentForm = ({ onSubmit, onClose }) => {
  const [student, setStudent] = useState({ name: '', email: '', course: '' });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(student);
    onClose();
  };

  return (
    <div className="form-container">
        <h3>Add Student</h3>
        <form onSubmit={handleSubmit} className='Student-form'>
            <div className="form-group">
                <label>Name</label>
                <input name="name" onChange= {handleChange} value= {student.name} required />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input name="email" onChange= {handleChange} value= {student.email} required />
            </div>
            <div className="form-group">
                <label>Course</label>
                <input name="course" onChange=  {handleChange} value= {student.course} required />
            </div>
            <div className="button-group">
                <button type="submit" className="submit-btn">Submit</button>
                <button type="button" className="close-btn" onClick= {onClose}>Close </button>
            </div>
        </form>
    </div>
  );
};

export default StudentForm;