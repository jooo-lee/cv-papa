import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import JobPreview from './JobPreview';
import Button from './Button';

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
      <Button
        type={'button'}
        onClick={() => setSubmitted(false)}
        text={'Edit'}
      />
    </div>
  );
}

export default Preview;
