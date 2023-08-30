import React, { useState, useEffect } from 'react';
import {
  Designer,
  DesignerPanel,
  SidebarPanel,
  SettingPanel,
  ToolbarPanel,
  WorkspacePanel,
  ViewPanel,
  CodeEditor,
  Sandbox,
  DndQuery,
  ComponentsView,
} from '@music163/tango-designer';
import { createEngine, Workspace } from '@music163/tango-core';
import { Logo, ProjectDetail } from './share';
import { sampleFiles } from '../mock/project';
import './index.less';
import demo from '../demo';

// 1. 实例化工作区
const workspace = new Workspace({
  entry: '/src/index.js',
  files: sampleFiles,
});

// 2. 引擎初始化
const engine = createEngine({
  workspace,
});

// @ts-ignore
window.__workspace__ = workspace;

const sandboxQuery = new DndQuery({
  context: 'iframe',
});

/**
 * 3. 平台初始化，访问 https://local.netease.com:6006/
 */
export default function App({ match, location }: any) {
  const [menuLoading, setMenuLoading] = useState(true);
  const [menuData, setMenuData] = useState(false);

  const name = match?.params?.name;

  useEffect(() => {
    if (!name || !demo[name]) {
      return;
    }

    demo[name]?.forEach?.((item: any) => {
      workspace.updateFile(item.filename, item.code);
    });
  }, [name]);

  return (
    <Designer engine={engine} sandboxQuery={sandboxQuery}>
      <DesignerPanel
        logo={<Logo />}
        description={<ProjectDetail name={demo[name] && name} />}
        actions={
          <ToolbarPanel>
            <ToolbarPanel.Item key="modeSwitch" placement="right" />
            <ToolbarPanel.Item key="togglePanel" placement="right" />
          </ToolbarPanel>
        }
      >
        <SidebarPanel>
          <SidebarPanel.Item key="outline" />
          <SidebarPanel.Item key="components">
            <ComponentsView menuData={menuData as any} loading={menuLoading} />
          </SidebarPanel.Item>
          <SidebarPanel.Item key="model" isFloat width={800} />
          <SidebarPanel.Item key="dataSource" isFloat width={800} />
        </SidebarPanel>
        <WorkspacePanel>
          <ViewPanel mode="design">
            <Sandbox
              bundlerURL="https://tango-demo.musicfe.com"
              onMessage={(e) => {
                if (e.type === 'done') {
                  const sandboxWindow: any = sandboxQuery.window;
                  if (sandboxWindow.TangoAntd) {
                    if (sandboxWindow.TangoAntd.menuData) {
                      setMenuData(sandboxWindow.TangoAntd.menuData);
                    }
                    if (sandboxWindow.TangoAntd.prototypes) {
                      workspace.setComponentPrototypes(sandboxWindow.TangoAntd.prototypes);
                    }
                  }
                  setMenuLoading(false);
                }
              }}
            />
          </ViewPanel>
          <ViewPanel mode="code">
            <CodeEditor />
          </ViewPanel>
        </WorkspacePanel>
        <SettingPanel />
      </DesignerPanel>
    </Designer>
  );
}
