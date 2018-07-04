import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';

const Disqus = () => (
  <ReactDisqusComments
    shortname="blog-rfcgr8qzvq.disqus.com/embed.js"
    identifier={typeof window !== 'undefined' ? window.location.href : 0}
    title="Blog"
    onNewComment={(comment) => console.log(comment.text)}/>
);

export default Disqus; 