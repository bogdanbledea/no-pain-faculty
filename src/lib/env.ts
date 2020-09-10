export const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000';
export const GRAPHQL_URL = process.env.REACT_APP_BACKEND_URL ? `${process.env.REACT_APP_BACKEND_URL}/graphql` : 'http://localhost:4000/graphql';
export const REFRESH_TOKEN_URL = process.env.REACT_APP_BACKEND_URL ? `${process.env.REACT_APP_BACKEND_URL}/refresh_token` : 'http://localhost:4000/refresh_token';