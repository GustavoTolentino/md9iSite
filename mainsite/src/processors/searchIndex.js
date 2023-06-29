import Fuse from 'fuse.js';
import data from './../data/searchData.json';

const options = {
  includeScore: true,
  // keys: ['title', 'description', 'content'], // campos a serem pesquisados
  keys: ['title', 'description'], // campos a serem pesquisados
};

const index = new Fuse(data, options);

export default index;