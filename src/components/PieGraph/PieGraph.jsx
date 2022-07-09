import React from 'react';
import './pieGraph.css';
import ResponsivePie from 'nivo/lib/components/charts/pie/ResponsivePie';

const PieGraph = ({ dataPie }) => {

    return (
        <>
            <div className="pie__chart__container">

                <ResponsivePie
                    data={[...dataPie]}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    activeOuterRadiusOffset={8}
                    borderWidth={1}
                    borderColor='var(--dark)'
                    arcLinkLabelsSkipAngle={10}
                    arcLinkLabelsTextColor="#333333"
                    arcLinkLabelsThickness={2}
                    arcLinkLabelsColor={{ from: 'color' }}
                    arcLabelsSkipAngle={10}
                    arcLabelsTextColor={{
                        from: 'color',
                        modifiers: [['darker', 2]]
                    }}
                    legends={[
                        {
                            anchor: 'bottom',
                            direction: 'row',
                            justify: false,
                            translateX: 0,
                            translateY: 56,
                            itemsSpacing: 0,
                            itemWidth: 100,
                            itemHeight: 18,
                            itemTextColor: '#999',
                            itemDirection: 'left-to-right',
                            itemOpacity: 1,
                            symbolSize: 18,
                            symbolShape: 'circle',
                            effects: [{ on: 'hover', style: { itemTextColor: '#000' } }]
                        }
                    ]}
                />
            </div>

        </>)
}

export default PieGraph;