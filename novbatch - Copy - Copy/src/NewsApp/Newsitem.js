import React from 'react'

export default function Newsitem(props) {
  return (
    <div>
        <img src={props.urlToImage} alt="" />
        <div className="description">
            <h1 className="title">{props.title}</h1>
            <p>{props.description}</p>
            <a href={props.url}>URL</a>
        </div>
    </div>
  )
}
