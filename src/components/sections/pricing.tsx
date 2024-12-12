
const pricingData = [
  {
    id: 1,
    title: "BRONCE",
    img: "/images/pricing/noto_star-1.png",
    description: "You can create up to 3 Bronze chains to invite up to 39 friends in each to win together",
    buys: "$100.00",
    revenue: "$211.50",
    color: "text-[#CD7F32]",
    bgColor: "bg-[#F0EBE6]",
  },
  {
    id: 2,
    title: "SILVER",
    img: "/images/pricing/noto_star-2.png",
    description: "You can create up to 3 Silver chains to invite up to 39 friends in each to win together",
    buys: "$200.00",
    revenue: "$540.00",
    color: "text-[#A6A6A6]",
    bgColor: "bg-[#F7F7F7]",
  },
  {
    id: 3,
    title: "GOLD",
    img: "/images/pricing/noto_star-3.png",
    description: "You can create up to 3 Gold chains to invite up to 39 friends in each to win together",
    buys: "$300.00",
    revenue: "$985.50",
    color: "text-[#E5C100]",
    bgColor: "bg-[#FFFBE5]",
  },
  {
    id: 4,
    title: "PLATINO",
    img: "/images/pricing/noto_star-4.png",
    description: "You can create up to 3 Platino chains to invite up to 39 friends in each to win together",
    buys: "$100.00",
    revenue: "$211.50",
    color: "text-[#85A68D]",
    bgColor: "bg-[#E6F2E9]",
  },
  {
    id: 5,
    title: "Diamante",
    img: "/images/pricing/noto_star-5.png",
    description: "You can create up to 3 Diamante chains to invite up to 39 friends in each to win together",
    buys: "$100.00",
    revenue: "$211.50",
    color: "text-[#8AC6D1]",
    bgColor: "bg-[#E6F0F2]",
  },
];


const Pricing = () => {
  return (
    <section className="lg:pt-10 px-[15px] lg:px-15">
      <div>
        <h2 className="uppercase text-secondary-foreground text-center lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold">GET THE RIGHT BELT FOR YOUR PURCHASES.</h2>
        <h3 className="text-center text-[rgba(82,131,171,0.60)] lg:text-[40px] text-3xl font-bold mt-4">INVESTING FROM $100.00</h3>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-4 mt-[64px]">
        {pricingData.map((card) => (
          <div
            key={card.id}
            className={`py-4 px-[9px] rounded-[20px] ${card.bgColor}`}
          >
            <img src={card.img} alt="img" className="mx-auto" />
            <h6 className={`text-center font-bold lg:text-[32px] text-[26px] mb-[13px] mt-2 ${card.color}`}>{card.title}</h6>
            <p className="text-sm text-black opacity-60 mb-6 text-center">{card.description}</p>
            <div className="mb-6 font-medium text-[#605E5C] text-xl text-center">
              <p>Buys: <span className={`${card.color}`}>{card.buys}</span></p>
              <p className="mt-4">Revenue: <span className={`${card.color}`}>{card.revenue}</span></p>
            </div>
            <button
              className={`w-full bg-transparent border border-[${card.color}] py-4 px-10 rounded-[20px] lg:text-2xl text-xl font-bold hover:bg-gray-200 transition-colors ${card.color}`}
            >
              Order Now
            </button>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Pricing