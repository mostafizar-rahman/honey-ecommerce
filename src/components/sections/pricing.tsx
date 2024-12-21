import { pricingData } from "@/db/pricingData"
import { useTranslation } from "react-i18next"

const Pricing = () => {
  const { t } = useTranslation()
  return (
    <section className="lg:pt-10 px-[15px] lg:px-15">
      <div>
        <h2 className="uppercase text-secondary-foreground text-center lg:text-5xl text-4xl lg:leading-normal leading-normal font-bold">{t('get_the_right_belt')}</h2>
        <h3 className="text-center text-[rgba(82,131,171,0.60)] lg:text-[40px] text-3xl font-bold mt-4">{t("investment_from")}</h3>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-4 mt-[64px]">
        {pricingData.map(({ bgColor, buys, color, description, id, img, revenue, title }) => (
          <div
            key={id}
            className={`py-4 px-[9px] rounded-[20px] ${bgColor}`}
          >
            <img src={img} alt="img" className="mx-auto" />
            <h6 className={`text-center font-bold lg:text-[32px] text-[26px] mb-[13px] mt-2 ${color}`}>{title}</h6>
            <p className="text-sm text-black opacity-60 mb-6 text-center">{description}</p>
            <div className="mb-6 font-medium text-[#605E5C] text-xl text-center">
              <p>Buys: <span className={`${color}`}>{buys}</span></p>
              <p className="mt-4">Revenue: <span className={`${color}`}>{revenue}</span></p>
            </div>
            <button
              className={`w-full bg-transparent border border-[${color}] py-4 px-10 rounded-[20px] lg:text-2xl text-xl font-bold hover:bg-gray-200 transition-colors ${color}`}
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