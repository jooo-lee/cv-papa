function Section({ children, name }) {
  return (
    <section>
      <h2>{name}</h2>
      {children}
    </section>
  );
}

export default Section;
