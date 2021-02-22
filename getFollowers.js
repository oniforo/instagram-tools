const sleep = ms => new Promise(res => setTimeout(res, ms));

var username = window.location.pathname.split('/')[1];
var details = await fetch(`https://instagram.com/${username}/?__a=1`)
  .then(res => res.json());
var followers = details.graphql.user.edge_followed_by.count;

document.querySelector(`a[href="/${username}/followers/"]`).click();
await sleep(2000);

var scrollDiv = document.querySelector('div[role=dialog] ul').parentElement;
var userList = document.querySelector('div[role=dialog] ul > div');

do {
  scrollDiv.scrollTop = scrollDiv.scrollHeight;
  await sleep(1000);
}
while (userList.childElementCount < followers);

var users = [...userList.querySelectorAll('span > a')];
users.map(user => user.innerHTML);

//https://i.instagram.com/api/v1/users/{user_id}/info/