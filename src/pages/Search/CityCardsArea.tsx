import CardCompoonent from "@/components/common/CardComponent";
import { City } from "@/types/cityAndPlace";

interface CityCardsAreaProps {
  cities: City[];
}

const CityCardsArea: React.FunctionComponent<CityCardsAreaProps> = ({
  cities,
}) => {
  return (
    <ul className="flex justify-around items-center overflow-hidden max-sm:flex-col mt-8">
      {cities?.map((city) => (
        <li key={city.id} className="max-sm:w-screen">
          <CardCompoonent
            title={city.cityNameTranslated}
            imgUrl={city.cityPhotoURL}
            subtitle={city.cityName}
            content={city.countryCode}
          />
        </li>
      ))}
    </ul>
  );
};

export default CityCardsArea;
