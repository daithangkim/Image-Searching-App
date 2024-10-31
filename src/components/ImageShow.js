import React from 'react'

const ImageShow = ({image}) => {
  return (
    <img src={image.urls.small} alt={image.alt_description} />
  )
}

export default ImageShow
