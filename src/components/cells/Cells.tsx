import React from "react";
import Moment from "moment"
import Month from '../month/Month';
import Event from '../event/Event';
import moment from "moment";

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
}

const Cells: React.FC<CalendarProps> = props => {
    
    const monthStart = Moment().startOf("month");
    const monthEnd = Moment().endOf("month");
    const startDate = monthStart.startOf("week");
    const endDate = monthEnd.endOf("week");
    const current = Moment();
    const dateFormat = "D";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";
    
    while (day <= endDate) {
        for (let i = 0; i < 7; i++) {
          formattedDate = Moment(day).format(dateFormat);
          const cloneDay = day;
          var isMonth = current.format("MM") == Moment(day).format("MM");
          var isDay = current.format("DD") == Moment(day).format("DD")
          days.push(
            <div className={`col cell ${
              !isMonth
              ? "disabled" 
              : isDay ? "selected" : "" }`}
             key={day.day.toString()}>
              <span className="number">{formattedDate}</span>
              <Event date={day}/>
            </div>
          );
          day = Moment(day).add(1, "d");
        }
        rows.push(
          <div className="row" key={day.day.toString()}>
            {days}
          </div>
        );
        days = [];
    }
    return (
        <div className="body">{rows}</div>
    );
};

export default Cells;