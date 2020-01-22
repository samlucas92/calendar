import React from "react";
import './Day.css';
import Moment, { weekdays } from 'moment';

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
	categories?: Category[];
}

const TimelineDay: React.FC<CalendarProps> = props => {

    const dateFormat = "dddd";
    const days = [];
    var current = Moment().day();
    const weekDays = Moment.weekdays();
    var weekdayAfter = [];

    for (let i = current; i < 7; i++){
        weekdayAfter.push(weekDays[i]);
    }

    for (let i = 0; i < current; i++){
        weekdayAfter.push(weekDays[i]);
    }

    for (let i = 0; i < 7; i++) {
        days.push(
            <div className="col col-center" key={i}>
            {weekdayAfter[i]}
            </div>
        );
    }
    return <div className="days row">{days}</div>;
};

export default TimelineDay;