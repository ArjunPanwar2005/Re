interface IOG {
  image: string;
}

interface IReturn {
  og: IOG;
}

async function retriveOG(url: string) {
  const res = await fetch(
    `https://oge.now.sh/api?url=${decodeURIComponent(url)}`
  );
  const {
    og: { image },
  }: IReturn = await res.json();

  return image;
}

export default retriveOG;
