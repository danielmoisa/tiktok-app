'use client'

import { CommentList, LikeList, Post } from 'types'

import { HeartIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import LikeButton from './LikeButton'
import Link from 'next/link'
import Loading from 'components/UI/Loading'
import { PostFooterSkeleton } from 'components/UI'
import React from 'react'
import { api_Url } from 'utils/consts'
import { pb } from '../../utils/pocketbase'
import useSWR from 'swr'
import { useState } from 'react'

type IPostFooter = {
  post: Post
  id: string
}

function PostFooter({ post, id }: IPostFooter) {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const model = pb.authStore.model
  const isLikedfilter = encodeURIComponent(
    `post='${post.id}'&&profile='${model?.id}'`,
  )

  const likes = useSWR(
    `${api_Url}collections/likes/records?filter=(post='${post.id}')`,
    fetcher,
  ) as { data: LikeList }

  const comments = useSWR(
    `${api_Url}collections/comments/records?filter=(post='${post.id}')`,
    fetcher,
  ) as { data: CommentList }

  const isLiked = useSWR(
    `${api_Url}collections/likes/records?filter=(${isLikedfilter})`,
    fetcher,
  ) as { data: LikeList }
  if (!likes.data || !comments.data || !isLiked.data)
    return (
      <div className="absolute left-6 bottom-14 z-10 s:bottom-6">
        <PostFooterSkeleton />
      </div>
    )

  const liked = isLiked.data.totalItems > 0 ? true : false
  return (
    <div className="flex flex-col justify-end p-2 text-black bg-gradient-to-t from-custom-shadow">
      <div className="flex flex-col gap-4 items-center">
        <LikeButton
          totalLikes={likes.data.totalItems}
          liked={liked}
          postId={post.id}
          id={id}
        />
        <div className="flex gap-1 p-3 px-4 pr-5 rounded-full bg-zinc-200 bg-opacity-30 backdrop-blur-sm">
          <button >
            <Image src="/comments.svg" width={24} height={24} alt="comments icon" />
          </button>
        </div>
        <div className="flex gap-1 p-3 px-4 pr-5 rounded-full bg-zinc-200 bg-opacity-30 backdrop-blur-sm">
          <button >
            <Image src="/fav.svg" width={24} height={24} alt="comments icon" />
          </button>
        </div>
        <div className="flex gap-1 p-3 px-4 pr-5 rounded-full bg-zinc-200 bg-opacity-30 backdrop-blur-sm">
          <button >
            <Image src="/share.svg" width={24} height={24} alt="comments icon" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default PostFooter
