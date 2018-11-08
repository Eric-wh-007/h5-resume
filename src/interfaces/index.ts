export interface CommomProps {
  height: number;
}

export interface NavProps {
  activeKey: string;
  routes: RouteConfig[];
}

export interface RouteConfig {
  path: string;
  Component: any;
  exact?: boolean;
}