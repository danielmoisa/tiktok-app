'use client'

import Player from 'components/Player/Player'
import { Post } from 'types'
import PostFooter from './PostFooter'
import PostHeader from './PostHeader'
import { api_Url } from 'utils/consts'
import { pb } from 'utils/pocketbase'
import { useRouter } from 'next/navigation'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

function PostCard({ post }: { post: Post }) {
  const router = useRouter()
  const model = pb.authStore.model
  const videoUrl = `${api_Url}files/posts/${post.id}/${post.fileUrl}`

  const handleDelete = async () => {
    try {
      await pb.collection('posts').delete(post.id)
      await router.replace(`/profile/${model?.username}`)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div>
      <PostHeader user={post.expand.profile} post={post} />
      <div className='flex flex-row'>
        <div className="rounded-lg h-full flex flex-col justify-center overflow-hidden shadow-2xl relative mx-[-16px] sm:mx-0 sm:max-h-[720px]">
          <Player videoUrl={videoUrl} />
        </div>
        <PostFooter id={model?.id || ''} post={post} />

      </div>

    </div>
  )
}

export default PostCard
