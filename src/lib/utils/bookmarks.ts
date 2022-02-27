import { CreateBookmark, RetriveUser } from "lib/utils/constants";

export interface IBookmark {
  bookmarkname: string;
  bookmarkurl: string;
  bookmarkdescription: string;
}

export const createBookmark = async (data: IBookmark, access_token: string) => {
  const res = await fetch(CreateBookmark, {
    method: "POST",
    headers: {
      access_token,
    },
    body: JSON.stringify(data),
  });

  const { status } = await res.json();
  return status === 200;
};

export const getBookmarks = async (access_token: string) => {
  const res = await fetch(RetriveUser, {
    headers: {
      access_token,
    },
  });
  const {
    status,
    data: { bookmarks },
  } = await res.json();

  return {
    status,
    bookmarks,
  };
};
