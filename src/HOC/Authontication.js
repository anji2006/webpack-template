import React from 'react'

const Auth = WrapperComponent => props => {
  const token = localStorage.getItem('token')
  if (!token) return <WrapperComponent {...props} />
  return <div> this login Page</div>
}

export default Auth
