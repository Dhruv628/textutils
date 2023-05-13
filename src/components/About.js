import React from 'react'

export default function About(props) {
  return (
    <>
    <div className={` text-4xl tracking-wide font-semibold flex justify-center items-center h-96  bg-${props.mode} text-${props.textcolor}`} >
      <div>TexxtUtils is a utility that allows you to manipulate your text the way you want</div>
    </div>
    </>
  )
}
