import React from "react";
import PropTypes from "prop-types";
import Post from "./post";
import PostsList from "./postsList";
// import query from "query-string";
// import _ from "lodash";
import { useParams } from "react-router-dom";

const Posts = () => {
  const params = useParams();
  const posts = [
    { id: 1, label: "post 1" },
    { id: 2, label: "post 2" },
    { id: 3, label: "post 3" }
  ];

  // const search = query.parse(location.search);
  const { postId } = params;

  // const cropPosts = search && _(posts).slice(0).take(search.count).value();

  return (
    <>
      {postId
        ? (<Post id={postId} posts={posts} />)
        // : (<PostsList posts={cropPosts} />)}
        : (<PostsList posts={posts} />)}
    </>
  );
};

Posts.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default Posts;
