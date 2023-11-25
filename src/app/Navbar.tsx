import { Avatar, ButtonLink, CreatePostButton, SearchBar } from 'components/UI'
import { MobileNav, NavbarDropDown } from 'components/layout'

import Image from 'next/image'
import Link from 'next/link'
import { LogoutButton } from 'components/auth'
import { getUSerData } from 'utils/useUser'
import { useUser } from 'utils/useUser'

async function Navbar() {
  const user = useUser()
  const userData = await getUSerData()

  return (
    <>
      <nav className="py-2 px-6 border-b border-zinc-200 hidden w-full sm:fixed sm:top-0 sm:z-20 bg-white sm:flex sm:flex-row sm:items-center ">
        <Link href={'/'} className="flex items-center gap-3 flex-grow   ">
          <Image src={'/Logo.png'} width={115} height={32} alt={'logo'} />
        </Link>

        <div className="flex flex-grow items-center flex-row justify-center">
          <SearchBar />
        </div>
        <div className="flex flex-row items-center justify-end gap-4 flex-grow">
          {user ? (
            <>
              <CreatePostButton />
              <Avatar user={userData} />
              <NavbarDropDown />
            </>
          ) : (
            <ButtonLink href={'/account/login'}>Log in</ButtonLink>
          )}
        </div>
      </nav>
      <MobileNav />
    </>
  )
}

export default Navbar
