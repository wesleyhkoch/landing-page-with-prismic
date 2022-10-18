import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: #f7fafc;
`

export const LogoContainer = styled.div`
  display: flex;
  padding: 30px;
  gap: 10px;

  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
    color: #03a9f4;
  }

  h1 {
    font-weight: 700;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

  button {
    border: none;
    background: none;

    font-size: 17px;
    font-weight: 700;
  }
`
