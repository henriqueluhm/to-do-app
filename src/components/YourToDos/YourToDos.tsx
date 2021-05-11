import React, { useState,useContext } from 'react'
import { ThemeContext } from 'styled-components';

import { Container } from './styles';

interface Props {
  toggleTheme(): void; 
}

const YourToDos: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);
  const [check, setCheck] = useState(false);


  //check={check} onClick={() => setCheck(!check)}
  
  return (
    <Container>
      <div>
        <p> 
          your things to do:
        </p>
      </div>

      <div className="check-box-group">
        <label className="custom-checkbox">
          <input type="checkbox" />
          <span className="checkmark"></span>
          <span className="label">checkbox label</span>
          <button>-</button>

        </label>

        <label className="custom-checkbox">
          <input type="checkbox"/>
          <span className="checkmark"></span>
          <span className="label">another label</span>
          <button>-</button>

        </label>
      </div>

      
    </Container>       
  );
}

export default YourToDos;