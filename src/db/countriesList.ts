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
        flag: "/images/flag/russia.png",
        country: "Russia",
        code: "RUB",
        language:"Russkij",
        currencyName:"Rouble",
        symbol: "₽"
    },
    {
        flag: "/images/flag/turkey.png",
        country: "Turkey",
        code: "TRY",
        language:"Turkish",
        currencyName:"Lira",
        symbol: "₺"
    },
]