function Input({ label, id, type, value, onChange }) {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <input type={type} value={value} id={id} onChange={onChange}></input>
      </label>
    </>
  );
}

export default Input;
