import React from "react";
import { useStores } from "../../../../hooks";
import EditorModel from "../../model";
import FieldWrapper from "./components/FieldWrapper";
import FieldRender from "./components/FieldRender";

const ContentWrapper = () => {
  const { editorModel } = useStores<{
    editorModel: EditorModel;
  }>();
  const { defaultFieldComponent } = editorModel;
  return (
    <div className="px-4 flex flex-row w-full h-full">
      <FieldWrapper />
      <FieldRender />
      <div style={{ width: '260px'}}>attributes</div>
    </div>
  );
};

export default ContentWrapper;
