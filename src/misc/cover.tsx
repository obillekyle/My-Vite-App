import { FC, HTMLAttributes } from 'react'

interface CoverItems extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  image?: string;
}

export const Cover:FC<CoverItems> = (p) => {

  const props = {...p}

  props.className = ["cover", p.className].join(" ")
  props.style = {...p.style, background: `linear-gradient(to bottom, #0000, #000A 100%), url("${p.image}")`}

  delete props.image;

  return <div {...props}/>
}