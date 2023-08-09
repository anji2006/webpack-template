import React from 'react'
import {useRouteError} from 'react-router-dom'

import './error.css'

export default function RootError() {
  const error = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="root-error-main-box">
      <div className="root-error-box">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p className="error-msg ">
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  )
}
