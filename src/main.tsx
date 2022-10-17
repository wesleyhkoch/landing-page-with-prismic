import React from 'react'
import ReactDOM from 'react-dom/client'

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import { GlobalStyle } from './globalStyle'

import App from './App'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <PrismicProvider client={client}>
      <App />
    </PrismicProvider>
    <GlobalStyle />
  </React.StrictMode>
)
