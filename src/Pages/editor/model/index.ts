import {makeAutoObservable} from "mobx";
import {pathToRegexp} from "path-to-regexp";
import {EditorOperate} from "../types";
import {defaultFields} from "../../../common/constant/templateEditor";

class EditorModel {
  templateApiName = '';
  defaultFieldComponent = defaultFields;
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
