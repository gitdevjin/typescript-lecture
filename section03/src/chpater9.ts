type Admin = {
  tag: "ADMIN";
  name: string;
  kickCount: number;
};

type Member = {
  tag: "MEMBER";
  name: string;
  point: number;
};

type Guest = {
  tag: "GUEST";
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// Bad way
function BadLogin(user: User) {
  if ("kickCount" in user) {
    console.log(`${user.name}, you kicked out ${user.kickCount} people`);
  } else if ("point" in user) {
    console.log(`${user.name}, you have ${user.point} points`);
  } else {
    console.log(`${user.name} you have visited ${user.visitCount} times`);
  }
}

// Better way
function login(user: User) {
  switch (user.tag) {
    case "ADMIN": {
      console.log(`${user.name}, you kicked out ${user.kickCount} people`);
      break;
    }
    case "MEMBER": {
      console.log(`${user.name}, you have ${user.point} points`);
      break;
    }
    case "GUEST": {
      console.log(`${user.name} you have visited ${user.visitCount} times`);
    }
  }
}

// ********** Example 2 ***********//

// This is the wrong way
type AsyncTaskWrong = {
  state: "LOADING" | "FAILED" | "SUCCESS";
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

type LoadingTask = {
  state: "LOADING";
};
type FailedTask = {
  state: "FAILED";
  error: {
    message: string;
  };
};
type SuccessTask = {
  state: "SUCCESS";
  response: {
    data: string;
  };
};

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

const loading: AsyncTask = {
  state: "LOADING",
};

const failed: AsyncTask = {
  state: "FAILED",
  error: {
    message: "Error Message",
  },
};

const success: AsyncTask = {
  state: "SUCCESS",
  response: {
    data: "Data",
  },
};

function asyncTaskFunc(task: AsyncTask) {
  switch (task.state) {
    case "LOADING": {
      console.log("Loading");
      break;
    }
    case "FAILED": {
      console.log(task.error.message);
      break;
    }
    case "SUCCESS": {
      console.log(task.response.data);
      break;
    }
  }
}
