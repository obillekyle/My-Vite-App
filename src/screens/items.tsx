import { FC, HTMLAttributes } from 'react'


export const Items:FC<HTMLAttributes<HTMLElement>> = (props) => {

  delete props.children;

  return (
    <main {...props}>
      <h1 className='s'>Items</h1>
    </main>
  )
}