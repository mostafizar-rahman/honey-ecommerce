import { Input } from "../ui/input"

const Subscribe = () => {
    return (
        <section className="subscribe lg:px-15 px-[15px] lg:mt-[140px] mt-25">
            <h3 className="text-center lg:text-6xl text-5xl font-semibold mb-10">Get Your Order Now</h3>
            <Input
                placeholder="Type Your Email Here"
                className="lg:px-10 px-7 lg:py-5 border-[8px] rounded-full font-normal max-w-[688px] mx-auto"
            />
        </section>
    )
}

export default Subscribe