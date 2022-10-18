import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 100px;
  background: #f7fafc;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 3rem;
    color: #000;
  }

  h2 {
    font-size: 3rem;
    color: #2990ec;
  }

  span {
    font-size: 1.5rem;
    color: #808080;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 100px;
`

export const TextContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  h1 {
    font-size: 2rem;
    color: #000;
  }

  span {
    font-size: 1rem;
    color: #808080;
  }
`

export const ContentCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 1.5rem;
    width: 50%;

    h1 {
      font-size: 1.875rem;
      font-weight: 700;
    }

    span {
      line-height: 2.25rem;
      word-break: break-word;
      color: #808080;
    }
  }

  img {
    padding: 1.5rem;
  }
`
