export const isAuth = () => {
  if (typeof window !== "undefined") {
    if (window.localStorage.getItem("access_token")) {
      return true;
    }
    return false;
  }
  return null;
};
