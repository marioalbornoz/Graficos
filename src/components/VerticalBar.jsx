import React, { useState, useEffect } from 'react';
import { Column, G2 } from '@ant-design/charts';
const VerticalBar = () => {
    G2.registerInteraction('element-link', {
        start: [
            {
                trigger: 'interval:mouseenter',
                action: 'element-link-by-color:link',
            },
        ],
        end: [
            {
                trigger: 'interval:mouseleave',
                action: 'element-link-by-color:unlink',
            },
        ],
    });
    const [data, setData] = useState([]);
    const [datos, setDatos] = useState([
    //   { day: "1-12-2013", type: "Braunkohle", value: 145.1 },
    //   { day: "1-12-2013", type: "Biomasse", value: 48.3 },
    //   { day: "1-12-2013", type: "Wind", value: 47.2 },
    //   { day: "1-12-2013", type: "Solar", value: 29.7 },
    //   { day: "1-12-2014", type: "Kernenergie", value: 91.8 },
    //   { day: "1-12-2014", type: "Braunkohle", value: 140.9 },
    //   { day: "1-12-2014", type: "Steinkohle", value: 99 },
    //   { day: "1-12-2014", type: "Gas", value: 33.2 },
    //   { day: "1-12-2014", type: "Wasserkraft", value: 18.5 },
    //   { day: "1-12-2014", type: "Biomasse", value: 53.9 },
    //   { day: "1-12-2014", type: "Wind", value: 51.4 },
    //   { day: "1-12-2014", type: "Solar", value: 32.8 },
    //   { day: "1-12-2015", type: "Kernenergie", value: 87.1 },
    //   { day: "1-12-2015", type: "Braunkohle", value: 139.4 },
    //   { day: "1-12-2015", type: "Steinkohle", value: 103.9 },
    //   { day: "1-12-2015", type: "Gas", value: 30 },
    //   { day: "1-12-2015", type: "Wasserkraft", value: 23.2 },
    //   { day: "1-12-2015", type: "Biomasse", value: 56.5 },
    //   { day: "1-12-2015", type: "Wind", value: 84.6 },
    //   { day: "1-12-2015", type: "Solar", value: 36.8 },
    //   { day: "1-12-2016", type: "Kernenergie", value: 80 },
    //   { day: "1-12-2016", type: "Braunkohle", value: 134.8 },
    //   { day: "1-12-2016", type: "Steinkohle", value: 100 },
    //   { day: "1-12-2016", type: "Gas", value: 45.2 },
    //   { day: "1-12-2016", type: "Wasserkraft", value: 20.8 },
    //   { day: "1-12-2016", type: "Biomasse", value: 49.3 },
    //   { day: "1-12-2016", type: "Wind", value: 77.8 },
    //   { day: "1-12-2016", type: "Solar", value: 37.5 },

    //   { day: "1-12-2020", type: "Braunkohle", value: 145.1 },
    //   { day: "1-12-2020", type: "Steinkohle", value: 110.6 },
    //   { day: "1-12-2020", type: "Gas", value: 39.4 },
    //   { day: "1-12-2012", type: "Wasserkraft", value: 21 },
    //   { day: "1-12-2012", type: "Biomasse", value: 48.3 },
    //   { day: "1-12-2012", type: "Wind", value: 47.2 },
    //   { day: "1-12-2012", type: "Solar", value: 29.7 },
    //   { day: "1-12-2012", type: "Kernenergie", value: 91.8 },
    //   { day: "1-12-2020", type: "Braunkohle", value: 140.9 },
    //   { day: "1-12-2012", type: "Steinkohle", value: 99 },
    //   { day: "1-12-2017", type: "Gas", value: 33.2 },
    //   { day: "1-12-2017", type: "Wasserkraft", value: 18.5 },
    //   { day: "1-12-2017", type: "Biomasse", value: 53.9 },
    //   { day: "1-12-2017", type: "Wind", value: 51.4 },
    //   { day: "1-12-2017", type: "Solar", value: 32.8 },
    //   { day: "1-12-2017", type: "Kernenergie", value: 87.1 },
    //   { day: "1-12-2017", type: "Braunkohle", value: 139.4 },
    //   { day: "1-12-2016", type: "Steinkohle", value: 103.9 },
    //   { day: "1-12-2016", type: "Gas", value: 30 },
    //   { day: "1-12-2016", type: "Wasserkraft", value: 23.2 },
    //   { day: "1-12-2016", type: "Biomasse", value: 56.5 },
    //   { day: "1-12-2016", type: "Wind", value: 84.6 },
    //   { day: "1-12-2016", type: "Solar", value: 36.8 },
    //   { day: "1-12-2019", type: "Kernenergie", value: 80 },
    //   { day: "1-12-2019", type: "Braunkohle", value: 134.8 },
    //   { day: "1-12-2019", type: "Steinkohle", value: 100 },
    //   { day: "1-12-2019", type: "Gas", value: 45.2 },
    //   { day: "1-12-2019", type: "Wasserkraft", value: 20.8 },
    //   { day: "1-12-2019", type: "Biomasse", value: 49.3 },
    //   { day: "1-12-2019", type: "Wind", value: 77.8 },
    //   { day: "1-12-2019", type: "Solar", value: 37.5 },

    //   { day: "1-12-2021", type: "Kernenergie", value: 80 },
    //   { day: "1-12-2021", type: "Braunkohle", value: 134.8 },
    //   { day: "1-12-2021", type: "Steinkohle", value: 100 },
    //   { day: "1-12-2021", type: "Gas", value: 45.2 },
    //   { day: "1-12-2021", type: "Wasserkraft", value: 20.8 },
    //   { day: "1-12-2021", type: "Biomasse", value: 49.3 },
    //   { day: "1-12-2021", type: "Wind", value: 77.8 },
    //   { day: "1-12-2021", type: "Solar", value: 37.5 },
      
      { day: "1-12-2022", type: "Kernenergie", value: 1.5 },
      { day: "1-12-2022", type: "Braunkohle", value: 6 },
    //   { day: "1-12-2022", type: "Steinkohle", value: 100 },
      { day: "1-12-2022", type: "Gas", value: 2.0 },
      { day: "1-12-2022", type: "Wasserkraft", value: 15.2 },
    //   { day: "1-12-2022", type: "Biomasse", value: 79.3 },
      { day: "1-12-2022", type: "Wind", value: 7.8 },
      { day: "1-12-2022", type: "Solar", value: 70.5 },
    ]);
    useEffect(() => {
        asyncFetch();
    }, []);
    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/jSRiL%26YNql/percent-column.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
            console.log('fetch data failed', error);
        });
    };
    var config = {
        data: datos,
        xField: 'day',
        yField: 'value',
        seriesField: 'type',
        isPercent: true,
        isStack: true,
        meta: {
            value: {
                min: 0,
                max: 1,
            },
        },
        label: {
            position: 'middle',
            content: function content(item) {
                return ''.concat((item.value * 100).toFixed(2), '%');
            },
            style: { fill: '#fff' },
        },
        tooltip: false,
        interactions: [{ type: 'element-highlight-by-color' }, { type: 'element-link' }],
    };
    return <Column {...config}/>;
};
export default VerticalBar;