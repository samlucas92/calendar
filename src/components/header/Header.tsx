import React from "react";
import Moment from "moment"
import Month from '../month/Month';

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
    current: Date;
}

const Header: React.FC<CalendarProps> = props => {
    var current = props.current;
    const dateFormat = "MMMM YYYY";

    var nextMonth = () => {
        return({
            current: Moment(current).add(1, 'M')
        });
    };
    var prevMonth = () => {
        return({
            current: Moment(current).add(-1, 'M')
        });
    };

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            chevron_left
          </div>
        </div>
        <div className="col col-center">
          <span>{Moment(current).format(dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">chevron_right</div>
        </div>
      </div>
    );
};

export default Header;