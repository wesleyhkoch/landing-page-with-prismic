import { Container, LogoContainer, ButtonsContainer } from './styles'

import { VscGraph } from 'react-icons/vsc'

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <VscGraph color="rgba(3,169,244)" />
        <h1>Landing</h1>
      </LogoContainer>
      <ButtonsContainer>
        <button>GitHub</button>
        <button>Doc</button>
      </ButtonsContainer>
    </Container>
  )
}
