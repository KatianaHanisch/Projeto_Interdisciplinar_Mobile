import React, { createContext, useState } from "react";

import api from "../services/api";

import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [erroLogin, setErroLogin] = useState("");

  async function signIn(ra, password) {
    setLoadingAuth(true);

    try {
      const response = await api.post("/login", {
        ra: ra,
        cpf: password,
      });

      const user = response.data.user;

      await AsyncStorage.setItem("@ra", JSON.stringify(user.ra));
      await AsyncStorage.setItem("@nome", JSON.stringify(user.nome));
      await AsyncStorage.setItem("@sobrenome", JSON.stringify(user.sobrenome));
      await AsyncStorage.setItem("@curso", JSON.stringify(user.curso));

      setUser({
        user,
      });

      setLoadingAuth(false);
    } catch (err) {
      setErroLogin("Usuário ou senha incorreto");
      console.log("ERRO AO LOGAR ", err);
      setLoadingAuth(false);
      throw err;
    }
  }

  const limpaErro = () => {
    setErroLogin("");
  };

  async function signOut() {
    await AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        user,
        signIn,
        signOut,
        loadingAuth,
        erroLogin,
        limpaErro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
