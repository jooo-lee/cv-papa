import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import JobPreview from './JobPreview';
import Button from './Button';
import '../styles/Preview.css';

function Preview({ personalInfo, educations, jobs, setSubmitted }) {
  return (
    <div className="preview">
      <PersonalPreview info={personalInfo} />
      <h2 className="section-title">Education</h2>
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
