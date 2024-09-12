import React from 'react';
import {useStores} from "../../../../../../hooks";
import EditorModel from "../../../../model";
import {runInAction} from "mobx";
import {Observer} from "mobx-react-lite";


const FieldRender = () => {
  const { editorModel } = useStores<{
    editorModel: EditorModel;
  }>();
  return (
    <div
      className="flex-1 p-4"
    >
      <div
        className="h-full w-full bg-white overflow-y-auto rounded-xl p-4"
        key="renderCanvas"
        onDragOver={e => {
          e.stopPropagation();
          e.preventDefault();
        }}
        onDrop={(e) => {
          const key = 'root';
          const canvasComponent = JSON.parse(e.dataTransfer.getData('canvasComponent'));
          if (canvasComponent.type) {
            runInAction(() => {
              editorModel.componentList = [
                ...editorModel.componentList,
                canvasComponent
              ];
              console.log(editorModel.componentList)
            })
          } else {
            e.preventDefault();
          }
        }}
      >
        <div className="flex flex-col overflow-auto relative">
          <Observer>
            {() => (
              <>
                {editorModel.componentList.map(comp => (
                  <Observer>
                    {() => (
                      <div>
                        {comp.dataType}
                      </div>
                    )}
                  </Observer>
                ))}
              </>
            )}
          </Observer>
        </div>
        
      </div>
    
    </div>
  );
}

export default FieldRender;
