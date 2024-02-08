"use client";
export const Footer: React.FC<{holiday:number, optional:number, leave:number, special:number}> = ({holiday, optional, leave, special}) => {
  return (
    <div className="flex flex-row bg-slate-800 rounded-b-lg p-1 text-sm font-light">
      <div className="rounded-md bg-teal-600 p-1 mx-1">Holiday {holiday}</div>
      <div className="rounded-md bg-green-600 p-1 mx-1">Optional Holiday {optional}</div>
      <div className="rounded-md bg-emerald-600 p-1 mx-1">Leave {leave}</div>
      <div className="rounded-md bg-cyan-500 p-1 mx-1">Special {special}</div>
    </div>
  );
};
