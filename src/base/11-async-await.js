export const getImagen = async () => {
  try {
    const apiKey = "47MfZUjq6bwWuVTpVcTpcmDhrYXurFy5";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = await data.images.original;

    return url;
  } catch (err) {
    return "No existe";
  }
};
