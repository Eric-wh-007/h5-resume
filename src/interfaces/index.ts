export interface CommomProps {
  height: number;
}

export interface HomeProps extends CommomProps {
  top?: number | string;
}

export interface Link {
  name: string;
  icon?: string;
}

export interface NavProps {
  activeKey?: string;
  links: Link[];
  defaultActiveKey?: string;
  onChange: (key: string) => void;
}