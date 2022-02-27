interface IReturn {
  image: string;
}

async function retriveOG(url: string) {
  const res = await fetch(
    `https://oge.now.sh/api?url=${decodeURIComponent(url)}`
  );
  const { image }: IReturn = await res.json();

  return image;
}

export default retriveOG;
