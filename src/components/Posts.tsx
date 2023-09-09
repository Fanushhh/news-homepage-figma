export const Posts = () => {
  return (
    <section className="px-4 grid gap-8 mb-[80px] lg:col-span-full lg:grid-cols-3 lg:px-0 lg:mt-[71px]">
      <div className="flex gap-5  justify-center">
        <div className="">
          <img className="block max-w-[100px]" src="./images/image-retro-pcs.jpg" alt="retro pc" />
        </div>
        <div className="w-full">
            <p className="text-[32px] leading-[32px] font-bold text-grayish-blue pb-3">01</p>
            <p className="text-[18px] leading-[24px] font-extrabold pb-[10px] hover:text-soft-red hover:cursor-pointer transition-colors">Reviving Retro PCs</p>
            <p className="text-dark-grayish-blue text-[15px]">What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="flex gap-5 items-stretch">
        <div>
          <img className="block max-w-[100px]" src="./images/image-top-laptops.jpg" alt="retro pc" />
        </div>
        <div className="w-full">
            <p className="text-[32px] leading-[32px] font-bold text-grayish-blue pb-3">02</p>
            <p className="text-[18px] leading-[24px] font-extrabold pb-[10px] hover:text-soft-red hover:cursor-pointer transition-colors">Top 10 Laptops of 2022</p>
            <p className="text-dark-grayish-blue text-[15px]">Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="flex gap-5 items-start justify-center">
        <div>
          <img className="block max-w-[100px]" src="./images/image-gaming-growth.jpg" alt="retro pc" />
        </div>
        <div className="w-full">
            <p className="text-[32px] leading-[32px] font-bold text-grayish-blue pb-3">03</p>
            <p className="text-[18px] leading-[24px] font-extrabold pb-[10px] hover:text-soft-red hover:cursor-pointer transition-colors">The Growth of Gaming</p>
            <p className="text-dark-grayish-blue text-[15px]">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </section>
  );
};
