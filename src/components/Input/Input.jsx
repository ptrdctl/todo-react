import {StyledInput} from './Input.styles'

export const Input = ({value, onKeyDown, onChange}) => {
  return (
    <StyledInput
      type="text"
      value={value}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
};
