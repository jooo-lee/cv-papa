import Input from './Input';

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

  const handleIsCurrent = (jobId, e) => {
    if (e.target.checked) {
      updateJob(jobId, 'end', '');
    }
    updateJob(jobId, 'isCurrent', e.target.checked);
  };

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
      <label htmlFor={'responsibilities' + job.id}>
        {'Responsibilities:'}{' '}
        <textarea
          value={job.responsibilities}
          id={'responsibilities' + job.id}
          rows={4}
          cols={50}
          onChange={(e) => handleResponsibilities(job.id, e)}></textarea>
      </label>
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
        disabled={job.isCurrent}
      />
      <label htmlFor={'isCurrent' + job.id}>
        {'I am currently working here'}{' '}
        <input
          type="checkbox"
          id={'isCurrent' + job.id}
          onChange={(e) => handleIsCurrent(job.id, e)}
          checked={job.isCurrent}
        />
      </label>
    </div>
  );
}

export default JobInput;
