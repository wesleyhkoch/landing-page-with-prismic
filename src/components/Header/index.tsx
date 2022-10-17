import { Container, ButtonsContainer } from "./styles"

export const Header = () => {
  return (
    <Container>
      <h1>Logo</h1>
      <ButtonsContainer>
        <button>Login</button>
        <button>Cadastre-se</button>
      </ButtonsContainer>
    </Container>
  )
}