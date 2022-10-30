import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

const Attendence = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <div>
            <div>
                <h1>Attendence</h1>
            </div>
            <ReactDatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      timeInputLabel="Time:"
      dateFormat="MM/dd/yyyy h:mm aa"
      showTimeInput
    />
        </div>
    );
};

export default Attendence;