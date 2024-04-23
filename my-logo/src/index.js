import * as d3 from 'd3'

const line = d3.line((d) => x(d.Date), (d) => y(d.Close));