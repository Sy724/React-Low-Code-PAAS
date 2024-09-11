import {Button, Menu, Space} from "antd";
import {useStores} from "../../../../hooks";
import EditorModel from "../../model";
import {EditorOperate} from "../../types";
import { MailOutlined, SettingOutlined } from '@ant-design/icons';
import {Observer} from "mobx-react-lite";

const items = [
  {
    label: '表单设计',
    key: EditorOperate.Design,
    icon: <SettingOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
  },
  {
    label: 'Todo',
    key: EditorOperate.Todo,
    icon: <MailOutlined onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} />,
    disabled: true,
  },
];

const CommonHeader = () => {
  const { editorModel } = useStores<{
    editorModel: EditorModel;
  }>();
  return (
    <div className="w-full flex flex-row items-center justify-between px-4">
      <Observer>
        {() => (
          <div className="flex-1">
            <Menu
              // onClick={}
              selectedKeys={['design']}
              mode="horizontal"
              items={items}
            />
          </div>
        )}
      </Observer>
      <Space>
        <Button htmlType="submit">取消</Button>
        <Button type="primary" htmlType="submit">提交</Button>
      </Space>
    </div>
  );
}

export default CommonHeader;
