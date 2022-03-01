import { FC, HTMLAttributes } from 'react'

export const Users:FC<HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <main {...props}>
      <h1 className='s'>Users</h1>
    </main>
  )
}