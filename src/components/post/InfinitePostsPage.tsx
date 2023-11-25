import { Post } from 'types'
import PostCard from './PostCard'
import React from 'react'

function InfinitePostsPage({
  data,
  onMutate,
}: {
  data: Post[]
  onMutate: any
}) {
  const handleDelete = async () => {
    await onMutate()
  }

  return (
    <>
      {data.map((post: Post) => {
        return (
          <div
            key={post.id}
            className="max-w-[450px] mx-auto w-full h-screen flex flex-col justify-center snap-start"
          >
            <PostCard post={post} />
          </div>
        )
      })}
    </>
  )
}

export default InfinitePostsPage
