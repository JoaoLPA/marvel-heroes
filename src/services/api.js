import md5 from 'md5';

const baseURL = 'https://gateway.marvel.com/v1/public/';
const timeStamp = new Date().getTime();
const hash = md5(
  timeStamp +
    process.env.REACT_APP_PRIVATE_KEY +
    process.env.REACT_APP_PUBLIC_KEY
);

export const getChars = async (offset, callback) => {
  const charsUrl = `${baseURL}characters?ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}&limit=10&offset=${offset}`;
  try {
    const api = await fetch(charsUrl);
    const response = await api.json();
    return callback(undefined, response.data.results);
  } catch (error) {
    return callback(error, undefined);
  }
};

export const searchHero = async (hero, callback) => {
  const singleCharUrl = `${baseURL}characters?name=${hero}&ts=${timeStamp}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`;
  try {
    const api = await fetch(singleCharUrl);
    const response = await api.json();
    return callback(undefined, response.data.results);
  } catch (error) {
    return callback(error, undefined);
  }
};
