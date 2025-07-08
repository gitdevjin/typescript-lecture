// Partial<T>

interface Post {
  title: string;
  tag: string[];
  content: string;
  thumbnailURL?: string;
}

type CustomPartial<T> = {
  [key in keyof T]?: T[key];
};

const draft: CustomPartial<Post> = {
  title: "hello",
  content: "draft...",
};

//
//
// Required<T>

type CustomRequired<T> = {
  [key in keyof T]-?: T[key];
};

const draftWithThumbnail: CustomRequired<Post> = {
  title: "world",
  content: "darft with thumbnail",
  tag: ["ts", "js"],
  thumbnailURL: "http://....",
};

//
//
// Readonly

type CustomReadonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyDraft: CustomReadonly<Post> = {
  title: "hello world",
  content: "protected draft",
  tag: ["ts", "js"],
};
// readonlyDraft.content = "changed"; not possible since it is readonly
console.log(readonlyDraft.thumbnailURL);
