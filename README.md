
# Minimal Reddit App

The goal was to create a Reddit app that allows users to view and search posts. It should also allow the user to load comments and view the popularity. In this project, I use React/Redux to store and display the results of fetching data using Reddit's JSON API.


## Badges

![HTML5][HTML5]
![CSS3][CSS3]
![JavaScript][JavaScript]
[![React][React.js]][React-url]
[![Redux][Redux.js]][Redux-url]
[![GitHub][GitHub]][GitHub-url]

[HTML5]: https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white
[CSS3]: https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
[Javascript]: https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Redux.js]: https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white
[Redux-url]: https://redux.js.org
[GitHub]: https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white
[GitHub-url]: https://github.com
## Installation

Install the project with npm. The project was created using Create React App, a now deprecated project. I suggest using [ViteJS](https://vitejs.dev/) for future React projects.

```bash
  npm install
  npm run start
```
    
## API Reference

Host:
```https://www.reddit.com```

#### Get all posts from subreddit

```http
  GET /r/${subreddit}.json
```

#### Usage:
```javascript
export const loadAllPosts = createAsyncThunk(
  'postsList/loadAllPosts',
  async (currentSubreddit) => {
    const response = await fetch(`https://www.reddit.com/${currentSubreddit}.json`);
    const json = await response.json();
    const postData = json.data.children.map((post) => post.data);
    return postData;
  }
);
```

#### Get comments from post

```http
  GET /r/${subreddit}/comments/${post_id}/${post_title}.json
  GET ${post_permalink}.json
```

The post_title is not exactly what is used here as the actual title is long and includes spaces, so the endpoint uses some shortened form with underscores handling space but I could not find that in the post data.

What I do use insted is ${post_permalink}

#### Usage

```javascript
export const loadAllComments = createAsyncThunk(
  'commentsList/loadAllComments',
  async (currentPost) => {
    const response = await fetch(`https://www.reddit.com${currentPost}.json`);
    const json = await response.json();
    const commentsData = json[1].data.children.map((reply) => reply.data)
    return commentsData;
  }
);
```
## Acknowledgments
* [Img Shields](https://shields.io)
* [GitHub Pages](https://pages.github.com)
* [CodeCademy](https://codecademy.com)
* [readme.so](https://readme.so)
## Authors

- [@callumskilling](https://www.github.com/callumskilling)
