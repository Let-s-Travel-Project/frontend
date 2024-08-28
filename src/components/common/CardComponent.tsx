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
    <Card className="relative sm:w-32 sm:h-32 lg:w-48 lg:h-48">
      {/* Background Image with Opacity */}
      {imgUrl && (
        <div
          title="cardBg"
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: `url('${imgUrl}')` }}
        />
      )}
      {/* Content */}
      <div className=" z-10">
        <CardHeader className="font-semibold">
          {title}
          <span>{subtitle}</span>
        </CardHeader>

        <CardContent>{content}</CardContent>
      </div>
    </Card>
  );
};
export default CardCompoonent;
