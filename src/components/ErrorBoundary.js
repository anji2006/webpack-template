import React from 'react'

class ErrorBoundary extends React.Component {
  state = {hasError: false, error: undefined}

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    }
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }
    return this.props.children
  }
}

export default ErrorBoundary
