"use client";

import { useState } from "react";

const Leave: React.FC = () => {
  const [showTo, setShowTo] = useState<boolean>(false);

  const leave: {
    optional: {
      date: Date;
      description: string;
      status: "applied" | "taken" | undefined;
    }[];
    canTakeOptional: boolean;
    canTakeSpecial: boolean;
    availableCompDays: Date[];
    special: Date;
  } = {
    optional: [
      {
        date: new Date(2024, 2, 25),
        description: "Holi",
        status: undefined,
      },
      {
        date: new Date(2024, 2, 29),
        description: "Good Friday",
        status: undefined,
      },
      {
        date: new Date(2024, 5, 17),
        description: "Eid al-Adha/Bakrid",
        status: "taken",
      },
      {
        date: new Date(2024, 7, 26),
        description: "Janmashtami",
        status: "applied",
      },
      {
        date: new Date(2024, 9, 31),
        description: "Diwali",
        status: undefined,
      },
      {
        date: new Date(2024, 11, 25),
        description: "Christmas",
        status: undefined,
      },
    ],
    canTakeOptional: true,
    canTakeSpecial: false,
    availableCompDays: [new Date(2024, 1, 2), new Date(2024, 1, 3)],
    special: new Date(2024, 4, 5),
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.value) {
      case "pto":
        setShowTo(true);
        break;
      default:
        setShowTo(false);
        break;
    }
  };

  return (
    <div
      className="flex flex-col m-1 p-1 
        border 
        rounded 
        border-slate-500 
        text-sm 
        font-light
        bg-inherit"
    >
      <div className="border rounded my-1">
        <div className="flex flex-row p-1">
          <div>
            <input type="checkbox"></input> Apply Paid Time Off from
          </div>
          <div>
            <input type="date" />
          </div>
          <div>to</div>
          <div>
            <input type="date" />
          </div>
        </div>
        <div className="mx-1">
          <textarea
            className="w-full"
            placeholder="Enter the reason for PTO"
          ></textarea>
        </div>
      </div>
      <div className="flex flex-row border rounded border-slate-500 px-1 my-1">
        <div>
          <input type="checkbox"></input> Apply optional day for 2024
          <div className="grid grid-cols-2">
            {leave.optional.map((item, index) => (
              <>
                <div key={index} className="pr-1">
                  <input
                    type="checkbox"
                    checked={
                      item.status === "applied" || item.status === "taken"
                    }
                    disabled={item.status === "taken"}
                  />

                  {`${item.date.toLocaleDateString("en-IN", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                  })}-${item.description}`}
                </div>
              </>
            ))}
          </div>
          {/* <select className="w-full bg-inherit border border-slate-500 rounded">
            <option value="01">01/02/2024</option>
          </select> */}
        </div>
      </div>
      <div className="flex flex-row border rounded my-1 p-1 border-slate-500">
        <div>
          <input type="checkbox"></input> Apply Comp Off on
        </div>
        <div>
          <input type="date" />
        </div>
        <div>compensiating for </div>
        <div>
          <select className="bg-inherit">
            {leave.availableCompDays.map((item, index) => (
              <option key={index}>{item.toLocaleDateString("en-IN")}</option>
            ))}
          </select>
        </div>
      </div>
      {leave.canTakeSpecial ? (
        <div className="flex flex-row border rounded my-1 p-1 border-slate-500">
          <div>
            <input type="checkbox"></input> Apply you special Day
          </div>
          <div>
            <input type="date" />
          </div>
        </div>
      ) : (
        <div>{`You have availed special day on ${leave.special}`}</div>
      )}
    </div>
  );
};

export default Leave;
