import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import server from '../util/server';

const AuthContext = createContext();

export function AuthProvider(props) {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const userRes = await axios.get(`${server}/users/loggedin`);
    setUser(userRes.data);
    console.log(userRes.data);
  }

  return (
    <AuthContext.Provider value={{ user, getUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
