import { Icon } from '@iconify/react'
import { FC, HTMLAttributes } from 'react'
import { Cover } from '../cover'

export const HomePage:FC<HTMLAttributes<HTMLElement>> = (props) => {

  delete props.children

  return (
    <>
      <Cover image="/img/home.jpg">
        <h1 className="s">
          Home
        </h1>
      </Cover>
      <main {...props}>

        <h2 className="header">
          <Icon icon="ic:sharp-trending-up"/>
          Trending
        </h2>
        <div className="round-square">
          <div className="list">
            <div className="contain">
              #Hello
            </div>
          </div>
          <div className="list">
            <div className="contain">
              #NOOOOOO
            </div>
          </div>
          <div className="list">
            <div className="contain">
              #WW3
            </div>
          </div>
        </div>
      </main>
    </>
  )
}