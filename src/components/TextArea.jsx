function TextArea({ label, id, value, rows, cols, onChange }) {
  return (
    <>
      <label htmlFor={id}>
        {label}{' '}
        <textarea
          value={value}
          id={id}
          rows={rows}
          cols={cols}
          onChange={onChange}></textarea>
      </label>
    </>
  );
}

export default TextArea;
