import useSWR from "swr";

import { RetriveUser } from "lib/utils/constants";

const fetchAuth = (url: string) =>
  fetch(url, {
    headers: {
      access_token: String(window.localStorage.getItem("access_token")),
    },
  }).then((res) => res.json());

export const useUser = () => {
  const { data, error } = useSWR(RetriveUser, fetchAuth);
  if (error) {
    return {
      error,
      data: null,
    };
  }
  return {
    data: data.data,
    error: null,
  };
};
