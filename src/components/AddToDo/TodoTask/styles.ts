import styled from 'styled-components';

export const Container = styled.div`
.check-box-group {
  display: flex;
  flex-direction: column;
  margin: 2.5rem 4rem;
}

.custom-checkbox {
  cursor: pointer;
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.custom-checkbox .label {
  font-size: 1em;
  margin: 0.5rem 1.5rem;
}

.custom-checkbox .checkmark {
  width: 30px;
  height: 30px;
  border: 2px solid #9b9b9b;
  display: inline-block;
  border-radius: 3px;
  background: #222 url(https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png) center/1250% no-repeat;
  transition: background-size 0.2s ease;
}

.custom-checkbox input:checked + .checkmark {
  background-size: 60%;
  transition: background-size 0.25s cubic-bezier(0.7, 0, 0.18, 1.24);
}

.custom-checkbox input {
  display: none;
}

button {
  cursor: pointer;
  width: 2.25rem;
  height: 3rem;
  border-radius: 30px;
  border: 2px solid ${props => props.theme.colors.lines};
  font-size: 1.8rem;
  background-color: ${props => props.theme.colors.lines};
  outline: none;
  color: #222;
  
  transition: all linear 0.2s;

}

button:hover {
  background-color: #222;
  border: 2px solid #737373;
  color: #fff;

}
`;