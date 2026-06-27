// Resolve a file in /public to a URL that works under the GitHub Pages base path.
// import.meta.env.BASE_URL is "/myportfolio/" in production, "/" in dev.
export const asset = (path) => import.meta.env.BASE_URL + path.replace(/^\//, "");
