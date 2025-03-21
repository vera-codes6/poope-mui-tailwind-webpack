const Users = () => {
  return (
    <>
      Users
      <button className='bg-sky-500 hover:bg-sky-700 text-white dark:text-black bg-[#15b996]! font-bold px-8 py-1 rounded-4xl shadow-sm'>
        Click here
      </button>
      <input
        type='text'
        placeholder='type here'
        className='bg-white text-gray-900 invalid:border-pink-500 invalid:text-pink-600 focus:border-sky-500 focus:outline focus:outline-sky-500 focus:invalid:border-pink-500 
                  focus:invalid:outline-pink-500 disabled:border-gray-200 disabled:bg-gray-50 disabled:text-gray-500 disabled:shadow-none 
                  dark:disabled:border-gray-700 dark:disabled:bg-gray-800/20'
      />
      <div className='flex items-center gap-4 rounded-lg bg-white p-6 shadow-md outline outline-black/5 dark:bg-gray-800'>
        <span className='inline-flex shrink-0 rounded-full border border-pink-300 bg-pink-100 p-2 dark:border-pink-300/10 dark:bg-pink-400/10'>
          <svg className='size-6 stroke-pink-700 dark:stroke-pink-500'></svg>
        </span>
        <div>
          <p className='text-gray-700 dark:text-gray-400'>
            <span className='font-bold text-gray-950 dark:text-white'>Tom Watson </span> mentioned you in
            <span className='font-bold text-gray-950 dark:text-white'> Logo redesign </span>
          </p>
          <time className='mt-1 block text-gray-500' dateTime='9:37'>
            9:37am
          </time>
        </div>
      </div>
    </>
  )
}

export default Users
