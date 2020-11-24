export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || `http://${window.location.hostname}:31234`;
export const GRAPHQL_URL = process.env.REACT_APP_GRAPHQL_URL || `http://${window.location.hostname}:31234/graphql`;
export const REFRESH_TOKEN_URL = process.env.REACT_APP_TOKEN_URL || `http://${window.location.hostname}:31234/refresh_token`;