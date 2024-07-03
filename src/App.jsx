import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form';
import Preview from './components/Preview';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
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
  const [submitted, setSubmitted] = useState(false);

  if (!submitted) {
    return (
      <Form
        personalInfo={personalInfo}
        setPersonalInfo={setPersonalInfo}
        educations={educations}
        setEducations={setEducations}
        setSubmitted={setSubmitted}
      />
    );
  } else {
    return (
      <Preview
        personalInfo={personalInfo}
        educations={educations}
        setSubmitted={setSubmitted}
      />
    );
  }
}

export default App;
