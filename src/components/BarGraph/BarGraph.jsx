import React from 'react';
import './barGraph.css';
import ResponsiveBar from 'nivo/lib/components/charts/bar/ResponsiveBar';

const BarGraph = ({ dataBar }) => {

    return (
        <>
            <div className="container__responsive__barGprah">

                <ResponsiveBar
                    data={dataBar}
                    keys={['won']}
                    indexBy="year"
                    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
                    padding={0.6}
                    layout="horizontal"
                    valueScale={{ type: 'linear' }}
                    indexScale={{ type: 'band', round: true }}
                    colors="#3182CE"
                    borderColor={"#3182CE"}
                    axisTop={null}
                    axisRight={null}
                    axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Matches Won',
                        legendPosition: 'center',
                        legendOffset: 32
                    }}
                    axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Season(year)',
                        legendPosition: 'center',
                        legendOffset: -40
                    }}
                    labelSkipWidth={2}
                    labelSkipHeight={2}
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
                        }
                    ]}
                    role="application"
                    ariaLabel="Nivo bar chart demo"
                    barAriaLabel={function (e) { return e.id + ": " + e.formattedValue + " in country: " + e.indexValue }}
                />
            </div>

        </>
    )
}

export default BarGraph