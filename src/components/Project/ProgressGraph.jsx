import React,{Component} from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar } from "react-step-progress-bar";

class ProgressGraph extends Component {
  constructor(props){
    super(props);
    this.state = {
        options: {
          ProgressBar: {
            type: 'bar',
            height: 400
          },
          plotOptions: {
            bar: {
              horizontal: true,
              dataLabels: {
                position: 'top',
              },
            }
          },
          dataLabels: {
            enabled: true,
            offsetX: -6,
            style: {
              fontSize: '10px',
              colors: ['#fff']
            }
          },
          stroke: {
            show: true,
            width: 1,
            colors: ['#fff']
          },
          tooltip: {
            shared: true,
            intersect: false
          },
        
      },
    };
  }
  render() {
    return (
      <>
       <span>Years 40-60</span>
       <ProgressBar
        percent={90}
        height= {30}
        options={this.state.options} series={this.state.series}
        type= 'bar'
        filledBackground="#15374b"
      /><br/>
      <span>Years 30-40</span>
      <ProgressBar
        percent={85}
        height= {30}
        filledBackground="#15374b"
      /><br/>
      <span>Years 20-30</span>
      <ProgressBar
        percent={75}
        height= {30}
        filledBackground="#15374b"
      /><br/>
      <span>60</span>
      <ProgressBar
        percent={90}
        height= {30}
        filledBackground="#15374b"
      />
      </>
    );
  }
}
 export default ProgressGraph;