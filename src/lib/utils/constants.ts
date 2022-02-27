export const API_URI = String(process.env.NEXT_PUBLIC_API_URI);

export const SearchQueryAPI = (q: string) =>
  `${API_URI}/v1/query/search?q=${encodeURIComponent(q)}`;

export const RetriveGoogleOauth = String(process.env.OAUTH_URL);

export const RetriveUser = `${API_URI}/v1/authorize/retrieveuser`;

export const CreateBookmark = `${API_URI}/v1/bookmark/createbookmark`;
