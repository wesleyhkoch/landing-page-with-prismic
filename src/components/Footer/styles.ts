import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: rgba(247, 250, 252);
  padding: 50px;
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  cursor: pointer;

  svg {
    width: 40px;
    height: 40px;
  }

  h1 {
    font-weight: bold;
  }
`
