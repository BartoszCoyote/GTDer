export function signOutAction() {
    localStorage.clear();
    return {
      type: UNAUTH_USER
    };
  }