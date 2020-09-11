import React, { useState, useEffect, useContext, createContext } from "react";
import { Auth, Hub } from "aws-amplify";

const initialFormState = {
  username: "",
  password: "",
  email: "",
  authCode: "",
  formType: "signUp"
};

const authContext = createContext();

// Provider component that wraps your app and makes auth object
//  available to any child component that calls useAuth().
export function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

// Hook for child components to get the auth object
//  and re-render when it changes
export const useAuth = () => {
  return useContext(authContext);
}

// Provider hook tha creates auth object and handles state
function useProvideAuth() {
  const [formState, updateFormState] = useState(initialFormState);
  const [user, updateUser] = useState(null);

  useEffect(() => {
    checkUser();
    setAuthListener();
  }, []);

  const setAuthListener = async () => {
    Hub.listen("auth", (data) => {
      switch (data.payload.event) {
        case "signOut":
          updateFormState(() => ({ ...formState, formType: "signUp" }))
          break;
        default:
          return;
      }
    });
  }

  const checkUser = async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      updateUser(user);
      updateFormState(() => ({ ...formState, formType: "confirmed"}));
    } catch {
      updateUser(null);
    }
  }

  const onChange = (e) => {
    console.log(e);
    e.persist();
    updateFormState(() => ({...formState, [e.target.name]: e.target.value }))
  }

  const { formType } = formState;
  
  const signUp = async () => {
    const { username, email, password } = formState;
    await Auth.signUp({ username, password, attributes: { email }});
    updateFormState(() => ({ ...formState, formType: "confirmSignUp" }));
  }

  const confirmSignUp = async () => {
    const { username, authCode } = formState;
    await Auth.confirmSignUp(username, authCode);
    updateFormState(() => ({ ...formState, formType: "signIn" }));
  }

  const signIn = async () => {
    const { username, password } = formState;
    await Auth.signIn(username, password);
    updateFormState(() => ({ ...formState, formType: "confirmed"}));
  }

  // Return the user oject and auth methods
  return {
    user,
    formType,
    formState,
    signUp,
    confirmSignUp,
    signIn,
    onChange,
    updateFormState,
  }
}