import React from "react";
import Moment from "moment";
import Month from '../month/Month';
import Header from '../header/Header';
import TimelineDay from '../day/TimelineDay'
import TimelineCells from "../cells/TimelineCells";
import './Timeline.css'

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
}

const Timeline: React.FC<CalendarProps> = props => {
    
    var currentMonth = new Date();
    var selectedDate = new Date();
    
	return (
        <div className="calendar timeline">
            <h2>Timeline</h2>
            <TimelineDay />
            <TimelineCells />
        </div>
	);
};

export default Timeline;