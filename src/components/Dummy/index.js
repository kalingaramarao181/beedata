import React, { useState } from 'react';
import axios from 'axios';

function Dummy() {
    const [employeeId, setEmployeeId] = useState('');
    const [status, setStatus] = useState('');

    const handleEmployeeSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:3001/employee', {
                employee: employeeId,
                status: status,
            });
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div>
            <label>
                Employee ID:
                <input type="text" value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
            </label>
            <label>
                Status (in/out):
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </label>
            <button onClick={handleEmployeeSubmit}>Submit</button>
        </div>
    );
}

export default Dummy;
