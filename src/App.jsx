import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Section from './components/Section';
import PersonalInput from './components/PersonalInput';
import PersonalPreview from './components/PersonalPreview';
import EducationInput from './components/EducationInput';
import EducationPreview from './components/EducationPreview';

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

  function handleName(e) {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  }

  function handleEmail(e) {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  }

  function handlePhone(e) {
    setPersonalInfo({ ...personalInfo, phone: e.target.value });
  }

  function handleSchool(e, educationId) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, school: e.target.value };
        } else {
          return education;
        }
      })
    );
  }

  function handleDegree(e, educationId) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, degree: e.target.value };
        } else {
          return education;
        }
      })
    );
  }

  function handleStartDate(e, educationId) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, start: e.target.value };
        } else {
          return education;
        }
      })
    );
  }

  function handleEndDate(e, educationId) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, end: e.target.value };
        } else {
          return education;
        }
      })
    );
  }

  if (!submitted) {
    return (
      <form action="">
        <Section name={'Personal Details'}>
          <PersonalInput
            info={personalInfo}
            handleName={handleName}
            handleEmail={handleEmail}
            handlePhone={handlePhone}
          />
        </Section>
        <Section name={'Education'}>
          {educations.map((education) => (
            <EducationInput
              key={education.id}
              education={education}
              handleSchool={handleSchool}
              handleDegree={handleDegree}
              handleStartDate={handleStartDate}
              handleEndDate={handleEndDate}
            />
          ))}
          <button
            type="button"
            onClick={() => {
              setEducations([
                ...educations,
                {
                  id: uuidv4(),
                  school: '',
                  degree: '',
                  start: '',
                  end: '',
                },
              ]);
            }}>
            Add education
          </button>
        </Section>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}>
          Submit
        </button>
      </form>
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
