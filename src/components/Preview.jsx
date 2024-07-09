import PersonalPreview from './PersonalPreview';
import EducationPreview from './EducationPreview';
import JobPreview from './JobPreview';
import Button from './Button';
import '../styles/Preview.css';

function Preview({ personalInfo, educations, jobs, setSubmitted }) {
  return (
    <>
      <div className="preview">
        <PersonalPreview info={personalInfo} />
        <h2 className="section-title">Education</h2>
        {educations.map((education) => {
          return <EducationPreview key={education.id} education={education} />;
        })}
        <h2 className="section-title">Experience</h2>
        {jobs.map((job) => {
          return <JobPreview key={job.id} job={job} />;
        })}
      </div>
      <Button
        type={'button'}
        onClick={() => {
          setSubmitted(false);

          // Scroll to top of page
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}
        text={'Edit'}
      />
    </>
  );
}

export default Preview;
