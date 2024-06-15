// src/pages/Dashboard.js
import React from 'react';
import { Box, Grid, Card, CardContent, Typography } from '@mui/material';
import { ResponsiveBar } from '@nivo/bar';

const data = [
  {
    country: 'AD',
    'hot dog': 29,
    'hot dogColor': 'hsl(348, 70%, 50%)',
    burger: 20,
    burgerColor: 'hsl(148, 70%, 50%)',
    sandwich: 40,
    sandwichColor: 'hsl(74, 70%, 50%)',
    kebab: 21,
    kebabColor: 'hsl(178, 70%, 50%)',
    fries: 12,
    friesColor: 'hsl(270, 70%, 50%)',
    donut: 29,
    donutColor: 'hsl(57, 70%, 50%)',
  },
  {
    country: 'AE',
    'hot dog': 12,
    'hot dogColor': 'hsl(131, 70%, 50%)',
    burger: 14,
    burgerColor: 'hsl(30, 70%, 50%)',
    sandwich: 13,
    sandwichColor: 'hsl(333, 70%, 50%)',
    kebab: 19,
    kebabColor: 'hsl(244, 70%, 50%)',
    fries: 29,
    friesColor: 'hsl(302, 70%, 50%)',
    donut: 21,
    donutColor: 'hsl(115, 70%, 50%)',
  },
  // Add more data as needed
];

const Dashboard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Users
              </Typography>
              <Typography variant="h3" color="text.secondary">
                1,024
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Total Sales
              </Typography>
              <Typography variant="h3" color="text.secondary">
                $24,000
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Active Projects
              </Typography>
              <Typography variant="h3" color="text.secondary">
                15
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                New Feedback
              </Typography>
              <Typography variant="h3" color="text.secondary">
                45
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div">
                Sales Data
              </Typography>
              <Box sx={{ height: 400 }}>
                <ResponsiveBar
                  data={data}
                  keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
                  indexBy="country"
                  margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                  padding={0.3}
                  valueScale={{ type: 'linear' }}
                  indexScale={{ type: 'band', round: true }}
                  colors={{ scheme: 'nivo' }}
                  borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  axisTop={null}
                  axisRight={null}
                  axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'country',
                    legendPosition: 'middle',
                    legendOffset: 32,
                  }}
                  axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'food',
                    legendPosition: 'middle',
                    legendOffset: -40,
                  }}
                  labelSkipWidth={12}
                  labelSkipHeight={12}
                  labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                  legends={[
                    {
                      dataFrom: 'keys',
                      anchor: 'bottom-right',
                      direction: 'column',
                      justify: false,
                      translateX: 120,
                      translateY: 0,
                      itemsSpacing: 2,
                      itemWidth: 100,
                      itemHeight: 20,
                      itemDirection: 'left-to-right',
                      itemOpacity: 0.85,
                      symbolSize: 20,
                      effects: [
                        {
                          on: 'hover',
                          style: {
                            itemOpacity: 1,
                          },
                        },
                      ],
                    },
                  ]}
                  role="application"
                  ariaLabel="Nivo bar chart demo"
                  barAriaLabel={(e) => `${e.id}: ${e.formattedValue} in country: ${e.indexValue}`}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
