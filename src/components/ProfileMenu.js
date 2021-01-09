import React from 'react';
import { Menu } from 'antd';
import { adminLogout } from '../actions/adminActions';
import { connect } from 'react-redux';

class ProfileMenu extends React.Component {
    
    logout = () => {
        this.props.dispatchLogoutAction();
    }
    
    render() {
     return (
        <Menu>
            <Menu.Item>
                <label onClick={() => this.logout()}>
                    Logout
               </label>
            </Menu.Item>
        </Menu>
    );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatchLogoutAction: () => { dispatch(adminLogout()) }
    }
  }
  
export default connect(null, mapDispatchToProps)(ProfileMenu);
