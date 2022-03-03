import { FC, Fragment, HTMLAttributes } from 'react'
import { Cover } from '../misc/cover'
import { Heading } from '../misc/heading'
import { List } from '../misc/list'


const posts = await (await fetch("")).json()

export const HomePage:FC<HTMLAttributes<HTMLElement>> = (props) => {

  delete props.children

 console.log(posts)

  return (
    <>
      <Cover image="/img/home.jpg">
        <h1 className="s">
          Home
        </h1>
      </Cover>
      <main {...props}>

        <Fragment>
          <Heading icon="ci:trending-up" name="Trending"/>
          <div className="round-square">
            <List name="Hellow" percent="49%"/>
            <List name="NOOOO0" percent="27%"/>
            <List name="endWW3" percent="24%"/>
          </div>
        </Fragment>

        <Fragment>
          <Heading icon="ci:calendar" name="Latest Posts"/>

        </Fragment>
      </main>
    </>
  )
}