import Link from "next/link";
import React from "react";

const Footer2 = () => {
  return (
    <div className="wrapper grid grid-cols-1 pb-[20px] gap-2 md:grid-cols-2 lg:grid-cols-4 mt-6 mx-auto">
        <div className='pl-3 '>
            <h1 className='text-2xl'>support</h1>
            <div className="flex flex-col gap-2">
                <Link href='/' legacyBehavior>
                    <a>Help center</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Air Cover</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Supporting People With Disabilities</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Cancellation Options</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Report A NeighbourHood Concern</a>
                </Link>    
            </div>
        </div>
        <div className='pl-3 '>
            <h1 className='text-2xl'>Community</h1>
            <div className="flex flex-col gap-2">
            <Link href='/' legacyBehavior>
                    <a>Combating Discrimination</a>
                </Link>
            </div>
        </div>
        <div className='pl-3' >
            <h1 className='text-2xl'>Hosting</h1>
            <div className="flex flex-col gap-2">
            <Link href='/' legacyBehavior>
                    <a>Airbnb Your Home</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>AirCover For Hosts</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Explore Hosting Resources</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Visit Our Community Forum</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>How To Host Responsibly</a>
                </Link>
            </div>
        </div>
        <div className='pl-3'>
            <h1 className='text-2xl'>Airbnb</h1>
            <div className="flex flex-col gap-2">
            <Link href='/' legacyBehavior>
                    <a>NewsRoom</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Learn About New Features</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Letters From Our Founders</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Careers</a>
                </Link>
                <Link href='/' legacyBehavior>
                    <a>Gifts Cards</a>
                </Link>
            </div>
        </div>
    </div>
  );
};

export default Footer2;
