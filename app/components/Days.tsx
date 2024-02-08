"use client";
import Day from "./day";
import { getFistDate, getPreviousMonday } from "./calendar";

export const Days: React.FC<{
  date: Date;
  holidays: {
    date: Date;
    description: string;
    type: "fixed" | "optional" | "leave" | "special" | undefined;
  }[];
  afterLoad:(holidays:number, optional:number, leave:number, special:number)=>void;
}> = ({ date, holidays, afterLoad }) => {
  const dt = getFistDate(date);
  const startDate = getPreviousMonday(dt);
  const dates: {
    date: Date;
    monthIndex: number;
    type?: "fixed" | "optional" | "special" | "leave" | undefined;
    index?: number;
    description?: string;
  }[] = [];

  let holidayCount = 0;
  let optionalHolidayCount = 0;
  let leaveCount = 0;
  let specialCount = 0;

  for (let index = 0; index < 42; index++) {
    const tempDate = new Date(startDate);
    tempDate.setDate(tempDate.getDate() + index);

    let type: "fixed" | "optional" | "special" | "leave" | undefined;
    type = undefined;
    let description: string = "";

    let holiday = holidays.find(
      (n) =>
        n.date.getDate() === tempDate.getDate() &&
        n.date.getMonth() === tempDate.getMonth() &&
        n.date.getFullYear() === tempDate.getFullYear()
    );

    if (holiday != undefined) {
      type = holiday.type;
      switch (type) {
        case "fixed":
          holidayCount++;
          break;
        case "optional":
          optionalHolidayCount++;
          break;
        case "leave":
          leaveCount++;
          break;
        case "special":
          specialCount++;
          break;
      }
      description = holiday.description;
    }

    dates.push({
      date: tempDate,
      monthIndex: dt.getMonth(),
      type: type,
      description: description,
    });
  }

  console.log(holidayCount);
  afterLoad(holidayCount, optionalHolidayCount, leaveCount, specialCount);
  

  return (
    <div className="border border-slate-500/70 grid grid-cols-7">
      {dates.map((item, index) => (
        <Day
          key={index}
          index={index}
          date={item.date}
          monthIndex={dt.getMonth()}
          type={item.type}
          description={item.description}
        />
      ))}      
    </div>    
  );
};
