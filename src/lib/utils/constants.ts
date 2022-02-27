export const API_URI = String(process.env.API_URI);

export const SearchQueryAPI = (q: string) =>
  `${API_URI}/v1/query/search?q=${encodeURIComponent(q)}`;

export const RetriveGoogleOauth = String(process.env.OAUTH_URL);
