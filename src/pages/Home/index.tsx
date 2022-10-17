import { useFirstPrismicDocument } from '@prismicio/react'

export const Home = () => {
  const [document] = useFirstPrismicDocument()

  return (
    <div>
      {document && (
        <h1>{document?.data.text[0].text}</h1>
      )}
    </div>
  )
}
