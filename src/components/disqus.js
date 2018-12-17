import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import Ads from './ads';

const Disqus = () => (
  <div >
    {() => console.log(process.env.CLIENT_ID)}
    <Ads client={process.env.CLIENT_ID} slot={process.env.SLOT_ID}/>
    <ReactDisqusComments
      shortname="blog-rfcgr8qzvq.disqus.com/embed.js"
      identifier={typeof window !== 'undefined' ? window.location.href : 0}
      title="Blog"
      onNewComment={(comment) => console.log(comment.text)}/>
  </div>
);

export default Disqus; 