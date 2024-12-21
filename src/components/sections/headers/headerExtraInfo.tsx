import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger} from "@/components/ui/select";
import { countriesList } from "@/db/countriesList";
import i18n from "@/i18n";

interface HeaderExtraInfoProps {
  onLanguageChange: (lang: string) => void;
}

const HeaderExtraInfo: React.FC<HeaderExtraInfoProps> = ({ onLanguageChange }) => {
  const [selectCountry, setSelectCountry] = useState<string>("USD-English");
  const [currency, setCurrency] = useState<string>("Dollar ($)");

  // Handle language change
  const handleLanguageChange = (value: string) => {
    const [code, language] = value.split("-");
    setSelectCountry(value);

    const selectedCountry = countriesList.find(
      (country) => `${country.code}-${country.language}` === value
    );
    if (selectedCountry) {
      setCurrency(`${selectedCountry.currencyName} (${selectedCountry.symbol})`);
      i18n.changeLanguage(code); // Change language in i18n
      onLanguageChange(language); // Notify parent component
    }
  };

  // Handle currency change
  const handleCurrencyChange = (value: string) => {
    const selectedCountry = countriesList.find((country) => country.currencyName === value);
    if (selectedCountry) {
      setCurrency(`${selectedCountry.currencyName} (${selectedCountry.symbol})`);
    }
  };

  const selectedCountry = countriesList.find(
    ({ code, language }) => `${code}-${language}` === selectCountry
  );

  return (
    <>
      {/* Language Selector */}
      <Select value={selectCountry} onValueChange={handleLanguageChange}>
        <SelectTrigger className="min-w-[142px] px-2 py-0.5 h-auto rounded-none border-none text-2xl leading-relaxed font-bold text-[#666] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] focus:hidden">
          <div className="flex items-center gap-2">
            {selectedCountry && (
              <>
                <img src={selectedCountry.flag} alt="flag" className="w-[18px]" />
                <span>{selectedCountry.language}</span>
              </>
            )}
          </div>
        </SelectTrigger>
        <SelectContent className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] border-none bg-background">
          {countriesList.map(({ language, code, flag }) => (
            <SelectItem
              key={code}
              value={`${code}-${language}`}
              className="text-2xl leading-relaxed font-bold text-[#666] focus:bg-slate-100"
            >
              <span>{language}</span>
              <img src={flag} alt={`${language} flag`} className="inline ml-2 -mt-1 w-[18px]" />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Currency Selector */}
      <Select value={currency} onValueChange={handleCurrencyChange}>
        <SelectTrigger className="min-w-[164px] pl-[18px] pr-4 py-0.5 h-auto rounded-none border-none text-2xl leading-relaxed font-bold text-[#666] shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] focus:hidden">
          <div className="flex items-center">
            <span>{currency}</span>
          </div>
        </SelectTrigger>
        <SelectContent className="shadow-[0px_3px_4px_0px_rgba(0,0,0,0.25)] border-none bg-background">
          {countriesList.map(({ currencyName, symbol }) => (
            <SelectItem
              key={currencyName}
              value={currencyName}
              className="text-2xl leading-relaxed font-bold text-[#666] focus:bg-slate-100"
            >
              {currencyName} ({symbol})
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
};

export default HeaderExtraInfo;
