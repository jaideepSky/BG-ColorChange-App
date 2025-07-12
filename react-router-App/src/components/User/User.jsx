import React, { use } from 'react'
import { useParams } from 'react-router';

function User() {
    const {userId} = useParams();
  return (

    <div className='text-center font-semibold mt-1 mb-1 text-2xl '>User : {userId}</div>
  )
}

export default User