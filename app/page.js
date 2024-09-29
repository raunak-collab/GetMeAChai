import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="text-white flex flex-col justify-center md:px-0 px-4 gap-4 h-[44vh] items-center">
        <div className="font-bold text-center flex items-center gap-6 text-2xl md:text-4xl">
          Get Me A Chai
          <span>
            <Image src="/tea.gif" alt="Tea" width={55} height={55} />
          </span>
        </div>
        <p className="text-center md:text-left px-2 md:text-base text-sm">
          A crowdfunding platform for creators to fund their projects.
        </p>
        <p className="text-center md:text-left px-2 md:text-base text-sm">
          A place where your fans can buy a chai. Unleash the power of your fans and get your projects funded.
        </p>
        <div className="flex gap-3 py-1">
          <Link href="/login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Start Here
            </button>
          </Link>
          <Link href="/about">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container mx-auto w-[88vw] text-white mb-7 py-14 md:px-0 px-2">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">Your Fans can buy you a chai</h2>
        <div className="flex flex-col md:flex-row gap-7 justify-around">
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full px-[21px] py-[14px]" src="/man.png" width={90} height={90} alt="Man" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-[15px] text-center">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full px-5 py-5" src="/coin.gif" width={90} height={90} alt="Coin" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center text-[15px]">Your fans are available for you to help you</p>
          </div>
          <div className="item space-y-3 flex flex-col justify-center items-center">
            <Image className="bg-slate-400 rounded-full px-5 py-3" src="/group.png" width={90} height={90} alt="Group" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-[15px] text-center">Your fans are available for you to help you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      <div className="container flex flex-col items-center justify-center mx-auto w-[88vw] text-white py-14">
        <h2 className="text-3xl font-bold mt-3 mb-12 text-center">Learn more about us</h2>
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/jdiy6sz1-fk?si=-5xRiRLiUBPYt1ii"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}
