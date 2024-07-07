import Input from './Input';
import Button from './Button';

function EducationInput({ education, updateEducation, deleteEducation }) {
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
    <>
      <Button
        type={'button'}
        onClick={() => deleteEducation(education.id)}
        text={'Delete'}
        className={'delete-btn'}
      />
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
        label={'End date (or expected):'}
        id={'end' + education.id}
        type={'date'}
        value={education.end}
        onChange={(e) => handleEndDate(education.id, e)}
      />
    </>
  );
}

export default EducationInput;
