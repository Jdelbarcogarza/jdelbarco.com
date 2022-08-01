
import React from 'react'
import SpotifyIcon from '../public/spotify.svg'
import GithubIcon from '../public/github.svg'
import LinkedinIcon from '../public/linkedin.svg'


export const SocialIcons = () => {
  const iconSizeMd = 16
  const iconSizeSm = 8

  return (
    <div className='flex w-full justify-around content-center h-full'>

      <a href='#'
      className={`w-16  h-16`}
      >
        <SpotifyIcon />
      </a>

      <a href='#'
      className={`w-16  h-16`}
      >
        <GithubIcon />
      </a>

      <a href='#'
      className={`w-16  h-16`}
      >
        <LinkedinIcon />
      </a>

    </div>
  )
}
