import CardCompoonent from "@/components/common/CardComponent";
import { City } from "@/types/cityAndPlace";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/lib/utils/ui/carousel";
interface CityCardsContainerProps {
  cities: City[];
}

const CityCardsContainer: React.FunctionComponent<CityCardsContainerProps> = ({
  cities,
}) => {
  return (
    <Carousel className="flex justify-around items-center overflow-hidden mt-8 gap-4">
      <CarouselContent>
        {cities?.map((city) => (
          <CarouselItem key={city.id} className="basis-1/4 max-sm:basis-1/3">
            <CardCompoonent
              title={city.cityNameTranslated}
              imgUrl={city.cityPhotoURL}
              subtitle={city.cityName}
              content={city.countryCode}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CityCardsContainer;
