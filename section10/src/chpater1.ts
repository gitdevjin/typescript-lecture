// Pick<T, K>
interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

type CustomPick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const pickExample: Pick<Post, "title" | "content"> = {
  title: "old Post",
  content: "old content",
};

const legacyPost: CustomPick<Post, "title" | "content"> = {
  title: "old Post",
  content: "old content",
};

//
// Omit<T, K>
type CustomOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const omitPostExample: Omit<Post, "title"> = {
  content: "old content",
  tag: [],
  thumbnailURL: "http",
};

const customOmitExample: CustomOmit<Post, "content"> = {
  title: "custom post",
  tag: [],
  thumbnailURL: "http",
};

//
//
//
// Record<K,V>
type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

type CustomRecord<K extends keyof any, V> = {
  [key in K]: V;
};

type Thumbnail = Record<
  "large" | "medium" | "small" | "watch",
  { url: string; size: number }
>;

const testThumbnailRecord: CustomRecord<
  "large" | "medium" | "small",
  { url: string }
> = {
  large: {
    url: "hello",
  },
  medium: {
    url: "hello",
  },
  small: {
    url: "hello",
  },
};

//
//
//
/// Bonus
const simpleObject = {
  name: "hello",
  age: 30,
};

type Keys = keyof typeof simpleObject; // "name" | "age"
