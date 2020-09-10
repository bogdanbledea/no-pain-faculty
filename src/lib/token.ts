export const getToken = () => {
  return localStorage.getItem('user');
}

export const setToken = (token: string) => {
  return localStorage.setItem('user', token);
}