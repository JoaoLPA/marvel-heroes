import md5 from 'md5';

const baseURL = 'https://gateway.marvel.com/v1/public/';
const timeStamp = new Date().getTime();
const hash = md5(
  timeStamp +
    process.env.REACT_APP_PRIVATE_KEY +
    process.env.REACT_APP_PUBLIC_KEY
);
const baseAuth = `ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`;

export const getHeroes = async (offset, callback) => {
  let charsUrl = `${baseURL}characters?${baseAuth}&limit=5`;
  if (offset) {
    charsUrl = `${baseURL}characters?${baseAuth}&limit=5&offset=${offset}`;
  }
  console.log(offset);
  try {
    const api = await fetch(charsUrl);
    const response = await api.json();
    return callback(undefined, response.data.results);
  } catch (error) {
    return callback(error, undefined);
  }
};

export const searchHero = async (hero, callback) => {
  const singleCharUrl = `${baseURL}characters?name=${hero}&${baseAuth}`;
  try {
    const api = await fetch(singleCharUrl);
    const response = await api.json();
    return callback(undefined, response.data.results);
  } catch (error) {
    return callback(error, undefined);
  }
};

export const getComics = async (list, callback) => {
  const comicsUrl = list.map((baseURL) => baseURL + '?' + baseAuth);

  try {
    const api = await Promise.all(
      comicsUrl.map((request) =>
        fetch(request).then((result) => result.json())
      )
    );
    return callback(undefined, api);
  } catch (error) {
    return callback(error, undefined);
  }
};
