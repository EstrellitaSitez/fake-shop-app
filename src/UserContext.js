import React, { createContext } from 'react';

const UserContext = createContext({
  email: '',
  token: '',
  updateUser: () => {},
  clearUser: () => {},
});

export class UserProvider extends React.Component {
  
  constructor(props) {
    super(props);

    const initial = {
      email:'',
      token: '',
      updateUser: this.updateUser,
      clearUser: this.clearUser,
    }
    
    this.state = {...initial, ...this.getLocalUserItem() };
  }

  componentDidMount() {
      this.setState(this.getLocalUserItem());
      console.log("USER",this.getLocalUserItem())
  }

//if there is no user logged in, the item "user" will be {}
  getLocalUserItem() {
    const user = localStorage.getItem('user');
    let parsed = {};

    if ( user && user !== null ) {
      parsed = JSON.parse(user);
    }

    return parsed;
  }

  //update user on log in
  updateUser = newUser => {
      const userData = { email: newUser.email, token: newUser.token };
      localStorage.setItem('user', JSON.stringify(userData));
      this.setState(userData);
  };

  clearUser = () => {
    localStorage.removeItem('user');
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
}
}

export const UserCtx = UserContext;
export const UserConsumer = UserContext.Consumer;
