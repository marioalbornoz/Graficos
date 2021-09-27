import React, { useEffect, useState } from 'react';
import { Column} from '@ant-design/charts';
import moment from 'moment';
import Spinner from './Spinner';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
const IntervalBar: React.FC = ({ setMotivo, setColor, detalles, setDetalles, fecha, guardarResponsable}) => {

  const classes = useStyles();

const [data, setData] = useState([]);
const [cargando, setCargando] = useState(false)


  useEffect(() => {
    asyncFetch();
    console.log(fecha || moment().subtract(1, 'days').format("YYYY-MM-DD"));
  }, [fecha]);
  const asyncFetch = () => {
    setCargando(true)
    fetch(`http://localhost:9001/api/reserva/${fecha || moment().subtract(1, 'days').format("YYYY-MM-DD")}`)
      .then((response) => response.json())
      .then((json) => {
        setData(json.data);
        setDetalles(json.GAP);
        setCargando(false)
      })
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
    label: {
      position: "middle",
      content: function content(item) {
        // console.log(item);
        return "".concat((item.percentage), "%");
      },
      layout: [ { type: 'element-active' }, { type: 'brush' }],
      style: { fill: '#fff',  opacity: 1,
      fontSize: 17,
      fontWeight: 30,
      shadowColor: "black",
      shadowBlur: 3, }
    },
    color: function color(_ref) {
      var type = _ref.type;
      let dataFilter= data.filter(la => la.type === type)
      return type ? dataFilter[0].color: "#5B8FF9";
    },
    tooltip: {
      customContent: (title, items) => {
        // console.log();
        return (
              items?.map((item, index) => {
                const { name, value, color, data } = item;
                // console.log(item);
                return (
                  <>
                    <h5 style={{ marginTop: 16 }}>{data.responsable}</h5>
                    <ul style={{ paddingLeft: 0 }}>
                  <li
                    key={item.year}
                    className="g2-tooltip-list-item"
                    data-index={index}
                    style={{ marginBottom: 4, display: 'flex', alignItems: 'center' }}
                  >
                    <span className="g2-tooltip-marker" style={{ backgroundColor: color }}></span>
                    <span
                      style={{ display: 'inline-flex', flex: 1, justifyContent: 'space-between', fontSize:15 }}
                    >
                      <span style={{ marginRight: 13  , color: 'black'}}>{name}: </span>
                      <span className="g2-tooltip-list-item-value" style={{ color: '#3c3c3', fontWeight:'bold'  }}>{data.qty} RESERVAS({data.percentage}%)</span>
                    </span>
                  </li>
            </ul>
          </>
                );
              })
        );
      },
    },
  };

  const grafico = <> <Column {...config} height={600}  onReady={(plot) => {
    plot.chart.on('plot:click', (evt) => {
      const { x, y } = evt;
      setMotivo(evt.data?.data.type);
      setColor(evt.data?.data.color);
      guardarResponsable(evt.data?.data.responsable);
    });
  }}  />
  </>

  return cargando ? (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={12}></Grid>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}>
          <Spinner />
        </Grid>
        <Grid item xs={0}></Grid>
      </Grid>
    </div>
  ) : data.length > 0 ? (
    grafico
  ) : (
    <h2 style={{ textAlign:'center'}}>No hay datos cargados para este dia</h2>
  );
};

export default IntervalBar;