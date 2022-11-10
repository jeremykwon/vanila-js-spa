// 핵심은 location.pathname 와 같은 path를 찾아 view를 제공한다
const router = () => {
  const routes = [
    {
      path: "/",
      view: Home,
    },
    {
      path: "/posts",
      view: Posts,
    },
    {
      path: "/settings",
      view: Settings,
    },
  ];

  let matchRoute = routes.find((route) => route.path === location.pathname);
  const page = matchRoute ? new matchRoute.view() : new NotFound();

  document.querySelector("#root").innerHTML = page.getHtml();
};

// 뒤로 가기 할 때 데이터 나오게 하기 위함
window.addEventListener("popstate", () => {
  router();
});

window.addEventListener("pushstate", () => {
  router();
});

// history.pushState 설명 추가 할것
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    // a 태그가 있는 곳에서만 동작하도록 조건을 정의
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      history.pushState(null, null, e.target.href);
      router();
    }
  });
  router();
});

// popstate이벤트 설명

class Home {
  constructor() {
    document.title = "Home";
  }
  getHtml() {
    return `
            <h1>This is Home Page</h1>
        `;
  }
}

class Posts {
  constructor() {
    document.title = "Posts";
  }
  getHtml() {
    return `
            <h1>This is Posts Page</h1>
        `;
  }
}

class Settings {
  constructor() {
    document.title = "Settings";
  }
  getHtml() {
    return `
            <h1>This is Settings Page</h1>
        `;
  }
}

class NotFound {
  constructor() {
    document.title = "not found page";
  }
  getHtml() {
    return `
            <h1>not found page</h1>
        `;
  }
}


https://emewjin.github.io/211215/ -> 보고 다시 구현할 것