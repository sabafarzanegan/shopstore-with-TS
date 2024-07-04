import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TPRODUCTS } from "@/Types/servicets";

type CardProps = React.ComponentProps<typeof Card>;
type TCardItem = TPRODUCTS;

export function CardItem({
  className,
  id,
  img,
  title,
  price,
  desc,
  ...props
}: CardProps & TCardItem) {
  return (
    <Card
      className={cn(
        "w-[380px] h-[600px] flex flex-col item-center justify-between",
        className
      )}
      {...props}>
      <CardHeader className="">
        <img src={img} alt="" className="rounded-md " />
        <CardTitle className="font-vazir mt-3 text-sm">{title}</CardTitle>
      </CardHeader>
      <CardContent className="">
        <p className="text-gray-400 font-vazir text-md line-clamp-2">{desc}</p>
        <span className="font-vazir text-md flex items-center  gap-x-2 mt-2">
          <span>{price}</span>
          <span>تومان</span>
        </span>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-vazir text-md">مشاهده</Button>
      </CardFooter>
    </Card>
  );
}
