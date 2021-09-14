import React, { useEffect, useState } from 'react';
import { Column} from '@ant-design/charts';

const IntervalBar: React.FC = ({area, setArea,color, setColor}) => {

const [data, setData] = useState([]);
  useEffect(() => {
    asyncFetch();
}, []);
const asyncFetch = () => {
  fetch(
    "http://192.168.240.1:27017/api/reservas"
  )
    .then((response) => response.json())
    .then((json) => setData(json.data))
    .catch((error) => {
      console.log("fetch data failed", error);
    });
};
  var config = {
    data: data,
    xField: "type",
    yField: "values",
    xAxis: {
      label: {
        autoRotate: true,
        autoHide: false,
        autoEllipsis: false,
      },
      tickCount: data.length,
    },
    isRange: true,
    seriesField: "type",
    // interactions: [
    //   { type: "element-highlight-by-color" },
    //   { type: "element-link" },
    // ],
    label: {
      position: "middle",
      content: function content(item) {
        return "".concat((item.values[1] - item.values[0]).toFixed(1), "%");
      },
      layout: [{ type: "adjust-color" }, { type: 'element-active' }, { type: 'brush' }],
      style: { fill: '#fff' },
    },
    color: function color(_ref) {
      var type = _ref.type;
      let dataFilter= data.filter(la => la.type === type)
      return type ? dataFilter[0].color: "#5B8FF9";
    },
    tooltip: {
      customContent: (title, items) => {
        return (
          <>
            <h5 style={{ marginTop: 16 }}>{title}</h5>
            <ul style={{ paddingLeft: 0 }}>
              {items?.map((item, index) => {
                const { name, value, color } = item;
                return (
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between' }}
                    >
                      <span style={{ margiRight: 16 }}>{name}:</span>
                      <span className="g2-tooltip-list-item-value">{value}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          </>
        );
      },
    },
  };
  return <> <Column {...config} height={600}  onReady={(plot) => {
    plot.chart.on('plot:click', (evt) => {
      const { x, y } = evt;
      console.log(plot.chart.getTooltipItems({ x, y }));
      if(plot.chart.getTooltipItems({ x, y })[0].name === "Finalizado") {
        setArea("")
      }
      else {setArea(plot.chart.getTooltipItems({ x, y })[0].name) 
    setColor(plot.chart.getTooltipItems({ x, y })[0].data.color)}
    });
  }}  />
  <p>{area === "" ? "Seleccione un intervalo" : `Responsable: ${area} `}</p></>;
};

export default IntervalBar;