import Input from './Input';

function PersonalInput({ info, handleName, handleEmail, handlePhone }) {
  return (
    <>
      <Input
        label={'Name:'}
        id={'name'}
        type={'text'}
        value={info.name}
        onChange={handleName}></Input>
      <Input
        label={'Email:'}
        id={'email'}
        type={'email'}
        value={info.email}
        onChange={handleEmail}></Input>
      <Input
        label={'Phone number:'}
        id={'phone'}
        type={'tel'}
        value={info.phone}
        onChange={handlePhone}></Input>
    </>
  );
}

export default PersonalInput;
