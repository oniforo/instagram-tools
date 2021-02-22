const sleep = ms => new Promise(res => setTimeout(res, ms));

var tagname = window.location.pathname.split('/')[3];
var details = await fetch(`${window.location.href}?__a=1`)
  .then(res => res.json());
var topPosts = details.graphql.hashtag.edge_hashtag_to_top_posts.edges;

var nofLikes = topPosts[0].node.edge_liked_by.count;
var nofComments = topPosts[0].node.edge_media_to_comment.count;

var caption = topPosts[0].node.edge_media_to_caption.edges[0].node.text.split('#');
caption.shift();
caption.map(hashtag => hashtag.split(' ')[0]);