import React, { useState, useEffect } from 'react';
import { Column, G2} from '@ant-design/charts';

const IntervalBar: React.FC = () => {
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

  var data = [
    {
      type: '分类一',
      values: [76, 100],
    },
    {
      type: '分类二',
      values: [56, 75],
    },
    {
      type: '分类三',
      values: [38, 56],
    },
    {
      type: '分类四',
      values: [30, 37],
    },
    {
      type: '分类五',
      values: [25, 36],
    },
    {
      type: '分类六',
      values: [1, 24],
    },
    // {
    //   type: '分类七',
    //   values: [18, 56],
    // },
    // {
    //   type: '分类八',
    //   values: [18, 34],
    // },
  ];
  var config = {
    data: data,
    xField: 'type',
    yField: 'values',
    isRange: true,
    seriesField: 'type',
    label: {
      position: 'middle',
      content: function content(item) {
        return ''.concat(((item.values[1]-item.values[0])).toFixed(1), '%');
    },
      layout: [{ type: 'adjust-color' }],
    },
    color: function color(_ref) {
        var type = _ref.type;
        return type === '分类二' ? '#FAAD14' : '#5B8FF9';
      },
  };
  return <Column {...config} />;
};

export default IntervalBar;