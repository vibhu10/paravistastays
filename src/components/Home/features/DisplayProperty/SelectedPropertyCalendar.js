import React, { useState } from "react";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./SelectedPropertyCalendar.css";

const SelectedPropertyCalendar = () => {
  const [value, setValue] = useState([new Date(2024, 8, 9), new Date(2024, 8, 12)]); // Pre-selected range

  return (
    <div className="selected-property-calendar-container">
      <h2>Check Available Dates</h2>
      <Calendar
        selectRange={true}
        value={value}
        onChange={setValue}
        minDate={new Date(2024, 7, 1)}
        maxDate={new Date(2024, 11, 31)}
        showDoubleView={true} // Displays two months side by side
        tileClassName={({ date, view }) => {
          if (value && value[0] && value[1]) {
            const [start, end] = value;
            const normalizedDate = new Date(date.setHours(0, 0, 0, 0));
            const normalizedStart = new Date(start.setHours(0, 0, 0, 0));
            const normalizedEnd = new Date(end.setHours(0, 0, 0, 0));

            if (normalizedDate >= normalizedStart && normalizedDate <= normalizedEnd) {
              if (normalizedDate.getTime() === normalizedStart.getTime() || normalizedDate.getTime() === normalizedEnd.getTime()) {
                return "selected-start-end"; // Custom style for start or end date
              }
              return "selected-range"; // Custom style for the range
            }
          }
          return null;
        }}
      />
    </div>
  );
};

export default SelectedPropertyCalendar;
