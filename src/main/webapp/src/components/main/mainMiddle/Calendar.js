import React, { useState, useEffect } from "react";

function Calendar() {
  const year = 2024; // 설정된 연도
  const [dates, setDates] = useState([]); // 달력 데이터를 저장할 상태

  useEffect(() => {
    // 컴포넌트가 마운트되거나 year가 변경될 때 달력 데이터 갱신
    setDates(generateCalendar(year));
  }, [year]);

  const generateCalendar = (year) => {
    let allDates = [];
    for (let month = 0; month < 12; month++) {
      let date = new Date(year, month, 1);
      while (date.getMonth() === month) {
        allDates.push(new Date(date));
        date.setDate(date.getDate() + 1);
      }
    }
    return allDates;
  };

  const formatDate = (date) => {
    // 날짜 포맷 변경 함수
    if (!date) return null;
    let d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const renderCalendar = () => {
    const rows = Math.ceil(dates.length / 7);
    const calendarRows = [];

    for (let row = 0; row < rows; row++) {
      calendarRows.push(
        <div key={row} className="flex flex-col">
          {dates.slice(row * 7, (row + 1) * 7).map((date, index) => (
            <div
              key={index}
              id={formatDate(date)}
              className={`w-3 h-3 ${
                date ? "bg-white" : "bg-transparent"
              } border flex items-center justify-center`}
            >
              {date.getDate()}
            </div>
          ))}
        </div>
      );
    }
    return calendarRows;
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex">{renderCalendar()}</div>
    </div>
  );
}

export default Calendar;
