import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%),
    0 0 2px rgb(0 0 0 / 7%);
  z-index: 9;
  width: 100%;
  height: 100px;
  margin-bottom: 100px;
  background-color: white;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

  button {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid black;
    background-color: white;

    &:hover {
      background-color: black;
      color: white;
      transition: all 0.25s ease-out;
    }
  }
`
