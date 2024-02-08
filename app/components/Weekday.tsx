"use client";
export const Weekday: React.FC = () => {
  return (
    <div className="grid grid-cols-7
     text-center border-t border-slate-500/70 text-sm font-light">
      <div>Mon</div>
      <div>Tue</div>
      <div>Wed</div>
      <div>Thu</div>
      <div>Fri</div>
      <div>Sat</div>
      <div>Sun</div>
    </div>
  );
};
