import { connect } from "react-redux"
import get from 'lodash/get'
import { Link } from 'react-router-dom'

import { signOut } from '../actions'

const Header = ({ loggedIn, signOut }) => {
  return (
    <div>
      <Link to='/'>Home</Link>
      {loggedIn
        ? <div onClick={signOut}>Sign Out</div>
        : <div>
          <Link to='/login'>Sign In</Link>
          <Link to='/register'>Register</Link>
        </div>
      }
    </div>)
}

const mapStateToProps = (state) => ({
  loggedIn: get(state, 'authentication.loggedIn'),
})

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(signOut()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

