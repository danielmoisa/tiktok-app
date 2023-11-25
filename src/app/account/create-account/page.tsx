import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SignUpForm from 'components/auth/SignUpForm'

function page() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex items-center gap-2 mb-4">
        <Image src={'/Logo.png'} width={115} height={32} alt={'logo'} />
      </div>
      <div className="my-8">
        <h1 className="text-center font-semibold text-gray-700">
          Create to your account
        </h1>
      </div>
      <SignUpForm />
      <div className=" my-8">
        Already have an account ?
        <span>
          <Link
            className=" font-semibold text-sky-500 mx-2"
            href={'/account/login'}
          >
            Login
          </Link>
        </span>
      </div>
    </div>
  )
}

export default page
