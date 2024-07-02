import Input from './Input';

function EducationInput({
  education,
  handleSchool,
  handleDegree,
  handleStartDate,
  handleEndDate,
}) {
  return (
    <div>
      <Input
        label={'School:'}
        id={'school' + education.id}
        type={'text'}
        value={education.school}
        onChange={(e) => handleSchool(e, education.id)}
      />
      <Input
        label={'Degree:'}
        id={'degree' + education.id}
        type={'text'}
        value={education.degree}
        onChange={(e) => handleDegree(e, education.id)}
      />
      <Input
        label={'Start date:'}
        id={'start' + education.id}
        type={'date'}
        value={education.start}
        onChange={(e) => handleStartDate(e, education.id)}
      />
      <Input
        label={'End date:'}
        id={'end' + education.id}
        type={'date'}
        value={education.end}
        onChange={(e) => handleEndDate(e, education.id)}
      />
    </div>
  );
}

export default EducationInput;
