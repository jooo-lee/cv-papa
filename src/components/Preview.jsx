import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';

function Preview({ personalInfo, educations, setSubmitted }) {
  return (
    <div>
      <PersonalPreview info={personalInfo} />
      {educations.map((education) => {
        return <EducationPreview key={education.id} education={education} />;
      })}
      <button type="button" onClick={() => setSubmitted(false)}>
        Edit
      </button>
    </div>
  );
}

export default Preview;
