const dataURL = 'https://api.jsonbin.io/b/6000126d8aa7af359da9dbb5';

const getData = () => {
  fetch(dataURL).then((res) => res.json());
};

export default getData;
