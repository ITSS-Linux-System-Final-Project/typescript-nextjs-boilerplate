// {
//   "error": false,
//   "category": "Dark",
//   "type": "twopart",
//   "setup": "How do we know Jesus wasn't black?",
//   "delivery": "He would have been hung from a tree, not a cross.",
//   "flags": {
//     "nsfw": false,
//     "religious": true,
//     "political": false,
//     "racist": true,
//     "sexist": false,
//     "explicit": false
//   },
//   "id": 110,
//   "safe": false,
//   "lang": "en"
// }

export interface JokeData {
  error: boolean;
  category: string;
  type: string;
  setup: string;
  delivery: string;
  id: string;
  safe: boolean;
  lang: string;
  flags: Flag;
}

interface Flag {
  nsfw: boolean;
  religious: boolean;
  political: boolean;
  racist: boolean;
  sexist: boolean;
  explicit: boolean;
}
