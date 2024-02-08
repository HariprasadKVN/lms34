"use client";

import { useState } from "react";
import { Header } from "./Header";
import { Navigate } from "./Navigate";
import { Weekday } from "./Weekday";
import { Days } from "./Days";
import { Footer } from "./Footer";

export const getFistDate = (date: Date): Date => {
  return new Date(date.getFullYear(), date.getMonth(), 1);
};

export const getPreviousMonday = (date: Date): Date => {
  let prevMonday = new Date(date);
  prevMonday.setDate(prevMonday.getDate() - ((prevMonday.getDay() + 6) % 7));
  return prevMonday;
};

const Calendar: React.FC<{
  holidays: {
    date: Date;
    description: string;
    type: "fixed" | "optional" | "leave" | "special" | undefined;
  }[];
}> = ({ holidays }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [holidayCount, setHolidayCount] = useState(0);
  const [optionalCount, setOptionalCount] = useState(0);
  const [leaveCount, setLeaveCount] = useState(0);
  const [specialCount, setSpecialCount] = useState(0);

  const onMonthChanged = (date: Date) => {
    let d = new Date(date);
    setDate(d);
  };

  const holidayCounts = (
    holidays: number,
    optional: number,
    leave: number,
    special: number
  ) => {
    console.log('in calendar')
    setHolidayCount(holidays);
    setLeaveCount(leave);
    setOptionalCount(optional);
    setSpecialCount(special);
  };

  return (
    <div className="m-1 border border-slate-700 bg-gradient-to-t from-slate-500/80 to-slate-500/50 rounded-lg">
      <Header></Header>
      <Navigate date={date} onChangeMonth={onMonthChanged}></Navigate>
      <Weekday></Weekday>
      <Days date={date} holidays={holidays} afterLoad={holidayCounts}></Days>
      <Footer holiday={holidayCount} optional={optionalCount} leave={leaveCount} special={specialCount}></Footer>
    </div>
  );
};

export default Calendar;
