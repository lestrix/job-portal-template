import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/jobs/')
      .then(response => {
        console.log(response.data); // Check the console to verify the data
        // Access the nested array
        setJobs(response.data[0]);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Job Portal</h1>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            <strong>{job.title}</strong> at {job.company}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;