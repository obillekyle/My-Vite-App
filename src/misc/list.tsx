import { FC, HTMLAttributes } from 'react'
import { copy } from './copy'

interface ListItems extends HTMLAttributes<HTMLDivElement> {
  percent? : string;
  name?: string;
}

export const List:FC<ListItems> = (p) => {

  const props = copy(p);

  delete props.percent
  delete props.children
  props.className = ["list", props.className].join(" ");

  return (
    <div {...props}>
      <div className="contain">
        <p>#{p.name}</p>
        <label>
          {p.percent} impressions
        </label>
      </div>
    </div>
  )
}