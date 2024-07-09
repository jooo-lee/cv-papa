import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form';
import Preview from './components/Preview';
import './styles/App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [educations, setEducations] = useState([
    {
      id: uuidv4(),
      school: '',
      degree: '',
      start: '',
      end: '',
    },
  ]);
  const [jobs, setJobs] = useState([
    {
      id: uuidv4(),
      company: '',
      position: '',
      responsibilities: '',
      start: '',
      end: '',
      isCurrent: false,
    },
  ]);
  const [submitted, setSubmitted] = useState(false);

  if (!submitted) {
    return (
      <Form
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educations={educations}
        setEducations={setEducations}
        jobs={jobs}
        setJobs={setJobs}
        setSubmitted={setSubmitted}
      />
    );
  } else {
    return (
      <Preview
        personalInfo={personalInfo}
        educations={educations}
        jobs={jobs}
        setSubmitted={setSubmitted}
      />
    );
  }
}

export default App;
