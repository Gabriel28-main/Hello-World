import React from 'react'
import Title from '@/app/component/title'
import Blablabla from './component/blablabla'
import Skill from './component/skill'
import Call from './component/callcall'

export default function page() {
  return (
    <div className='m-10 flex flex-col justify-center gap-5'>
      <Title />
      
      <Blablabla />

      <Skill  />

      <Call />
    </div>
  )
}
