import {useEffect} from 'react';
import useLocalObservable from "../../hooks/useLocalObserver";
import {pathToRegexp} from 'path-to-regexp';
import Header from "./components/header";

const Editor = () => {
  const { store, updateStore } = useLocalObservable(() => ({
    templateName: '',
  }))
  
  useEffect(() => {
    const match = pathToRegexp('/editor/:template').exec(window.location.pathname);
    console.log(match)
    updateStore({
      templateName: match[1],
    })
  }, [])
  
  return (
    <div>
      <Header />
    </div>
  );
}

export default Editor;
