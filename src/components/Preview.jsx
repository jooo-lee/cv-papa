import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import JobPreview from './JobPreview';

function Preview({ personalInfo, educations, jobs, setSubmitted }) {
  return (
    <div>
      <PersonalPreview info={personalInfo} />
      {educations.map((education) => {
        return <EducationPreview key={education.id} education={education} />;
      })}
      {jobs.map((job) => {
        return <JobPreview key={job.id} job={job} />;
      })}
      <button type="button" onClick={() => setSubmitted(false)}>
        Edit
      </button>
    </div>
  );
}

export default Preview;
