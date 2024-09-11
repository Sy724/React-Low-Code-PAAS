import {useStores} from "../../../../hooks";
import EditorModel from "../../model";
import FieldWrapper from "./components/FieldWrapper";

const ContentWrapper = () => {
  const { editorModel } = useStores<{
    editorModel: EditorModel;
  }>();
  const {
    defaultFieldComponent
  } = editorModel;
  return (
    <div className="px-4 flex flex-row w-full h-full">
      <FieldWrapper />
      <div className="flex-1">canvas</div>
    </div>
  );
}

export default ContentWrapper;
