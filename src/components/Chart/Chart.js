import ChartBar from "./ChartBar";
import './Chart.css';

function Chart (props) {
    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    const maxValue = Math.max(...values);
    return <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            {return <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                max={maxValue}
                label={dataPoint.label}
            />}
        )}   
    </div>
}

export default Chart;