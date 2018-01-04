import DOM from 'react-dom'
import React from 'react'
import Repo from './repo'
import App from './presenters/app'

const repo = new Repo()

DOM.render((
  <App repo={repo} />
), document.getElementById('root'))
