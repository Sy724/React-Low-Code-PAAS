import { makeAutoObservable } from "mobx";
import { pathToRegexp } from "path-to-regexp";
import { EditorOperate } from "../types";
import { defaultFields } from "../../../common/constant/templateEditor";

class EditorModel {
  // 表单名称
  templateApiName = '';
  // 可用字段
  defaultFieldComponent = defaultFields.map(v => ({
    ...v,
    dataTypeConstraintValues: v.dataTypeConstraintValues.map((constraint) => {
      let constraintValue;
      try {
        constraintValue = JSON.parse(constraint.value);
      } catch {
        constraintValue = {};
      }
      return {
        ...constraint,
        dataType: v.dataType,
        value: constraintValue || { value: '' },
      };
    })
  }));
  // 拖拽生成的字段
  componentList = [];
  editorOperate: EditorOperate = EditorOperate.Design;
  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
    this.init();
  }

  init() {
    const match = pathToRegexp(
      '/purchase-app/purchase-detail/:id/:currentMenu?',
    ).exec(window.location.pathname);
    if (match) {
      this.templateApiName = match[1];
    }
  }

}

export default EditorModel;
