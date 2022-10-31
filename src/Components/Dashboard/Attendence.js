import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import jwt_decode from "jwt-decode";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import dayjs from 'dayjs';
import Cookies from 'js-cookie'
import moment from 'moment';

const Attendence = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [userEmail, setUserEmail] = useState("");
  const [isClicked, setIsClicked] = useState(false);

  const { data, refetch, isLoading } = useQuery("attendence", () =>
    fetch("http://localhost:5000/attendence", {
      method: "GET",
    }).then((res) => res.json())
  );
  console.log(dayjs().format('DD/MM/YYYY, hh:mm:ss a'));

  const getExpireTime = () => {
  

      const date1 = moment().add(1, 'days').hours(10).startOf('hour');
      const date2 = moment();
      
      const diff = date1.diff(date2, 'minute', true);
  
      return diff;
  }
  getExpireTime()


  const handleClockIn = async () => {
    try {
      Cookies.set('clicked', true, {expires: getExpireTime()});
      setIsClicked(true);
       await axios.post("http://localhost:5000/attendence", {
        clockIn: startDate,
        email: userEmail,
        clockOut: ''
      });

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const handleClockout = async () => {
    try {
      await axios.put("http://localhost:5000/attendence", {
        clockOut: endDate,        
        _id: data[data.length - 1]._id
      });
      refetch();
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const decoded = jwt_decode(token);
    setUserEmail(decoded.email);

    
  }, []);

  useEffect(() => {
    const clicked = Cookies.get('clicked')

    if(clicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  },[]);

  if (isLoading) {
    return <Loading></Loading>;
  }

  console.log(data);

  return (
    <div>
      <div className="text-3xl font-bold pl-4 mb-6 mt-5">
        <h1>Attendence</h1>
      </div>
      <div className="flex justify-center gap-10 pr-6 mb-8">
        <div>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
          <div className="text-center">
            <button
            disabled={isClicked}
            className="btn btn-sm mt-3" onClick={handleClockIn}>
              Clock In
            </button>
          </div>
        </div>

        <div>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            timeInputLabel="Time:"
            dateFormat="MM/dd/yyyy h:mm aa"
            showTimeInput
          />
          <div className="text-center">
            <button className="btn btn-sm mt-3" onClick={handleClockout}>Clock Out</button>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto mt-6">
        <table class="table w-full">
          <thead>
            <tr>
              <th>SL NO.</th>
              <th>User</th>
              <th>Clock In</th>
              <th>Clock Out</th>
            </tr>
          </thead>
          <tbody>
            {
              data?.map((d,index) => (
                <tr key={index}>
                  <th>{index + 1}</th>
                  <td>{d?.email}</td>
                  <td>
                  {d?.clockIn && dayjs(d.clockIn).format('DD/MM/YYYY, hh:mm:ss a')}                   
                  </td>
                  <td>
                 
                  {d?.clockOut && dayjs(d.clockOut).format('DD/MM/YYYY, hh:mm:ss a')}
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendence;
