import header from "./assets/bg-pattern-card.svg";
import profilePic from "./assets/image-victor.jpg";
import backgroundTop from "./assets/bg-pattern-top.svg";
import backgroundBottom from "./assets/bg-pattern-bottom.svg";

function App() {
  return (
    <main className="w-[326px] h-[374px] sm:w-[350px] bg-white rounded-[15px] flex flex-col font-kumbhsans">
      <img src={header} alt="header" className="rounded-t-[15px] h-[140px]" />
      <div className="relative flex flex-col justify-center items-center gap-[8px] pt-[72px] pb-[24px]">
        <img
          src={profilePic}
          alt="profile pic"
          className="absolute w-[96px] h-[96px] rounded-full -top-[48px] outline outline-[5px] outline-white"
        />
        <div className="flex gap-[8.5px]">
          <h1 className="font-bold text-main text-[18px] leading-[22px]">
            Victor Crest
          </h1>
          <p className="text-subtext text-[18px] leading-[22px]">26</p>
        </div>
        <p className="text-subtext text-[14px] leading-[17px]">London</p>
      </div>
      <div className="h-[1px] bg-[#E8E9EC]" />
      <div className="flex  justify-between px-[40px] py-[24px]">
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <h1 className="font-bold text-main text-[18px] leading-[22px]">
            80K
          </h1>
          <p className="text-subtext text-[10px] leading-[12px] tracking-[1.5px]">
            Followers
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <h1 className="font-bold text-main text-[18px] leading-[22px]">
            803K
          </h1>
          <p className="text-subtext text-[10px] leading-[12px] tracking-[1.5px]">
            Likes
          </p>
        </div>
        <div className="flex flex-col justify-center items-center gap-[5px]">
          <h1 className="font-bold text-main text-[18px] leading-[22px]">
            1.4K
          </h1>
          <p className="text-subtext text-[10px] leading-[12px] tracking-[1.5px]">
            Photos
          </p>
        </div>
      </div>
      {/* <img
        src={backgroundTop}
        alt="background top"
        className="absolute -z-10 -left-1/4 -top-1/2"
      />
      <img
        src={backgroundBottom}
        alt="background bottom"
        className="absolute -z-10 -right-1/4 -bottom-1/2"
      /> */}
    </main>
  );
}

export default App;
