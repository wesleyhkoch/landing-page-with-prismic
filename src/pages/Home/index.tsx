import { useFirstPrismicDocument } from '@prismicio/react'

import {
  Container,
  TextContainer,
  ContentContainer,
  TextContentContainer,
  ContentCard
} from './styles'

import featureImg from '../../assets/feature.svg'

export const Home = () => {
  const [document] = useFirstPrismicDocument()

  return (
    <>
      <Container>
        <TextContainer>
          <h1>{document?.data.main_title[0].text}</h1>
          <h2>{document?.data.main_title_blue[0].text}</h2>
          <span>{document?.data.main_subtitle[0].text}</span>
        </TextContainer>
      </Container>
      <ContentContainer>
        <TextContentContainer>
          <h1>{document?.data.content_title[0].text}</h1>
          <span>{document?.data.content_subtitle[0].text}</span>
        </TextContentContainer>
        <ContentCard>
          <div>
            <h1>{document?.data.card_title[0].text}</h1>
            <span>{document?.data.card_subtitle[0].text}</span>
          </div>
          <img src={featureImg} alt="Feature" />
        </ContentCard>
      </ContentContainer>
    </>
  )
}
