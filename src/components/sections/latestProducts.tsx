import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import SectionTItle from "../ui/sectionTItle"
import Card from "../ui/card";
import { cn } from "@/lib/utils";

interface Product {
  id: string | number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

interface LatestProductsProps {
  data: Product[];
  btnColor?: string,
  borderColor?: string,
  titleColor?: string
  sectionSpaceY?: string,
  sectionTitleBorderColor?: string,

}

const LatestProducts = ({ data, borderColor, titleColor, btnColor, sectionSpaceY, sectionTitleBorderColor }: LatestProductsProps) => {
  return (
    <section className={cn("lg:mt-30 mt-20", sectionSpaceY)}>
      <div className="text-center">
        <SectionTItle>
          Latest <span className={cn("inline-block relative after:absolute after:right-2.5 after:bottom-0 after:w-[95%] after:h-1 after:bg-primary", sectionTitleBorderColor)}>Products</span>
        </SectionTItle>
      </div>
      <div className="mt-10 pl-[15px] lg:pl-15">
        <Swiper

          spaceBetween={32}
          breakpoints={{
            0: {
              slidesPerView: 1.2
            },
            640: {
              slidesPerView: 1.7
            },
            768: {
              slidesPerView: 2.5
            },
            1024: {
              slidesPerView: 2.7
            },
            1200: {
              slidesPerView: 3.5
            }
          }}
        >
          {
            data.map(({ description, id, price, thumbnail, title }) => {
              return (
                <SwiperSlide key={id}>
                  <Card
                    description={description}
                    price={price}
                    thumbnail={thumbnail}
                    title={title}
                    borderColor={borderColor}
                    btnColor={btnColor}
                    titleColor={titleColor}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    </section>
  )
}

export default LatestProducts