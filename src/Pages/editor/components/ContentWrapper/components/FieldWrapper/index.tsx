import React from "react";
import { Col, Row } from "antd";
import { getNewKey } from "../../../../../../common/utils/index";
import { useStores } from "../../../../../../hooks";
import EditorModel from "../../../../model";

const FieldWrapper = () => {
  const { editorModel } = useStores<{
    editorModel: EditorModel;
  }>();
  const { defaultFieldComponent } = editorModel;
  
  console.log(defaultFieldComponent)
  return (
    <div className="p-2" style={{ width: "280px", backgroundColor: "#fafafa" }}>
      <Row gutter={[4, 4]}>
        {defaultFieldComponent
          // .filter(v => !selectedFieldsApiNames.includes(v.apiName))
          // .filter(v => v.name.indexOf(searchText) > -1)
          .map(v => (
            <Col span={12} key={v.dataType}>
              <div
                className="p-1 m-1 bg-white cursor-pointer rounded ring-1 text-sm text-gray-500 flex items-center"
                title={v.name}
                draggable
                onDragOver={(event) => {
                  event.preventDefault();
                }}
                onDragStart={e => {
                  const newComponent = {
                    type: v.type,
                    key: getNewKey(),
                    title: v.name,
                    apiName: v?.apiName,
                    dataType: v.dataType,
                    id: v?.id,
                  };
                  (window as any).dragComponentType = v.type;
                  e.dataTransfer.setData(
                    "canvasComponent",
                    JSON.stringify(newComponent)
                  );
                }}
              >
                {v.name}
              </div>
            </Col>
          ))}
      </Row>
    </div>
  );
};

export default FieldWrapper;
