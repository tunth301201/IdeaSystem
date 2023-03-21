import React from 'react'

export default function Body() {
  return (
    <div>
      <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
  <main>
    <div className="px-4 pt-6">
      <div className="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
        {/* Main widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold leading-none text-gray-900 sm:text-2xl dark:text-white">$45,385</span>
              <h3 className="text-base font-light text-gray-500 dark:text-gray-400">Sales this week</h3>
            </div>
            <div className="flex items-center justify-end flex-1 text-base font-medium text-green-500 dark:text-green-400">
              12.5%
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          {/*<div id="main-chart" style={{minHeight: '435px'}}><div id="apexchartsz4kyi56y" className="apexcharts-canvas apexchartsz4kyi56y apexcharts-theme-light" style={{width: '695px', height: '420px'}}><svg id="SvgjsSvg1690" width={695} height={420} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg apexcharts-zoomable" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><foreignObject x={0} y={0} width={695} height={420}><div className="apexcharts-legend apexcharts-align-center apx-legend-position-bottom" xmlns="http://www.w3.org/1999/xhtml" style={{inset: 'auto 0px 1px', position: 'absolute', maxHeight: '210px'}}><div className="apexcharts-legend-series" rel={1} seriesname="Revenue" data:collapsed="false" style={{margin: '2px 10px'}}><span className="apexcharts-legend-marker" rel={1} data:collapsed="false" style={{background: 'rgb(26, 86, 219)', color: 'rgb(26, 86, 219)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} /><span className="apexcharts-legend-text" rel={1} i={0} data:default-text="Revenue" data:collapsed="false" style={{color: 'rgb(107, 114, 128)', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif'}}>Revenue</span></div><div className="apexcharts-legend-series" rel={2} seriesname="Revenuexxpreviousxperiodx" data:collapsed="false" style={{margin: '2px 10px'}}><span className="apexcharts-legend-marker" rel={2} data:collapsed="false" style={{background: 'rgb(253, 186, 140)', color: 'rgb(253, 186, 140)', height: '12px', width: '12px', left: '0px', top: '0px', borderWidth: '0px', borderColor: 'rgb(255, 255, 255)', borderRadius: '12px'}} /><span className="apexcharts-legend-text" rel={2} i={1} data:default-text="Revenue%20(previous%20period)" data:collapsed="false" style={{color: 'rgb(107, 114, 128)', fontSize: '14px', fontWeight: 500, fontFamily: 'Inter, sans-serif'}}>Revenue (previous period)</span></div></div><style type="text/css" dangerouslySetInnerHTML={{__html: "\t\n    \t\n      .apexcharts-legend {\t\n        display: flex;\t\n        overflow: auto;\t\n        padding: 0 10px;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {\t\n        flex-wrap: wrap\t\n      }\t\n      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        flex-direction: column;\t\n        bottom: 0;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {\t\n        justify-content: flex-start;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {\t\n        justify-content: center;  \t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {\t\n        justify-content: flex-end;\t\n      }\t\n      .apexcharts-legend-series {\t\n        cursor: pointer;\t\n        line-height: normal;\t\n      }\t\n      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{\t\n        display: flex;\t\n        align-items: center;\t\n      }\t\n      .apexcharts-legend-text {\t\n        position: relative;\t\n        font-size: 14px;\t\n      }\t\n      .apexcharts-legend-text *, .apexcharts-legend-marker * {\t\n        pointer-events: none;\t\n      }\t\n      .apexcharts-legend-marker {\t\n        position: relative;\t\n        display: inline-block;\t\n        cursor: pointer;\t\n        margin-right: 3px;\t\n        border-style: solid;\n      }\t\n      \t\n      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{\t\n        display: inline-block;\t\n      }\t\n      .apexcharts-legend-series.apexcharts-no-click {\t\n        cursor: auto;\t\n      }\t\n      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {\t\n        display: none !important;\t\n      }\t\n      .apexcharts-inactive-legend {\t\n        opacity: 0.45;\t\n      }" }} /></foreignObject><g id="SvgjsG1692" className="apexcharts-inner apexcharts-graphical" transform="translate(94.03974914550781, 30)"><defs id="SvgjsDefs1691"><clipPath id="gridRectMaskz4kyi56y"><rect id="SvgjsRect1698" width="575.3537368774414" height="315.494" x={-4} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><clipPath id="forecastMaskz4kyi56y" /><clipPath id="nonForecastMaskz4kyi56y" /><clipPath id="gridRectMarkerMaskz4kyi56y"><rect id="SvgjsRect1699" width="591.3537368774414" height="335.494" x={-12} y={-12} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><linearGradient id="SvgjsLinearGradient1717" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1718" stopOpacity="0.45" stopColor="rgba(26,86,219,0.45)" offset={0} /><stop id="SvgjsStop1719" stopOpacity={0} stopColor="rgba(141,171,237,0)" offset={1} /><stop id="SvgjsStop1720" stopOpacity={0} stopColor="rgba(141,171,237,0)" offset={1} /></linearGradient><linearGradient id="SvgjsLinearGradient1739" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1740" stopOpacity="0.45" stopColor="rgba(253,186,140,0.45)" offset={0} /><stop id="SvgjsStop1741" stopOpacity={0} stopColor="rgba(254,221,198,0)" offset={1} /><stop id="SvgjsStop1742" stopOpacity={0} stopColor="rgba(254,221,198,0)" offset={1} /></linearGradient></defs><line id="SvgjsLine1697" x1={0} y1={0} x2={0} y2="311.494" stroke="#f3f4f6" strokeDasharray={10} strokeLinecap="butt" className="apexcharts-xcrosshairs" x={0} y={0} width={1} height="311.494" fill="#b1b9c4" filter="none" fillOpacity="0.9" strokeWidth={1} /><g id="SvgjsG1745" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1746" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)"><text id="SvgjsText1748" fontFamily="Inter, sans-serif" x={0} y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1749">01 Feb</tspan><title>01 Feb</title></text><text id="SvgjsText1751" fontFamily="Inter, sans-serif" x="94.55895614624023" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1752">02 Feb</tspan><title>02 Feb</title></text><text id="SvgjsText1754" fontFamily="Inter, sans-serif" x="189.11791229248047" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1755">03 Feb</tspan><title>03 Feb</title></text><text id="SvgjsText1757" fontFamily="Inter, sans-serif" x="283.6768684387207" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1758">04 Feb</tspan><title>04 Feb</title></text><text id="SvgjsText1760" fontFamily="Inter, sans-serif" x="378.23582458496094" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1761">05 Feb</tspan><title>05 Feb</title></text><text id="SvgjsText1763" fontFamily="Inter, sans-serif" x="472.7947807312012" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1764">06 Feb</tspan><title>06 Feb</title></text><text id="SvgjsText1766" fontFamily="Inter, sans-serif" x="567.3537368774414" y="340.494" textAnchor="middle" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-xaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1767">07 Feb</tspan><title>07 Feb</title></text></g><line id="SvgjsLine1768" x1={0} y1="312.494" x2="567.3537368774414" y2="312.494" stroke="#f3f4f6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" /></g><g id="SvgjsG1781" className="apexcharts-grid"><g id="SvgjsG1782" className="apexcharts-gridlines-horizontal"><line id="SvgjsLine1791" x1={0} y1={0} x2="567.3537368774414" y2={0} stroke="#f3f4f6" strokeDasharray={1} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1792" x1={0} y1="77.8735" x2="567.3537368774414" y2="77.8735" stroke="#f3f4f6" strokeDasharray={1} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1793" x1={0} y1="155.747" x2="567.3537368774414" y2="155.747" stroke="#f3f4f6" strokeDasharray={1} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1794" x1={0} y1="233.62050000000002" x2="567.3537368774414" y2="233.62050000000002" stroke="#f3f4f6" strokeDasharray={1} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1795" x1={0} y1="311.494" x2="567.3537368774414" y2="311.494" stroke="#f3f4f6" strokeDasharray={1} strokeLinecap="butt" className="apexcharts-gridline" /></g><g id="SvgjsG1783" className="apexcharts-gridlines-vertical" /><line id="SvgjsLine1784" x1={0} y1="312.494" x2={0} y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1785" x1="94.55895614624023" y1="312.494" x2="94.55895614624023" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1786" x1="189.11791229248047" y1="312.494" x2="189.11791229248047" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1787" x1="283.6768684387207" y1="312.494" x2="283.6768684387207" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1788" x1="378.23582458496094" y1="312.494" x2="378.23582458496094" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1789" x1="472.7947807312012" y1="312.494" x2="472.7947807312012" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1790" x1="567.3537368774414" y1="312.494" x2="567.3537368774414" y2="318.494" stroke="#f3f4f6" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-xaxis-tick" /><line id="SvgjsLine1797" x1={0} y1="311.494" x2="567.3537368774414" y2="311.494" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /><line id="SvgjsLine1796" x1={0} y1={1} x2={0} y2="311.494" stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /></g><g id="SvgjsG1700" className="apexcharts-area-series apexcharts-plot-series"><g id="SvgjsG1701" className="apexcharts-series" seriesname="Revenue" data:longestseries="true" rel={1} data:realindex={0}><path id="SvgjsPath1721" d="M 0 311.494L 0 172.87917000000016C 33.09563465118408 172.87917000000016 61.46332149505616 226.61188500000026 94.55895614624023 226.61188500000026C 127.6545907974243 226.61188500000026 156.0222776412964 250.75266999999985 189.11791229248047 250.75266999999985C 222.21354694366454 250.75266999999985 250.58123378753663 106.68669499999987 283.6768684387207 106.68669499999987C 316.7725030899048 106.68669499999987 345.14018993377687 172.87917000000016 378.23582458496094 172.87917000000016C 411.331459236145 172.87917000000016 439.6991460800171 211.81592 472.7947807312012 211.81592C 505.89041538238524 211.81592 534.2581022262573 289.68942000000015 567.3537368774414 289.68942000000015C 567.3537368774414 289.68942000000015 567.3537368774414 289.68942000000015 567.3537368774414 311.494M 567.3537368774414 289.68942000000015z" fill="url(#SvgjsLinearGradient1717)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskz4kyi56y)" pathto="M 0 311.494L 0 172.87917000000016C 33.09563465118408 172.87917000000016 61.46332149505616 226.61188500000026 94.55895614624023 226.61188500000026C 127.6545907974243 226.61188500000026 156.0222776412964 250.75266999999985 189.11791229248047 250.75266999999985C 222.21354694366454 250.75266999999985 250.58123378753663 106.68669499999987 283.6768684387207 106.68669499999987C 316.7725030899048 106.68669499999987 345.14018993377687 172.87917000000016 378.23582458496094 172.87917000000016C 411.331459236145 172.87917000000016 439.6991460800171 211.81592 472.7947807312012 211.81592C 505.89041538238524 211.81592 534.2581022262573 289.68942000000015 567.3537368774414 289.68942000000015C 567.3537368774414 289.68942000000015 567.3537368774414 289.68942000000015 567.3537368774414 311.494M 567.3537368774414 289.68942000000015z" pathfrom="M -1 2647.699L -1 2647.699L 94.55895614624023 2647.699L 189.11791229248047 2647.699L 283.6768684387207 2647.699L 378.23582458496094 2647.699L 472.7947807312012 2647.699L 567.3537368774414 2647.699" /><path id="SvgjsPath1722" d="M 0 172.87917000000016C 33.09563465118408 172.87917000000016 61.46332149505616 226.61188500000026 94.55895614624023 226.61188500000026C 127.6545907974243 226.61188500000026 156.0222776412964 250.75266999999985 189.11791229248047 250.75266999999985C 222.21354694366454 250.75266999999985 250.58123378753663 106.68669499999987 283.6768684387207 106.68669499999987C 316.7725030899048 106.68669499999987 345.14018993377687 172.87917000000016 378.23582458496094 172.87917000000016C 411.331459236145 172.87917000000016 439.6991460800171 211.81592 472.7947807312012 211.81592C 505.89041538238524 211.81592 534.2581022262573 289.68942000000015 567.3537368774414 289.68942000000015" fill="none" fillOpacity={1} stroke="#1a56db" strokeOpacity={1} strokeLinecap="butt" strokeWidth={4} strokeDasharray={0} className="apexcharts-area" index={0} clipPath="url(#gridRectMaskz4kyi56y)" pathto="M 0 172.87917000000016C 33.09563465118408 172.87917000000016 61.46332149505616 226.61188500000026 94.55895614624023 226.61188500000026C 127.6545907974243 226.61188500000026 156.0222776412964 250.75266999999985 189.11791229248047 250.75266999999985C 222.21354694366454 250.75266999999985 250.58123378753663 106.68669499999987 283.6768684387207 106.68669499999987C 316.7725030899048 106.68669499999987 345.14018993377687 172.87917000000016 378.23582458496094 172.87917000000016C 411.331459236145 172.87917000000016 439.6991460800171 211.81592 472.7947807312012 211.81592C 505.89041538238524 211.81592 534.2581022262573 289.68942000000015 567.3537368774414 289.68942000000015" pathfrom="M -1 2647.699L -1 2647.699L 94.55895614624023 2647.699L 189.11791229248047 2647.699L 283.6768684387207 2647.699L 378.23582458496094 2647.699L 472.7947807312012 2647.699L 567.3537368774414 2647.699" /><g id="SvgjsG1702" className="apexcharts-series-markers-wrap" data:realindex={0}><g id="SvgjsG1704" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1705" r={5} cx={0} cy="172.87917000000016" className="apexcharts-marker no-pointer-events wdigrxj8ii" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={0} j={0} index={0} default-marker-size={5} /><circle id="SvgjsCircle1706" r={5} cx="94.55895614624023" cy="226.61188500000026" className="apexcharts-marker no-pointer-events wnef06s28" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={1} j={1} index={0} default-marker-size={5} /></g><g id="SvgjsG1707" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1708" r={5} cx="189.11791229248047" cy="250.75266999999985" className="apexcharts-marker no-pointer-events w222livq5" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={2} j={2} index={0} default-marker-size={5} /></g><g id="SvgjsG1709" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1710" r={5} cx="283.6768684387207" cy="106.68669499999987" className="apexcharts-marker no-pointer-events wbabclt1a" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={3} j={3} index={0} default-marker-size={5} /></g><g id="SvgjsG1711" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1712" r={5} cx="378.23582458496094" cy="172.87917000000016" className="apexcharts-marker no-pointer-events wjm8pe3z6" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={4} j={4} index={0} default-marker-size={5} /></g><g id="SvgjsG1713" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1714" r={5} cx="472.7947807312012" cy="211.81592" className="apexcharts-marker no-pointer-events waf8w80ic" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={5} j={5} index={0} default-marker-size={5} /></g><g id="SvgjsG1715" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1716" r={5} cx="567.3537368774414" cy="289.68942000000015" className="apexcharts-marker no-pointer-events wjhlsfhc9i" stroke="#ffffff" fill="#1a56db" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={6} j={6} index={0} default-marker-size={5} /></g></g></g><g id="SvgjsG1723" className="apexcharts-series" seriesname="Revenuexxpreviousxperiodx" data:longestseries="true" rel={2} data:realindex={1}><path id="SvgjsPath1743" d="M 0 311.494L 0 95.00567000000001C 33.09563465118408 95.00567000000001 61.46332149505616 29.202562500000113 94.55895614624023 29.202562500000113C 127.6545907974243 29.202562500000113 156.0222776412964 146.40218000000004 189.11791229248047 146.40218000000004C 222.21354694366454 146.40218000000004 250.58123378753663 172.87917000000016 283.6768684387207 172.87917000000016C 316.7725030899048 172.87917000000016 345.14018993377687 83.32464500000015 378.23582458496094 83.32464500000015C 411.331459236145 83.32464500000015 439.6991460800171 17.13216999999986 472.7947807312012 17.13216999999986C 505.89041538238524 17.13216999999986 534.2581022262573 71.64361999999983 567.3537368774414 71.64361999999983C 567.3537368774414 71.64361999999983 567.3537368774414 71.64361999999983 567.3537368774414 311.494M 567.3537368774414 71.64361999999983z" fill="url(#SvgjsLinearGradient1739)" fillOpacity={1} strokeOpacity={1} strokeLinecap="butt" strokeWidth={0} strokeDasharray={0} className="apexcharts-area" index={1} clipPath="url(#gridRectMaskz4kyi56y)" pathto="M 0 311.494L 0 95.00567000000001C 33.09563465118408 95.00567000000001 61.46332149505616 29.202562500000113 94.55895614624023 29.202562500000113C 127.6545907974243 29.202562500000113 156.0222776412964 146.40218000000004 189.11791229248047 146.40218000000004C 222.21354694366454 146.40218000000004 250.58123378753663 172.87917000000016 283.6768684387207 172.87917000000016C 316.7725030899048 172.87917000000016 345.14018993377687 83.32464500000015 378.23582458496094 83.32464500000015C 411.331459236145 83.32464500000015 439.6991460800171 17.13216999999986 472.7947807312012 17.13216999999986C 505.89041538238524 17.13216999999986 534.2581022262573 71.64361999999983 567.3537368774414 71.64361999999983C 567.3537368774414 71.64361999999983 567.3537368774414 71.64361999999983 567.3537368774414 311.494M 567.3537368774414 71.64361999999983z" pathfrom="M -1 2647.699L -1 2647.699L 94.55895614624023 2647.699L 189.11791229248047 2647.699L 283.6768684387207 2647.699L 378.23582458496094 2647.699L 472.7947807312012 2647.699L 567.3537368774414 2647.699" /><path id="SvgjsPath1744" d="M 0 95.00567000000001C 33.09563465118408 95.00567000000001 61.46332149505616 29.202562500000113 94.55895614624023 29.202562500000113C 127.6545907974243 29.202562500000113 156.0222776412964 146.40218000000004 189.11791229248047 146.40218000000004C 222.21354694366454 146.40218000000004 250.58123378753663 172.87917000000016 283.6768684387207 172.87917000000016C 316.7725030899048 172.87917000000016 345.14018993377687 83.32464500000015 378.23582458496094 83.32464500000015C 411.331459236145 83.32464500000015 439.6991460800171 17.13216999999986 472.7947807312012 17.13216999999986C 505.89041538238524 17.13216999999986 534.2581022262573 71.64361999999983 567.3537368774414 71.64361999999983" fill="none" fillOpacity={1} stroke="#fdba8c" strokeOpacity={1} strokeLinecap="butt" strokeWidth={4} strokeDasharray={0} className="apexcharts-area" index={1} clipPath="url(#gridRectMaskz4kyi56y)" pathto="M 0 95.00567000000001C 33.09563465118408 95.00567000000001 61.46332149505616 29.202562500000113 94.55895614624023 29.202562500000113C 127.6545907974243 29.202562500000113 156.0222776412964 146.40218000000004 189.11791229248047 146.40218000000004C 222.21354694366454 146.40218000000004 250.58123378753663 172.87917000000016 283.6768684387207 172.87917000000016C 316.7725030899048 172.87917000000016 345.14018993377687 83.32464500000015 378.23582458496094 83.32464500000015C 411.331459236145 83.32464500000015 439.6991460800171 17.13216999999986 472.7947807312012 17.13216999999986C 505.89041538238524 17.13216999999986 534.2581022262573 71.64361999999983 567.3537368774414 71.64361999999983" pathfrom="M -1 2647.699L -1 2647.699L 94.55895614624023 2647.699L 189.11791229248047 2647.699L 283.6768684387207 2647.699L 378.23582458496094 2647.699L 472.7947807312012 2647.699L 567.3537368774414 2647.699" /><g id="SvgjsG1724" className="apexcharts-series-markers-wrap" data:realindex={1}><g id="SvgjsG1726" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1727" r={5} cx={0} cy="95.00567000000001" className="apexcharts-marker no-pointer-events wi5b7r9mtf" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={0} j={0} index={1} default-marker-size={5} /><circle id="SvgjsCircle1728" r={5} cx="94.55895614624023" cy="29.202562500000113" className="apexcharts-marker no-pointer-events wm9o1oyu7" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={1} j={1} index={1} default-marker-size={5} /></g><g id="SvgjsG1729" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1730" r={5} cx="189.11791229248047" cy="146.40218000000004" className="apexcharts-marker no-pointer-events wryx36vu2" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={2} j={2} index={1} default-marker-size={5} /></g><g id="SvgjsG1731" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1732" r={5} cx="283.6768684387207" cy="172.87917000000016" className="apexcharts-marker no-pointer-events wkuh8qtss" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={3} j={3} index={1} default-marker-size={5} /></g><g id="SvgjsG1733" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1734" r={5} cx="378.23582458496094" cy="83.32464500000015" className="apexcharts-marker no-pointer-events wdkbz4hdi" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={4} j={4} index={1} default-marker-size={5} /></g><g id="SvgjsG1735" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1736" r={5} cx="472.7947807312012" cy="17.13216999999986" className="apexcharts-marker no-pointer-events wagvkvci8" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={5} j={5} index={1} default-marker-size={5} /></g><g id="SvgjsG1737" className="apexcharts-series-markers" clipPath="url(#gridRectMarkerMaskz4kyi56y)"><circle id="SvgjsCircle1738" r={5} cx="567.3537368774414" cy="71.64361999999983" className="apexcharts-marker no-pointer-events wtezrsozbj" stroke="#ffffff" fill="#fdba8c" fillOpacity={1} strokeWidth={2} strokeOpacity="0.9" rel={6} j={6} index={1} default-marker-size={5} /></g></g></g><g id="SvgjsG1703" className="apexcharts-datalabels" data:realindex={0} /><g id="SvgjsG1725" className="apexcharts-datalabels" data:realindex={1} /></g><line id="SvgjsLine1798" x1={0} y1={0} x2="567.3537368774414" y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" /><line id="SvgjsLine1799" x1={0} y1={0} x2="567.3537368774414" y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1800" className="apexcharts-yaxis-annotations" /><g id="SvgjsG1801" className="apexcharts-xaxis-annotations" /><g id="SvgjsG1802" className="apexcharts-point-annotations" /><rect id="SvgjsRect1803" width={0} height={0} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fefefe" className="apexcharts-zoom-rect" /><rect id="SvgjsRect1804" width={0} height={0} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fefefe" className="apexcharts-selection-rect" /></g><rect id="SvgjsRect1696" width={0} height={0} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fefefe" /><g id="SvgjsG1769" className="apexcharts-yaxis" rel={0} transform="translate(41.03974914550781, 0)"><g id="SvgjsG1770" className="apexcharts-yaxis-texts-g"><text id="SvgjsText1771" fontFamily="Inter, sans-serif" x={20} y="31.4" textAnchor="end" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1772">$6800</tspan><title>$6800</title></text><text id="SvgjsText1773" fontFamily="Inter, sans-serif" x={20} y="109.27350000000001" textAnchor="end" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1774">$6600</tspan><title>$6600</title></text><text id="SvgjsText1775" fontFamily="Inter, sans-serif" x={20} y="187.14700000000002" textAnchor="end" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1776">$6400</tspan><title>$6400</title></text><text id="SvgjsText1777" fontFamily="Inter, sans-serif" x={20} y="265.02049999999997" textAnchor="end" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1778">$6200</tspan><title>$6200</title></text><text id="SvgjsText1779" fontFamily="Inter, sans-serif" x={20} y="342.894" textAnchor="end" dominantBaseline="auto" fontSize="14px" fontWeight={500} fill="#6b7280" className="apexcharts-text apexcharts-yaxis-label " style={{fontFamily: 'Inter, sans-serif'}}><tspan id="SvgjsTspan1780">$6000</tspan><title>$6000</title></text></g></g><g id="SvgjsG1693" className="apexcharts-annotations" /></svg><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}} /><div className="apexcharts-tooltip-series-group" style={{order: 1}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(26, 86, 219)'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div><div className="apexcharts-tooltip-series-group" style={{order: 2}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(253, 186, 140)'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div><div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light"><div className="apexcharts-xaxistooltip-text" style={{fontFamily: 'Inter, sans-serif', fontSize: '12px'}} /></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text" /></div></div></div>*/}
          {/* Card Footer */}
          <div className="flex items-center justify-between pt-3 mt-4 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
            <div>
              <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="weekly-sales-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
              {/* Dropdown menu */}
              <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="weekly-sales-dropdown" data-popper-placement="bottom" style={{position: 'absolute', inset: '0px auto auto 0px', margin: '0px', transform: 'translate(355px, 707px)'}}>
                <div className="px-4 py-3" role="none">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                    Sep 16, 2021 - Sep 22, 2021
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                  </li>
                </ul>
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                Sales Report
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
        {/*Tabs widget */}
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <h3 className="flex items-center mb-4 text-lg font-semibold text-gray-900 dark:text-white">Statistics this month
            <button data-popover-target="popover-description" data-popover-placement="bottom-end" type="button"><svg className="w-4 h-4 ml-2 text-gray-400 hover:text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg><span className="sr-only">Show information</span></button>
          </h3>
          <div data-popover id="popover-description" role="tooltip" className="absolute z-10 invisible inline-block text-sm font-light text-gray-500 transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 w-72 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-400" data-popper-placement="top-start" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(221px, -6173px)'}}>
            <div className="p-3 space-y-2">
              <h3 className="font-semibold text-gray-900 dark:text-white">Statistics</h3>
              <p>Statistics is a branch of applied mathematics that involves the collection, description, analysis, and inference of conclusions from quantitative data.</p>
              <a href="#" className="flex items-center font-medium text-primary-600 dark:text-primary-500 dark:hover:text-primary-600 hover:text-primary-700">Read more <svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></a>
            </div>
            <div data-popper-arrow style={{position: 'absolute', left: '0px', transform: 'translate(7px, 0px)'}} />
          </div>
          <div className="sm:hidden">
            <label htmlFor="tabs" className="sr-only">Select tab</label>
            <select id="tabs" className="bg-gray-50 border-0 border-b border-gray-200 text-gray-900 text-sm rounded-t-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
              <option>Statistics</option>
              <option>Services</option>
              <option>FAQ</option>
            </select>
          </div>
          {/* Top Comment */}
          <ul className="hidden text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg sm:flex dark:divide-gray-600 dark:text-gray-400" id="fullWidthTab" data-tabs-toggle="#fullWidthTabContent" role="tablist">
            <li className="w-full">
              <button id="faq-tab" data-tabs-target="#faq" type="button" role="tab" aria-controls="faq" aria-selected="true" className="inline-block w-full p-4 rounded-tl-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 text-blue-600 hover:text-blue-600 dark:text-blue-500 dark:hover:text-blue-500 border-blue-600 dark:border-blue-500">Top products</button>
            </li>
            <li className="w-full">
              <button id="about-tab" data-tabs-target="#about" type="button" role="tab" aria-controls="about" aria-selected="false" className="inline-block w-full p-4 rounded-tr-lg bg-gray-50 hover:bg-gray-100 focus:outline-none dark:bg-gray-700 dark:hover:bg-gray-600 dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300">Top Customers</button>
            </li>
          </ul>
          <div id="fullWidthTabContent" className="border-t border-gray-200 dark:border-gray-600">
            <div className="pt-4" id="faq" role="tabpanel" aria-labelledby="faq-tab">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/iphone.png" alt="imac image" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          iPhone 14 Pro 
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                          </svg>
                          2.5% 
                          <span className="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $445,467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iMac 27"
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                          </svg>
                          12.5% 
                          <span className="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $256,982
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/watch.png" alt="watch image" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple Watch SE
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                          </svg>
                          1.35% 
                          <span className="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $201,869
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/ipad.png" alt="ipad image" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iPad Air
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-green-500 dark:text-green-400">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                          </svg>
                          12.5% 
                          <span className="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $103,967
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center min-w-0">
                      <img className="flex-shrink-0 w-10 h-10" src="https://flowbite-admin-dashboard.vercel.app/images/products/imac.png" alt="imac image" />
                      <div className="ml-3">
                        <p className="font-medium text-gray-900 truncate dark:text-white">
                          Apple iMac 24"
                        </p>
                        <div className="flex items-center justify-end flex-1 text-sm text-red-600 dark:text-red-500">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path clipRule="evenodd" fillRule="evenodd" d="M10 3a.75.75 0 01.75.75v10.638l3.96-4.158a.75.75 0 111.08 1.04l-5.25 5.5a.75.75 0 01-1.08 0l-5.25-5.5a.75.75 0 111.08-1.04l3.96 4.158V3.75A.75.75 0 0110 3z" />
                          </svg>
                          2% 
                          <span className="ml-2 text-gray-500">vs last month</span>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $98,543
                    </div>
                  </div>
                </li>               
              </ul>
            </div>
            <div className="hidden pt-4" id="about" role="tabpanel" aria-labelledby="about-tab">
              <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/neil-sims.png" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Neil Sims
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $3320
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Bonnie Green
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2467
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/michael-gough.png" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Michael Gough
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $2235
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/thomas-lean.png" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Thomes Lean
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1842
                    </div>
                  </div>
                </li>
                <li className="py-3 sm:py-4">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                      <img className="w-8 h-8 rounded-full" src="https://flowbite-admin-dashboard.vercel.app/images/users/lana-byrd.png" alt="Neil image" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate dark:text-white">
                        Lana Byrd
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        email@flowbite.com
                      </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                      $1044
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Card Footer */}
          <div className="flex items-center justify-between pt-3 mt-5 border-t border-gray-200 sm:pt-6 dark:border-gray-700">
            <div>
              <button className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" type="button" data-dropdown-toggle="stats-dropdown">Last 7 days <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></button>
              {/* Dropdown menu */}
              <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="stats-dropdown" data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(355px, 511px)'}} data-popper-reference-hidden data-popper-escaped>
                <div className="px-4 py-3" role="none">
                  <p className="text-sm font-medium text-gray-900 truncate dark:text-white" role="none">
                    Sep 16, 2021 - Sep 22, 2021
                  </p>
                </div>
                <ul className="py-1" role="none">
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Yesterday</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Today</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 7 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 30 days</a>
                  </li>
                  <li>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Last 90 days</a>
                  </li>
                </ul>
                <div className="py-1" role="none">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Custom...</a>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a href="#" className="inline-flex items-center p-2 text-xs font-medium uppercase rounded-lg text-primary-700 sm:text-sm hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
                Full Report
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Top category comment and idea */}
      <div className="grid w-full grid-cols-1 gap-4 mt-4 xl:grid-cols-2 2xl:grid-cols-3">
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="w-full">
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">New products</h3>
            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
            <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                </svg>
                12.5% 
              </span>
              Since last month
            </p>
          </div>
          {/*<div className="w-full" id="new-products-chart" style={{minHeight: '155px'}}><div id="apexchartsmled8bzj" className="apexcharts-canvas apexchartsmled8bzj apexcharts-theme-light" style={{width: '348px', height: '140px'}}><svg id="SvgjsSvg1464" width={348} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><g id="SvgjsG1466" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)"><defs id="SvgjsDefs1465"><linearGradient id="SvgjsLinearGradient1469" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1470" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} /><stop id="SvgjsStop1471" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /><stop id="SvgjsStop1472" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /></linearGradient><clipPath id="gridRectMaskmled8bzj"><rect id="SvgjsRect1474" width={335} height={100} x="-4.5" y="-2.5" rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><clipPath id="forecastMaskmled8bzj" /><clipPath id="nonForecastMaskmled8bzj" /><clipPath id="gridRectMarkerMaskmled8bzj"><rect id="SvgjsRect1475" width={330} height={99} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath></defs><rect id="SvgjsRect1473" width="41.91428571428572" height={95} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1469)" className="apexcharts-xcrosshairs" y2={95} filter="none" fillOpacity="0.9" /><g id="SvgjsG1494" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1495" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG1504" className="apexcharts-grid"><g id="SvgjsG1505" className="apexcharts-gridlines-horizontal" style={{display: 'none'}}><line id="SvgjsLine1507" x1={0} y1={0} x2={326} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1508" x1={0} y1="23.75" x2={326} y2="23.75" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1509" x1={0} y1="47.5" x2={326} y2="47.5" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1510" x1={0} y1="71.25" x2={326} y2="71.25" stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1511" x1={0} y1={95} x2={326} y2={95} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /></g><g id="SvgjsG1506" className="apexcharts-gridlines-vertical" style={{display: 'none'}} /><line id="SvgjsLine1513" x1={0} y1={95} x2={326} y2={95} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /><line id="SvgjsLine1512" x1={0} y1={1} x2={0} y2={95} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /></g><g id="SvgjsG1476" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1477" className="apexcharts-series" rel={1} seriesname="Quantity" data:realindex={0}><path id="SvgjsPath1481" d="M 2.3285714285714256 95L 2.3285714285714256 17.25Q 2.3285714285714256 14.25 5.328571428571426 14.25L 36.24285714285715 14.25Q 39.24285714285715 14.25 39.24285714285715 17.25L 39.24285714285715 17.25L 39.24285714285715 95L 39.24285714285715 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 2.3285714285714256 95L 2.3285714285714256 17.25Q 2.3285714285714256 14.25 5.328571428571426 14.25L 36.24285714285715 14.25Q 39.24285714285715 14.25 39.24285714285715 17.25L 39.24285714285715 17.25L 39.24285714285715 95L 39.24285714285715 95z" pathfrom="M 2.3285714285714256 95L 2.3285714285714256 95L 39.24285714285715 95L 39.24285714285715 95L 39.24285714285715 95L 39.24285714285715 95L 39.24285714285715 95L 2.3285714285714256 95" cy="14.25" cx="46.39999999999999" j={0} val={170} barheight="80.75" barwidth="41.91428571428572" /><path id="SvgjsPath1483" d="M 48.89999999999999 95L 48.89999999999999 12.5Q 48.89999999999999 9.5 51.89999999999999 9.5L 82.81428571428572 9.5Q 85.81428571428572 9.5 85.81428571428572 12.5L 85.81428571428572 12.5L 85.81428571428572 95L 85.81428571428572 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 48.89999999999999 95L 48.89999999999999 12.5Q 48.89999999999999 9.5 51.89999999999999 9.5L 82.81428571428572 9.5Q 85.81428571428572 9.5 85.81428571428572 12.5L 85.81428571428572 12.5L 85.81428571428572 95L 85.81428571428572 95z" pathfrom="M 48.89999999999999 95L 48.89999999999999 95L 85.81428571428572 95L 85.81428571428572 95L 85.81428571428572 95L 85.81428571428572 95L 85.81428571428572 95L 48.89999999999999 95" cy="9.5" cx="92.97142857142856" j={1} val={180} barheight="85.5" barwidth="41.91428571428572" /><path id="SvgjsPath1485" d="M 95.47142857142856 95L 95.47142857142856 20.099999999999994Q 95.47142857142856 17.099999999999994 98.47142857142856 17.099999999999994L 129.38571428571427 17.099999999999994Q 132.38571428571427 17.099999999999994 132.38571428571427 20.099999999999994L 132.38571428571427 20.099999999999994L 132.38571428571427 95L 132.38571428571427 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 95.47142857142856 95L 95.47142857142856 20.099999999999994Q 95.47142857142856 17.099999999999994 98.47142857142856 17.099999999999994L 129.38571428571427 17.099999999999994Q 132.38571428571427 17.099999999999994 132.38571428571427 20.099999999999994L 132.38571428571427 20.099999999999994L 132.38571428571427 95L 132.38571428571427 95z" pathfrom="M 95.47142857142856 95L 95.47142857142856 95L 132.38571428571427 95L 132.38571428571427 95L 132.38571428571427 95L 132.38571428571427 95L 132.38571428571427 95L 95.47142857142856 95" cy="17.099999999999994" cx="139.54285714285714" j={2} val={164} barheight="77.9" barwidth="41.91428571428572" /><path id="SvgjsPath1487" d="M 142.04285714285714 95L 142.04285714285714 29.125Q 142.04285714285714 26.125 145.04285714285714 26.125L 175.95714285714286 26.125Q 178.95714285714286 26.125 178.95714285714286 29.125L 178.95714285714286 29.125L 178.95714285714286 95L 178.95714285714286 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 142.04285714285714 95L 142.04285714285714 29.125Q 142.04285714285714 26.125 145.04285714285714 26.125L 175.95714285714286 26.125Q 178.95714285714286 26.125 178.95714285714286 29.125L 178.95714285714286 29.125L 178.95714285714286 95L 178.95714285714286 95z" pathfrom="M 142.04285714285714 95L 142.04285714285714 95L 178.95714285714286 95L 178.95714285714286 95L 178.95714285714286 95L 178.95714285714286 95L 178.95714285714286 95L 142.04285714285714 95" cy="26.125" cx="186.1142857142857" j={3} val={145} barheight="68.875" barwidth="41.91428571428572" /><path id="SvgjsPath1489" d="M 188.6142857142857 95L 188.6142857142857 5.849999999999994Q 188.6142857142857 2.8499999999999943 191.6142857142857 2.8499999999999943L 222.5285714285714 2.8499999999999943Q 225.5285714285714 2.8499999999999943 225.5285714285714 5.849999999999994L 225.5285714285714 5.849999999999994L 225.5285714285714 95L 225.5285714285714 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 188.6142857142857 95L 188.6142857142857 5.849999999999994Q 188.6142857142857 2.8499999999999943 191.6142857142857 2.8499999999999943L 222.5285714285714 2.8499999999999943Q 225.5285714285714 2.8499999999999943 225.5285714285714 5.849999999999994L 225.5285714285714 5.849999999999994L 225.5285714285714 95L 225.5285714285714 95z" pathfrom="M 188.6142857142857 95L 188.6142857142857 95L 225.5285714285714 95L 225.5285714285714 95L 225.5285714285714 95L 225.5285714285714 95L 225.5285714285714 95L 188.6142857142857 95" cy="2.8499999999999943" cx="232.68571428571425" j={4} val={194} barheight="92.15" barwidth="41.91428571428572" /><path id="SvgjsPath1491" d="M 235.18571428571425 95L 235.18571428571425 17.25Q 235.18571428571425 14.25 238.18571428571425 14.25L 269.09999999999997 14.25Q 272.09999999999997 14.25 272.09999999999997 17.25L 272.09999999999997 17.25L 272.09999999999997 95L 272.09999999999997 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 235.18571428571425 95L 235.18571428571425 17.25Q 235.18571428571425 14.25 238.18571428571425 14.25L 269.09999999999997 14.25Q 272.09999999999997 14.25 272.09999999999997 17.25L 272.09999999999997 17.25L 272.09999999999997 95L 272.09999999999997 95z" pathfrom="M 235.18571428571425 95L 235.18571428571425 95L 272.09999999999997 95L 272.09999999999997 95L 272.09999999999997 95L 272.09999999999997 95L 272.09999999999997 95L 235.18571428571425 95" cy="14.25" cx="279.2571428571428" j={5} val={170} barheight="80.75" barwidth="41.91428571428572" /><path id="SvgjsPath1493" d="M 281.7571428571428 95L 281.7571428571428 24.375Q 281.7571428571428 21.375 284.7571428571428 21.375L 315.6714285714285 21.375Q 318.6714285714285 21.375 318.6714285714285 24.375L 318.6714285714285 24.375L 318.6714285714285 95L 318.6714285714285 95z" fill="rgba(26,86,219,1)" fillOpacity={1} stroke="transparent" strokeOpacity={1} strokeLinecap="round" strokeWidth={5} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskmled8bzj)" pathto="M 281.7571428571428 95L 281.7571428571428 24.375Q 281.7571428571428 21.375 284.7571428571428 21.375L 315.6714285714285 21.375Q 318.6714285714285 21.375 318.6714285714285 24.375L 318.6714285714285 24.375L 318.6714285714285 95L 318.6714285714285 95z" pathfrom="M 281.7571428571428 95L 281.7571428571428 95L 318.6714285714285 95L 318.6714285714285 95L 318.6714285714285 95L 318.6714285714285 95L 318.6714285714285 95L 281.7571428571428 95" cy="21.375" cx="325.82857142857137" j={6} val={155} barheight="73.625" barwidth="41.91428571428572" /><g id="SvgjsG1479" className="apexcharts-bar-goals-markers" style={{pointerEvents: 'none'}}><g id="SvgjsG1480" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1482" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1484" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1486" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1488" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1490" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1492" classname="apexcharts-bar-goals-groups" /></g></g><g id="SvgjsG1478" className="apexcharts-datalabels" data:realindex={0} /></g><line id="SvgjsLine1514" x1={0} y1={0} x2={326} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" /><line id="SvgjsLine1515" x1={0} y1={0} x2={326} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1516" className="apexcharts-yaxis-annotations" /><g id="SvgjsG1517" className="apexcharts-xaxis-annotations" /><g id="SvgjsG1518" className="apexcharts-point-annotations" /></g><g id="SvgjsG1503" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" /><g id="SvgjsG1467" className="apexcharts-annotations" /></svg><div className="apexcharts-legend" style={{maxHeight: '70px'}} /><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}} /><div className="apexcharts-tooltip-series-group" style={{order: 1}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(26, 86, 219)'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text" /></div></div></div>*/}
        </div>
        <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="w-full">
            <h3 className="text-base font-normal text-gray-500 dark:text-gray-400">Users</h3>
            <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl dark:text-white">2,340</span>
            <p className="flex items-center text-base font-normal text-gray-500 dark:text-gray-400">
              <span className="flex items-center mr-1.5 text-sm text-green-500 dark:text-green-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" />
                </svg>
                3,4% 
              </span>
              Since last month
            </p>
          </div>
         {/* <div className="w-full" id="week-signups-chart" style={{minHeight: '155px'}}><div id="apexchartsypv6ov61" className="apexcharts-canvas apexchartsypv6ov61 apexcharts-theme-light" style={{width: '348px', height: '140px'}}><svg id="SvgjsSvg1609" width={348} height={140} xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev" className="apexcharts-svg" xmlns:data="ApexChartsNS" transform="translate(0, 0)" style={{background: 'transparent'}}><g id="SvgjsG1611" className="apexcharts-inner apexcharts-graphical" transform="translate(12, 30)"><defs id="SvgjsDefs1610"><linearGradient id="SvgjsLinearGradient1614" x1={0} y1={0} x2={0} y2={1}><stop id="SvgjsStop1615" stopOpacity="0.4" stopColor="rgba(216,227,240,0.4)" offset={0} /><stop id="SvgjsStop1616" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /><stop id="SvgjsStop1617" stopOpacity="0.5" stopColor="rgba(190,209,230,0.5)" offset={1} /></linearGradient><clipPath id="gridRectMaskypv6ov61"><rect id="SvgjsRect1619" width={330} height={95} x={-2} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath><clipPath id="forecastMaskypv6ov61" /><clipPath id="nonForecastMaskypv6ov61" /><clipPath id="gridRectMarkerMaskypv6ov61"><rect id="SvgjsRect1620" width={330} height={99} x={-2} y={-2} rx={0} ry={0} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#fff" /></clipPath></defs><rect id="SvgjsRect1618" width="11.642857142857142" height={95} x={0} y={0} rx={0} ry={0} opacity={1} strokeWidth={0} strokeDasharray={3} fill="url(#SvgjsLinearGradient1614)" className="apexcharts-xcrosshairs" y2={95} filter="none" fillOpacity="0.9" /><g id="SvgjsG1646" className="apexcharts-xaxis" transform="translate(0, 0)"><g id="SvgjsG1647" className="apexcharts-xaxis-texts-g" transform="translate(0, -4)" /></g><g id="SvgjsG1656" className="apexcharts-grid"><g id="SvgjsG1657" className="apexcharts-gridlines-horizontal" style={{display: 'none'}}><line id="SvgjsLine1659" x1={0} y1={0} x2={326} y2={0} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1660" x1={0} y1={19} x2={326} y2={19} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1661" x1={0} y1={38} x2={326} y2={38} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1662" x1={0} y1={57} x2={326} y2={57} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1663" x1={0} y1={76} x2={326} y2={76} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /><line id="SvgjsLine1664" x1={0} y1={95} x2={326} y2={95} stroke="#e0e0e0" strokeDasharray={0} strokeLinecap="butt" className="apexcharts-gridline" /></g><g id="SvgjsG1658" className="apexcharts-gridlines-vertical" style={{display: 'none'}} /><line id="SvgjsLine1666" x1={0} y1={95} x2={326} y2={95} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /><line id="SvgjsLine1665" x1={0} y1={1} x2={0} y2={95} stroke="transparent" strokeDasharray={0} strokeLinecap="butt" /></g><g id="SvgjsG1621" className="apexcharts-bar-series apexcharts-plot-series"><g id="SvgjsG1622" className="apexcharts-series" rel={1} seriesname="Users" data:realindex={0}><rect id="SvgjsRect1625" width="11.642857142857142" height={95} x="17.464285714285715" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1627" d="M 17.464285714285715 95L 17.464285714285715 55.75666666666667Q 17.464285714285715 52.75666666666667 20.464285714285715 52.75666666666667L 26.107142857142858 52.75666666666667Q 29.107142857142858 52.75666666666667 29.107142857142858 55.75666666666667L 29.107142857142858 55.75666666666667L 29.107142857142858 95L 29.107142857142858 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 17.464285714285715 95L 17.464285714285715 55.75666666666667Q 17.464285714285715 52.75666666666667 20.464285714285715 52.75666666666667L 26.107142857142858 52.75666666666667Q 29.107142857142858 52.75666666666667 29.107142857142858 55.75666666666667L 29.107142857142858 55.75666666666667L 29.107142857142858 95L 29.107142857142858 95z" pathfrom="M 17.464285714285715 95L 17.464285714285715 95L 29.107142857142858 95L 29.107142857142858 95L 29.107142857142858 95L 29.107142857142858 95L 29.107142857142858 95L 17.464285714285715 95" cy="52.75666666666667" cx="64.03571428571428" j={0} val={1334} barheight="42.24333333333333" barwidth="11.642857142857142" /><rect id="SvgjsRect1628" width="11.642857142857142" height={95} x="64.03571428571428" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1630" d="M 64.03571428571428 95L 64.03571428571428 20.891666666666666Q 64.03571428571428 17.891666666666666 67.03571428571428 17.891666666666666L 72.67857142857142 17.891666666666666Q 75.67857142857142 17.891666666666666 75.67857142857142 20.891666666666666L 75.67857142857142 20.891666666666666L 75.67857142857142 95L 75.67857142857142 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 64.03571428571428 95L 64.03571428571428 20.891666666666666Q 64.03571428571428 17.891666666666666 67.03571428571428 17.891666666666666L 72.67857142857142 17.891666666666666Q 75.67857142857142 17.891666666666666 75.67857142857142 20.891666666666666L 75.67857142857142 20.891666666666666L 75.67857142857142 95L 75.67857142857142 95z" pathfrom="M 64.03571428571428 95L 64.03571428571428 95L 75.67857142857142 95L 75.67857142857142 95L 75.67857142857142 95L 75.67857142857142 95L 75.67857142857142 95L 64.03571428571428 95" cy="17.891666666666666" cx="110.60714285714285" j={1} val={2435} barheight="77.10833333333333" barwidth="11.642857142857142" /><rect id="SvgjsRect1631" width="11.642857142857142" height={95} x="110.60714285714285" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1633" d="M 110.60714285714285 95L 110.60714285714285 42.48833333333333Q 110.60714285714285 39.48833333333333 113.60714285714285 39.48833333333333L 119.24999999999999 39.48833333333333Q 122.24999999999999 39.48833333333333 122.24999999999999 42.48833333333333L 122.24999999999999 42.48833333333333L 122.24999999999999 95L 122.24999999999999 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 110.60714285714285 95L 110.60714285714285 42.48833333333333Q 110.60714285714285 39.48833333333333 113.60714285714285 39.48833333333333L 119.24999999999999 39.48833333333333Q 122.24999999999999 39.48833333333333 122.24999999999999 42.48833333333333L 122.24999999999999 42.48833333333333L 122.24999999999999 95L 122.24999999999999 95z" pathfrom="M 110.60714285714285 95L 110.60714285714285 95L 122.24999999999999 95L 122.24999999999999 95L 122.24999999999999 95L 122.24999999999999 95L 122.24999999999999 95L 110.60714285714285 95" cy="39.48833333333333" cx="157.17857142857142" j={2} val={1753} barheight="55.51166666666667" barwidth="11.642857142857142" /><rect id="SvgjsRect1634" width="11.642857142857142" height={95} x="157.17857142857142" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1636" d="M 157.17857142857142 95L 157.17857142857142 55.946666666666665Q 157.17857142857142 52.946666666666665 160.17857142857142 52.946666666666665L 165.82142857142856 52.946666666666665Q 168.82142857142856 52.946666666666665 168.82142857142856 55.946666666666665L 168.82142857142856 55.946666666666665L 168.82142857142856 95L 168.82142857142856 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 157.17857142857142 95L 157.17857142857142 55.946666666666665Q 157.17857142857142 52.946666666666665 160.17857142857142 52.946666666666665L 165.82142857142856 52.946666666666665Q 168.82142857142856 52.946666666666665 168.82142857142856 55.946666666666665L 168.82142857142856 55.946666666666665L 168.82142857142856 95L 168.82142857142856 95z" pathfrom="M 157.17857142857142 95L 157.17857142857142 95L 168.82142857142856 95L 168.82142857142856 95L 168.82142857142856 95L 168.82142857142856 95L 168.82142857142856 95L 157.17857142857142 95" cy="52.946666666666665" cx="203.75" j={3} val={1328} barheight="42.053333333333335" barwidth="11.642857142857142" /><rect id="SvgjsRect1637" width="11.642857142857142" height={95} x="203.75" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1639" d="M 203.75 95L 203.75 61.425Q 203.75 58.425 206.75 58.425L 212.39285714285714 58.425Q 215.39285714285714 58.425 215.39285714285714 61.425L 215.39285714285714 61.425L 215.39285714285714 95L 215.39285714285714 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 203.75 95L 203.75 61.425Q 203.75 58.425 206.75 58.425L 212.39285714285714 58.425Q 215.39285714285714 58.425 215.39285714285714 61.425L 215.39285714285714 61.425L 215.39285714285714 95L 215.39285714285714 95z" pathfrom="M 203.75 95L 203.75 95L 215.39285714285714 95L 215.39285714285714 95L 215.39285714285714 95L 215.39285714285714 95L 215.39285714285714 95L 203.75 95" cy="58.425" cx="250.32142857142856" j={4} val={1155} barheight="36.575" barwidth="11.642857142857142" /><rect id="SvgjsRect1640" width="11.642857142857142" height={95} x="250.32142857142856" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1642" d="M 250.32142857142856 95L 250.32142857142856 46.32Q 250.32142857142856 43.32 253.32142857142856 43.32L 258.9642857142857 43.32Q 261.9642857142857 43.32 261.9642857142857 46.32L 261.9642857142857 46.32L 261.9642857142857 95L 261.9642857142857 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 250.32142857142856 95L 250.32142857142856 46.32Q 250.32142857142856 43.32 253.32142857142856 43.32L 258.9642857142857 43.32Q 261.9642857142857 43.32 261.9642857142857 46.32L 261.9642857142857 46.32L 261.9642857142857 95L 261.9642857142857 95z" pathfrom="M 250.32142857142856 95L 250.32142857142856 95L 261.9642857142857 95L 261.9642857142857 95L 261.9642857142857 95L 261.9642857142857 95L 261.9642857142857 95L 250.32142857142856 95" cy="43.32" cx="296.8928571428571" j={5} val={1632} barheight="51.68" barwidth="11.642857142857142" /><rect id="SvgjsRect1643" width="11.642857142857142" height={95} x="296.8928571428571" y={0} rx={3} ry={3} opacity={1} strokeWidth={0} stroke="none" strokeDasharray={0} fill="#E5E7EB" className="apexcharts-backgroundBar" /><path id="SvgjsPath1645" d="M 296.8928571428571 95L 296.8928571428571 55.69333333333333Q 296.8928571428571 52.69333333333333 299.8928571428571 52.69333333333333L 305.5357142857143 52.69333333333333Q 308.5357142857143 52.69333333333333 308.5357142857143 55.69333333333333L 308.5357142857143 55.69333333333333L 308.5357142857143 95L 308.5357142857143 95z" fill="rgba(26,86,219,1)" fillOpacity={1} strokeOpacity={1} strokeLinecap="round" strokeWidth={0} strokeDasharray={0} className="apexcharts-bar-area" index={0} clipPath="url(#gridRectMaskypv6ov61)" pathto="M 296.8928571428571 95L 296.8928571428571 55.69333333333333Q 296.8928571428571 52.69333333333333 299.8928571428571 52.69333333333333L 305.5357142857143 52.69333333333333Q 308.5357142857143 52.69333333333333 308.5357142857143 55.69333333333333L 308.5357142857143 55.69333333333333L 308.5357142857143 95L 308.5357142857143 95z" pathfrom="M 296.8928571428571 95L 296.8928571428571 95L 308.5357142857143 95L 308.5357142857143 95L 308.5357142857143 95L 308.5357142857143 95L 308.5357142857143 95L 296.8928571428571 95" cy="52.69333333333333" cx="343.46428571428567" j={6} val={1336} barheight="42.30666666666667" barwidth="11.642857142857142" /><g id="SvgjsG1624" className="apexcharts-bar-goals-markers" style={{pointerEvents: 'none'}}><g id="SvgjsG1626" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1629" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1632" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1635" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1638" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1641" classname="apexcharts-bar-goals-groups" /><g id="SvgjsG1644" classname="apexcharts-bar-goals-groups" /></g></g><g id="SvgjsG1623" className="apexcharts-datalabels" data:realindex={0} /></g><line id="SvgjsLine1667" x1={0} y1={0} x2={326} y2={0} stroke="#b6b6b6" strokeDasharray={0} strokeWidth={1} strokeLinecap="butt" className="apexcharts-ycrosshairs" /><line id="SvgjsLine1668" x1={0} y1={0} x2={326} y2={0} strokeDasharray={0} strokeWidth={0} strokeLinecap="butt" className="apexcharts-ycrosshairs-hidden" /><g id="SvgjsG1669" className="apexcharts-yaxis-annotations" /><g id="SvgjsG1670" className="apexcharts-xaxis-annotations" /><g id="SvgjsG1671" className="apexcharts-point-annotations" /></g><g id="SvgjsG1655" className="apexcharts-yaxis" rel={0} transform="translate(-18, 0)" /><g id="SvgjsG1612" className="apexcharts-annotations" /></svg><div className="apexcharts-legend" style={{maxHeight: '70px'}} /><div className="apexcharts-tooltip apexcharts-theme-light"><div className="apexcharts-tooltip-title" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}} /><div className="apexcharts-tooltip-series-group" style={{order: 1}}><span className="apexcharts-tooltip-marker" style={{backgroundColor: 'rgb(26, 86, 219)'}} /><div className="apexcharts-tooltip-text" style={{fontFamily: 'Inter, sans-serif', fontSize: '14px'}}><div className="apexcharts-tooltip-y-group"><span className="apexcharts-tooltip-text-y-label" /><span className="apexcharts-tooltip-text-y-value" /></div><div className="apexcharts-tooltip-goals-group"><span className="apexcharts-tooltip-text-goals-label" /><span className="apexcharts-tooltip-text-goals-value" /></div><div className="apexcharts-tooltip-z-group"><span className="apexcharts-tooltip-text-z-label" /><span className="apexcharts-tooltip-text-z-value" /></div></div></div></div><div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light"><div className="apexcharts-yaxistooltip-text" /></div></div></div>*/}
        </div>
        <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 sm:p-6 dark:bg-gray-800">
          <div className="w-full">
            <h3 className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">Audience by age</h3>
            <div className="flex items-center mb-2">
              <div className="w-16 text-sm font-medium dark:text-white">50+</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: '18%'}} />
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-16 text-sm font-medium dark:text-white">40+</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: '15%'}} />
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-16 text-sm font-medium dark:text-white">30+</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: '60%'}} />
              </div>
            </div>
            <div className="flex items-center mb-2">
              <div className="w-16 text-sm font-medium dark:text-white">20+</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-primary-600 h-2.5 rounded-full dark:bg-primary-500" style={{width: '30%'}} />
              </div>
            </div>
          </div>
          <div id="traffic-channels-chart" className="w-full" />
        </div>
      </div>
      {/* Comment and idea chat */}
      <div className="grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-6 dark:border-gray-700 dark:bg-gray-800 xl:mb-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Smart chat</h3>
            <a href="#" className="inline-flex items-center p-2 text-sm font-medium rounded-lg text-primary-700 hover:bg-gray-100 dark:text-primary-500 dark:hover:bg-gray-700">
              View all
            </a>
          </div>
          {/* Chat */}
          <form className="overflow-y-auto lg:max-h-[60rem] 2xl:max-h-fit">
            <article className="mb-5">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Michael Gough" />Michael Gough</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                </div>
                <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownComment1" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(957px, 1317px)'}}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="mb-2 text-gray-900 dark:text-white">
                Hello <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@designteam</a> Let's schedule a kick-off meeting and workshop this week. It would be great to gather everyone involved in the design project. Let me know about your availability in the thread.
              </p>
              <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
              <a href="#" className="inline-flex items-center text-xs font-medium text-primary-700 sm:text-sm dark:text-primary-500">
                4 replies
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </a>
            </article>
            <article className="mb-5">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Bonnie avatar" />Bonnie Green</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                </div>
                <button id="dropdownComment2Button" data-dropdown-toggle="dropdownComment2" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                    </path>
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownComment2" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(957px, 1521px)'}}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="mb-3 text-gray-900 dark:text-white">Hello everyone,</p>
              <p className="mb-2 text-gray-900 dark:text-white">
                Thank you for the workshop, it was very productive meeting. I can't wait to start working on this new project with you guys. But first things first, I'am waiting for the offer and pitch deck from you. It would be great to get it by the end o the month.
              </p>
              <p className="mb-3 text-gray-900 dark:text-white">Cheers!</p>
              <div className="flex items-center mb-2 space-x-2">
                <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                  <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 14.1907C24 12.7352 23.7409 11.3397 23.2659 10.0486C22.9412 13.8526 20.9132 15.8065 18.7941 14.8966C16.8092 14.0439 18.1468 10.7199 18.2456 9.13377C18.4122 6.44506 18.2372 3.36742 13.3532 0.808594C15.3826 4.69095 13.5882 7.10295 11.7064 7.24977C9.61835 7.41283 7.70612 5.45542 8.412 2.27895C6.12635 3.96318 6.06 6.79801 6.76518 8.63189C7.50071 10.5434 6.73553 12.1317 4.94188 12.3081C2.93718 12.5058 1.82329 10.1615 2.85035 6.42601C1.07294 8.51895 0 11.2295 0 14.1907C0 20.8182 5.37247 26.1907 12 26.1907C18.6275 26.1907 24 20.8182 24 14.1907Z" fill="#F4900C" />
                    <path d="M19.3349 17.7211C19.4393 19.8981 17.5271 20.7515 16.4979 20.3393C15.0113 19.7442 15.4102 18.7221 15.0276 16.6044C14.645 14.4868 13.1746 13.0164 10.9984 12.3691C12.5866 16.8395 10.1182 18.487 8.82428 18.7814C7.50287 19.0821 6.17511 18.7807 6.02334 15.9529C4.4817 17.4875 3.52734 19.6108 3.52734 21.9571C3.52734 22.2169 3.54358 22.4724 3.56617 22.7266C5.73323 24.8682 8.70993 26.1924 11.9979 26.1924C15.2859 26.1924 18.2626 24.8682 20.4297 22.7266C20.4523 22.4724 20.4685 22.2169 20.4685 21.9571C20.4685 20.4134 20.0563 18.967 19.3349 17.7211Z" fill="#FFCC4D" />
                  </svg>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">14</span>
                </button>
                <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                  <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.24467 6.07733C3.87207 5.63882 4.81784 5.72291 5.38116 6.18812L4.73508 5.24903C4.21514 4.5075 4.40135 3.70523 5.14355 3.18462C5.88575 2.66601 7.98887 4.06031 7.98887 4.06031C7.46426 3.31143 7.56238 2.36233 8.31125 1.83705C9.06012 1.31377 10.0933 1.49465 10.6179 2.24486L17.5727 12.0697L16.6864 20.663L9.28906 17.9652L2.83686 8.3987C2.30758 7.64516 2.49046 6.60594 3.24467 6.07733Z" fill="#EF9645" />
                    <path d="M1.79857 11.5433C1.79857 11.5433 1.04302 10.442 2.14497 9.68715C3.24559 8.93226 4.00047 10.0329 4.00047 10.0329L7.50523 15.1442C7.62603 14.9426 7.75819 14.7437 7.90569 14.5475L3.04135 7.45454C3.04135 7.45454 2.28647 6.35392 3.38775 5.59904C4.48837 4.84416 5.24325 5.94478 5.24325 5.94478L9.81859 12.6172C9.98879 12.4784 10.163 12.3389 10.3425 12.2021L5.03835 4.46572C5.03835 4.46572 4.28347 3.3651 5.38475 2.61022C6.48537 1.85534 7.24025 2.95596 7.24025 2.95596L12.5444 10.691C12.7393 10.5715 12.9322 10.4681 13.1258 10.3586L8.168 3.12883C8.168 3.12883 7.41312 2.02821 8.51373 1.27333C9.61435 0.518448 10.3692 1.61907 10.3692 1.61907L15.6113 9.26398L16.4083 10.4267C13.1058 12.692 12.7914 16.9536 14.6783 19.7055C15.0554 20.2561 15.606 19.879 15.606 19.879C13.3414 16.5758 14.0328 12.8642 17.336 10.5995L16.3622 5.72586C16.3622 5.72586 15.9985 4.44169 17.282 4.07727C18.5661 3.71351 18.9306 4.99767 18.9306 4.99767L20.0552 8.33757C20.5011 9.66178 20.9756 10.9813 21.6037 12.2294C23.3771 15.7536 22.3178 20.1333 18.9739 22.4273C15.3263 24.9283 10.3399 23.9985 7.83828 20.3516L1.79857 11.5433Z" fill="#FFDC5D" />
                    <path d="M8.00913 21.3583C5.33934 21.3583 2.64153 18.6605 2.64153 15.9907C2.64153 15.6216 2.37122 15.3232 2.00212 15.3232C1.63302 15.3232 1.30664 15.6216 1.30664 15.9907C1.30664 19.9954 4.00445 22.6932 8.00913 22.6932C8.37822 22.6932 8.67657 22.3668 8.67657 21.9977C8.67657 21.6286 8.37822 21.3583 8.00913 21.3583Z" fill="#5DADEC" />
                    <path d="M4.67212 22.6649C2.66978 22.6649 1.33489 21.33 1.33489 19.3277C1.33489 18.9586 1.03654 18.6602 0.667445 18.6602C0.298348 18.6602 0 18.9586 0 19.3277C0 21.9974 2.00234 23.9998 4.67212 23.9998C5.04121 23.9998 5.33956 23.7014 5.33956 23.3323C5.33956 22.9632 5.04121 22.6649 4.67212 22.6649ZM16.0187 1.30664C15.6503 1.30664 15.3512 1.60566 15.3512 1.97409C15.3512 2.34252 15.6503 2.64153 16.0187 2.64153C18.6885 2.64153 21.3583 5.03699 21.3583 7.98109C21.3583 8.34952 21.6573 8.64854 22.0257 8.64854C22.3941 8.64854 22.6931 8.34952 22.6931 7.98109C22.6931 4.3008 20.0234 1.30664 16.0187 1.30664Z" fill="#5DADEC" />
                    <path d="M19.3559 0C18.9875 0 18.6885 0.270983 18.6885 0.639413C18.6885 1.00784 18.9875 1.33489 19.3559 1.33489C21.3583 1.33489 22.6651 2.81996 22.6651 4.64408C22.6651 5.01251 22.9915 5.31153 23.3606 5.31153C23.7297 5.31153 24 5.01251 24 4.64408C24 2.0831 22.0257 0 19.3559 0Z" fill="#5DADEC" />
                  </svg>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">8</span>
                </button>
                <button type="button" className="py-1.5 px-3 inline-flex items-center rounded-lg bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 dark:bg-gray-700">
                  <svg aria-hidden="true" className="h-5 mr-2" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.75255 5.29787C7.67789 5.37254 7.62122 5.46254 7.57388 5.56121L7.56855 5.55587L0.0910439 22.4003L0.0983774 22.4076C-0.0402924 22.6763 0.191713 23.223 0.667057 23.699C1.1424 24.1743 1.68908 24.4063 1.95775 24.2676L1.96442 24.2743L18.8088 16.7961L18.8035 16.7901C18.9015 16.7435 18.9915 16.6868 19.0668 16.6108C20.1082 15.5694 18.4195 12.1927 15.2961 9.06862C12.1713 5.94455 8.79458 4.25651 7.75255 5.29787Z" fill="#DD2E44" />
                    <path d="M8.66858 8.30273L0.279048 21.9737L0.0910439 22.3971L0.0983774 22.4044C-0.0402924 22.6731 0.191713 23.2197 0.667057 23.6958C0.821728 23.8504 0.982398 23.9678 1.13973 24.0671L11.3353 11.6361L8.66858 8.30273Z" fill="#EA596E" />
                    <path d="M15.3439 9.01304C18.4573 12.1278 20.186 15.4479 19.2033 16.4292C18.2213 17.4119 14.9012 15.6839 11.7858 12.5705C8.67174 9.45572 6.9437 6.13431 7.92573 5.15228C8.90841 4.17026 12.2285 5.8983 15.3439 9.01304Z" fill="#A0041E" />
                    <path d="M12.3913 9.37694C12.2587 9.48427 12.0853 9.54028 11.902 9.52028C11.3233 9.45761 10.8366 9.25627 10.496 8.93826C10.1353 8.60159 9.95727 8.14958 10.0059 7.6969C10.0913 6.90221 10.8886 6.17286 12.248 6.31953C12.7767 6.3762 13.0127 6.2062 13.0207 6.12486C13.03 6.04419 12.836 5.82752 12.3073 5.77019C11.7286 5.70752 11.242 5.50618 10.9006 5.18817C10.54 4.8515 10.3613 4.39949 10.4106 3.94681C10.4973 3.15213 11.294 2.42278 12.652 2.57011C13.0373 2.61145 13.2407 2.53211 13.3267 2.48078C13.3954 2.43878 13.4227 2.39878 13.4254 2.37544C13.4334 2.29477 13.242 2.0781 12.712 2.02077C12.346 1.98077 12.0807 1.65276 12.1213 1.28608C12.1607 0.920076 12.488 0.655404 12.8553 0.695405C14.2134 0.841408 14.8374 1.72343 14.7514 2.51878C14.6647 3.3148 13.868 4.04281 12.5087 3.89681C12.1233 3.85481 11.922 3.93481 11.8353 3.98615C11.7666 4.02748 11.7386 4.06815 11.736 4.09082C11.7273 4.17215 11.92 4.38816 12.45 4.44549C13.808 4.59216 14.432 5.47351 14.346 6.26887C14.26 7.06355 13.4634 7.7929 12.1047 7.64557C11.7193 7.60423 11.5166 7.68423 11.43 7.7349C11.3606 7.77757 11.334 7.81757 11.3313 7.84024C11.3226 7.9209 11.5153 8.13758 12.0447 8.19491C12.41 8.23491 12.676 8.56359 12.6353 8.92959C12.6167 9.11226 12.524 9.27027 12.3913 9.37694Z" fill="#AA8DD8" />
                    <path d="M20.4411 15.5411C21.7565 15.1698 22.6638 15.7565 22.8798 16.5265C23.0958 17.2958 22.6278 18.2699 21.3131 18.6399C20.7998 18.7839 20.6458 19.0292 20.6665 19.1072C20.6891 19.1859 20.9498 19.3152 21.4618 19.1706C22.7765 18.8005 23.6839 19.3872 23.8999 20.1566C24.1172 20.9266 23.6479 21.8993 22.3325 22.27C21.8198 22.414 21.6651 22.66 21.6878 22.738C21.7098 22.816 21.9698 22.9453 22.4825 22.8013C22.8358 22.702 23.2052 22.908 23.3045 23.262C23.4032 23.6167 23.1972 23.9847 22.8425 24.0847C21.5285 24.4547 20.6205 23.8693 20.4031 23.0986C20.1871 22.3293 20.6558 21.3566 21.9718 20.9859C22.4852 20.8413 22.6392 20.5966 22.6165 20.5179C22.5952 20.4399 22.3352 20.3099 21.8232 20.4539C20.5071 20.8246 19.6004 20.2392 19.3838 19.4679C19.1671 18.6985 19.6358 17.7259 20.9511 17.3545C21.4631 17.2112 21.6171 16.9645 21.5958 16.8872C21.5731 16.8085 21.3138 16.6792 20.8011 16.8232C20.4465 16.9232 20.0791 16.7165 19.9791 16.3625C19.8798 16.0092 20.0864 15.6411 20.4411 15.5411Z" fill="#77B255" />
                    <path d="M15.3333 13.7449C15.1373 13.7449 14.9439 13.6589 14.8119 13.4949C14.5819 13.2069 14.6292 12.7875 14.9159 12.5575C15.0612 12.4409 18.528 9.71812 23.4274 10.4188C23.7921 10.4708 24.0455 10.8081 23.9935 11.1728C23.9415 11.5368 23.6068 11.7928 23.2388 11.7382C18.91 11.1235 15.7806 13.5742 15.7499 13.5989C15.6259 13.6975 15.4793 13.7449 15.3333 13.7449Z" fill="#AA8DD8" />
                    <path d="M3.83539 10.9697C3.77205 10.9697 3.70739 10.9604 3.64338 10.9417C3.29071 10.8357 3.0907 10.4643 3.19671 10.1117C3.95206 7.59628 4.63674 3.58219 3.79539 2.5355C3.70138 2.41683 3.55938 2.30016 3.23404 2.32483C2.60869 2.37283 2.66803 3.69219 2.66869 3.70552C2.69669 4.07287 2.42069 4.39287 2.05401 4.42021C1.68134 4.44287 1.36666 4.1722 1.33933 3.80486C1.27066 2.8855 1.55667 1.1148 3.13404 0.995461C3.83805 0.942127 4.42273 1.1868 4.83541 1.70014C6.41611 3.66752 4.81141 9.37099 4.47407 10.495C4.3874 10.7837 4.12206 10.9697 3.83539 10.9697Z" fill="#77B255" />
                    <path d="M16.999 7.63774C17.5513 7.63774 17.9991 7.19002 17.9991 6.63772C17.9991 6.08542 17.5513 5.6377 16.999 5.6377C16.4467 5.6377 15.999 6.08542 15.999 6.63772C15.999 7.19002 16.4467 7.63774 16.999 7.63774Z" fill="#5C913B" />
                    <path d="M1.33336 13.6355C2.06976 13.6355 2.66673 13.0385 2.66673 12.3021C2.66673 11.5657 2.06976 10.9688 1.33336 10.9688C0.596967 10.9688 0 11.5657 0 12.3021C0 13.0385 0.596967 13.6355 1.33336 13.6355Z" fill="#9266CC" />
                    <path d="M21.666 14.3047C22.2183 14.3047 22.6661 13.857 22.6661 13.3047C22.6661 12.7524 22.2183 12.3047 21.666 12.3047C21.1137 12.3047 20.666 12.7524 20.666 13.3047C20.666 13.857 21.1137 14.3047 21.666 14.3047Z" fill="#5C913B" />
                    <path d="M15.666 22.3038C16.2183 22.3038 16.6661 21.856 16.6661 21.3037C16.6661 20.7514 16.2183 20.3037 15.666 20.3037C15.1137 20.3037 14.666 20.7514 14.666 21.3037C14.666 21.856 15.1137 22.3038 15.666 22.3038Z" fill="#5C913B" />
                    <path d="M18.6683 4.30052C19.4047 4.30052 20.0017 3.70355 20.0017 2.96715C20.0017 2.23076 19.4047 1.63379 18.6683 1.63379C17.9319 1.63379 17.335 2.23076 17.335 2.96715C17.335 3.70355 17.9319 4.30052 18.6683 4.30052Z" fill="#FFCC4D" />
                    <path d="M21.6699 6.9688C22.2222 6.9688 22.67 6.52107 22.67 5.96877C22.67 5.41648 22.2222 4.96875 21.6699 4.96875C21.1176 4.96875 20.6699 5.41648 20.6699 5.96877C20.6699 6.52107 21.1176 6.9688 21.6699 6.9688Z" fill="#FFCC4D" />
                    <path d="M19.668 9.63384C20.2203 9.63384 20.668 9.18611 20.668 8.63381C20.668 8.08151 20.2203 7.63379 19.668 7.63379C19.1157 7.63379 18.668 8.08151 18.668 8.63381C18.668 9.18611 19.1157 9.63384 19.668 9.63384Z" fill="#FFCC4D" />
                    <path d="M5.00198 16.9668C5.55427 16.9668 6.002 16.5191 6.002 15.9668C6.002 15.4145 5.55427 14.9668 5.00198 14.9668C4.44968 14.9668 4.00195 15.4145 4.00195 15.9668C4.00195 16.5191 4.44968 16.9668 5.00198 16.9668Z" fill="#FFCC4D" />
                  </svg>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">3</span>
                </button>
              </div>
            </article>
            <article className="mb-5">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese avatar" />Jese Leos</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                </div>
                <button id="dropdownComment3Button" data-dropdown-toggle="dropdownComment3" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownComment3" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(957px, 1769px)'}}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="mb-2 text-gray-900 dark:text-white">
                Ok <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@team</a> I'am attaching our offer and pitch deck. Take your time to review everything. I'am looking forward to the next steps! Thank you.
              </p>
              <p className="mb-3 text-gray-900 dark:text-white">Looking forward to it! Thanks.</p>
              <div className="items-center 2xl:space-x-4 2xl:flex">
                {/* Item */}
                <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-primary-100 dark:bg-primary-900">
                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.625 1.5c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5H5.625zM7.5 15a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 017.5 15zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H8.25z" />
                      <path d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z" />
                    </svg>
                  </div>
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">flowbite_offer_345"</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PDF, 2.3 MB</p>
                  </div>
                  <div className="flex items-center ml-auto">
                    <button type="button" className="p-2 rounded hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                      <span className="sr-only">Actions</span>
                    </button>
                  </div>
                </div>
                {/* Item */}
                <div className="flex items-center p-3 mb-3.5 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center justify-center w-10 h-10 mr-3 bg-teal-100 rounded-lg dark:bg-teal-900">
                    <svg className="w-5 h-5 text-teal-600 lg:w-6 lg:h-6 dark:text-teal-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                    </svg>
                  </div>
                  <div className="mr-4">
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">bergside_pitch"</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">PPTX, 10.1 MB</p>
                  </div>
                  <div className="flex items-center ml-auto">
                    <button type="button" className="p-2 rounded hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v11.69l3.22-3.22a.75.75 0 111.06 1.06l-4.5 4.5a.75.75 0 01-1.06 0l-4.5-4.5a.75.75 0 111.06-1.06l3.22 3.22V3a.75.75 0 01.75-.75zm-9 13.5a.75.75 0 01.75.75v2.25a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5V16.5a.75.75 0 011.5 0v2.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V16.5a.75.75 0 01.75-.75z" />
                      </svg>
                      <span className="sr-only">Download</span>
                    </button>
                    <button type="button" className="p-2 rounded hover:bg-gray-100">
                      <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                      <span className="sr-only">Actions</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
            <article className="pl-12 mb-5">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Joseph avatar" />Joseph McFallen</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                </div>
                <button id="dropdownComment4Button" data-dropdown-toggle="dropdownComment4" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownComment4" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(957px, 2071px)'}}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="mb-2 text-gray-900 dark:text-white">
                Hello <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@jeseleos</a> I need some informations about flowbite react version.
              </p>
            </article>
            <article className="pl-12 mb-5">
              <footer className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white"><img className="w-6 h-6 mr-2 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese avatar" />Jese Leos</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400"><time pubdate dateTime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time></p>
                </div>
                <button id="dropdownComment5Button" data-dropdown-toggle="dropdownComment5" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600" type="button">
                  <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* Dropdown menu */}
                <div id="dropdownComment5" className="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-36 dark:bg-gray-700 dark:divide-gray-600" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(957px, 2159px)'}}>
                  <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p className="mb-4 text-gray-900 dark:text-white">
                Hi <a href="#" className="font-medium hover:underline text-primary-600 dark:text-primary-500">@josephh</a> Sure, just let me know whean you are available and we can speak.
              </p>
              <label htmlFor="chat" className="sr-only">Your message</label>
              <div className="flex items-center mb-5">
                <textarea id="chat" rows={1} className="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Reply in thread..." data-gramm="false" wt-ignore-input="true" defaultValue={""} />
                <button type="submit" className="inline-flex justify-center p-2 rounded-lg cursor-pointer text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
                  <span className="sr-only">Send message</span>
                </button>
              </div>
              <span className="inline-flex items-center text-xs font-medium cursor-pointer hover:underline text-primary-700 sm:text-sm dark:text-primary-500">
                Hide thread
                <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path clipRule="evenodd" fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                </svg>
              </span>
            </article></form>
          <div className="w-full border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
            <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
              <label htmlFor="comment" className="sr-only">Write your message</label>
              <textarea id="comment" rows={8} className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write your message" required data-gramm="false" wt-ignore-input="true" defaultValue={""} />
            </div>
            <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
              <button type="submit" className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
                Send message
              </button>
              <div className="flex pl-0 space-x-1 sm:pl-2">
                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Attach file</span>
                </button>
                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Set location</span>
                </button>
                <button type="button" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" /></svg>
                  <span className="sr-only">Upload image</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
    </div>
  )
}
