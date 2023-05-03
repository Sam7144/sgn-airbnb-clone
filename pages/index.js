/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
import Head from 'next/head'
import Image from 'next/image'
import {sanityClient, urlFor} from '../sanity'
import Header from '@/components/Header3'
import Link from 'next/link'
import { isMultiple } from '@/utils'
import Footer2 from '@/components/footer'

export default function Home({properties}) {
  
  return (
    <div className='h-auto'>
      <Head>
        <title> SGN-airbnb-clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className='wrapper mt-[150px]'>
        {properties&&(
          <div className=" w-full border">
            <div className='w-[100%]  bg-[#f8f8f8] p-[20px] mx-auto'>
              <h1>places near you</h1>
              <div className=' w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto'>
                {properties.map((property)=>(
                    <Link href={`/properties/${property.slug.current}`}>
                  <div key={property._id} className='p-[10px]'>
                     <img src={urlFor(property.mainImage).auto("format")} className='
                    w-full  md:w-[400px] h-[400px]
                     rounded-[20px]
                     ' alt='' />
                     <p>{property.reviews.length} review{isMultiple(property.reviews.length)}</p>
                     <h1>{property.title}</h1>
  
                     <h3>${property.pricePerNight}/perNight</h3>
           
                  </div>
                  </Link>
                  
                ))}
              </div>
            </div>
            <div className='w-[50%]'></div>
          </div>    
        )}
      </main>
      
    </div>
  )
}

export const getServerSideProps=async()=>{
  const query='*[_type == "property"]'
  const properties=await sanityClient.fetch(query)
  console.log(properties)
  if(!properties.length){
    return{
      props:{
        properties:[]
      }
    }
  }
  else{
    return{
      props:{
        properties
      }
  }

}
}
