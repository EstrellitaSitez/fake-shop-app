import { createContext } from 'react';

const UserContext = createContext({
  user:{},
  cart:{},
  logOut: () => {},
  addToCart: () => {}
});

export default UserContext