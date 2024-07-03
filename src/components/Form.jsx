import { v4 as uuidv4 } from 'uuid';

import Section from './Section';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';

function Form({
  personalInfo,
  setPersonalInfo,
  educations,
  setEducations,
  setSubmitted,
}) {
  function updateEducation(educationId, property, value) {
    setEducations(
      educations.map((education) => {
        if (education.id === educationId) {
          return { ...education, [property]: value };
        } else {
          return education;
        }
      })
    );
  }

  return (
    <form>
      <Section name={'Personal Details'}>
        <PersonalInput
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </Section>
      <Section name={'Education'}>
        {educations.map((education) => (
          <EducationInput
            key={education.id}
            education={education}
            updateEducation={updateEducation}
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
}

export default Form;
