import '../styles/EducationPreview.css';

function EducationPreview({ education }) {
  return (
    <div className="education-preview">
      <div className="school-and-degree">
        <p className="school">{education.school}</p>
        <p className="degree">{education.degree}</p>
      </div>
      <div>
        <p>
          {new Date(education.start).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            timeZone: 'UTC',
          })}{' '}
          -{' '}
          {new Date(education.end).toLocaleDateString('en-us', {
            year: 'numeric',
            month: 'short',
            timeZone: 'UTC',
          })}
        </p>
      </div>
    </div>
  );
}

export default EducationPreview;
