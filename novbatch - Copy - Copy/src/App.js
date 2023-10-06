import React from 'react'
import Increamentor from './ErrorBoundary/Increamentor'
import ErrorBoundary from './ErrorBoundary/ErrorBoundary'

export default function App() {
  return (
    <div>
      <h1>Adfarrr</h1>
      <ErrorBoundary>
          <Increamentor/>
      </ErrorBoundary>
      <ErrorBoundary>
          <Increamentor/>
      </ErrorBoundary>
      <Increamentor/>
    </div>
  )
}
