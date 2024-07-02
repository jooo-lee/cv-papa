import Section from './Section';
import Input from './Input';

function EducationInput({
  education,
  handleSchool,
  handleDegree,
  handleStartDate,
  handleEndDate,
}) {
  return (
    <Section name={'Education'}>
      <Input
        label={'School:'}
        id={'school'}
        type={'text'}
        value={education.school}
        onChange={(e) => handleSchool(e, education.id)}
      />
      <Input
        label={'Degree:'}
        id={'degree'}
        type={'text'}
        value={education.degree}
        onChange={(e) => handleDegree(e, education.id)}
      />
      <Input
        label={'Start date:'}
        id={'startDate'}
        type={'date'}
        value={education.start}
        onChange={(e) => handleStartDate(e, education.id)}
      />
      <Input
        label={'End date:'}
        id={'endDate'}
        type={'date'}
        value={education.end}
        onChange={(e) => handleEndDate(e, education.id)}
      />
    </Section>
  );
}

export default EducationInput;
