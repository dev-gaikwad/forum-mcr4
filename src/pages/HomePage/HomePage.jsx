import React from 'react';

import './Homepage.module.css';
import { useForum } from '../../context/ForumContext';
import PostCard from '../../components/PostCard/PostCard';
import Sidebar from '../../components/Sidebar/Sidebar';
import SortButton from '../../components/SortButton/SortButton';

const HomePage = () => {
  const forum = useForum();

  console.log('forumData', forum.forumData);

  return (
    <main>
      <Sidebar />
      <section>
        {forum.forumData.posts.map((post) => (
          <PostCard key={post.postId} postData={post} />
        ))}
      </section>
      <SortButton />
    </main>
  );
};

export default HomePage;
