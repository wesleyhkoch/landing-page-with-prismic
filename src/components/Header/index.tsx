import { Container, LogoContainer, ButtonsContainer } from './styles'

import { VscGraph } from 'react-icons/vsc'

export const Header = () => {
  return (
    <Container>
      <LogoContainer>
        <VscGraph />
        <h1>Landing</h1>
      </LogoContainer>
      <ButtonsContainer>
        <button>GitHub</button>
        <button>Doc</button>
      </ButtonsContainer>
    </Container>
  )
}
