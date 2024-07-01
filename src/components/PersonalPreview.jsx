function PersonalPreview({ info }) {
  return (
    <div>
      <p>Name: {info.name}</p>
      <p>Email: {info.email}</p>
      <p>Phone number: {info.phone}</p>
    </div>
  );
}

export default PersonalPreview;
