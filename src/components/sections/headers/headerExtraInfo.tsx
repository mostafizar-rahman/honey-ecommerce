import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { countriesList } from "@/db/countriesList"

const HeaderExtraInfo = () => {
    const [selectCountry, setSelectCountry] = useState("")

    return (
        <>
            <Select value={selectCountry} onValueChange={value => setSelectCountry(value)}>
                <SelectTrigger className={`min-w-[142px] px-2 py-0.5 h-auto rounded-none border-none text-2xl leading-relaxed font-bold text-[#666] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] focus:hidden`}>
                    <div className='flex items-center gap-2'>
                        <SelectValue placeholder="English" />
                        {selectCountry ? "" : <img src={"/images/flag/us.png"} alt='img' className="w-[18px]" />}
                    </div>
                </SelectTrigger>
                <SelectContent className={`shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] border-none bg-background`} >
                    {
                        countriesList.map(({ language, code, flag }) => {
                            return (
                                <SelectItem key={code} value={language} className="text-2xl leading-relaxed font-bold text-[#666] focus:bg-slate-100">
                                    <span>{language}</span>
                                    <img src={flag} alt='uk flag' className='inline ml-2 -mt-1 w-[18px]' />
                                </SelectItem>
                            )
                        })
                    }
                </SelectContent>
            </Select>

            <Select>
                <SelectTrigger className="min-w-[164px] pl-[18px] pr-4 py-0.5 h-auto rounded-none border-none text-2xl leading-relaxed font-bold text-[#666] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] focus:hidden">
                    <SelectValue placeholder="Dollar ($)" />
                </SelectTrigger>
                <SelectContent className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] border-none bg-background">
                    {
                        countriesList.map(({ code, currencyName, symbol }) =>
                            <SelectItem key={code} value="dollar" className="text-2xl leading-relaxed font-bold text-[#666] focus:bg-slate-100">{currencyName} ({symbol})</SelectItem>
                        )
                    }
                </SelectContent>
            </Select>
        </>
    )
}

export default HeaderExtraInfo