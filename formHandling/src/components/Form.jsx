import React from 'react'

function Form() {
  return (
    <div>
      <form className='flex flex-col items-center justify-center'>
        <input type="text" placeholder='Username' />
        <input type="text" placeholder='Email' />
        <input type="text" placeholder='Mobile Number' />
        <input type="text" placeholder='Password' />
        <input type="text" placeholder='Confirm Password' />
        <button type='submit'>Sign up</button>
      </form>
    </div>
  )
}

export default Form