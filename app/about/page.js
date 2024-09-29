import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <div className="text-white flex flex-col justify-center items-center gap-3 h-[44vh]">
        <div className="font-bold flex flex-col sm:flex-row items-center gap-6 text-3xl sm:text-4xl">
          About Us
          <div className="p-4">
            <Image className="rounded-xl" src="/chai_gif.gif" alt="About Us" width={90} height={90} />
          </div>
        </div>
        <p className="text-center font-medium w-[90%] md:w-[75%] lg:w-[65%]">
          Get Me A Chai is a crowdfunding platform designed for creators like you. Whether you're an artist, musician, writer, or developer, your fans can support you by buying you a chai and helping you reach your goals.
        </p>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* How It Works Section */}
      <div className="container mx-auto w-[90vw] text-white mb-7 py-14">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">How It Works</h2>
        <p className="text-center w-[90%] sm:w-[75%] mx-auto text-[15px] font-medium mb-8">
          Get Me A Chai makes it easy for creators to receive support from their fans. Fans can donate by "buying a chai" and leave messages of encouragement. Creators can set up their profiles, share their goals, and showcase their work while building a community of loyal supporters.
        </p>
        <div className="flex flex-col md:flex-row gap-7 justify-around items-center">
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[38%]">
            <div className="bg-white px-[13px] py-3 rounded-full">
              <Image className="rounded-full" src="/profile.webp" width={70} height={70} alt="Support" />
            </div>
            <p className="font-bold text-xl">1. Set Up Your Profile</p>
            <p className="text-center text-[15px]">Create a profile and share your projects or work that needs support.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[50%]">
            <div className="rounded-full">
              <Image className="rounded-2xl" src="/chai-2.gif" width={100} height={100} alt="Contribution" />
            </div>
            <p className="font-bold text-xl">2. Fans Buy You a Chai</p>
            <p className="text-center text-[15px]">Your fans contribute by buying you a chai, giving small but meaningful support.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[37.5%]">
            <div className="bg-white px-3 py-5 rounded-full">
              <Image src="/community-grow.jpg" width={80} height={80} alt="Growth" />
            </div>
            <p className="font-bold text-xl">3. Grow Your Community</p>
            <p className="text-center text-[15px]">Engage with your supporters and build lasting connections.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Benefits for Creators Section */}
      <div className="container mx-auto w-[90vw] text-white mb-7 py-14">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">Benefits for Creators</h2>
        <div className="flex flex-col md:flex-row gap-7 justify-around items-center">
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[43%]">
            <div className="bg-white px-[14px] py-3 rounded-full">
              <Image className="rounded-full" src="/support.gif" width={75} height={75} alt="Support" />
            </div>
            <p className="font-bold text-xl">Direct Support</p>
            <p className="text-center text-[15px]">Receive direct support from your fans through chai purchases, allowing you to focus on what you love.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[50%]">
            <div className="bg-white px-3 py-5 rounded-full">
              <Image className="rounded-full" src="/community.jpg" width={80} height={80} alt="Community" />
            </div>
            <p className="font-bold text-xl">Community Building</p>
            <p className="text-center text-[15px]">Engage and collaborate with a passionate community of supporters who believe in your vision.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-[43%]">
            <div className="bg-white px-2 py-[18px] rounded-full">
              <Image className="rounded-full" src="/revenue.webp" width={85} height={85} alt="Revenue" />
            </div>
            <p className="font-bold text-xl">Sustainable Revenue</p>
            <p className="text-center text-[15px]">Build a sustainable revenue stream while working on your creative projects.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Benefits for Fans Section */}
      <div className="container mx-auto w-[90vw] text-white mb-7 py-14">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">Benefits for Fans</h2>
        <p className="text-center w-[90%] sm:w-[75%] mx-auto text-[15px] font-medium mb-8">
          Fans who support creators on Get Me A Chai not only help their favorite artists continue their work but also gain the satisfaction of being part of their creative journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-7 justify-around items-center">
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-auto">
            <div className="bg-white px-[18px] py-4 rounded-full">
              <Image src="/impact.jpg" width={80} height={80} alt="Fans" />
            </div>
            <p className="font-bold text-xl">Meaningful Impact</p>
            <p className="text-center text-[15px]">Fans have the chance to make a difference by supporting the creators they love.</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center w-[90%] sm:w-auto">
            <div className="bg-white px-4 py-4 rounded-full">
              <Image src="/exclusive.jpg" width={80} height={80} alt="Content" />
            </div>
            <p className="font-bold text-xl">Exclusive Content</p>
            <p className="text-center text-[15px]">Some creators offer exclusive content or rewards to their chai supporters.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Community Engagement Section */}
      <div className="container mx-auto w-[90vw] text-white mb-7 py-14">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">Collaboration & Community Engagement</h2>
        <p className="text-center w-[90%] sm:w-[75%] mx-auto text-[15px] font-medium">
          Get Me A Chai is more than just a funding platform; it's a space for creators and fans to collaborate, connect, and engage. Creators can work together on shared projects, while fans become an integral part of their favorite creators' journeys.
        </p>
      </div>
    </>
  )
}

export default About;

// Static metadata
export const metadata = {
  title: 'About - Get Me a Chai'
}
