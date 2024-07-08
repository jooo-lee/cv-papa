import '../styles/JobPreview.css';

function JobPreview({ job }) {
  return (
    <div className="job-preview">
      <div className="position-and-start-end">
        <p className="position">{job.position}</p>
        <p>
          {new Date(job.start).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
          })}{' '}
          -{' '}
          {job.isCurrent
            ? 'Present'
            : `${new Date(job.end).toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
              })}`}
        </p>
      </div>
      <p className="company">{job.company}</p>
      <p className="responsibilities">{job.responsibilities}</p>
    </div>
  );
}

export default JobPreview;
