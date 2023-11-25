import Image from 'next/image'
import Link from 'next/link'
import LoginForm from 'components/auth/LoginForm'
function Login() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center gap-2 mb-8">
        <Image src={'/Logo.png'} width={115} height={32} alt={'logo'} />
      </div>
      <div>
        <h1 className="text-center font-semibold text-gray-700 mb-6">
          Login to your account
        </h1>
      </div>
      <LoginForm />
      <div className=" my-8">
        New user ?
        <span>
          <Link
            className=" font-semibold text-sky-500 mx-2"
            href={'/account/create-account'}
          >
            Sign up
          </Link>
        </span>
      </div>
    </div>
  )
}

export default Login
