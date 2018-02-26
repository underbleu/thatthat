import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LogoutButton } from 'components'
import { logout } from 'ducks/modules/auth'

class LogoutButtonContainer extends Component {
  render() {
    const { redirectToLogin, ...rest } = this.props
    return (
      redirectToLogin ?
        <Redirect to="/login" />
        : <LogoutButton {...rest} />
    )
  }
}

export default connect(
  state => ({
    redirectToLogin: state.auth.redirectToLogin,
  }),
  dispatch => ({
    onLogout: () => dispatch(logout()),
  }),
)(LogoutButtonContainer)