"use client";

import { useState } from "react";
import DatePicker from "../components/DatePicker";

const Leave: React.FC = () => {
  const [showTo, setShowTo] = useState<boolean>(false);

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
    <div className="flex flex-col m-1">
      <div className="border rounded">
        <div className="flex flex-row p-1">
          <div>
            <input type="checkbox"></input> Apply for PTO from
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
      <div className="flex flex-row">
        <div>
          <input type="checkbox"></input> Apply for optional day for
          <select className="w-full bg-inherit border border-slate-500 rounded">
            <option value="01">01/02/2024</option>
          </select>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <input type="checkbox"></input> Apply for comp off on
        </div>
        <div>
          <input type="date" />
        </div>
        <div>compensiating</div>
        <div>
          <select></select>
        </div>
      </div>
      <div className="flex flex-row">
        <div>
          <input type="checkbox"></input> Apply you special Day
        </div>
        <div>
          <input type="date" />
        </div>
      </div>
    </div>
  );
};

export default Leave;
