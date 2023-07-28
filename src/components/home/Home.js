import React from 'react'
import Task from '../task/Task'
import Todo from '../todo/Todo'

const Home = () => {
  return (
    <div className='flex justify-center items-center h-screen  bg-slate-600 text-white'>
      <Todo/>
      <Task/>
    </div>
  )
}

export default Home