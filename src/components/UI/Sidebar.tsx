import Image from 'next/image'

function Sidebar() {
    return <div className="fixed left-0 top-[7%] p-5 font-bold text-lg">
        <p className="my-2">
            <a href="#" className="hover:bg-gray-100 px-3 py-1 rounded flex flex-row"><Image className='mr-2' src="/for-you.svg" width={36} height={24} alt="for you" />For You</a>
        </p>
        <p className="my-2">
            <a href="#" className="hover:bg-gray-100 px-3 py-1 rounded flex flex-row"><Image className='mr-2' src="/following.svg" width={36} height={24} alt="for you" />Following</a>
        </p>
        <p className="my-2">
            <a href="#" className="hover:bg-gray-100 px-3 py-1 rounded flex flex-row"><Image className='mr-2' src="/explore.svg" width={36} height={24} alt="for you" />Explore</a>
        </p>
        <p className="my-2">
            <a href="#" className="hover:bg-gray-100 px-3 py-1 rounded flex flex-row"><Image className='mr-2' src="/live.svg" width={36} height={24} alt="for you" />Live</a>
        </p>
    </div>
}

export default Sidebar;