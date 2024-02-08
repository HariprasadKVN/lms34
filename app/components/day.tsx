import clsx from "clsx";

export interface DayProps {
  date: Date;
  monthIndex: number;
  description?: string;
  type?: "fixed" | "optional" | "special" | "leave" | undefined;
  index?: number;
}

const Day: React.FC<DayProps> = ({
  index,
  date,
  description,
  monthIndex,
  type,
}) => {
  const dayIndex = date.getDay();
  const display = date.getMonth() === monthIndex;
  const key = index === undefined ? -1 : index;

  return (
    <div
      className={clsx(
        "flex flex-col border-r border-b border-slate-500/70 h-16",
        {
          "border-r-0":
            index === 6 ||
            index === 13 ||
            index === 20 ||
            index === 27 ||
            index === 34 ||
            index === 41,
          "border-b-0": index != undefined && index > 34,
        }
      )}
    >
      {display && (
        <div
          className={clsx(
            "flex-grow rounded p-1 text-sm font-light hover:bg-blue-500 active:bg-blue-700",
            {
              "bg-teal-600":type==='fixed',
              "bg-green-600":type==='optional',
              "bg-emerald-600":type==='leave',
              "bg-cyan-500":type==='special'
            }
          )}
        >
          <div className="flex flex-col">
            <div>
              {date.toLocaleDateString("en-IN", {
                day: "2-digit",
              })}{" "}
              <span className="text-xs italic">
                {type === undefined || type === "fixed" ? "" : type}
              </span>
            </div>
            <div className="flex-grow text-xs">{description}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Day;
