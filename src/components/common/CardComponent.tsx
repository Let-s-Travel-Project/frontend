import { Card, CardContent, CardHeader } from "@/lib/utils/ui/card";
interface CardCompoonentProps {
  title: string;
  subtitle: string;
  imgUrl?: string;
  content: string;
}

const CardCompoonent: React.FunctionComponent<CardCompoonentProps> = ({
  title,
  subtitle,
  imgUrl,
  content,
}) => {
  return (
    <Card className="relative size-38 xl:size-64 mx-auto max-sm:size-26">
      {/* Background Image with Opacity */}

      {imgUrl && (
        <div
          title="cardBg"
          className="absolute inset-0 bg-cover bg-center opacity-40 rounded-md"
          style={{ backgroundImage: `url('${imgUrl}')` }}
        />
      )}
      {/* Content */}
      <div className=" z-10">
        <CardHeader className="font-semibold text-xs md:text-lg lg:text-xl">
          {title}
          <span>{subtitle}</span>
        </CardHeader>
        <CardContent>{content}</CardContent>
      </div>
    </Card>
  );
};
export default CardCompoonent;
