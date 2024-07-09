import { v4 as uuidv4 } from 'uuid';

import Section from './Section';
import PersonalInput from './PersonalInput';
import EducationInput from './EducationInput';
import JobInput from './JobInput';
import Button from './Button';
import '../styles/Form.css';

function Form({
  personalInfo,
  setPersonalInfo,
  educations,
  setEducations,
  jobs,
  setJobs,
  setSubmitted,
}) {
  function addEducation() {
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
  }

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

  function deleteEducation(educationId) {
    setEducations(
      educations.filter((education) => education.id !== educationId)
    );
  }

  function addJob() {
    setJobs([
      ...jobs,
      {
        id: uuidv4(),
        company: '',
        position: '',
        responsibilities: '',
        start: '',
        end: '',
        isCurrent: false,
      },
    ]);
  }

  /* 
  Use updater function to update state more than once before re-render,
  i.e. for resetting end date when isCurrent is checked
  */
  function updateJob(jobId, property, value) {
    setJobs((prevJobs) =>
      prevJobs.map((job) => {
        if (job.id === jobId) {
          return { ...job, [property]: value };
        } else {
          return job;
        }
      })
    );
  }

  function deleteJob(jobId) {
    setJobs(jobs.filter((job) => job.id !== jobId));
  }

  return (
    <>
      <h1 className="app-title">CV Generator</h1>
      <form>
        <Section name={'Personal Details'}>
          <div className="input-container">
            <PersonalInput
              personalInfo={personalInfo}
              setPersonalInfo={setPersonalInfo}
            />
          </div>
        </Section>
        <Section name={'Education'}>
          {educations.map((education) => (
            <div key={education.id} className="input-container">
              <EducationInput
                education={education}
                updateEducation={updateEducation}
                deleteEducation={deleteEducation}
              />
            </div>
          ))}
          <Button
            type={'button'}
            onClick={addEducation}
            text={'Add education'}
            className={'add-education'}
          />
        </Section>
        <Section name={'Work Experience'}>
          {jobs.map((job) => (
            <div key={job.id} className="input-container">
              <JobInput job={job} updateJob={updateJob} deleteJob={deleteJob} />
            </div>
          ))}
          <Button
            type={'button'}
            onClick={addJob}
            text={'Add job'}
            className={'add-job'}
          />
        </Section>
        <Button
          type={'submit'}
          onClick={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          text={'Generate my CV!'}
          className={'generate-cv-btn'}
        />
      </form>
    </>
  );
}

export default Form;
