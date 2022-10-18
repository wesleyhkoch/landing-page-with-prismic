import { useFirstPrismicDocument } from '@prismicio/react'

import {
  Container,
  TextContainer,
  ContentContainer,
  TextContentContainer,
  ContentCard
} from './styles'

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

        {document?.data.body.map((item: any, i: number) => (
          <ContentCard
            style={{
              flexDirection: (i + 1) % 2 === 0 ? 'row-reverse' : 'row'
            }}
          >
            <div>
              <h1>{item.primary.title[0].text}</h1>
              <span>{item.primary.description[0].text}</span>
            </div>
            <img src={item.primary.image.url} alt="Feature" />
          </ContentCard>
        ))}
      </ContentContainer>
    </>
  )
}
