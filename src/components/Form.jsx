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

  function loadExample() {
    setPersonalInfo({
      name: 'Jake Ryan',
      email: 'jake@su.edu',
      phone: '123-456-7890',
    });
    setEducations([
      {
        id: uuidv4(),
        school: 'Southwestern University',
        degree: 'Bachelor of Arts in Computer Science, Minor in Business',
        start: '2018-08-01',
        end: '2021-05-31',
      },
      {
        id: uuidv4(),
        school: 'Blinn College',
        degree: "Associate's in Liberal Arts",
        start: '2014-08-01',
        end: '2018-05-31',
      },
    ]);
    setJobs([
      {
        id: uuidv4(),
        company: 'Texas A&M University',
        position: 'Undergraduate Research Assistant',
        responsibilities: `• Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems \n• Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data \n• Explored ways to visualize GitHub collaboration in a classroom setting`,
        start: '2020-06-01',
        end: '',
        isCurrent: true,
      },
      {
        id: uuidv4(),
        company: 'Southwestern University',
        position: 'Information Technology Support Specialist',
        responsibilities: `• Communicate with managers to set up campus computers used on campus \n• Assess and troubleshoot computer problems brought by students, faculty and staff \n• Maintain upkeep of computers, classroom equipment, and 200 printers across campus`,
        start: '2018-09-01',
        end: '',
        isCurrent: true,
      },
    ]);
  }

  function clearResume() {
    setPersonalInfo({
      name: '',
      email: '',
      phone: '',
    });
    setEducations([
      {
        id: uuidv4(),
        school: '',
        degree: '',
        start: '',
        end: '',
      },
    ]);
    setJobs([
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

  return (
    <>
      <h1 className="app-title">CV Papa</h1>
      <div className="load-clear-btns">
        <Button type={'button'} onClick={loadExample} text={'Load example'} />
        <Button
          type={'button'}
          onClick={clearResume}
          text={'Clear resume'}
          className={'delete-btn'}
        />
      </div>
      <form
        onSubmit={() => {
          // Scroll to top of page
          document.body.scrollTop = document.documentElement.scrollTop = 0;
        }}>
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

            // Scroll to top of page
            document.body.scrollTop = document.documentElement.scrollTop = 0;
          }}
          text={'Generate my CV!'}
        />
      </form>
    </>
  );
}

export default Form;
