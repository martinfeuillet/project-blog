import React from 'react'
import classes from './allPosts.module.css'
import PostsGrid from './PostsGrid'

export default function AllPosts(props) {
  return (
    <section className={classes.posts}>
        <h1>All Posts</h1>
        <PostsGrid posts={props.posts} />
    </section>
  )
}
