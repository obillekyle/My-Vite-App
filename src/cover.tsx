import { FC, HTMLAttributes } from 'react'

interface CoverItems extends HTMLAttributes<HTMLDivElement> {
  style?: React.CSSProperties;
  image?: string;
}

export const Cover:FC<CoverItems> = (props) => {

  const image = { background: `linear-gradient(to bottom, transparent, #000A 100%), url("${props.image}")`}

  return <div className="cover" style={image} {...props}/>
}