import { useState } from 'react';
import PersonalInput from './components/PersonalInput';
import PersonalPreview from './components/PersonalPreview';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const [personalInfo, setPersonalInfo] = useState({});

  function handleName(e) {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  }

  function handleEmail(e) {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  }

  function handlePhone(e) {
    setPersonalInfo({ ...personalInfo, phone: e.target.value });
  }

  if (!submitted) {
    return (
      <form action="">
        <PersonalInput
          info={personalInfo}
          handleName={handleName}
          handleEmail={handleEmail}
          handlePhone={handlePhone}
        />
        <button onClick={() => setSubmitted(true)}>Submit</button>
      </form>
    );
  } else {
    return (
      <>
        <PersonalPreview info={personalInfo} />
        <button onClick={() => setSubmitted(false)}>Edit</button>
      </>
    );
  }
}

export default App;
