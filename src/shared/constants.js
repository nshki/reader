/* global RSSParser */
import 'rss-parser/dist/rss-parser.min.js';

export const namespace = 'rss-reader';
export const rssParser = new RSSParser();
export const corsProxy = '/.netlify/functions/parse';
