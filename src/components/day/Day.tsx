import React from "react";
import './Day.css';
import Moment from 'moment';

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
	categories?: Category[];
}

const Day: React.FC<CalendarProps> = props => {

    const dateFormat = "dddd";
    const days = [];
    const weekDays = Moment.weekdays();
    let startDate = Moment().startOf('week');
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {weekDays[i]}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
};

export default Day;