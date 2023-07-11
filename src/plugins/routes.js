// import indexPage from '@/pages/index'

export default [
    {
        title: 'Sample#1', 
        dashboards: [
            {
                type: 'tableau', 
                title: 'Profit & Loss',
                path: 'TheUltimateProfitLossStatementWorkbook/01_SingleSheetRawTable',
                params: {},
                cols: 12,
            },
            {
                type: 'tableau',
                title: 'SCORVizGames2023',
                path: 'SCORVizGames2023-TheInsideScoop/Summary',
                cols: 5,
            },
            {
                type: 'd3',
                title: 'TestViz',
                path: 'https://observablehq.com/embed/@d3/hexbin-area?cells=chart',
                cols: 5,
            }
        ]
    },
    {
        title: 'Sample#2', 
        dashboards: [
            {
                type: 'tableau',
                title: 'Sampler',
                path: 'H1BDashboardUpdatedtillSep2022/Home',
                cols: 5,
            },
            {
                type: 'd3',
                title: 'TestViz',
                path: 'https://observablehq.com/embed/@d3/chord-dependency-diagram/2?cells=chart',
                cols: 5,
            },
            {
                type: 'd3',
                title: 'TestViz2',
                path: 'https://vg.dxnlab.com/#/',
                cols: 12,
            },
        ]
    },
    {
        title: 'One Big',
        dashboards: [
            {
                type: 'd3',
                title: 'TestViz2',
                path: 'https://vg.dxnlab.com/#/',
                cols: 12,
                height: '100%'
            }
        ]
    }
]
