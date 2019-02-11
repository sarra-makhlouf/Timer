import React from 'react';

let time = 4205000;
let hours = String(parseInt(time/3600000)).padStart(2, '0');
let minutes = String(parseInt((time%3600000)/60000)).padStart(2, '0');
let seconds = String(parseInt(((time%3600000)%60000)/1000)).padStart(2, '0');

const Timer = () =>
<div className="container">
    <div className="unit">
    <p>{hours+':'}</p>
    <p className="label">Hour</p>
    </div>
    <div className="unit">
    <p>{minutes+':'} </p>
    <p className="label">Minute</p>
    </div>
    <div className="unit">
    <p> {seconds} </p>
    <p className="label">Second</p>
    </div>
</div>

export default Timer;