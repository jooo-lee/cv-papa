import Input from './Input';

function EducationInput({ education, updateEducation }) {
  function handleSchool(educationId, e) {
    updateEducation(educationId, 'school', e.target.value);
  }

  function handleDegree(educationId, e) {
    updateEducation(educationId, 'degree', e.target.value);
  }

  function handleStartDate(educationId, e) {
    updateEducation(educationId, 'start', e.target.value);
  }

  function handleEndDate(educationId, e) {
    updateEducation(educationId, 'end', e.target.value);
  }

  return (
    <div>
      <Input
        label={'School:'}
        id={'school' + education.id}
        type={'text'}
        value={education.school}
        onChange={(e) => handleSchool(education.id, e)}
      />
      <Input
        label={'Degree:'}
        id={'degree' + education.id}
        type={'text'}
        value={education.degree}
        onChange={(e) => handleDegree(education.id, e)}
      />
      <Input
        label={'Start date:'}
        id={'start' + education.id}
        type={'date'}
        value={education.start}
        onChange={(e) => handleStartDate(education.id, e)}
      />
      <Input
        label={'End date:'}
        id={'end' + education.id}
        type={'date'}
        value={education.end}
        onChange={(e) => handleEndDate(education.id, e)}
      />
    </div>
  );
}

export default EducationInput;
