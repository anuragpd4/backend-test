require('dotenv').config();

const express = require('express'); // Express is declared as a constant.
// import express from "express"; // This syntax is called module js.

const app = express(); // Create express app.

const port = 3000; // Create a port variable to listen to.

const githubData = {
  login: 'anuragprasad',
  id: 22106148,
  node_id: 'MDQ6VXNlcjIyMTA2MTQ4',
  avatar_url: 'https://avatars.githubusercontent.com/u/22106148?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/anuragprasad',
  html_url: 'https://github.com/anuragprasad',
  followers_url: 'https://api.github.com/users/anuragprasad/followers',
  following_url:
    'https://api.github.com/users/anuragprasad/following{/other_user}',
  gists_url: 'https://api.github.com/users/anuragprasad/gists{/gist_id}',
  starred_url:
    'https://api.github.com/users/anuragprasad/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/anuragprasad/subscriptions',
  organizations_url: 'https://api.github.com/users/anuragprasad/orgs',
  repos_url: 'https://api.github.com/users/anuragprasad/repos',
  events_url: 'https://api.github.com/users/anuragprasad/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/anuragprasad/received_events',
  type: 'User',
  site_admin: false,
  name: null,
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 3,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2016-09-09T19:50:05Z',
  updated_at: '2021-05-21T07:24:20Z',
}; // An arbitrary object for testing res.json()

app.get('/gitgit', (req, res) => {
  res.json(githubData);
});

app.get('/', (req, res) => {
  res.send('Hello Anurag!');
});

app.get('/anurag', (req, res) => {
  res.send('HEHEHEHEheheheeh!!!!!!!');
});

app.get('/login', (req, res) => {
  res.send('<h1> HEHEHEHEHOOHOHOHOHOHOOOO </h1>');
}); // app.get() handles get requests on given route. res.send() is then used to send response on that route.

app.listen(process.env.PORT, () => {
  console.log(`Your app is listening on port ${process.env.PORT}`);
}); //app.listen() is used to create a server listening on the given port
