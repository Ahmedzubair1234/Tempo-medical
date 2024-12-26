import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, CreditCard, FileText } from "lucide-react";

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon?: "calendar" | "payment" | "records";
  onClick?: () => void;
}

const QuickAccessCard = ({
  title = "Schedule Appointment",
  description = "Book your next visit with our healthcare providers",
  icon = "calendar",
  onClick = () => {},
}: QuickAccessCardProps) => {
  const getIcon = () => {
    switch (icon) {
      case "calendar":
        return <CalendarDays className="h-6 w-6" />;
      case "payment":
        return <CreditCard className="h-6 w-6" />;
      case "records":
        return <FileText className="h-6 w-6" />;
      default:
        return <CalendarDays className="h-6 w-6" />;
    }
  };

  return (
    <Card className="w-[380px] h-[180px] bg-white hover:shadow-lg transition-shadow duration-200 cursor-pointer">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-full bg-blue-100">{getIcon()}</div>
          <CardTitle className="text-xl font-semibold text-gray-800">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4">
          {description}
        </CardDescription>
        <Button variant="outline" className="w-full" onClick={onClick}>
          Access Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickAccessCard;
