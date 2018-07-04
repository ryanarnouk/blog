import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

console.log(window.location)

const Disqus = () => (
  <ReactDisqusComments
    shortname="blog-rfcgr8qzvq.disqus.com/embed.js"
    identifier={window.location.href}
    title="Blog"
    onNewComment={(comment) => console.log(comment.text)}/>
);

export default Disqus; 