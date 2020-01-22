import React from "react";
import Moment from "moment"
import Month from '../month/Month';
import Event from '../event/Event';
import moment from "moment";
import './TimelineCells.css';

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
}

const TimelineCells: React.FC<CalendarProps> = props => {
    
    const weekStart = Moment();
    const weekEnd = Moment().add(6, "days");
    const startDate = weekStart;
    const endDate = weekEnd;
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
            <div className={`col timelinecell ${
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

export default TimelineCells;