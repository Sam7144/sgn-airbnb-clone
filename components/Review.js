/* eslint-disable @next/next/no-img-element */
import { urlFor } from '@/sanity'
import Image from 'next/image'
import React from 'react'

function Review({review}) {
    console.log(review)
  return (
    <div>
        <h2>{review.traveller.name}</h2>
        <img src={urlFor(review.traveller.image).width(50).height(50).crop('focalpoint').auto('format')} alt='' />
        <h1 className='text-black'>rating:{review.rating}</h1>
    </div>
  )
}

export default Review