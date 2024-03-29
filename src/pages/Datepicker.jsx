import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker
            showIcon
            selected={startDate}
            onChange={(date) => setStartDate(date)}
        />
    );
};
export default Datepicker;