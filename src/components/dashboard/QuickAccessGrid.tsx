import React from "react";
import QuickAccessCard from "./QuickAccessCard";

interface QuickAccessGridProps {
  cards?: Array<{
    title: string;
    description: string;
    icon: "calendar" | "payment" | "records";
    onClick?: () => void;
  }>;
}

const QuickAccessGrid = ({ cards }: QuickAccessGridProps) => {
  const defaultCards = [
    {
      title: "Schedule Appointment",
      description: "Book your next visit with our healthcare providers",
      icon: "calendar" as const,
      onClick: () => console.log("Schedule clicked"),
    },
    {
      title: "Pay Bills",
      description: "View and pay your medical bills securely online",
      icon: "payment" as const,
      onClick: () => console.log("Payment clicked"),
    },
    {
      title: "Medical Records",
      description: "Access your health records and test results",
      icon: "records" as const,
      onClick: () => console.log("Records clicked"),
    },
  ];

  const displayCards = cards || defaultCards;

  return (
    <div className="w-full max-w-[1200px] mx-auto p-6 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {displayCards.map((card, index) => (
          <QuickAccessCard
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
            onClick={card.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default QuickAccessGrid;
