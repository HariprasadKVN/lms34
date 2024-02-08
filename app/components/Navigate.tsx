"use client";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/solid";

export const Navigate: React.FC<{
  date: Date;
  onChangeMonth: (date: Date) => void;
}> = ({ date, onChangeMonth }) => {
  const onClick = (direction: number) => {
    let d = new Date(date);
    d.setMonth(d.getMonth() + direction);
    onChangeMonth(d);
  };

  return (
    <div className="flex flex-row p-1 text-sm font-light">
      <div className="flex">
        <ChevronLeftIcon
          className="h-5 w-5 rounded 
            hover:bg-blue-400 active:bg-blue-600"
          onClick={() => onClick(-1)}
        ></ChevronLeftIcon>
      </div>
      <div className="flex-grow text-center">
        {date.toLocaleDateString("en-IN", { month: "long", year: "2-digit" })}
      </div>
      <div className="flex">
        <ChevronRightIcon
          className="h-5 w-5 rounded 
            hover:bg-blue-400 
            active:bg-blue-600"
          onClick={() => onClick(1)}
        ></ChevronRightIcon>
      </div>
    </div>
  );
};
