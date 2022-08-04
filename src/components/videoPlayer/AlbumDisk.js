import React from 'react'

const AlbumDisk = ({albumCover}) => {
  return (
    <div className='album'>
        <img src={albumCover} alt="" />
    </div>
  )
}

export default AlbumDisk