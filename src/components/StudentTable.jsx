import React from 'react';

const StudentTable = ({ students, onEdit, onDelete }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Action</th>
                </tr>
            </thead>
        </table>
    )
};

export default StudentTable;