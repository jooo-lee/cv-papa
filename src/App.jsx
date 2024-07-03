import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PersonalPreview from './components/PersonalPreview';
import EducationPreview from './components/EducationPreview';
import Form from './components/Form';

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
      <>
        <PersonalPreview info={personalInfo} />
        {educations.map((education) => {
          return <EducationPreview key={education.id} education={education} />;
        })}
        <button type="button" onClick={() => setSubmitted(false)}>
          Edit
        </button>
      </>
    );
  }
}

export default App;
