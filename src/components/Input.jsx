function Input({ label, id, type, value, onChange, disabled = false }) {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <input
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          disabled={disabled}></input>
      </label>
    </>
  );
}

export default Input;
