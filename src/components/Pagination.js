import React from 'react'

const Pagination = ({page, goAhead,goBack}) => {

  return (
    <div className='w-full text-center mt-4 mb-8'>
        <button className='border-2 p-2 border-indigo-400 text-blue-600 font-bold text-base rounded-l-xl border-r-0' onClick={goBack} >Previous</button>
        <button className='border-2 p-2 border-indigo-400 text-blue-600 font-bold text-base' >{page}</button>
        <button className='border-2 p-2 border-indigo-400 text-blue-600 font-bold text-base rounded-r-xl border-l-0' onClick={goAhead} >Next</button>
    </div>
  )
}

export default Pagination