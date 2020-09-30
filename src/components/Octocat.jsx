import React, { Component } from 'react'
import cats from '../cats.json'

export function Octocat() {
  return (
    <div>
      <div className="catContainer">
        {cats.data.map((cats) => (
          <article>
            <figure>
              <a href={cats.link}>
                <img
                  src={cats.image}
                  width="400"
                  height="400"
                  alt={cats.name}
                />
              </a>
              <figcaption>
                <p>
                  #{cats.number}:&nbsp;
                  <a href={cats.link}>
                    <strong>{cats.name}</strong>
                  </a>
                </p>
                <ul>
                  {cats.authors.map((author) => (
                    <li>
                      <a href={author.link}>
                        <img src={author.image} width="24" height="24" alt="" />
                      </a>
                    </li>
                  ))}
                </ul>
              </figcaption>
            </figure>
          </article>
        ))}
      </div>
    </div>
  )
}
