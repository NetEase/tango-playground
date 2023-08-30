import React from "react";
import { definePage } from "@music163/tango-boot";
import {
  Button,
  Input
} from "@music163/antd";
class App extends React.Component {
  render() {
    return (
      <div>
        <Button>Hello World!</Button>
        <Input placeholder="This is example demo" />
      </div>
    );
  }
}
export default definePage(App);