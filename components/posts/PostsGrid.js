import React from 'react'
import classes from './postsGrid.module.css'
import PostItem from './PostItem'

export default function PostsGrid(props) {
    const {posts} = props
  return (
    <ul className={classes.grid}>    
        {posts.map(post => (<PostItem key={post.slug} post={post} />))}
    </ul>
  )
}
