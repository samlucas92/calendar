import React from "react";
import Moment from "moment"
import './Calendar.css';
import Month from '../month/Month';
import Header from '../header/Header';
import Day from '../day/Day'
import Cells from "../cells/Cells";

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
}

const Calendar: React.FC<CalendarProps> = props => {
    
    var currentMonth = new Date();
    var selectedDate = new Date();
    
	return (
        <div className="calendar">
            <Header current={currentMonth}/>
            <Day />
            <Cells />
        </div>
	);
};

export default Calendar;