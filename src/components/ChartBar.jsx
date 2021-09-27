import React, { useEffect, useState } from 'react';
import { Column } from '@ant-design/charts';
import {ubicarArea} from './../Helpers'
import CustomText from './CustomText';
import SimpleCard from './Card';
import { Grid } from '@antv/g6-pc';

const ChartBar: React.FC = ({motivo, setMotivo, color, responsable}) => {

 const [datos, setDatos] = useState([]);
 const [cantidades, guardarCantidades] = useState([])


 useEffect(() => {
  asyncFetch();
}, []);
const asyncFetch = () => {
  fetch(
    `http://localhost:9001/api/reserva/motivo/${motivo}`
  )
    .then((response) => response.json())
    .then((json) => {
      setDatos(json.semanal);
      guardarCantidades(json.semanal);
    })
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};


  const config = {
    data:datos,
    xField: "FECHA",
    yField: "CANTIDAD",
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
      FECHA: { alias: "Fecha" },
      CANTIDAD: { alias: "CANTIDAD" },
    },
  };

  return (
    <>
      <Column
        {...config}
        height={600}
        onReady={(plot) => {
          plot.on("plot:click", (evt) => {
            const { x, y } = evt;
            //   const { xField } = plot.options;
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log(tooltipData);
          });
        }}
      />{" "}
      <SimpleCard
        motivo={motivo}
        setMotivo={setMotivo}
        responsable={responsable}
      />
      {/* <p>{motivo === "" ? "Seleccione un intervalo" : `área responsable: ${ubicarmotivo(motivo)} `}</p>  */}
    </>
  );
};

export default ChartBar;