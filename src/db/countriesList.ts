type CountriesList = {
    flag: string,
    country: string,
    code: string,
    symbol: string,
    language: string,
    currencyName: string,
}[]

export const countriesList: CountriesList = [
    {
        flag: "/images/flag/us.png",
        country: "United States",
        code: "USD",
        language:"English",
        currencyName:"Dollar",
        symbol: "$"
    },

    {
        flag: "/images/flag/lb.png",
        country: "Lebanon",
        code: "ar",
        language:"Leabnese",
        currencyName:"Lebanon",
        symbol: "L.L"
    },
]