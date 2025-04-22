import { DownOutlined } from "@ant-design/icons";
import { useMemoizedFn } from "ahooks";
import { Dropdown, Space } from "antd";
import { omit } from "lodash-es";
import { ReactNode, useMemo } from "react";

interface GhostSelectProps<T> {
  value?: T;
  options?: Array<{
    label: string;
    value: T;
    disabled?: boolean;
    danger?: boolean;
    extra?: ReactNode;
  }>;
  onChange?: (value: T) => void;
}
const GhostSelect = <T,>({ value, options, onChange }: GhostSelectProps<T>) => {
  const valueLabelMap = useMemo(() => {
    const map = new Map<T, string>();
    options?.forEach((option) => {
      map.set(option.value, option.label);
    });
    return map;
  }, [options]);
  const items = useMemo(() => {
    return options?.map((option) => ({
      ...omit(option, ["value"]),
      key: option.value as any,
    }));
  }, [options]);
  const onClick = useMemoizedFn(({ key }) => {
    onChange?.(key);
  });

  return (
    <Dropdown trigger={["click"]} menu={{ items, onClick }}>
      <a
        onClick={(ev) => {
          ev.preventDefault();
        }}
      >
        <Space>
          {valueLabelMap.get(value!)}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default GhostSelect;
