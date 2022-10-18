import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  background: #f7fafc;
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
    color: #03a9f4;
  }

  h1 {
    font-weight: 700;
  }
`
