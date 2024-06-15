import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  { country: 'USA', value: 400 },
  { country: 'Germany', value: 300 },
  { country: 'France', value: 200 },
  { country: 'UK', value: 100 },
];

const Charts = () => (
  <div>
    <h2>Charts</h2>
    <div style={{ height: 400 }}>
      <ResponsiveBar data={data} keys={['value']} indexBy="country" />
    </div>
  </div>
);

export default Charts;
