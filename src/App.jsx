import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Form from './components/Form';
import Preview from './components/Preview';
import './styles/App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Ahsoka Tano',
    email: 'ahsoka@gmail.com',
    phone: '123 456 7890',
  });
  const [educations, setEducations] = useState([
    {
      id: uuidv4(),
      school: 'University of Guelph',
      degree: 'BSc Agriculture',
      start: '2005-09-04',
      end: '2010-05-31',
    },
  ]);
  const [jobs, setJobs] = useState([
    {
      id: uuidv4(),
      company: 'Google',
      position: 'CEO',
      responsibilities: 'Making lots of money.',
      start: '1998-09-04',
      end: '2005-12-02',
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
