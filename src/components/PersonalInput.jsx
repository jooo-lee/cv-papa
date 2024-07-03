import Input from './Input';

function PersonalInput({ personalInfo, setPersonalInfo }) {
  function handleName(e) {
    setPersonalInfo({ ...personalInfo, name: e.target.value });
  }

  function handleEmail(e) {
    setPersonalInfo({ ...personalInfo, email: e.target.value });
  }

  function handlePhone(e) {
    setPersonalInfo({ ...personalInfo, phone: e.target.value });
  }

  return (
    <>
      <Input
        label={'Name:'}
        id={'name'}
        type={'text'}
        value={personalInfo.name}
        onChange={handleName}></Input>
      <Input
        label={'Email:'}
        id={'email'}
        type={'email'}
        value={personalInfo.email}
        onChange={handleEmail}></Input>
      <Input
        label={'Phone number:'}
        id={'phone'}
        type={'tel'}
        value={personalInfo.phone}
        onChange={handlePhone}></Input>
    </>
  );
}

export default PersonalInput;
