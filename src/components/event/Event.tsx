import React from "react";
import Moment from "moment"
import './Event.css';

interface Category {
	name: string;
	tags: string[];
	id: string;
}

interface CalendarProps {
    categories?: Category[];
    date: Moment.Moment;
}

interface Events{
    name: string;
    type: string;
    url?: string;
}

const Event: React.FC<CalendarProps> = props => {
    
    var date = props.date.format("DD-MM-YY").toString();
    var day = props.date.format("D").toString();
    var types: {[type:string]: string} = {};
    types['assignment'] = 'https://cdn2.thinqi.co.uk/thinqi-platform-client/3.24.1/img/thinqi-platform-images/svg/assignments.svg';
    types['event'] = 'https://cdn2.thinqi.co.uk/thinqi-platform-client/3.24.1/img/thinqi-platform-images/svg/events.svg';
    types['course'] = 'https://cdn2.thinqi.co.uk/thinqi-platform-client/3.24.1/img/thinqi-platform-images/svg/courses.svg';

    const rows = [];
    let days = [];

    var events: { [id: string] : Events[]; } = {};
    events["01-01-20"] = [ {name: "Calendar Event", type: "event", url: "https://slucas.thinqi-staging.co.uk/events/view/17677797-4ca6-4e8b-9a97-e3e38d46ffc6"}, {name: "Calendar Assignment", type:"assignment"} ];
    events["20-01-20"] = [ {name: "Hopeful Demo", type: "event"}, {name: "Events work", type:"assignment"}, {name: "Filters work", type:"assignment"} ];
    events["21-01-20"] = [ {name: "React course", type: "course"}];
    events["22-01-20"] = [ {name: "End of iteration meeting", type: "meeting"}, {name: "Events work", type:"assignment"}, {name: "Filters work", type:"assignment"} ];
    events["25-01-20"] = [ {name: "Testing event", type: "event"}];
    events["26-01-20"] = [ {name: "Testing event", type: "event"}];
    events["27-01-20"] = [ {name: "Testing Assignment", type: "assignment"}];
    events["28-01-20"] = [ {name: "Video Call with Jon", type: "meeting"}];

    
    if(events[date] != null)
    {
        for (let i = 0; i < events[date].length; i++) {
            var event = events[date][i];

            days.push(
            <div className='event'>
                <img src={types[event.type] ?? types["event"]} className='type'/>
                <span className="name"><a href={event.url}>{event.name}</a></span>
            </div>
            );
        }
        rows.push(
            <div className="events" key={date}>
            {days}
            </div>
        );
    }
    days = [];
    return (
        <div className="events-container">{rows}</div>
    );
};

export default Event;