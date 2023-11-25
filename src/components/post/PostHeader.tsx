import { Post, User } from 'types'

import { Avatar } from 'components/UI'
import Link from 'next/link'
import React from 'react'

function PostHeader({ user, post }: { user: User, post: Post }) {
  return (
    <div className="py-4 z-10 drop-shadow-sm  text-black flex gap-2 items-center w-full bg-gradient-to-b from-custom-shadow">
      <div className="flex gap-2 items-center flex-grow">
        <Avatar user={user} size={60} />
        <div className='flex flex-col justify-end'>
          <p className='font-bold'>{user.name}</p>
          <div>
            <Link href={`/posts/${post.id}`}>
              <p>{post.caption}</p>
            </Link></div>
        </div>
      </div>
    </div>
  )
}

export default PostHeader
