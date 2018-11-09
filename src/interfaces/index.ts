export interface CommomProps {
  height: number;
}

export interface NavProps {
  activeKey?: string;
  paths: string[];
  defaultActiveKey: string;
}

export interface RouteConfig {
  path: string;
  Component: any;
  exact?: boolean;
}