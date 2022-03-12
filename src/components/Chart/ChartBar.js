import React from 'react';

const ChartBar = (props) => {
    let barFillHeight='0%'
    if(props.max>0){
        barFillHeight= Math.round((props.value/props.max)*100)+'%'
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" 
                style={{height: barFillHeight}}
                >
                 </div>
             <div className="chart-bar__label">

             </div>
            </div>
            
        </div>
    );
};

export default ChartBar;