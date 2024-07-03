import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const notifications = [
  {
    title: "Your call has been confirmed.",
    description: "1 hour ago",
  },
  {
    title: "You have a new message!",
    description: "1 hour ago",
  },
  {
    title: "Your subscription is expiring soon!",
    description: "2 hours ago",
  },
];

type CardProps = React.ComponentProps<typeof Card>;

export function CardItem({ className, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader className="">
        <img
          src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-4-1-768x432.webp"
          alt=""
          className="rounded-md"
        />
        <CardTitle className="font-vazir mt-3 text-xl">
          اموزش لینوکس با گرایش امنیت
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 font-vazir text-md line-clamp-2">
          بعد از دوره شبکه. دومین و مهم ترین دوره ای که برای ورود به دنیای امنیت
          مشاهده کنید. لینوکس هست که ما در این دوره سعی کردیم مفاهیم رو با
          دیدگاه یک متخصص امنیت به شما انتقال بدیم
        </p>
        <span className="font-vazir text-md flex items-center  gap-x-2 mt-2">
          <span>400000</span>
          <span>تومان</span>
        </span>
      </CardContent>
      <CardFooter>
        <Button className="w-full font-vazir text-md">مشاهده</Button>
      </CardFooter>
    </Card>
  );
}
