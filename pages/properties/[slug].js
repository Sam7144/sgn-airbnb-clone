"use client";
import Header from "@/components/Header3";
import { Imagee } from "@/components/Image";
import Review from "@/components/Review";
import { sanityClient } from "@/sanity";
import { isMultiple } from "@/utils";
import Link from "next/link";

const Property = ({
  title,
  location,
  propertyType,
  mainImage,
  images,
  pricePerNight,
  beds,
  bedrooms,
  description,
  host,
  reviews,
}) => {
  const reviewAmount = reviews.length;
  console.log(title)
  return (
    <div className="wrapper">
    <div className="flex flex-col mx-[20px] my-[50px] mt-[150px] border shadow-sm">
      <h1>{title}</h1>
      <p>
        {reviewAmount} review{isMultiple(reviewAmount)}
      </p>
      <div className="grid grid-cols-1 md:gap-10 md:grid-cols-2 overflow-hidden">
        <div className="w-[100%] h-[270px] overflow-hidden">
          <Imagee identifier="main-image" image={mainImage} />
        </div>
        <div className="flex flex-wrap overflow-hidden">
          {images.map(({ _key, asset }, image) => (
            <Imagee key={_key} identifier="image" className='' image={asset} />
          ))}
        </div>
      </div>
      <div className="mt-[20px] text-center md:text-left md:flex justify-space-between">
        <div className="w-full md:w-[60%] mx-auto">
          <h2>
            {propertyType} hosted by {host?.name}
          </h2>
          <h4>
            {bedrooms} bedroom{isMultiple(bedrooms)} *{beds} bed
            {isMultiple(beds)}
          </h4>
          <h4>enhanced clean</h4>
          <p>
            This host is committed to Airbnbs 5-step enhanced cleaning process.
          </p>
          <h4>Amenities for everyday living</h4>
          <p>
            The host has equipped this place for long stays - kitchen, shampoo,
            conditioner, hairdryer included.
          </p>
          <h4>
            <b>House rules</b>
          </h4>
          <p>
            This place isnt suitable for pets andthe host does not allow parties
            or smoking.
          </p>
          
        </div>
        <div
            className="mx-auto w-[35%] h-[250px] border-[1px] rounded-md shadow-md border-purple-200 p-[24px] text-center
          flex justify-center items-center flex-col
          "
          >
            <h2>£{pricePerNight}</h2>
            <h4>
              {reviewAmount} review{isMultiple(reviewAmount)}
            </h4>

            <div className="w-[100%] bg-red-500 p-[15px] text-white rounded-[15px] border text-center border-yellow-500">
              Change Dates
            </div>
          </div>
      </div>
      <h1 className='text-2xl mt-10 mx-auto text-center'>Reviews</h1>
      <h4>{description}</h4>
      <h2>{reviewAmount} review{isMultiple(reviewAmount)} by</h2>
      {reviewAmount>0&&
      reviews.map((review)=><Review key={review._key} review={review}/>)
      
      
}
    </div>
    </div>
  );
};
export default Property;
export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  const query = `*[ _type == "property" && slug.current == $pageSlug][0]{
      title,
      location,
      propertyType,
      mainImage,
      images,
      pricePerNight,
      beds,
      bedrooms,
      description,
      host->{
        _id,
        name,
        slug,
        image
      },
      reviews[]{
        ...,
        traveller->{
          _id,
          name,
          slug,
          image
        }
      }
    }`;

  const property = await sanityClient.fetch(query, { pageSlug });

  if (!property) {
    return {
      props: null,
      notFound: true,
    };
  } else {
    return {
      props: {
        title: property.title,
        location: property.location,
        propertyType: property.propertyType,
        mainImage: property.mainImage,
        images: property.images,
        pricePerNight: property.pricePerNight,
        beds: property.beds,
        bedrooms: property.bedrooms,
        description: property.description,
        host: property.host,
        reviews: property.reviews,
      },
    };
  }
};
