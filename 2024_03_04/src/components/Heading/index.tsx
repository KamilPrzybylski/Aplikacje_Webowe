import './index.scss'

export type HeadingType = 1 | 2 | 3 | 4 | 5 | 6

interface HeadingProps {
  title: string
  level: HeadingType
}

function Heading({title, level = 2 }: HeadingProps) {
  // return React.createElement(`h${level}`, {}, title)
  return <h1 className={`heading heading--${level}`}>{title}</h1>
}

export default Heading
