import '../styles/PersonalPreview.css';

function PersonalPreview({ info }) {
  return (
    <div className="personal-preview">
      <h1 className="name">{info.name}</h1>
      <div className="contact-info">
        <p>{info.email}</p>
        <p>{info.phone}</p>
      </div>
    </div>
  );
}

export default PersonalPreview;
