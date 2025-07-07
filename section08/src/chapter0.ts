//Indexed Access Type
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post["author"]) {
  //Post["author"]["id"] this is also possible
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: "hello",
  content: "world",
  author: {
    id: 1,
    name: "jin",
  },
};

//////
//////
////// Example 2
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const postList: PostList[number] = {
  title: "hello",
  content: "world",
  author: {
    id: 1,
    name: "jin",
  },
};

function printAuthorInfoList(author: PostList[0]["author"]) {
  console.log(`${author.name}-${author.id}`);
}

///
///
/// Example 3
type Tup = [number, string, boolean];
type Tup0 = Tup[0]; // number
type Tup1 = Tup[1]; // string
type Tup2 = Tup[2]; // boolean
type Tupnum = Tup[number]; // number | string | boolean
