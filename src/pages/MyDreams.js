import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function WhatsMySign() {
    let navigate = useNavigate();
   

    return (
        <div>
          <h2 className="title">
                <span className="title back" onClick={() => navigate("/")}>Daily Astrologie</span>
            </h2>
        </div>
    );
}

export default WhatsMySign;