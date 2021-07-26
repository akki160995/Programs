import React,{Component} from "react";
import Chart from "react-apexcharts";

class Achart extends Component {
constructor(props){
  super(props);
  this.state = {
    options:{
      Chart:{
            height: parseInt('350'),
            id:"basic-bar" ,           
            stacked: '',
            stackType: 'normal',
            animations: {
            enabled: '1',
            speed: '800',
            //delay: '//'          
            },                                
      },
      dropShadow: {
        enabled: '',
        enabledOnSeries: [],
        top: parseInt('0'),
        left: parseInt('0'),
        blur: parseInt('0'),
        color: '#000',
        opacity: parseFloat('0.35')
    },
      bar: {
            horizontal: '',
            columnWidth: '50% ',
            startingShape: 'flat',
            endingShape: 'flat',
            dataLabels: {
            position: 'top',                                       
            },
            borderRadius: 10,
      },
      dataLabels: {
      enabled: '',
      offsetY: parseFloat('0'),
                        offsetX: parseFloat('0'),
                        style: {
                            colors: ['#000000']
                        },
                        background: {
                            enabled: '',
                            foreColor: ['#FFFFFF'],
                            borderWidth: parseInt('1'),
                            borderColor: '#FFFFFF'
                        },
                        formatter: function (val) {
                            return '' + val + '';
                        }
      },
      
      xaxis:{
        x:50,
        categories: ['Jan','Feb', 'Mar','Apr', 'May', 'Jun', 'July', 'Aug']
      }
    },

    label:{
                    borderColor: '#7A7A7A',
                    offsetY: 0,
                    style: {
                    color: '#fff',
                    background: '#7A7A7A',
                    }
    },

    series: [
      {
        color: "#F16853",
        name: "Patients",
        data: [114,143,116,183,159,167,139,163],
      }
    ]
  };
}
render(){
  return (
    <div className="app">
      <div className="row">
        <div className="m-3">
          <Chart
            options={this.state.options}
            series={this.state.series}
            type="bar"
            height="auto"
            width="100%"
          />
        </div>
      </div>
    </div>
  );
}
}  

export default Achart;