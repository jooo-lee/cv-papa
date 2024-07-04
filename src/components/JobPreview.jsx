function JobPreview({ job }) {
  return (
    <div>
      <p>Company: {job.company}</p>
      <p>Position: {job.position}</p>
      <p>Responsibilities: {job.responsibilities}</p>
      <p>Start date: {job.start}</p>
      <p>{job.isCurrent ? 'Present' : `End date: ${job.end}`}</p>
    </div>
  );
}

export default JobPreview;
