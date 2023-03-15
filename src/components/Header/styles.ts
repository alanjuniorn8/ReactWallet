import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 0 1.5rem;

  max-width: 1120px;
  width: 100%;
`

export const NewTransationButton = styled.button`
  background: ${(props) => props.theme['green-500']};
  border: 0;
  border-radius: 6px;

  cursor: pointer;

  color: ${(props) => props.theme.white};
  font-weight: bold;

  height: 50px;

  padding: 0 1.25rem;

  &:hover {
    background-color: ${(props) => props.theme['green-700']};
    transition: background-color 0.2s;
  }
`
