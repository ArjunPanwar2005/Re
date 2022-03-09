/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ReSearch Engine",
  titleTemplate: "%s | ReSearch Engine",
  defaultTitle: "ReSearch Engine",
  description: "An eduction search engine",
  canonical: "https://research.reylabs.xyz",
  openGraph: {
    url: "https://research.reylabs.xyz",
    title: "ReSearch Engine",
    description: "An eduction search engine",
    images: [
      {
        url: "https://cdn.statically.io/og/theme=dark/ReSearch%20Engine.jpg",
      },
    ],
    site_name: "ReSearch Engine",
  },
};

export default defaultSEOConfig;
