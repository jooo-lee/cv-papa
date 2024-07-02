function EducationPreview({ education }) {
  return (
    <div>
      <p>School: {education.school}</p>
      <p>Degree: {education.degree}</p>
      <p>Start date: {education.start}</p>
      <p>End date: {education.end}</p>
    </div>
  );
}

export default EducationPreview;
