import {Chart ,ArcElement} from "chart.js";
import {Doughnut} from "react-chartjs-2";

Chart.register(ArcElement);

const Graph = () =>{

    const graphConfig = {
        data: {
            datasets: [{
                label: 'My First Dataset',
                data: [300, 50, 100],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)'
                ],
                hoverOffset: 4,
                borderRadius: 30,
                spacing: 10,
            }]
        },
        options:{
            cutout: 115,
        }
    }

    return(
        <div className="graph">
            <Doughnut data = {graphConfig.data} options = {graphConfig.options}/>
        </div>
    )
}

export default Graph;