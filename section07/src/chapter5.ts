const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //resolve(20);
    reject("Error Occured");
  }, 2000);
});

promise.then((response) => {
  console.log(response * 20);
});

promise.catch((err) => {
  if (typeof err === "string") {
    console.log(err);
  }
});

interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "post1",
        content: "post content",
      });
    }, 2000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id);
});
