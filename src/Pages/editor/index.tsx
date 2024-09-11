import {MobXProviderContext} from "../../hooks";
import CommonHeader from "./components/CommonHeader";
import EditorModel from "./model";
import {Layout} from "antd";
import ContentWrapper from "./components/ContentWrapper";

const editorModel = new EditorModel();

const Editor = () => {
  return (
    <div>
      <MobXProviderContext.Provider value={{ editorModel }}>
        <div>
          <CommonHeader />
          <Layout style={{ height: 'calc(100vh - 46px)'}}>
            <Layout.Content>
              <ContentWrapper />
            </Layout.Content>
          </Layout>
        </div>
      </MobXProviderContext.Provider>
    </div>
  );
}

export default Editor;
