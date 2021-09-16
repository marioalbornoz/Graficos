import React from 'react';
import { Column } from '@ant-design/charts';
import {ubicarArea} from './../Helpers'
import CustomText from './CustomText';

const ChartBar: React.FC = ({area, color}) => {
  const data = [
    {
      type: '12-09',
      sales: 38,
    },
    {
      type: '11-09',
      sales: 52,
    },
    {
      type: '10-09',
      sales: 0,
    },
    {
      type: '09-09',
      sales: 12,
    },
    {
      type: '08-09',
      sales: 48,
    },
    {
      type: '07-09',
      sales: 38,
    },
    {
      type: '06-09',
      sales: 38,
    },
    {
      type: '05-09',
      sales: 38,
    },
  ];

  const config = {
    data,
    xField: "type",
    yField: "sales",
    slider: {
      start: 0.1,
      end: 0.5,
    },
    xAxis: { label: { autoRotate: false } },

    // conversionTag: {},
    label: {
      position: "middle",
      style: {
        // fill: "#00000",
        opacity: 1,
        fontSize: 20,
       fontWeight: 300,
        shadowColor: "white",
        shadowBlur: 3,
      },
    },
    color: color,
    meta: {
      type: { alias: "Fecha" },
      sales: { alias: "Sales" },
    },
  };

  return (
    <>
    <Column
      {...config} height={600}
      onReady={(plot) => {
        plot.on('plot:click', (evt) => {
          const { x, y } = evt;
        //   const { xField } = plot.options;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
          console.log(tooltipData);
          
        });
      }}
    /> 
    {/* <p>{area === "" ? "Seleccione un intervalo" : `área responsable: ${ubicarArea(area)} `}</p>  */}
    { !area ? <p>Selecciones un intervalo</p> : <CustomText text={`${ubicarArea(area)}`} />}
    </>
  );
};

export default ChartBar;