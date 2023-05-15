"use strict";(self.webpackChunkantd=self.webpackChunkantd||[]).push([[9664],{316984:function(m,a,e){e.r(a);var c=e(502143),Z=e(968521),v=e(720719),h=e(28840),u=e(759907),o=e(828089),p=e(902068),f=e(574399),g=e(863942),P=e(316073),E=e(24628),A=e(719260),x=e(956140),s=e(127179),i=e(905388),I=e(104979),D=e(606965),M=e(268696),O=e(249706),b=e(795127),U=e(116846),y=e(73024),l=e(606641),r=e(667294),t=e(370917);function d(){var _=(0,l.eL)(),n=_.texts;return(0,t.tZ)(l.dY,null,(0,t.tZ)(r.Fragment,null,(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("p",null,n[0].value),(0,t.tZ)("h2",{id:"\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F55\u65F6\u4F7F\u7528"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4F55\u65F6\u4F7F\u7528"),(0,t.tZ)("ul",null,(0,t.tZ)("li",null,n[1].value),(0,t.tZ)("li",null,n[2].value)),(0,t.tZ)("h2",{id:"\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7801\u6F14\u793A"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u4EE3\u7801\u6F14\u793A")),(0,t.tZ)(i.Z,{items:[{demo:{id:"components-watermark-demo-basic"},previewerProps:{title:"\u57FA\u672C",filename:"components/watermark/demo/basic.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark content="Ant Design">
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002</p>"}},{demo:{id:"components-watermark-demo-multi-line"},previewerProps:{title:"\u591A\u884C\u6C34\u5370",filename:"components/watermark/demo/multi-line.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark content={['Ant Design', 'Happy Working']}>
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>content</code> \u8BBE\u7F6E \u5B57\u7B26\u4E32\u6570\u7EC4 \u6307\u5B9A\u591A\u884C\u6587\u5B57\u6C34\u5370\u5185\u5BB9\u3002</p>"}},{demo:{id:"components-watermark-demo-image"},previewerProps:{title:"\u56FE\u7247\u6C34\u5370",filename:"components/watermark/demo/image.tsx",jsx:`import { Watermark } from 'antd';
const App = () => (
  <Watermark
    height={30}
    width={130}
    image="https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original"
  >
    <div
      style={{
        height: 500,
      }}
    />
  </Watermark>
);
export default App;
`,description:"<p>\u901A\u8FC7 <code>image</code> \u6307\u5B9A\u56FE\u7247\u5730\u5740\u3002\u4E3A\u4FDD\u8BC1\u56FE\u7247\u9AD8\u6E05\u4E14\u4E0D\u88AB\u62C9\u4F38\uFF0C\u8BF7\u8BBE\u7F6E width \u548C height, \u5E76\u4E0A\u4F20\u81F3\u5C11\u4E24\u500D\u7684\u5BBD\u9AD8\u7684 logo \u56FE\u7247\u5730\u5740\u3002</p>"}},{demo:{id:"components-watermark-demo-custom"},previewerProps:{title:"\u81EA\u5B9A\u4E49\u914D\u7F6E",filename:"components/watermark/demo/custom.tsx",jsx:`import { ColorPicker, Form, Input, InputNumber, Slider, Space, Typography, Watermark } from 'antd';
import { useMemo, useState } from 'react';
const { Paragraph } = Typography;
const App = () => {
  const [form] = Form.useForm();
  const [config, setConfig] = useState({
    content: 'Ant Design',
    color: 'rgba(0, 0, 0, 0.15)',
    fontSize: 16,
    zIndex: 11,
    rotate: -22,
    gap: [100, 100],
    offset: undefined,
  });
  const { content, color, fontSize, zIndex, rotate, gap, offset } = config;
  const watermarkProps = useMemo(
    () => ({
      content,
      font: {
        color: typeof color === 'string' ? color : color.toRgbString(),
        fontSize,
      },
      zIndex,
      rotate,
      gap,
      offset,
    }),
    [config],
  );
  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      <Watermark {...watermarkProps}>
        <Typography>
          <Paragraph>
            The light-speed iteration of the digital world makes products more complex. However,
            human consciousness and attention resources are limited. Facing this design
            contradiction, the pursuit of natural interaction will be the consistent direction of
            Ant Design.
          </Paragraph>
          <Paragraph>
            Natural user cognition: According to cognitive psychology, about 80% of external
            information is obtained through visual channels. The most important visual elements in
            the interface design, including layout, colors, illustrations, icons, etc., should fully
            absorb the laws of nature, thereby reducing the user&apos;s cognitive cost and bringing
            authentic and smooth feelings. In some scenarios, opportunely adding other sensory
            channels such as hearing, touch can create a richer and more natural product experience.
          </Paragraph>
          <Paragraph>
            Natural user behavior: In the interaction with the system, the designer should fully
            understand the relationship between users, system roles, and task objectives, and also
            contextually organize system functions and services. At the same time, a series of
            methods such as behavior analysis, artificial intelligence and sensors could be applied
            to assist users to make effective decisions and reduce extra operations of users, to
            save users&apos; mental and physical resources and make human-computer interaction more
            natural.
          </Paragraph>
        </Typography>
        <img
          style={{
            zIndex: 10,
            width: '100%',
            maxWidth: 800,
            position: 'relative',
          }}
          src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*zx7LTI_ECSAAAAAAAAAAAABkARQnAQ"
          alt="\u793A\u4F8B\u56FE\u7247"
        />
      </Watermark>
      <Form
        style={{
          width: 280,
          flexShrink: 0,
          borderLeft: '1px solid #eee',
          paddingLeft: 20,
          marginLeft: 20,
        }}
        form={form}
        layout="vertical"
        initialValues={config}
        onValuesChange={(_, values) => {
          setConfig(values);
        }}
      >
        <Form.Item name="content" label="Content">
          <Input placeholder="\u8BF7\u8F93\u5165" />
        </Form.Item>
        <Form.Item name="color" label="Color">
          <ColorPicker />
        </Form.Item>
        <Form.Item name="fontSize" label="FontSize">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="zIndex" label="zIndex">
          <Slider step={1} min={0} max={100} />
        </Form.Item>
        <Form.Item name="rotate" label="Rotate">
          <Slider step={1} min={-180} max={180} />
        </Form.Item>
        <Form.Item
          label="Gap"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['gap', 0]}>
              <InputNumber
                placeholder="gapX"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['gap', 1]}>
              <InputNumber
                placeholder="gapY"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
        <Form.Item
          label="Offset"
          style={{
            marginBottom: 0,
          }}
        >
          <Space
            style={{
              display: 'flex',
            }}
            align="baseline"
          >
            <Form.Item name={['offset', 0]}>
              <InputNumber
                placeholder="offsetLeft"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
            <Form.Item name={['offset', 1]}>
              <InputNumber
                placeholder="offsetTop"
                style={{
                  width: '100%',
                }}
              />
            </Form.Item>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};
export default App;
`,description:"<p>\u901A\u8FC7\u81EA\u5B9A\u4E49\u53C2\u6570\u914D\u7F6E\u9884\u89C8\u6C34\u5370\u6548\u679C\u3002</p>"}}]}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"api"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#api"},(0,t.tZ)("span",{className:"icon icon-link"})),"API"),(0,t.tZ)("h3",{id:"watermark"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#watermark"},(0,t.tZ)("span",{className:"icon icon-link"})),"Watermark"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[3].value),(0,t.tZ)("th",null,n[4].value),(0,t.tZ)("th",null,n[5].value),(0,t.tZ)("th",null,n[6].value),(0,t.tZ)("th",null,n[7].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[8].value),(0,t.tZ)("td",null,n[9].value,(0,t.tZ)("code",null,n[10].value),n[11].value),(0,t.tZ)("td",null,n[12].value),(0,t.tZ)("td",null,n[13].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[14].value),(0,t.tZ)("td",null,n[15].value,(0,t.tZ)("code",null,n[16].value),n[17].value),(0,t.tZ)("td",null,n[18].value),(0,t.tZ)("td",null,n[19].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[20].value),(0,t.tZ)("td",null,n[21].value,(0,t.tZ)("code",null,n[22].value)),(0,t.tZ)("td",null,n[23].value),(0,t.tZ)("td",null,n[24].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[25].value),(0,t.tZ)("td",null,n[26].value),(0,t.tZ)("td",null,n[27].value),(0,t.tZ)("td",null,n[28].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[29].value),(0,t.tZ)("td",null,n[30].value),(0,t.tZ)("td",null,n[31].value),(0,t.tZ)("td",null,n[32].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[33].value),(0,t.tZ)("td",null,n[34].value),(0,t.tZ)("td",null,n[35].value),(0,t.tZ)("td",null,n[36].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[37].value),(0,t.tZ)("td",null,n[38].value),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"#font"},n[39].value)),(0,t.tZ)("td",null,(0,t.tZ)(l.rU,{to:"#font"},n[40].value)),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[41].value),(0,t.tZ)("td",null,n[42].value),(0,t.tZ)("td",null,n[43].value),(0,t.tZ)("td",null,n[44].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[45].value),(0,t.tZ)("td",null,n[46].value,(0,t.tZ)("code",null,n[47].value)),(0,t.tZ)("td",null,n[48].value),(0,t.tZ)("td",null,n[49].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h3",{id:"font"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#font"},(0,t.tZ)("span",{className:"icon icon-link"})),"Font"),(0,t.tZ)(o.Z,{className:"component-api-table"},(0,t.tZ)("thead",null,(0,t.tZ)("tr",null,(0,t.tZ)("th",null,n[50].value),(0,t.tZ)("th",null,n[51].value),(0,t.tZ)("th",null,n[52].value),(0,t.tZ)("th",null,n[53].value),(0,t.tZ)("th",null,n[54].value))),(0,t.tZ)("tbody",null,(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[55].value),(0,t.tZ)("td",null,n[56].value),(0,t.tZ)("td",null,n[57].value),(0,t.tZ)("td",null,n[58].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[59].value),(0,t.tZ)("td",null,n[60].value),(0,t.tZ)("td",null,n[61].value),(0,t.tZ)("td",null,n[62].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[63].value),(0,t.tZ)("td",null,n[64].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[65].value),n[66].value,(0,t.tZ)("code",null,n[67].value),n[68].value,(0,t.tZ)("code",null,n[69].value),n[70].value),(0,t.tZ)("td",null,n[71].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[72].value),(0,t.tZ)("td",null,n[73].value),(0,t.tZ)("td",null,n[74].value),(0,t.tZ)("td",null,n[75].value),(0,t.tZ)("td",null)),(0,t.tZ)("tr",null,(0,t.tZ)("td",null,n[76].value),(0,t.tZ)("td",null,n[77].value),(0,t.tZ)("td",null,(0,t.tZ)("code",null,n[78].value),n[79].value,(0,t.tZ)("code",null,n[80].value),n[81].value,(0,t.tZ)("code",null,n[82].value),n[83].value,(0,t.tZ)("code",null,n[84].value)),(0,t.tZ)("td",null,n[85].value),(0,t.tZ)("td",null)))),(0,t.tZ)("h2",{id:"design-token"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#design-token"},(0,t.tZ)("span",{className:"icon icon-link"})),"Design Token")),(0,t.tZ)(s.Z,{component:"Watermark"}),(0,t.tZ)("div",{className:"markdown"},(0,t.tZ)("h2",{id:"faq"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#faq"},(0,t.tZ)("span",{className:"icon icon-link"})),"FAQ"),(0,t.tZ)("h3",{id:"\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370"},(0,t.tZ)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370"},(0,t.tZ)("span",{className:"icon icon-link"})),"\u5904\u7406\u5F02\u5E38\u56FE\u7247\u6C34\u5370"),(0,t.tZ)("p",null,n[86].value,(0,t.tZ)("code",null,n[87].value),n[88].value),(0,t.tZ)(u.Z,{lang:"typescript"},n[89].value))))}a.default=d}}]);
