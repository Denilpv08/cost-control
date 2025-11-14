import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertUsers } from "../index";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (session == null) {
          setUser(null);
        } else {
          setUser(session?.user.user_metadata);
          insertUsers(session?.user.user_metadata, session?.user.id);
          console.log("Evento", event);
          console.log("Session", session?.user.user_metadata);
        }
      }
    );
    return () => {
      authListener.subscription;
    };
  }, []);

  const insertUsers = async (dataProvider, idAuthSupabase) => {
    const p = {
      name: dataProvider.name,
      photo: dataProvider.picture,
      idauth_supabase: idAuthSupabase,
    };

    await InsertUsers(p);
  };

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
