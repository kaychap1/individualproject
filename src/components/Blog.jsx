import React from 'react';
import styles from './Blog.module.css';
import Card from './Card';
import SearchBar from './SearchBar';

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: 'New Winter Menu',
      description: 'Come try our new winter drinks and pastries!',
      image: '/images/winter.jpg',
    },
    {
      id: 2,
      title: 'Christmas Merch',
      description: 'Come get our limited edition Christmas merch!',
      image: '/images/merch.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <div className={styles.content}>
        <div className={styles.posts}>
          {posts.map(post => (
            <Card key={post.id} title={post.title} description={post.description} image={post.image} />
          ))}
        </div>
        <div className={styles.sidebar}>
          <Card>
            <SearchBar />
          </Card>
          <Card>
            <h3>Categories</h3>
            <ul>
              <li>New Menu</li>
              <li>Merch</li>
              <li>Events</li>
              <li>Seasonal</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blog;
