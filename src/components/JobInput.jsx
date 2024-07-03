import Input from './Input';
import TextArea from './TextArea';

function JobInput({ job, updateJob }) {
  function handleCompany(jobId, e) {
    updateJob(jobId, 'company', e.target.value);
  }

  function handlePosition(jobId, e) {
    updateJob(jobId, 'position', e.target.value);
  }

  function handleResponsibilities(jobId, e) {
    updateJob(jobId, 'responsibilities', e.target.value);
  }

  function handleStartDate(jobId, e) {
    updateJob(jobId, 'start', e.target.value);
  }

  function handleEndDate(jobId, e) {
    updateJob(jobId, 'end', e.target.value);
  }

  return (
    <div>
      <Input
        label={'Company:'}
        id={'company' + job.id}
        type={'text'}
        value={job.company}
        onChange={(e) => handleCompany(job.id, e)}
      />
      <Input
        label={'Position:'}
        id={'position' + job.id}
        type={'text'}
        value={job.position}
        onChange={(e) => handlePosition(job.id, e)}
      />
      <TextArea
        label={'Responsibilities:'}
        id={'responsibilities' + job.id}
        value={job.responsibilities}
        rows={4}
        cols={50}
        onChange={(e) => handleResponsibilities(job.id, e)}
      />
      <Input
        label={'Start date:'}
        id={'start' + job.id}
        type={'date'}
        value={job.start}
        onChange={(e) => handleStartDate(job.id, e)}
      />
      <Input
        label={'End date:'}
        id={'end' + job.id}
        type={'date'}
        value={job.end}
        onChange={(e) => handleEndDate(job.id, e)}
      />
    </div>
  );
}

export default JobInput;
