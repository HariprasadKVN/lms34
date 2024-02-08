"use client";
export const Header: React.FC = () => {
  return (
    <div className="bg-slate-800 rounded-t-lg p-1">
      {new Date().toLocaleDateString("en-IN", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        weekday: "long",
      })}
    </div>
  );
};
