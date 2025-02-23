import React from 'react'
import { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div className='bg-red-300'>{children}</div>
  )
}

export default layout