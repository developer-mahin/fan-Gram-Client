import SectionTitle from "../Common/SectionTitle";

const CelebrityBrandShoutouts = () => {
  return (
    <div className="pb-10">
      <SectionTitle className="text-center">
        Celebrity Brand Shoutouts
      </SectionTitle>
      <div className="grid grid-cols-5 gap-x-5 [&>*:nth-child(even)]:mt-[30px] mt-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[388px]  rounded-xl bg-gradient-to-t from-[#D84388]  to-[#D9D9D9] "
          ></div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-x-5 [&>*:nth-child(even)]:mt-[30px] ">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="w-full h-[388px]  rounded-xl bg-gradient-to-t from-[#D84388]  to-[#D9D9D9] "
          ></div>
        ))}
      </div>

      <SectionTitle className="font-normal text-center mt-10">
        {" "}
        1000+ brands • 850 mn+ reach
      </SectionTitle>
    </div>
  );
};

export default CelebrityBrandShoutouts;
