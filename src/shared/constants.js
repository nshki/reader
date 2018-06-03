import Parser from 'rss-parser';

export const namespace = 'rss-reader';
export const localFeeds = `${namespace}-feeds`;
export const rssParser = new Parser();
export const corsProxy = 'https://cors-anywhere.herokuapp.com';