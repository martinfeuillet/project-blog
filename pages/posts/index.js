import React from 'react'
import AllPosts from '../../components/posts/AllPosts'

const DUMMY_POSTS = [
  {slug : 'getting-started-with-next-js',
  title : 'Getting Started with Next.js',
  image : 'getting-started-nextjs.png',
  excerpt : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisi euismod.',
  date : '2022-02-13'},
  {slug : 'getting-started-with-next-js2',
  title : 'Getting Started with Next.js',
  image : 'getting-started-nextjs.png',
  excerpt : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisi euismod.',
  date : '2022-02-13'},
  {slug : 'getting-started-with-next-js3',
  title : 'Getting Started with Next.js',
  image : 'getting-started-nextjs.png',
  excerpt : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod, nunc euismod euismod consectetur, nisi nunc ultricies nisl, euismod euismod nunc nisi euismod.',
  date : '2022-02-13'},
]

export default function AllPostsPage() {
  return (
    <>
      <AllPosts posts={DUMMY_POSTS} />
    </>
  )
}
