import {
  Container,
  TextContainer,
  ContentContainer,
  TextContentContainer,
  ContentCard
} from './styles'

import featureImg from '../../assets/feature.svg'

export const Home = () => {
  return (
    <>
      <Container>
        <TextContainer>
          <h1>The modern landing page for</h1>
          <h2>React developers</h2>
          <span>The easiest way to build a React landing page in seconds.</span>
        </TextContainer>
      </Container>
      <ContentContainer>
        <TextContentContainer>
          <h1>Your title here</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            malesuada nisi tellus, non imperdiet nisi tempor at.
          </span>
        </TextContentContainer>
        <ContentCard>
          <div>
            <h1>Your title here</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse bibendum, nunc non posuere consectetur, justo erat
              semper enim, non hendrerit dui odio id enim.
            </span>
          </div>
          <img src={featureImg} alt="Feature" />
        </ContentCard>
      </ContentContainer>
    </>
  )
}
