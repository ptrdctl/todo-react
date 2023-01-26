import {useState} from "react";
import {Input} from "../Input/Input";
import {StyledControl} from "./Control.styles";


export const Control = ({addTodo}) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    if (e.code === 'Enter' && value.trim()) {
      addTodo(value.trim());
      setValue('');
    }
  };

  return(
    <StyledControl>
      <Input
        value={value}
        onKeyDown={handleSubmit}
        onChange={(e) => setValue(e.target.value)}
      />
      {/*<button onClick={}>+</button>*/}
    </StyledControl>
  )
};
