import { VscGraph } from 'react-icons/vsc'

import { Container, LogoContainer } from './styles'

export const Footer = () => {
  return (
    <Container>
      <LogoContainer>
        <VscGraph color="rgba(3,169,244)" />
        <h1>Landing</h1>
      </LogoContainer>
    </Container>
  )
}
