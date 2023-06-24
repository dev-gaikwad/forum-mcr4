import { createContext, useContext, useState } from 'react';

import { forumData as data } from '../data/data';

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  const [forumData, setForumData] = useState(data);

  const upvotePost = (postId) => {
    const updatedData = { ...forumData };

    const postIndex = updatedData.posts.findIndex(
      (post) => post.postId === postId
    );
    if (postIndex !== -1) {
      updatedData.posts[postIndex].upvotes =
        updatedData.posts[postIndex].upvotes + 1;

      setForumData(updatedData);
    }
  };
  const downvotePost = (postId) => {
    const updatedData = { ...forumData };

    const postIndex = updatedData.posts.findIndex(
      (post) => post.postId === postId
    );
    if (postIndex !== -1) {
      updatedData.posts[postIndex].downvotes =
        updatedData.posts[postIndex].downvotes + 1;

      setForumData(updatedData);
    }
  };

  const sortBy = (value) => {
    console.log(value);
  };
  return (
    <ForumContext.Provider
      value={{ forumData, upvotePost, downvotePost, sortBy }}
    >
      {children}
    </ForumContext.Provider>
  );
};

export const useForum = () => {
  return useContext(ForumContext);
};
