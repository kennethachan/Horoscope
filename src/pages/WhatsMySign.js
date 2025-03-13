import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function WhatsMySign() {
    let navigate = useNavigate();

    const [days, setDays] = useState([]);
    const [months, setMonths] = useState([]);
    const [selectedDay, setSelectedDay] = useState("");
    const [selectedMonth, setSelectedMonth] = useState("");

    useEffect(() => {
        // Populate the day dropdown
        setDays(Array.from({ length: 31 }, (_, i) => i + 1));

        // Populate the month dropdown
        setMonths([
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ]);

        // Add event listener to detect "Enter" key
        const handleKeyPress = (event) => {
            if (event.key === "Enter") {
                checkZodiacAndNavigate();
            }
        };

        document.addEventListener("keydown", handleKeyPress);

        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [selectedDay, selectedMonth]);

    // Function to determine zodiac sign
    const getZodiacSign = (month, day) => {
        const zodiacSigns = [
            { sign: "capricorn", startMonth: 12, startDay: 22, endMonth: 1, endDay: 19 },
            { sign: "aquarius", startMonth: 1, startDay: 20, endMonth: 2, endDay: 18 },
            { sign: "pisces", startMonth: 2, startDay: 19, endMonth: 3, endDay: 20 },
            { sign: "aries", startMonth: 3, startDay: 21, endMonth: 4, endDay: 19 },
            { sign: "taurus", startMonth: 4, startDay: 20, endMonth: 5, endDay: 20 },
            { sign: "gemini", startMonth: 5, startDay: 21, endMonth: 6, endDay: 20 },
            { sign: "cancer", startMonth: 6, startDay: 21, endMonth: 7, endDay: 22 },
            { sign: "leo", startMonth: 7, startDay: 23, endMonth: 8, endDay: 22 },
            { sign: "virgo", startMonth: 8, startDay: 23, endMonth: 9, endDay: 22 },
            { sign: "libra", startMonth: 9, startDay: 23, endMonth: 10, endDay: 22 },
            { sign: "scorpio", startMonth: 10, startDay: 23, endMonth: 11, endDay: 21 },
            { sign: "sag", startMonth: 11, startDay: 22, endMonth: 12, endDay: 21 }
        ];

        for (let zodiac of zodiacSigns) {
            if (
                (month === zodiac.startMonth && day >= zodiac.startDay) ||
                (month === zodiac.endMonth && day <= zodiac.endDay)
            ) {
                return zodiac.sign;
            }
        }
        return null;
    };

    // Function to check zodiac and navigate
    const checkZodiacAndNavigate = () => {
        if (!selectedDay || !selectedMonth) {
            alert("Please select both month and day.");
            return;
        }

        const monthIndex = months.indexOf(selectedMonth) + 1;
        const dayNumber = parseInt(selectedDay, 10);
        const zodiacSign = getZodiacSign(monthIndex, dayNumber);

        if (zodiacSign) {
            navigate(`/${zodiacSign}-horoscope`);
        } else {
            alert("Invalid date selection.");
        }
    };

    return (
        <div className="whats-my-sign-container">
            <h2 className="title">
                <span className="title back" onClick={() => navigate("/")}>Daily Astrologie</span>
            </h2>
            <div className="bday-wrapper">
                 <div className="birthday-container">
            <p className="enter-birthday">Enter your birthday</p>
            {/* Month Dropdown First */}
            <select id="month" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                <option value="">Month</option>
                {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                ))}
            </select>

            {/* Day Dropdown Second */}
            <select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                <option value="">Day</option>
                {days.map(day => (
                    <option key={day} value={day}>{day}</option>
                ))}
            </select>

            <button className="enter-btn" onClick={checkZodiacAndNavigate}>Enter</button>
            </div>
            </div>
           
        
        </div>
    );
}

export default WhatsMySign;
