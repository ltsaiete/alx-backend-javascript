export default function getResponseFromAPI() {
  return new Promise((resolve) => {
    setTimeout(resolve('Success'), 100);
  });
}
