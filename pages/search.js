/* eslint-disable @next/next/no-img-element */
'use client'
import Header from "@/components/Header3";
import React from "react";
import { format } from "date-fns";
import { useRouter } from "next/router";
import { sanityClient, urlFor } from "@/sanity";
import Link from "next/link";
import { isMultiple } from "@/utils";
import Footer2 from "@/components/footer";
import Image from "next/image";
import { HeartIcon, StarIcon } from "@heroicons/react/24/solid";
function Search({ properties }) {
  const router = useRouter();
  const { location, noOfGuests, startDate, endDate } = router.query;
  console.log(startDate);
  //const startDatee=startDate.toString();
  const propertyName = properties.filter(
    (val) => val.locationOfProperty === router.query.location
  );
  console.log(propertyName);
  return (
    <div className="h-auto">
      <main className="mt-[100px] wrapper">
        <section className="  pt-14 px-6">
          <h1 className="text-2xl">Stays in {router.query.location}</h1>
          <p className="text-sm">
            300 + Stays in {router.query.location} from {startDate}-TIO-
            {endDate} {noOfGuests} guests
          </p>
          <h1 className="text-2xl font-semibold mb-6 mt-2">stays in mars</h1>
          <div className="hidden lg:flex space-x-3 text-gray-800 whitespace-nowrap mb-4">
            <p className="search">cancellation flexibility</p>
            <p className="search">Type Of Place</p>
            <p className="search">price</p>
            <p className="search">Rooms And Bed</p>
          </div>
        </section>
        {propertyName && (
          <div className=" w-full  ">
            <div className="w-[100%]  bg-[#f8f8f8] p-[20px] mx-auto">
              <div className=" w-full">
                {propertyName.map((property) => (
                  <Link href={`/properties/${property.slug.current}`} key={property._id}>
                  <div  className="p-[10px] flex hover:shadow-lg mb-3 rounded-md bg-white ">
                    <img
                      src={urlFor(property.mainImage)}
                      className="
                    w-40 h-24  md:w-[300px] md:h-[300px]
                     rounded-[20px]
                     "
                      alt=""
                    />
                    <div className="flex flex-col r w-full gap-3 ml-7 md:w-1/2">
                      <div className="flex justify-between ">
                        {property.locationOfProperty}
                        <HeartIcon className="h-7 cursor-pointer text-gray-100"/>
                      </div>
                      <h1 className="text-2xl">{property.title}</h1>
                      <div className='border-b pt-2 w-10 flex '/>
                      <p cla ssName='pt-2  text-sm text-gray-500 text-grow'>{property.description}</p>
                      
                      
                      <p className="pt-2  text-sm text-gray-500 flex-grow">
                        {property.bedrooms} bedroom{isMultiple(property.bedrooms)} *{property.beds} bed
                        {isMultiple(property.beds)}
                      </p>
                      <p className='flex justify-between'>
                        <StarIcon className="h-5  text-red-500"/>
                        <h3 className="pt-2  text-sm text-gray-500 text-grow">${property.pricePerNight}/perNight</h3>
                      </p>
                    </div>
                  </div>
                  </Link>
                ))}

              </div>
            </div>
            <div className="w-[50%]"></div>
          </div>
        )}
      </main>
      
    </div>
  );
}

export default Search;
export const getServerSideProps = async () => {
  const query = '*[_type == "property"]';
  const properties = await sanityClient.fetch(query);
  if (!properties.length) {
    return {
      props: {
        properties: [],
      },
    };
  } else {
    return {
      props: {
        properties,
      },
    };
  }
};
