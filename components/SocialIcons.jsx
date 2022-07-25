
import React from 'react'
import SpotifyIcon from '../public/spotify.svg'
import GithubIcon from '../public/github.svg'
import LinkedinIcon from '../public/linkedin.svg'


export const SocialIcons = () => {
  const iconSize = 16

  return (
    <div className='flex w-full justify-around'>

      <a href='#'
      className= {`w-${iconSize} h-${iconSize}`}
      >
        <SpotifyIcon />
      </a>

      <a href='#'
      className= {`w-${iconSize} h-${iconSize}`}
      >
        <GithubIcon />
      </a>

      <a href='#'
      className= {`w-${iconSize} h-${iconSize}`}
      >
        <LinkedinIcon />
      </a>

    </div>
  )
}
