import styled from "styled-components";

export const SearchFormContainer = styled.form`

  display: flex;
  gap: 1rem;

  input {
    flex: 1;

    background: ${props => props.theme['gray-900']};
    color: ${props => props.theme['gray-300']};

    border: 0;
    border-radius: 6px;

    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    gap: .75rem;

    align-items: center;

    background: transparent;

    border: 1px solid ${props => props.theme['green-300']};
    border-radius: 6px;

    color: ${props => props.theme['green-300']};
    font-weight: bold;

    padding: 1rem;

    &:hover {
      background-color: ${props => props.theme['green-500']};;
      border-color: ${props => props.theme['green-500']};
      color: ${props => props.theme.white};

      transition: background-color 0.2s, border-color  0.2s, color 0.2s;
    }
  }
`
