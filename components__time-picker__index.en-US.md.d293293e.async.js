"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[6984],{70635:function(c,d,l){l.r(d);var p=l(502143),_=l(968521),Z=l(720719),v=l(28840),u=l(759907),a=l(828089),P=l(902068),f=l(574399),h=l(863942),g=l(316073),x=l(24628),k=l(719260),T=l(956140),i=l(127179),o=l(905388),E=l(104979),j=l(606965),C=l(268696),A=l(249706),O=l(795127),D=l(116846),U=l(73024),n=l(606641),s=l(667294),t=l(370917);function r(){var m=(0,n.eL)(),e=m.texts;return(0,t.tZ)(n.dY,null,(0,t.tZ)(s.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,e[0].value),(0,t.tZ)("h2",{id:"when-to-use"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#when-to-use"},(0,t.tZ)("span",{className:"icon icon-link"})),"When To Use"),(0,t.tZ)("p",null,e[1].value),(0,t.tZ)("h2",{id:"examples"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#examples"},(0,t.tZ)("span",{className:"icon icon-link"})),"Examples")),(0,t.tZ)(o.Z,{items:[{demo:{id:"components-time-picker-demo-basic"},previewerProps:{title:"Basic",filename:"components/time-picker/demo/basic.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker onChange={onChange} defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')} />
);
export default App;
`,description:"<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>"}},{demo:{id:"components-time-picker-demo-value"},previewerProps:{title:"Under Control",filename:"components/time-picker/demo/value.tsx",jsx:`import { TimePicker } from 'antd';
import { useState } from 'react';
const App = () => {
  const [value, setValue] = useState(null);
  const onChange = (time) => {
    setValue(time);
  };
  return <TimePicker value={value} onChange={onChange} />;
};
export default App;
`,description:"<p><code>value</code> and <code>onChange</code> should be used together,</p>"}},{demo:{id:"components-time-picker-demo-size"},previewerProps:{title:"Three Sizes",filename:"components/time-picker/demo/size.tsx",jsx:`import { Space, TimePicker } from 'antd';
import dayjs from 'dayjs';
const App = () => (
  <Space wrap>
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="large" />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} />
    <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} size="small" />
  </Space>
);
export default App;
`,description:"<p>The input box comes in three sizes. large is used in the form, while the medium size is the default.</p>"}},{demo:{id:"components-time-picker-demo-disabled"},previewerProps:{title:"disabled",filename:"components/time-picker/demo/disabled.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const App = () => <TimePicker defaultValue={dayjs('12:08:23', 'HH:mm:ss')} disabled />;
export default App;
`,description:"<p>A disabled state of the <code>TimePicker</code>.</p>"}},{demo:{id:"components-time-picker-demo-hide-column"},previewerProps:{title:"Hour and minute",filename:"components/time-picker/demo/hide-column.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
const format = 'HH:mm';
const App = () => <TimePicker defaultValue={dayjs('12:08', format)} format={format} />;
export default App;
`,description:"<p>While part of <code>format</code> is omitted, the corresponding column in panel will disappear, too.</p>"}},{demo:{id:"components-time-picker-demo-interval-options"},previewerProps:{title:"interval option",filename:"components/time-picker/demo/interval-options.tsx",jsx:`import { TimePicker } from 'antd';
const App = () => <TimePicker minuteStep={15} secondStep={10} hourStep={1} />;
export default App;
`,description:"<p>Show stepped options by <code>hourStep</code> <code>minuteStep</code> <code>secondStep</code>.</p>"}},{demo:{id:"components-time-picker-demo-addon"},previewerProps:{title:"Addon",filename:"components/time-picker/demo/addon.tsx",jsx:`import { Button, TimePicker } from 'antd';
import { useState } from 'react';
const App = () => {
  const [open, setOpen] = useState(false);
  return (
    <TimePicker
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button size="small" type="primary" onClick={() => setOpen(false)}>
          OK
        </Button>
      )}
    />
  );
};
export default App;
`,description:"<p>Render addon contents to time picker panel's bottom.</p>"}},{demo:{id:"components-time-picker-demo-12hours"},previewerProps:{title:"12 hours",filename:"components/time-picker/demo/12hours.tsx",jsx:`import { Space, TimePicker } from 'antd';
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <Space wrap>
    <TimePicker use12Hours onChange={onChange} />
    <TimePicker use12Hours format="h:mm:ss A" onChange={onChange} />
    <TimePicker use12Hours format="h:mm a" onChange={onChange} />
  </Space>
);
export default App;
`,description:"<p>TimePicker of 12 hours format, with default format <code>h:mm:ss a</code>.</p>"}},{demo:{id:"components-time-picker-demo-colored-popup"},previewerProps:{debug:!0,title:"Colored Popup",filename:"components/time-picker/demo/colored-popup.tsx",jsx:`import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
    popupClassName="myCustomClassName"
  />
);
export default App;
`,description:"<p>Passing custom class to <code>TimePicker</code> popup.</p>"}},{demo:{id:"components-time-picker-demo-range-picker"},previewerProps:{title:"Time Range Picker",filename:"components/time-picker/demo/range-picker.tsx",jsx:`import { TimePicker } from 'antd';
const App = () => <TimePicker.RangePicker />;
export default App;
`,description:"<p>Use time range picker with <code>TimePicker.RangePicker</code>.</p>"}},{demo:{id:"components-time-picker-demo-bordered"},previewerProps:{title:"Bordered-less",filename:"components/time-picker/demo/bordered.tsx",jsx:`import { TimePicker } from 'antd';
const { RangePicker } = TimePicker;
const App = () => (
  <>
    <TimePicker bordered={false} />
    <RangePicker bordered={false} />
  </>
);
export default App;
`,description:"<p>Bordered-less style component.</p>"}},{demo:{id:"components-time-picker-demo-status"},previewerProps:{title:"Status",filename:"components/time-picker/demo/status.tsx",jsx:`import { Space, TimePicker } from 'antd';
const App = () => (
  <Space direction="vertical">
    <TimePicker status="error" />
    <TimePicker status="warning" />
    <TimePicker.RangePicker status="error" />
    <TimePicker.RangePicker status="warning" />
  </Space>
);
export default App;
`,description:"<p>Add status to TimePicker with <code>status</code>, which could be <code>error</code> or <code>warning</code>.</p>"}},{demo:{id:"components-time-picker-demo-suffix"},previewerProps:{debug:!0,title:"Suffix",filename:"components/time-picker/demo/suffix.tsx",jsx:`import { SmileOutlined } from '@ant-design/icons';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const onChange = (time, timeString) => {
  console.log(time, timeString);
};
const App = () => (
  <TimePicker
    suffixIcon={<SmileOutlined />}
    onChange={onChange}
    defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
  />
);
export default App;
`,description:"<p>Click <code>TimePicker</code>, and then we could select or input a time in panel.</p>"}},{demo:{id:"components-time-picker-demo-render-panel"},previewerProps:{debug:!0,title:"_InternalPanelDoNotUseOrYouWillBeFired",filename:"components/time-picker/demo/render-panel.tsx",jsx:`import { TimePicker } from 'antd';
const { _InternalPanelDoNotUseOrYouWillBeFired: InternalTimePicker } = TimePicker;
const App = () => <InternalTimePicker />;
export default App;
`,description:"<p>Debug usage. Do not use in your production.</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("hr",null),(0,t.tZ)(u.Z,{lang:"jsx"},e[2].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[3].value),(0,t.tZ)("th",null,e[4].value),(0,t.tZ)("th",null,e[5].value),(0,t.tZ)("th",null,e[6].value),(0,t.tZ)("th",null,e[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[8].value),(0,t.tZ)("td",null,e[9].value),(0,t.tZ)("td",null,e[10].value),(0,t.tZ)("td",null,e[11].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[12].value),(0,t.tZ)("td",null,e[13].value),(0,t.tZ)("td",null,e[14].value),(0,t.tZ)("td",null,e[15].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[16].value),(0,t.tZ)("td",null,e[17].value),(0,t.tZ)("td",null,e[18].value),(0,t.tZ)("td",null,e[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[20].value),(0,t.tZ)("td",null,e[21].value,(0,t.tZ)("code",null,e[22].value),e[23].value),(0,t.tZ)("td",null,e[24].value),(0,t.tZ)("td",null,e[25].value),(0,t.tZ)("td",null,e[26].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[27].value),(0,t.tZ)("td",null,e[28].value),(0,t.tZ)("td",null,e[29].value),(0,t.tZ)("td",null,e[30].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[31].value),(0,t.tZ)("td",null,e[32].value),(0,t.tZ)("td",null,e[33].value),(0,t.tZ)("td",null,e[34].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[35].value),(0,t.tZ)("td",null,e[36].value),(0,t.tZ)("td",null,e[37].value),(0,t.tZ)("td",null,e[38].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[39].value),(0,t.tZ)("td",null,e[40].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"http://day.js.org/"},e[41].value)),(0,t.tZ)("td",null,e[42].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[43].value),(0,t.tZ)("td",null,e[44].value),(0,t.tZ)("td",null,e[45].value),(0,t.tZ)("td",null,e[46].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[47].value),(0,t.tZ)("td",null,e[48].value),(0,t.tZ)("td",null,(0,t.tZ)(n.rU,{to:"#disabledtime"},e[49].value)),(0,t.tZ)("td",null,e[50].value),(0,t.tZ)("td",null,e[51].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[52].value),(0,t.tZ)("td",null,e[53].value),(0,t.tZ)("td",null,e[54].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[55].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[56].value),(0,t.tZ)("td",null,e[57].value),(0,t.tZ)("td",null,e[58].value),(0,t.tZ)("td",null,e[59].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[60].value),(0,t.tZ)("td",null,e[61].value),(0,t.tZ)("td",null,e[62].value),(0,t.tZ)("td",null,e[63].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[64].value),(0,t.tZ)("td",null,e[65].value),(0,t.tZ)("td",null,e[66].value),(0,t.tZ)("td",null,e[67].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[68].value),(0,t.tZ)("td",null,e[69].value,(0,t.tZ)("code",null,e[70].value),e[71].value),(0,t.tZ)("td",null,e[72].value),(0,t.tZ)("td",null,e[73].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[74].value),(0,t.tZ)("td",null,e[75].value),(0,t.tZ)("td",null,e[76].value),(0,t.tZ)("td",null,e[77].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[78].value),(0,t.tZ)("td",null,e[79].value),(0,t.tZ)("td",null,e[80].value),(0,t.tZ)("td",null,e[81].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[82].value),(0,t.tZ)("td",null,e[83].value),(0,t.tZ)("td",null,e[84].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[85].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[86].value),(0,t.tZ)("td",null,e[87].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[88].value),e[89].value,(0,t.tZ)("code",null,e[90].value),e[91].value,(0,t.tZ)("code",null,e[92].value),e[93].value,(0,t.tZ)("code",null,e[94].value)),(0,t.tZ)("td",null,e[95].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[96].value),(0,t.tZ)("td",null,e[97].value),(0,t.tZ)("td",null,e[98].value),(0,t.tZ)("td",null,e[99].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[100].value),(0,t.tZ)("td",null,e[101].value),(0,t.tZ)("td",null,e[102].value),(0,t.tZ)("td",null,e[103].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[104].value),(0,t.tZ)("td",null,e[105].value),(0,t.tZ)("td",null,e[106].value),(0,t.tZ)("td",null,e[107].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[108].value),(0,t.tZ)("td",null,e[109].value),(0,t.tZ)("td",null,e[110].value),(0,t.tZ)("td",null,e[111].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[112].value),(0,t.tZ)("td",null,e[113].value,(0,t.tZ)("code",null,e[114].value),e[115].value),(0,t.tZ)("td",null,e[116].value),(0,t.tZ)("td",null,e[117].value),(0,t.tZ)("td",null,e[118].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[119].value),(0,t.tZ)("td",null,e[120].value,(0,t.tZ)("code",null,e[121].value),e[122].value,(0,t.tZ)("code",null,e[123].value),e[124].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,e[125].value),e[126].value,(0,t.tZ)("code",null,e[127].value),e[128].value,(0,t.tZ)("code",null,e[129].value)),(0,t.tZ)("td",null,e[130].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[131].value),(0,t.tZ)("td",null,e[132].value),(0,t.tZ)("td",null,e[133].value),(0,t.tZ)("td",null,e[134].value),(0,t.tZ)("td",null,e[135].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[136].value),(0,t.tZ)("td",null,e[137].value),(0,t.tZ)("td",null,e[138].value),(0,t.tZ)("td",null,e[139].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[140].value),(0,t.tZ)("td",null,e[141].value,(0,t.tZ)("code",null,e[142].value)),(0,t.tZ)("td",null,e[143].value),(0,t.tZ)("td",null,e[144].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[145].value),(0,t.tZ)("td",null,e[146].value),(0,t.tZ)("td",null,(0,t.tZ)("a",{href:"http://day.js.org/"},e[147].value)),(0,t.tZ)("td",null,e[148].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[149].value),(0,t.tZ)("td",null,e[150].value),(0,t.tZ)("td",null,e[151].value),(0,t.tZ)("td",null,e[152].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[153].value),(0,t.tZ)("td",null,e[154].value),(0,t.tZ)("td",null,e[155].value),(0,t.tZ)("td",null,e[156].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[157].value),(0,t.tZ)("td",null,e[158].value),(0,t.tZ)("td",null,e[159].value),(0,t.tZ)("td",null,e[160].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h4",{id:"disabledtime"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#disabledtime"},(0,t.tZ)("span",{className:"icon icon-link"})),"DisabledTime"),(0,t.tZ)(u.Z,{lang:"typescript"},e[161].value),(0,t.tZ)("h2",{id:"methods"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#methods"},(0,t.tZ)("span",{className:"icon icon-link"})),"Methods"),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[162].value),(0,t.tZ)("th",null,e[163].value),(0,t.tZ)("th",null,e[164].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[165].value),(0,t.tZ)("td",null,e[166].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[167].value),(0,t.tZ)("td",null,e[168].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"rangepicker"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rangepicker"},(0,t.tZ)("span",{className:"icon icon-link"})),"RangePicker"),(0,t.tZ)("p",null,e[169].value,(0,t.tZ)(n.rU,{to:"/components/date-picker/#rangepicker"},e[170].value),e[171].value),(0,t.tZ)(a.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,e[172].value),(0,t.tZ)("th",null,e[173].value),(0,t.tZ)("th",null,e[174].value),(0,t.tZ)("th",null,e[175].value),(0,t.tZ)("th",null,e[176].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[177].value),(0,t.tZ)("td",null,e[178].value),(0,t.tZ)("td",null,(0,t.tZ)(n.rU,{to:"#rangedisabledtime"},e[179].value)),(0,t.tZ)("td",null,e[180].value),(0,t.tZ)("td",null,e[181].value)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,e[182].value),(0,t.tZ)("td",null,e[183].value),(0,t.tZ)("td",null,e[184].value),(0,t.tZ)("td",null,e[185].value),(0,t.tZ)("td",null,e[186].value)))),(0,t.tZ)("h3",{id:"rangedisabledtime"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#rangedisabledtime"},(0,t.tZ)("span",{className:"icon icon-link"})),"RangeDisabledTime"),(0,t.tZ)(u.Z,{lang:"typescript"},e[187].value),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#design-token"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(i.Z,{component:"DatePicker"}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,(0,t.tZ)(n.rU,{to:"/docs/react/use-custom-date-library#timepicker"},e[188].value))))))}d.default=r}}]);
