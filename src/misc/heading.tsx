import { Icon } from '@iconify/react';
import { FC, HTMLAttributes } from 'react'
import { copy } from './copy'

interface HeadingItems extends HTMLAttributes<HTMLHeadingElement> {
  icon?: string;
  name?: string;
}

export const Heading:FC<HeadingItems> = (p) => {

  const props = copy(p)

  props.className = ["flex", p.className].join(" ");
  
  delete props.name;
  delete props.icon;

  return (
    <h2 {...props}>
      <Icon icon={p.icon ?? ""}/>
      {p.name}
    </h2>
  )
}