/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/sanity'
import React from 'react'

export const Imagee = ({identifier,image}) => {
  return (
    <div className={identifier === "main-image" ? "main-image" : "image"}>
      <img src={urlFor(image).auto("format")} alt=''  />
    </div>
  )
}
