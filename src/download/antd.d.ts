/// <reference types="react" />
import * as React$1 from "react";
import React__default, {
  ComponentClass,
  ForwardRefExoticComponent,
  RefAttributes,
  HTMLAttributes,
  ReactNode,
  CSSProperties,
  FC,
} from "react";
import {
  NamePath,
  ValidateMessages,
  ValidatorRule,
  StoreValue,
} from "rc-field-form/lib/interface";
export { Rule as FormRule } from "rc-field-form/lib/interface";
import { FormProps as FormProps$1 } from "rc-field-form/lib/Form";
import { Options } from "scroll-into-view-if-needed";
import { FormInstance as FormInstance$1, useWatch } from "rc-field-form";
import { Locale as Locale$1 } from "rc-picker/lib/interface";
import * as rc_picker_lib_Picker from "rc-picker/lib/Picker";
import {
  PickerBaseProps as PickerBaseProps$1,
  PickerDateProps as PickerDateProps$1,
  PickerTimeProps as PickerTimeProps$1,
} from "rc-picker/lib/Picker";
import {
  RangePickerBaseProps as RangePickerBaseProps$1,
  RangePickerDateProps as RangePickerDateProps$1,
  RangePickerTimeProps as RangePickerTimeProps$1,
} from "rc-picker/lib/RangePicker";
import { Moment } from "moment";
import {
  PaginationProps as PaginationProps$1,
  PaginationLocale,
} from "rc-pagination";
import {
  ColumnType as ColumnType$1,
  FixedType,
  RenderedCell,
} from "rc-table/lib/interface";
import { placements } from "rc-tooltip/lib/placements";
import { TooltipProps as TooltipProps$1 } from "rc-tooltip/lib/Tooltip";
import {
  UploadProps as UploadProps$1,
  RcFile as RcFile$1,
  UploadRequestOption,
} from "rc-upload/lib/interface";
import * as rc_select_lib_Option from "rc-select/lib/Option";
import {
  SelectProps as SelectProps$1,
  BaseSelectRef,
  Option as Option$2,
  OptGroup,
} from "rc-select";
export { BaseSelectRef as RefSelectProps } from "rc-select";
import { BaseOptionType, DefaultOptionType } from "rc-select/lib/Select";
import {
  MenuItemProps as MenuItemProps$1,
  MenuProps as MenuProps$1,
  ItemGroup,
  MenuRef,
} from "rc-menu";
import {
  MenuItemType as MenuItemType$1,
  SubMenuType as SubMenuType$1,
  MenuItemGroupType as MenuItemGroupType$1,
  MenuDividerType as MenuDividerType$1,
} from "rc-menu/lib/interface";
import { TabsProps as TabsProps$1 } from "rc-tabs";
import { TabPaneProps } from "rc-tabs/lib/TabPanelList/TabPane";
export { TabPaneProps } from "rc-tabs/lib/TabPanelList/TabPane";
import { Settings } from "@ant-design/react-slick";
import {
  DefaultOptionType as DefaultOptionType$1,
  BaseOptionType as BaseOptionType$1,
  SingleCascaderProps as SingleCascaderProps$1,
  MultipleCascaderProps as MultipleCascaderProps$1,
} from "rc-cascader";
import { DrawerProps as DrawerProps$1 } from "rc-drawer";
import { FormProviderProps as FormProviderProps$1 } from "rc-field-form/lib/FormContext";
import { FieldProps } from "rc-field-form/lib/Field";
import { ValidateStatus as ValidateStatus$1 } from "antd/es/form/FormItem";
import { ImageProps } from "rc-image";
export { ImageProps } from "rc-image";
import { GroupConsumerProps } from "rc-image/lib/PreviewGroup";
import { InputProps as InputProps$1, InputRef } from "rc-input";
export { InputRef } from "rc-input";
import { TextAreaProps as TextAreaProps$1 } from "rc-textarea";
import {
  ResizableTextAreaRef,
  AutoSizeType,
} from "rc-textarea/lib/ResizableTextArea";
import { InputNumberProps as InputNumberProps$1 } from "rc-input-number";
import { ValueType } from "rc-input-number/lib/utils/MiniDecimal";
import * as rc_mentions_lib_Option from "rc-mentions/lib/Option";
import {
  MentionsProps,
  DataDrivenOptionProps,
  MentionsRef as MentionsRef$1,
} from "rc-mentions/lib/Mentions";
import * as _ant_design_icons_lib_components_AntdIcon from "@ant-design/icons/lib/components/AntdIcon";
import { RateProps as RateProps$1 } from "rc-rate/lib/Rate";
import {
  SegmentedProps as SegmentedProps$1,
  SegmentedRawOption,
  SegmentedLabeledOption as SegmentedLabeledOption$1,
} from "rc-segmented";
import { SliderProps } from "rc-slider";
import RcSteps from "rc-steps";
import { ProgressDotRender } from "rc-steps/lib/Steps";
import RcTable, { Summary } from "rc-table";
import { TableProps as TableProps$1 } from "rc-table/lib/Table";
import RcTree, {
  BasicDataNode,
  TreeProps as TreeProps$1,
  TreeNode,
} from "rc-tree";
import { DataNode, Key as Key$1 } from "rc-tree/lib/interface";
export { DataNode as TreeDataNode } from "rc-tree/lib/interface";
import {
  TreeSelectProps as TreeSelectProps$1,
  TreeNode as TreeNode$1,
  SHOW_ALL,
  SHOW_PARENT as SHOW_PARENT$1,
  SHOW_CHILD as SHOW_CHILD$1,
} from "rc-tree-select";
import {
  BaseOptionType as BaseOptionType$2,
  DefaultOptionType as DefaultOptionType$2,
} from "rc-tree-select/lib/TreeSelect";

type SizeType = "small" | "middle" | "large" | undefined;
declare const SizeContext: React$1.Context<SizeType>;

type ColSpanType = number | string;
type FlexType = number | "none" | "auto" | string;
interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}
interface ColProps extends React$1.HTMLAttributes<HTMLDivElement> {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
  xs?: ColSpanType | ColSize;
  sm?: ColSpanType | ColSize;
  md?: ColSpanType | ColSize;
  lg?: ColSpanType | ColSize;
  xl?: ColSpanType | ColSize;
  xxl?: ColSpanType | ColSize;
  prefixCls?: string;
}
declare const Col: React$1.ForwardRefExoticComponent<
  ColProps & React$1.RefAttributes<HTMLDivElement>
>;

type FormLabelAlign = "left" | "right";

interface FormInstance<Values = any> extends FormInstance$1<Values> {
  scrollToField: (name: NamePath, options?: Options) => void;
  getFieldInstance: (name: NamePath) => any;
}
declare function useForm<Values = any>(
  form?: FormInstance<Values>
): [FormInstance<Values>];

type RequiredMark = boolean | "optional";
type FormLayout = "horizontal" | "inline" | "vertical";
interface FormProps<Values = any> extends Omit<FormProps$1<Values>, "form"> {
  prefixCls?: string;
  colon?: boolean;
  name?: string;
  layout?: FormLayout;
  labelAlign?: FormLabelAlign;
  labelWrap?: boolean;
  labelCol?: ColProps;
  wrapperCol?: ColProps;
  form?: FormInstance<Values>;
  size?: SizeType;
  disabled?: boolean;
  scrollToFirstError?: Options | boolean;
  requiredMark?: RequiredMark;
  /** @deprecated Will warning in future branch. Pls use `requiredMark` instead. */
  hideRequiredMark?: boolean;
}
declare const Form$1: <Values = any>(
  props: FormProps<Values> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<FormInstance<Values>> | undefined;
  }
) => React$1.ReactElement;

interface CommonPickerMethods {
  focus: () => void;
  blur: () => void;
}
interface PickerComponentClass<P = {}, S = unknown>
  extends ComponentClass<P, S> {
  new (...args: ConstructorParameters<ComponentClass<P, S>>): InstanceType<
    ComponentClass<P, S>
  > &
    CommonPickerMethods;
}

type UseFormItemStatus = () => {
  status?: ValidateStatus$1;
};
declare const useFormItemStatus: UseFormItemStatus;

interface FormItemInputProps {
  wrapperCol?: ColProps;
  extra?: React$1.ReactNode;
  status?: ValidateStatus;
  help?: React$1.ReactNode;
  fieldId?: string;
}

/**
 * https://stackoverflow.com/a/59187769 Extract the type of an element of an array/tuple without
 * performing indexing
 */
type ElementOf<T> = T extends (infer E)[]
  ? E
  : T extends readonly (infer F)[]
  ? F
  : never;
/** https://github.com/Microsoft/TypeScript/issues/29729 */
type LiteralUnion<T extends U, U> = T | (U & {});

declare const PresetStatusColorTypes: [
  "success",
  "processing",
  "error",
  "default",
  "warning"
];
declare const PresetColorTypes: [
  "pink",
  "red",
  "yellow",
  "orange",
  "cyan",
  "green",
  "blue",
  "purple",
  "geekblue",
  "magenta",
  "volcano",
  "gold",
  "lime"
];
type PresetColorType = ElementOf<typeof PresetColorTypes>;
type PresetStatusColorType = ElementOf<typeof PresetStatusColorTypes>;

interface AdjustOverflow {
  adjustX?: 0 | 1;
  adjustY?: 0 | 1;
}

type TooltipPlacement =
  | "top"
  | "left"
  | "right"
  | "bottom"
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "leftTop"
  | "leftBottom"
  | "rightTop"
  | "rightBottom";
interface LegacyTooltipProps
  extends Partial<
    Omit<
      TooltipProps$1,
      | "children"
      | "visible"
      | "defaultVisible"
      | "onVisibleChange"
      | "afterVisibleChange"
    >
  > {
  /**
   * @deprecated `visible` is deprecated which will be removed in next major version. Please use
   *   `open` instead.
   */
  visible?: TooltipProps$1["visible"];
  open?: TooltipProps$1["visible"];
  /**
   * @deprecated `defaultVisible` is deprecated which will be removed in next major version. Please
   *   use `defaultOpen` instead.
   */
  defaultVisible?: TooltipProps$1["defaultVisible"];
  defaultOpen?: TooltipProps$1["defaultVisible"];
  /**
   * @deprecated `onVisibleChange` is deprecated which will be removed in next major version. Please
   *   use `onOpenChange` instead.
   */
  onVisibleChange?: TooltipProps$1["onVisibleChange"];
  onOpenChange?: TooltipProps$1["onVisibleChange"];
  /**
   * @deprecated `afterVisibleChange` is deprecated which will be removed in next major version.
   *   Please use `afterOpenChange` instead.
   */
  afterVisibleChange?: TooltipProps$1["afterVisibleChange"];
  afterOpenChange?: TooltipProps$1["afterVisibleChange"];
}
interface AbstractTooltipProps extends LegacyTooltipProps {
  style?: React$1.CSSProperties;
  className?: string;
  color?: LiteralUnion<PresetColorType, string>;
  placement?: TooltipPlacement;
  builtinPlacements?: typeof placements;
  openClassName?: string;
  arrowPointAtCenter?: boolean;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  children?: React$1.ReactNode;
}
type RenderFunction$1 = () => React$1.ReactNode;
interface TooltipPropsWithOverlay extends AbstractTooltipProps {
  title?: React$1.ReactNode | RenderFunction$1;
  overlay?: React$1.ReactNode | RenderFunction$1;
}
interface TooltipPropsWithTitle extends AbstractTooltipProps {
  title: React$1.ReactNode | RenderFunction$1;
  overlay?: React$1.ReactNode | RenderFunction$1;
}
declare type TooltipProps = TooltipPropsWithTitle | TooltipPropsWithOverlay;
declare const Tooltip: React$1.ForwardRefExoticComponent<
  TooltipProps & React$1.RefAttributes<unknown>
>;

type WrapperTooltipProps = TooltipProps & {
  icon?: React$1.ReactElement;
};
type LabelTooltipType = WrapperTooltipProps | React$1.ReactNode;
interface FormItemLabelProps {
  colon?: boolean;
  htmlFor?: string;
  label?: React$1.ReactNode;
  labelAlign?: FormLabelAlign;
  labelCol?: ColProps;
  requiredMark?: RequiredMark;
  tooltip?: LabelTooltipType;
}

declare const ValidateStatuses: [
  "success",
  "warning",
  "error",
  "validating",
  ""
];
type ValidateStatus = (typeof ValidateStatuses)[number];
type RenderChildren<Values = any> = (
  form: FormInstance$1<Values>
) => React$1.ReactNode;
type RcFieldProps<Values = any> = Omit<FieldProps<Values>, "children">;
type ChildrenType<Values = any> = RenderChildren<Values> | React$1.ReactNode;
interface FormItemProps<Values = any>
  extends FormItemLabelProps,
    FormItemInputProps,
    RcFieldProps<Values> {
  prefixCls?: string;
  noStyle?: boolean;
  style?: React$1.CSSProperties;
  className?: string;
  children?: ChildrenType<Values>;
  id?: string;
  hasFeedback?: boolean;
  validateStatus?: ValidateStatus;
  required?: boolean;
  hidden?: boolean;
  initialValue?: any;
  messageVariables?: Record<string, string>;
  tooltip?: LabelTooltipType;
  /** @deprecated No need anymore */
  fieldKey?: React$1.Key | React$1.Key[];
}
declare function InternalFormItem<Values = any>(
  props: FormItemProps<Values>
): React$1.ReactElement;
type InternalFormItemType = typeof InternalFormItem;
type CompoundedComponent$s = InternalFormItemType & {
  useStatus: typeof useFormItemStatus;
};
declare const FormItem: CompoundedComponent$s;

declare const InputStatuses: ["warning", "error", ""];
type InputStatus = (typeof InputStatuses)[number];

interface TimePickerLocale {
  placeholder?: string;
  rangePlaceholder?: [string, string];
}
interface TimeRangePickerProps
  extends Omit<RangePickerTimeProps<Moment>, "picker"> {
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
  popupClassName?: string;
}
declare const RangePicker: React$1.ForwardRefExoticComponent<
  TimeRangePickerProps & React$1.RefAttributes<any>
>;
interface TimePickerProps extends Omit<PickerTimeProps<Moment>, "picker"> {
  addon?: () => React$1.ReactNode;
  popupClassName?: string;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
  status?: InputStatus;
}
declare const TimePicker: React$1.ForwardRefExoticComponent<
  TimePickerProps & React$1.RefAttributes<any>
>;
type MergedTimePicker = typeof TimePicker & {
  RangePicker: typeof RangePicker;
};
declare const _default$b: MergedTimePicker;

interface ButtonGroupProps {
  size?: SizeType;
  style?: React$1.CSSProperties;
  className?: string;
  prefixCls?: string;
  children?: React$1.ReactNode;
}
declare const ButtonGroup: React$1.FC<ButtonGroupProps>;

declare const ButtonTypes: [
  "default",
  "primary",
  "ghost",
  "dashed",
  "link",
  "text"
];
type ButtonType = (typeof ButtonTypes)[number];
declare const ButtonShapes: ["default", "circle", "round"];
type ButtonShape = (typeof ButtonShapes)[number];
declare const ButtonHTMLTypes: ["submit", "button", "reset"];
type ButtonHTMLType = (typeof ButtonHTMLTypes)[number];
type LegacyButtonType = ButtonType | "danger";
interface BaseButtonProps {
  type?: ButtonType;
  icon?: React$1.ReactNode;
  /**
   * Shape of Button
   *
   * @default default
   */
  shape?: ButtonShape;
  size?: SizeType;
  disabled?: boolean;
  loading?:
    | boolean
    | {
        delay?: number;
      };
  prefixCls?: string;
  className?: string;
  ghost?: boolean;
  danger?: boolean;
  block?: boolean;
  children?: React$1.ReactNode;
}
type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React$1.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React$1.AnchorHTMLAttributes<any>, "type" | "onClick">;
type NativeButtonProps = {
  htmlType?: ButtonHTMLType;
  onClick?: React$1.MouseEventHandler<HTMLElement>;
} & BaseButtonProps &
  Omit<React$1.ButtonHTMLAttributes<any>, "type" | "onClick">;
type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;
type CompoundedComponent$r = React$1.ForwardRefExoticComponent<
  ButtonProps & React$1.RefAttributes<HTMLElement>
> & {
  Group: typeof ButtonGroup;
};
declare const Button: CompoundedComponent$r;

interface CheckableTagProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  /**
   * It is an absolute controlled component and has no uncontrolled mode.
   *
   * .zh-cn 该组件为完全受控组件，不支持非受控用法。
   */
  checked: boolean;
  children?: React$1.ReactNode;
  onChange?: (checked: boolean) => void;
  onClick?: (e: React$1.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}
declare const CheckableTag: React$1.FC<CheckableTagProps>;

interface TagProps extends React$1.HTMLAttributes<HTMLSpanElement> {
  prefixCls?: string;
  className?: string;
  color?: LiteralUnion<PresetColorType | PresetStatusColorType, string>;
  closable?: boolean;
  closeIcon?: React$1.ReactNode;
  /** @deprecated `visible` will be removed in next major version. */
  visible?: boolean;
  onClose?: (e: React$1.MouseEvent<HTMLElement>) => void;
  style?: React$1.CSSProperties;
  icon?: React$1.ReactNode;
}
interface TagType
  extends React$1.ForwardRefExoticComponent<
    TagProps & React$1.RefAttributes<HTMLElement>
  > {
  CheckableTag: typeof CheckableTag;
}
declare const Tag: TagType;

declare const DataPickerPlacements: [
  "bottomLeft",
  "bottomRight",
  "topLeft",
  "topRight"
];
type DataPickerPlacement = (typeof DataPickerPlacements)[number];
type InjectDefaultProps<Props> = Omit<
  Props,
  "locale" | "generateConfig" | "hideHeader" | "components"
> & {
  locale?: PickerLocale;
  size?: SizeType;
  placement?: DataPickerPlacement;
  bordered?: boolean;
  status?: InputStatus;
};
type PickerLocale = {
  lang: Locale$1 & AdditionalPickerLocaleLangProps;
  timePickerLocale: TimePickerLocale;
} & AdditionalPickerLocaleProps;
type AdditionalPickerLocaleProps = {
  dateFormat?: string;
  dateTimeFormat?: string;
  weekFormat?: string;
  monthFormat?: string;
};
type AdditionalPickerLocaleLangProps = {
  placeholder: string;
  yearPlaceholder?: string;
  quarterPlaceholder?: string;
  monthPlaceholder?: string;
  weekPlaceholder?: string;
  rangeYearPlaceholder?: [string, string];
  rangeQuarterPlaceholder?: [string, string];
  rangeMonthPlaceholder?: [string, string];
  rangeWeekPlaceholder?: [string, string];
  rangePlaceholder?: [string, string];
};
type PickerBaseProps<DateType> = InjectDefaultProps<
  PickerBaseProps$1<DateType>
>;
type PickerDateProps<DateType> = InjectDefaultProps<
  PickerDateProps$1<DateType>
>;
type PickerTimeProps<DateType> = InjectDefaultProps<
  PickerTimeProps$1<DateType>
>;
type PickerProps<DateType> =
  | PickerBaseProps<DateType>
  | PickerDateProps<DateType>
  | PickerTimeProps<DateType>;
type RangePickerBaseProps<DateType> = InjectDefaultProps<
  RangePickerBaseProps$1<DateType>
>;
type RangePickerDateProps<DateType> = InjectDefaultProps<
  RangePickerDateProps$1<DateType>
>;
type RangePickerTimeProps<DateType> = InjectDefaultProps<
  RangePickerTimeProps$1<DateType>
>;
type RangePickerProps<DateType> =
  | RangePickerBaseProps<DateType>
  | RangePickerDateProps<DateType>
  | RangePickerTimeProps<DateType>;

interface TransferLocale$1 {
  description: string;
}
interface EmptyProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  /** @since 3.16.0 */
  imageStyle?: React$1.CSSProperties;
  image?: React$1.ReactNode;
  description?: React$1.ReactNode;
  children?: React$1.ReactNode;
}
type CompoundedComponent$q = React$1.FC<EmptyProps> & {
  PRESENTED_IMAGE_DEFAULT: React$1.ReactNode;
  PRESENTED_IMAGE_SIMPLE: React$1.ReactNode;
};
declare const Empty: CompoundedComponent$q;

interface ModalLocale {
  okText: string;
  cancelText: string;
  justOkText: string;
}

interface PaginationProps extends PaginationProps$1 {
  showQuickJumper?:
    | boolean
    | {
        goButton?: React$1.ReactNode;
      };
  size?: "default" | "small";
  responsive?: boolean;
  role?: string;
  totalBoundaryShowSizeChanger?: number;
}
type PaginationPosition = "top" | "bottom" | "both";
interface PaginationConfig extends PaginationProps {
  position?: PaginationPosition;
}

declare const Pagination: React$1.FC<PaginationProps>;

type RenderFunction = () => React$1.ReactNode;

interface PopconfirmProps extends AbstractTooltipProps {
  title: React$1.ReactNode | RenderFunction;
  disabled?: boolean;
  onConfirm?: (e?: React$1.MouseEvent<HTMLElement>) => void;
  onCancel?: (e?: React$1.MouseEvent<HTMLElement>) => void;
  okText?: React$1.ReactNode;
  okType?: LegacyButtonType;
  cancelText?: React$1.ReactNode;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  showCancel?: boolean;
  icon?: React$1.ReactNode;
  /**
   * @deprecated `onVisibleChange` is deprecated which will be removed in next major version. Please
   *   use `onOpenChange` instead.
   */
  onVisibleChange?: (
    visible: boolean,
    e?: React$1.MouseEvent<HTMLElement> | React$1.KeyboardEvent<HTMLDivElement>
  ) => void;
  onOpenChange?: (
    open: boolean,
    e?: React$1.MouseEvent<HTMLElement> | React$1.KeyboardEvent<HTMLDivElement>
  ) => void;
}
declare const Popconfirm: React$1.ForwardRefExoticComponent<
  PopconfirmProps & React$1.RefAttributes<unknown>
>;

interface PopconfirmLocale {
  okText: string;
  cancelText: string;
}

interface AbstractCheckboxProps<T> {
  prefixCls?: string;
  className?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  style?: React$1.CSSProperties;
  disabled?: boolean;
  onChange?: (e: T) => void;
  onClick?: React$1.MouseEventHandler<HTMLElement>;
  onMouseEnter?: React$1.MouseEventHandler<HTMLElement>;
  onMouseLeave?: React$1.MouseEventHandler<HTMLElement>;
  onKeyPress?: React$1.KeyboardEventHandler<HTMLElement>;
  onKeyDown?: React$1.KeyboardEventHandler<HTMLElement>;
  value?: any;
  tabIndex?: number;
  name?: string;
  children?: React$1.ReactNode;
  id?: string;
  autoFocus?: boolean;
  type?: string;
  skipGroup?: boolean;
}
interface CheckboxChangeEventTarget extends CheckboxProps {
  checked: boolean;
}
interface CheckboxChangeEvent {
  target: CheckboxChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}
interface CheckboxProps extends AbstractCheckboxProps<CheckboxChangeEvent> {
  indeterminate?: boolean;
}

type CheckboxValueType = string | number | boolean;
interface CheckboxOptionType {
  label: React$1.ReactNode;
  value: CheckboxValueType;
  style?: React$1.CSSProperties;
  disabled?: boolean;
  onChange?: (e: CheckboxChangeEvent) => void;
}
interface AbstractCheckboxGroupProps {
  prefixCls?: string;
  className?: string;
  options?: Array<CheckboxOptionType | string | number>;
  disabled?: boolean;
  style?: React$1.CSSProperties;
}
interface CheckboxGroupProps extends AbstractCheckboxGroupProps {
  name?: string;
  defaultValue?: Array<CheckboxValueType>;
  value?: Array<CheckboxValueType>;
  onChange?: (checkedValue: Array<CheckboxValueType>) => void;
  children?: React$1.ReactNode;
}
declare const _default$a: React$1.MemoExoticComponent<
  React$1.ForwardRefExoticComponent<
    CheckboxGroupProps & React$1.RefAttributes<HTMLDivElement>
  >
>;

type CompoundedComponent$p = React$1.ForwardRefExoticComponent<
  CheckboxProps & React$1.RefAttributes<HTMLInputElement>
> & {
  Group: typeof _default$a;
};
declare const Checkbox: CompoundedComponent$p;

type Breakpoint = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
type ScreenSizeMap = Partial<Record<Breakpoint, number>>;

declare const SELECTION_COLUMN: {};
declare const SELECTION_ALL: "SELECT_ALL";
declare const SELECTION_INVERT: "SELECT_INVERT";
declare const SELECTION_NONE: "SELECT_NONE";
type INTERNAL_SELECTION_ITEM =
  | SelectionItem
  | typeof SELECTION_ALL
  | typeof SELECTION_INVERT
  | typeof SELECTION_NONE;

type Key = React$1.Key;
type RowSelectionType = "checkbox" | "radio";
type SelectionItemSelectFn = (currentRowKeys: Key[]) => void;
interface TableLocale {
  filterTitle?: string;
  filterConfirm?: React$1.ReactNode;
  filterReset?: React$1.ReactNode;
  filterEmptyText?: React$1.ReactNode;
  filterCheckall?: React$1.ReactNode;
  filterSearchPlaceholder?: string;
  emptyText?: React$1.ReactNode | (() => React$1.ReactNode);
  selectAll?: React$1.ReactNode;
  selectNone?: React$1.ReactNode;
  selectInvert?: React$1.ReactNode;
  selectionAll?: React$1.ReactNode;
  sortTitle?: string;
  expand?: string;
  collapse?: string;
  triggerDesc?: string;
  triggerAsc?: string;
  cancelSort?: string;
}
type SortOrder = "descend" | "ascend" | null;
declare const TableActions: ["paginate", "sort", "filter"];
type TableAction = (typeof TableActions)[number];
type CompareFn<T> = (a: T, b: T, sortOrder?: SortOrder) => number;
interface ColumnFilterItem {
  text: React$1.ReactNode;
  value: React$1.Key | boolean;
  children?: ColumnFilterItem[];
}
interface ColumnTitleProps<RecordType> {
  /** @deprecated Please use `sorterColumns` instead. */
  sortOrder?: SortOrder;
  /** @deprecated Please use `sorterColumns` instead. */
  sortColumn?: ColumnType<RecordType>;
  sortColumns?: {
    column: ColumnType<RecordType>;
    order: SortOrder;
  }[];
  filters?: Record<string, FilterValue>;
}
type ColumnTitle<RecordType> =
  | React$1.ReactNode
  | ((props: ColumnTitleProps<RecordType>) => React$1.ReactNode);
type FilterValue = (Key | boolean)[];
type FilterSearchType<RecordType = Record<string, any>> =
  | boolean
  | ((input: string, record: RecordType) => boolean);
interface FilterConfirmProps {
  closeDropdown: boolean;
}
interface FilterDropdownProps {
  prefixCls: string;
  setSelectedKeys: (selectedKeys: React$1.Key[]) => void;
  selectedKeys: React$1.Key[];
  /**
   * Confirm filter value, if you want to close dropdown before commit, you can call with
   * {closeDropdown: true}
   */
  confirm: (param?: FilterConfirmProps) => void;
  clearFilters?: () => void;
  filters?: ColumnFilterItem[];
  /** Only close filterDropdown */
  close: () => void;
  visible: boolean;
}
interface ColumnType<RecordType>
  extends Omit<ColumnType$1<RecordType>, "title"> {
  title?: ColumnTitle<RecordType>;
  sorter?:
    | boolean
    | CompareFn<RecordType>
    | {
        compare?: CompareFn<RecordType>;
        /** Config multiple sorter order priority */
        multiple?: number;
      };
  sortOrder?: SortOrder;
  defaultSortOrder?: SortOrder;
  sortDirections?: SortOrder[];
  showSorterTooltip?: boolean | TooltipProps;
  filtered?: boolean;
  filters?: ColumnFilterItem[];
  filterDropdown?:
    | React$1.ReactNode
    | ((props: FilterDropdownProps) => React$1.ReactNode);
  filterMultiple?: boolean;
  filteredValue?: FilterValue | null;
  defaultFilteredValue?: FilterValue | null;
  filterIcon?: React$1.ReactNode | ((filtered: boolean) => React$1.ReactNode);
  filterMode?: "menu" | "tree";
  filterSearch?: FilterSearchType<ColumnFilterItem>;
  onFilter?: (value: React$1.Key | boolean, record: RecordType) => boolean;
  /**
   * @deprecated `filterDropdownVisible` is deprecated which will be removed in next major version.
   *   Please use `filterDropdownOpen` instead.
   */
  filterDropdownVisible?: boolean;
  filterDropdownOpen?: boolean;
  /**
   * @deprecated `onFilterDropdownVisibleChange` is deprecated which will be removed in next major
   *   version. Please use `onFilterDropdownOpenChange` instead.
   */
  onFilterDropdownVisibleChange?: (visible: boolean) => void;
  onFilterDropdownOpenChange?: (open: boolean) => void;
  filterResetToDefaultFilteredValue?: boolean;
  responsive?: Breakpoint[];
}
interface ColumnGroupType<RecordType>
  extends Omit<ColumnType<RecordType>, "dataIndex"> {
  children: ColumnsType<RecordType>;
}
type ColumnsType<RecordType = unknown> = (
  | ColumnGroupType<RecordType>
  | ColumnType<RecordType>
)[];
interface SelectionItem {
  key: string;
  text: React$1.ReactNode;
  onSelect?: SelectionItemSelectFn;
}
type SelectionSelectFn<T> = (
  record: T,
  selected: boolean,
  selectedRows: T[],
  nativeEvent: Event
) => void;
type RowSelectMethod = "all" | "none" | "invert" | "single" | "multiple";
interface TableRowSelection<T> {
  /** Keep the selection keys in list even the key not exist in `dataSource` anymore */
  preserveSelectedRowKeys?: boolean;
  type?: RowSelectionType;
  selectedRowKeys?: Key[];
  defaultSelectedRowKeys?: Key[];
  onChange?: (
    selectedRowKeys: Key[],
    selectedRows: T[],
    info: {
      type: RowSelectMethod;
    }
  ) => void;
  getCheckboxProps?: (
    record: T
  ) => Partial<Omit<CheckboxProps, "checked" | "defaultChecked">>;
  onSelect?: SelectionSelectFn<T>;
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectMultiple?: (
    selected: boolean,
    selectedRows: T[],
    changeRows: T[]
  ) => void;
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectAll?: (selected: boolean, selectedRows: T[], changeRows: T[]) => void;
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectInvert?: (selectedRowKeys: Key[]) => void;
  /** @deprecated This function is deprecated and should use `onChange` instead */
  onSelectNone?: () => void;
  selections?: INTERNAL_SELECTION_ITEM[] | boolean;
  hideSelectAll?: boolean;
  fixed?: FixedType;
  columnWidth?: string | number;
  columnTitle?: string | React$1.ReactNode;
  checkStrictly?: boolean;
  renderCell?: (
    value: boolean,
    record: T,
    index: number,
    originNode: React$1.ReactNode
  ) => React$1.ReactNode | RenderedCell<T>;
}
interface TableCurrentDataSource<RecordType> {
  currentDataSource: RecordType[];
  action: TableAction;
}
interface SorterResult<RecordType> {
  column?: ColumnType<RecordType>;
  order?: SortOrder;
  field?: Key | readonly Key[];
  columnKey?: Key;
}
type GetPopupContainer = (triggerNode: HTMLElement) => HTMLElement;
type TablePaginationPosition =
  | "topLeft"
  | "topCenter"
  | "topRight"
  | "bottomLeft"
  | "bottomCenter"
  | "bottomRight";
interface TablePaginationConfig extends PaginationProps {
  position?: TablePaginationPosition[];
}

interface TransferOperationProps {
  className?: string;
  leftArrowText?: string;
  rightArrowText?: string;
  moveToLeft?: React$1.MouseEventHandler<HTMLButtonElement>;
  moveToRight?: React$1.MouseEventHandler<HTMLButtonElement>;
  leftActive?: boolean;
  rightActive?: boolean;
  style?: React$1.CSSProperties;
  disabled?: boolean;
  direction?: DirectionType;
  oneWay?: boolean;
}

type PaginationType =
  | boolean
  | {
      pageSize?: number;
      simple?: boolean;
      showSizeChanger?: boolean;
      showLessItems?: boolean;
    };

declare const OmitProps: ["handleFilter", "handleClear", "checkedKeys"];
type OmitProp = ElementOf<typeof OmitProps>;
type PartialTransferListProps<RecordType> = Omit<
  TransferListProps<RecordType>,
  OmitProp
>;
interface TransferListBodyProps<RecordType>
  extends PartialTransferListProps<RecordType> {
  filteredItems: RecordType[];
  filteredRenderItems: RenderedItem<RecordType>[];
  selectedKeys: string[];
}
interface TransferListBodyState {
  current: number;
}
declare class ListBody<
  RecordType extends KeyWiseTransferItem
> extends React$1.Component<
  TransferListBodyProps<RecordType>,
  TransferListBodyState
> {
  state: {
    current: number;
  };
  static getDerivedStateFromProps<T>(
    { filteredRenderItems, pagination }: TransferListBodyProps<T>,
    { current }: TransferListBodyState
  ): {
    current: number;
  } | null;
  onItemSelect: (item: RecordType) => void;
  onItemRemove: (item: RecordType) => void;
  onPageChange: (current: number) => void;
  getItems: () => RenderedItem<RecordType>[];
  render(): React$1.JSX.Element;
}

interface RenderedItem<RecordType> {
  renderedText: string;
  renderedEl: React$1.ReactNode;
  item: RecordType;
}
type RenderListFunction<T> = (
  props: TransferListBodyProps<T>
) => React$1.ReactNode;
interface TransferListProps<RecordType> extends TransferLocale {
  prefixCls: string;
  titleText: React$1.ReactNode;
  dataSource: RecordType[];
  filterOption?: (filterText: string, item: RecordType) => boolean;
  style?: React$1.CSSProperties;
  checkedKeys: string[];
  handleFilter: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
  onItemSelect: (key: string, check: boolean) => void;
  onItemSelectAll: (
    dataSource: string[],
    checkAll: boolean | "replace"
  ) => void;
  onItemRemove?: (keys: string[]) => void;
  handleClear: () => void;
  /** Render item */
  render?: (item: RecordType) => RenderResult;
  showSearch?: boolean;
  searchPlaceholder: string;
  itemUnit: string;
  itemsUnit: string;
  renderList?: RenderListFunction<RecordType>;
  footer?: (
    props: TransferListProps<RecordType>,
    info?: {
      direction: TransferDirection;
    }
  ) => React$1.ReactNode;
  onScroll: (e: React$1.UIEvent<HTMLUListElement>) => void;
  disabled?: boolean;
  direction: TransferDirection;
  showSelectAll?: boolean;
  selectAllLabel?: SelectAllLabel;
  showRemove?: boolean;
  pagination?: PaginationType;
}
interface TransferListState {
  /** Filter input value */
  filterValue: string;
}
declare class TransferList<
  RecordType extends KeyWiseTransferItem
> extends React$1.PureComponent<
  TransferListProps<RecordType>,
  TransferListState
> {
  timer: number;
  triggerScrollTimer: number;
  defaultListBodyRef: React$1.RefObject<ListBody<RecordType>>;
  constructor(props: TransferListProps<RecordType>);
  componentWillUnmount(): void;
  getCheckStatus(filteredItems: RecordType[]): "none" | "all" | "part";
  getFilteredItems(
    dataSource: RecordType[],
    filterValue: string
  ): {
    filteredItems: RecordType[];
    filteredRenderItems: RenderedItem<RecordType>[];
  };
  handleFilter: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  matchFilter: (text: string, item: RecordType) => boolean;
  renderListBody: (
    renderList: RenderListFunction<RecordType> | undefined,
    props: TransferListBodyProps<RecordType>
  ) => {
    customize: boolean;
    bodyContent: React$1.ReactNode;
  };
  getListBody(
    prefixCls: string,
    searchPlaceholder: string,
    filterValue: string,
    filteredItems: RecordType[],
    notFoundContent: React$1.ReactNode | React$1.ReactNode,
    filteredRenderItems: RenderedItem<RecordType>[],
    checkedKeys: string[],
    renderList?: RenderListFunction<RecordType>,
    showSearch?: boolean,
    disabled?: boolean
  ): React$1.ReactNode;
  getCheckBox({
    filteredItems,
    onItemSelectAll,
    disabled,
    prefixCls,
  }: {
    filteredItems: RecordType[];
    onItemSelectAll: (dataSource: string[], checkAll: boolean) => void;
    disabled?: boolean;
    prefixCls?: string;
  }): false | JSX.Element;
  renderItem: (item: RecordType) => RenderedItem<RecordType>;
  getSelectAllLabel: (
    selectedCount: number,
    totalCount: number
  ) => React$1.ReactNode;
  render(): React$1.JSX.Element;
}

interface TransferSearchProps {
  prefixCls?: string;
  placeholder?: string;
  onChange?: (e: React$1.FormEvent<HTMLElement>) => void;
  handleClear?: () => void;
  value?: string;
  disabled?: boolean;
}
declare function Search$1(props: TransferSearchProps): React$1.JSX.Element;

type TransferDirection = "left" | "right";
interface RenderResultObject {
  label: React$1.ReactElement;
  value: string;
}
type RenderResult = React$1.ReactElement | RenderResultObject | string | null;
interface TransferItem {
  key?: string;
  title?: string;
  description?: string;
  disabled?: boolean;
  [name: string]: any;
}
type KeyWise<T> = T & {
  key: string;
};
type KeyWiseTransferItem = KeyWise<TransferItem>;
type TransferRender<RecordType> = (item: RecordType) => RenderResult;
interface ListStyle {
  direction: TransferDirection;
}
type SelectAllLabel =
  | React$1.ReactNode
  | ((info: {
      selectedCount: number;
      totalCount: number;
    }) => React$1.ReactNode);
interface TransferLocale {
  titles?: React$1.ReactNode[];
  notFoundContent?: React$1.ReactNode | React$1.ReactNode[];
  searchPlaceholder: string;
  itemUnit: string;
  itemsUnit: string;
  remove?: string;
  selectAll?: string;
  selectCurrent?: string;
  selectInvert?: string;
  removeAll?: string;
  removeCurrent?: string;
}
interface TransferProps<RecordType> {
  prefixCls?: string;
  className?: string;
  disabled?: boolean;
  dataSource?: RecordType[];
  targetKeys?: string[];
  selectedKeys?: string[];
  render?: TransferRender<RecordType>;
  onChange?: (
    targetKeys: string[],
    direction: TransferDirection,
    moveKeys: string[]
  ) => void;
  onSelectChange?: (
    sourceSelectedKeys: string[],
    targetSelectedKeys: string[]
  ) => void;
  style?: React$1.CSSProperties;
  listStyle?:
    | ((style: ListStyle) => React$1.CSSProperties)
    | React$1.CSSProperties;
  operationStyle?: React$1.CSSProperties;
  titles?: React$1.ReactNode[];
  operations?: string[];
  showSearch?: boolean;
  filterOption?: (inputValue: string, item: RecordType) => boolean;
  locale?: Partial<TransferLocale>;
  footer?: (
    props: TransferListProps<RecordType>,
    info?: {
      direction: TransferDirection;
    }
  ) => React$1.ReactNode;
  rowKey?: (record: RecordType) => string;
  onSearch?: (direction: TransferDirection, value: string) => void;
  onScroll?: (
    direction: TransferDirection,
    e: React$1.SyntheticEvent<HTMLUListElement>
  ) => void;
  children?: (props: TransferListBodyProps<RecordType>) => React$1.ReactNode;
  showSelectAll?: boolean;
  selectAllLabels?: SelectAllLabel[];
  oneWay?: boolean;
  pagination?: PaginationType;
  status?: InputStatus;
}
interface TransferState {
  sourceSelectedKeys: string[];
  targetSelectedKeys: string[];
}
declare class Transfer<
  RecordType extends TransferItem = TransferItem
> extends React$1.Component<TransferProps<RecordType>, TransferState> {
  static List: typeof TransferList;
  static Operation: ({
    disabled,
    moveToLeft,
    moveToRight,
    leftArrowText,
    rightArrowText,
    leftActive,
    rightActive,
    className,
    style,
    direction,
    oneWay,
  }: TransferOperationProps) => React$1.JSX.Element;
  static Search: typeof Search$1;
  static getDerivedStateFromProps<T>({
    selectedKeys,
    targetKeys,
    pagination,
    children,
  }: TransferProps<T>): {
    sourceSelectedKeys: string[];
    targetSelectedKeys: string[];
  } | null;
  separatedDataSource: {
    leftDataSource: RecordType[];
    rightDataSource: RecordType[];
  } | null;
  constructor(props: TransferProps<RecordType>);
  setStateKeys: (
    direction: TransferDirection,
    keys: string[] | ((prevKeys: string[]) => string[])
  ) => void;
  getTitles(transferLocale: TransferLocale): React$1.ReactNode[];
  getLocale: (
    transferLocale: TransferLocale,
    renderEmpty: RenderEmptyHandler
  ) => {
    titles?: React$1.ReactNode[] | undefined;
    notFoundContent: React$1.ReactNode;
    searchPlaceholder: string;
    itemUnit: string;
    itemsUnit: string;
    remove?: string | undefined;
    selectAll?: string | undefined;
    selectCurrent?: string | undefined;
    selectInvert?: string | undefined;
    removeAll?: string | undefined;
    removeCurrent?: string | undefined;
  };
  moveTo: (direction: TransferDirection) => void;
  moveToLeft: () => void;
  moveToRight: () => void;
  onItemSelectAll: (
    direction: TransferDirection,
    selectedKeys: string[],
    checkAll: boolean | "replace"
  ) => void;
  onLeftItemSelectAll: (selectedKeys: string[], checkAll: boolean) => void;
  onRightItemSelectAll: (selectedKeys: string[], checkAll: boolean) => void;
  handleFilter: (
    direction: TransferDirection,
    e: React$1.ChangeEvent<HTMLInputElement>
  ) => void;
  handleLeftFilter: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
  handleRightFilter: (e: React$1.ChangeEvent<HTMLInputElement>) => void;
  handleClear: (direction: TransferDirection) => void;
  handleLeftClear: () => void;
  handleRightClear: () => void;
  onItemSelect: (
    direction: TransferDirection,
    selectedKey: string,
    checked: boolean
  ) => void;
  onLeftItemSelect: (selectedKey: string, checked: boolean) => void;
  onRightItemSelect: (selectedKey: string, checked: boolean) => void;
  onRightItemRemove: (selectedKeys: string[]) => void;
  handleScroll: (
    direction: TransferDirection,
    e: React$1.SyntheticEvent<HTMLUListElement>
  ) => void;
  handleLeftScroll: (e: React$1.SyntheticEvent<HTMLUListElement>) => void;
  handleRightScroll: (e: React$1.SyntheticEvent<HTMLUListElement>) => void;
  handleSelectChange(direction: TransferDirection, holder: string[]): void;
  handleListStyle: (
    listStyle: TransferProps<RecordType>["listStyle"],
    direction: TransferDirection
  ) => React$1.CSSProperties | undefined;
  separateDataSource(): {
    leftDataSource: KeyWise<RecordType>[];
    rightDataSource: KeyWise<RecordType>[];
  };
  render(): React$1.JSX.Element;
}

declare const ProgressTypes: ["line", "circle", "dashboard"];
type ProgressType = (typeof ProgressTypes)[number];
declare const ProgressStatuses: ["normal", "exception", "active", "success"];
type ProgressSize = "default" | "small";
type StringGradients = {
  [percentage: string]: string;
};
type FromToGradients = {
  from: string;
  to: string;
};
type ProgressGradient = {
  direction?: string;
} & (StringGradients | FromToGradients);
interface SuccessProps {
  percent?: number;
  /** @deprecated Use `percent` instead */
  progress?: number;
  strokeColor?: string;
}
interface ProgressProps {
  prefixCls?: string;
  className?: string;
  type?: ProgressType;
  percent?: number;
  format?: (percent?: number, successPercent?: number) => React$1.ReactNode;
  status?: (typeof ProgressStatuses)[number];
  showInfo?: boolean;
  strokeWidth?: number;
  strokeLinecap?: "butt" | "square" | "round";
  strokeColor?: string | string[] | ProgressGradient;
  trailColor?: string;
  width?: number;
  success?: SuccessProps;
  style?: React$1.CSSProperties;
  gapDegree?: number;
  gapPosition?: "top" | "bottom" | "left" | "right";
  size?: ProgressSize;
  steps?: number;
  /** @deprecated Use `success` instead */
  successPercent?: number;
  children?: React$1.ReactNode;
}
declare const Progress: React$1.FC<ProgressProps>;

interface RcFile extends RcFile$1 {
  readonly lastModifiedDate: Date;
}
type UploadFileStatus = "error" | "success" | "done" | "uploading" | "removed";
interface HttpRequestHeader {
  [key: string]: string;
}
interface UploadFile<T = any> {
  uid: string;
  size?: number;
  name: string;
  fileName?: string;
  lastModified?: number;
  lastModifiedDate?: Date;
  url?: string;
  status?: UploadFileStatus;
  percent?: number;
  thumbUrl?: string;
  crossOrigin?: React$1.ImgHTMLAttributes<HTMLImageElement>["crossOrigin"];
  originFileObj?: RcFile;
  response?: T;
  error?: any;
  linkProps?: any;
  type?: string;
  xhr?: T;
  preview?: string;
}
interface UploadChangeParam<T = UploadFile> {
  file: T;
  fileList: T[];
  event?: {
    percent: number;
  };
}
interface ShowUploadListInterface {
  showRemoveIcon?: boolean;
  showPreviewIcon?: boolean;
  showDownloadIcon?: boolean;
  removeIcon?: React$1.ReactNode | ((file: UploadFile) => React$1.ReactNode);
  downloadIcon?: React$1.ReactNode | ((file: UploadFile) => React$1.ReactNode);
  previewIcon?: React$1.ReactNode | ((file: UploadFile) => React$1.ReactNode);
}
interface UploadLocale {
  uploading?: string;
  removeFile?: string;
  downloadFile?: string;
  uploadError?: string;
  previewFile?: string;
}
type UploadType = "drag" | "select";
type UploadListType = "text" | "picture" | "picture-card";
type UploadListProgressProps = Omit<ProgressProps, "percent" | "type">;
type ItemRender<T = any> = (
  originNode: React$1.ReactElement,
  file: UploadFile,
  fileList: Array<UploadFile<T>>,
  actions: {
    download: () => void;
    preview: () => void;
    remove: () => void;
  }
) => React$1.ReactNode;
type PreviewFileHandler = (file: File | Blob) => PromiseLike<string>;
type TransformFileHandler = (
  file: RcFile
) => string | Blob | File | PromiseLike<string | Blob | File>;
type BeforeUploadValueType = void | boolean | string | Blob | File;
interface UploadProps<T = any> extends Pick<UploadProps$1, "capture"> {
  type?: UploadType;
  name?: string;
  defaultFileList?: Array<UploadFile<T>>;
  fileList?: Array<UploadFile<T>>;
  action?:
    | string
    | ((file: RcFile) => string)
    | ((file: RcFile) => PromiseLike<string>);
  directory?: boolean;
  data?:
    | Record<string, unknown>
    | ((
        file: UploadFile<T>
      ) => Record<string, unknown> | Promise<Record<string, unknown>>);
  method?: "POST" | "PUT" | "PATCH" | "post" | "put" | "patch";
  headers?: HttpRequestHeader;
  showUploadList?: boolean | ShowUploadListInterface;
  multiple?: boolean;
  accept?: string;
  beforeUpload?: (
    file: RcFile,
    FileList: RcFile[]
  ) => BeforeUploadValueType | Promise<BeforeUploadValueType>;
  onChange?: (info: UploadChangeParam<UploadFile<T>>) => void;
  onDrop?: (event: React$1.DragEvent<HTMLDivElement>) => void;
  listType?: UploadListType;
  className?: string;
  onPreview?: (file: UploadFile<T>) => void;
  onDownload?: (file: UploadFile<T>) => void;
  onRemove?: (file: UploadFile<T>) => void | boolean | Promise<void | boolean>;
  supportServerRender?: boolean;
  style?: React$1.CSSProperties;
  disabled?: boolean;
  prefixCls?: string;
  customRequest?: (options: UploadRequestOption) => void;
  withCredentials?: boolean;
  openFileDialogOnClick?: boolean;
  locale?: UploadLocale;
  id?: string;
  previewFile?: PreviewFileHandler;
  /** @deprecated Please use `beforeUpload` directly */
  transformFile?: TransformFileHandler;
  iconRender?: (
    file: UploadFile<T>,
    listType?: UploadListType
  ) => React$1.ReactNode;
  isImageUrl?: (file: UploadFile) => boolean;
  progress?: UploadListProgressProps;
  itemRender?: ItemRender<T>;
  /** Config max count of `fileList`. Will replace current one when `maxCount` is 1 */
  maxCount?: number;
  children?: React$1.ReactNode;
}

interface Locale {
  locale: string;
  Pagination?: PaginationLocale;
  DatePicker?: PickerLocale;
  TimePicker?: Record<string, any>;
  Calendar?: Record<string, any>;
  Table?: TableLocale;
  Modal?: ModalLocale;
  Popconfirm?: PopconfirmLocale;
  Transfer?: TransferLocale;
  Select?: Record<string, any>;
  Upload?: UploadLocale;
  Empty?: TransferLocale$1;
  global?: Record<string, any>;
  PageHeader?: {
    back: string;
  };
  Icon?: Record<string, any>;
  Text?: {
    edit?: any;
    copy?: any;
    copied?: any;
    expand?: any;
  };
  Form?: {
    optional?: string;
    defaultValidateMessages: ValidateMessages;
  };
  Image?: {
    preview: string;
  };
}

declare const defaultRenderEmpty: (componentName?: string) => React$1.ReactNode;
type RenderEmptyHandler = typeof defaultRenderEmpty;

interface Theme {
  primaryColor?: string;
  infoColor?: string;
  successColor?: string;
  processingColor?: string;
  errorColor?: string;
  warningColor?: string;
}
interface CSPConfig {
  nonce?: string;
}
type DirectionType = "ltr" | "rtl" | undefined;
interface ConfigConsumerProps {
  getTargetContainer?: () => HTMLElement;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  rootPrefixCls?: string;
  iconPrefixCls?: string;
  getPrefixCls: (suffixCls?: string, customizePrefixCls?: string) => string;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  input?: {
    autoComplete?: string;
  };
  pagination?: {
    showSizeChanger?: boolean;
  };
  locale?: Locale;
  pageHeader?: {
    ghost: boolean;
  };
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
  form?: {
    validateMessages?: ValidateMessages;
    requiredMark?: RequiredMark;
    colon?: boolean;
  };
}
declare const ConfigContext: React$1.Context<ConfigConsumerProps>;

interface ConfigProviderProps {
  getTargetContainer?: () => HTMLElement | Window;
  getPopupContainer?: (triggerNode?: HTMLElement) => HTMLElement;
  prefixCls?: string;
  iconPrefixCls?: string;
  children?: React$1.ReactNode;
  renderEmpty?: RenderEmptyHandler;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  form?: {
    validateMessages?: ValidateMessages;
    requiredMark?: RequiredMark;
    colon?: boolean;
  };
  input?: {
    autoComplete?: string;
  };
  pagination?: {
    showSizeChanger?: boolean;
  };
  locale?: Locale;
  pageHeader?: {
    ghost: boolean;
  };
  componentSize?: SizeType;
  componentDisabled?: boolean;
  direction?: DirectionType;
  space?: {
    size?: SizeType | number;
  };
  virtual?: boolean;
  dropdownMatchSelectWidth?: boolean;
}
declare const setGlobalConfig: ({
  prefixCls,
  iconPrefixCls,
  theme,
}: Pick<ConfigProviderProps, "prefixCls" | "iconPrefixCls"> & {
  theme?: Theme | undefined;
}) => void;
declare const ConfigProvider: React$1.FC<ConfigProviderProps> & {
  ConfigContext: typeof ConfigContext;
  SizeContext: typeof SizeContext;
  config: typeof setGlobalConfig;
};

interface AffixProps {
  /** 距离窗口顶部达到指定偏移量后触发 */
  offsetTop?: number;
  /** 距离窗口底部达到指定偏移量后触发 */
  offsetBottom?: number;
  style?: React$1.CSSProperties;
  /** 固定状态改变时触发的回调函数 */
  onChange?: (affixed?: boolean) => void;
  /** 设置 Affix 需要监听其滚动事件的元素，值为一个返回对应 DOM 元素的函数 */
  target?: () => Window | HTMLElement | null;
  prefixCls?: string;
  className?: string;
  children: React$1.ReactNode;
}
interface InternalAffixProps extends AffixProps {
  affixPrefixCls: string;
}
declare enum AffixStatus {
  None = 0,
  Prepare = 1,
}
interface AffixState {
  affixStyle?: React$1.CSSProperties;
  placeholderStyle?: React$1.CSSProperties;
  status: AffixStatus;
  lastAffix: boolean;
  prevTarget: Window | HTMLElement | null;
}
declare class Affix extends React$1.Component<InternalAffixProps, AffixState> {
  static contextType: React$1.Context<ConfigConsumerProps>;
  state: AffixState;
  placeholderNode: HTMLDivElement;
  fixedNode: HTMLDivElement;
  private timeout;
  context: ConfigConsumerProps;
  private getTargetFunc;
  componentDidMount(): void;
  componentDidUpdate(prevProps: AffixProps): void;
  componentWillUnmount(): void;
  getOffsetTop: () => number | undefined;
  getOffsetBottom: () => number | undefined;
  savePlaceholderNode: (node: HTMLDivElement) => void;
  saveFixedNode: (node: HTMLDivElement) => void;
  measure: () => void;
  prepareMeasure: () => void;
  updatePosition(): void;
  lazyUpdatePosition(): void;
  render(): React$1.JSX.Element;
}
declare const AffixFC: React$1.ForwardRefExoticComponent<
  AffixProps & React$1.RefAttributes<Affix>
>;

interface ErrorBoundaryProps {
  message?: React$1.ReactNode;
  description?: React$1.ReactNode;
  children?: React$1.ReactNode;
}
interface ErrorBoundaryStates {
  error?: Error | null;
  info?: {
    componentStack?: string;
  };
}
declare class ErrorBoundary extends React$1.Component<
  ErrorBoundaryProps,
  ErrorBoundaryStates
> {
  state: {
    error: undefined;
    info: {
      componentStack: string;
    };
  };
  componentDidCatch(error: Error | null, info: object): void;
  render():
    | string
    | number
    | boolean
    | Iterable<React$1.ReactNode>
    | React$1.JSX.Element
    | null
    | undefined;
}

interface AlertProps {
  /** Type of Alert styles, options:`success`, `info`, `warning`, `error` */
  type?: "success" | "info" | "warning" | "error";
  /** Whether Alert can be closed */
  closable?: boolean;
  /** Close text to show */
  closeText?: React$1.ReactNode;
  /** Content of Alert */
  message?: React$1.ReactNode;
  /** Additional content of Alert */
  description?: React$1.ReactNode;
  /** Callback when close Alert */
  onClose?: React$1.MouseEventHandler<HTMLButtonElement>;
  /** Trigger when animation ending of Alert */
  afterClose?: () => void;
  /** Whether to show icon */
  showIcon?: boolean;
  /** https://www.w3.org/TR/2014/REC-html5-20141028/dom.html#aria-role-attribute */
  role?: string;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  className?: string;
  banner?: boolean;
  icon?: React$1.ReactNode;
  /** Custom closeIcon */
  closeIcon?: React$1.ReactNode;
  action?: React$1.ReactNode;
  onMouseEnter?: React$1.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React$1.MouseEventHandler<HTMLDivElement>;
  onClick?: React$1.MouseEventHandler<HTMLDivElement>;
}
type CompoundedComponent$o = React$1.FC<AlertProps> & {
  ErrorBoundary: typeof ErrorBoundary;
};
declare const Alert: CompoundedComponent$o;

type AnchorContainer = HTMLElement | Window;
interface AnchorProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  children?: React$1.ReactNode;
  offsetTop?: number;
  bounds?: number;
  affix?: boolean;
  showInkInFixed?: boolean;
  getContainer?: () => AnchorContainer;
  /** Return customize highlight anchor */
  getCurrentAnchor?: (activeLink: string) => string;
  onClick?: (
    e: React$1.MouseEvent<HTMLElement>,
    link: {
      title: React$1.ReactNode;
      href: string;
    }
  ) => void;
  /** Scroll to target offset value, if none, it's offsetTop prop value or 0. */
  targetOffset?: number;
  /** Listening event when scrolling change active link */
  onChange?: (currentActiveLink: string) => void;
}
declare const Anchor$1: React$1.FC<AnchorProps>;

interface AnchorLinkProps {
  prefixCls?: string;
  href: string;
  target?: string;
  title: React$1.ReactNode;
  children?: React$1.ReactNode;
  className?: string;
}
declare const AnchorLink: React$1.FC<AnchorLinkProps>;

type InternalAnchorType = typeof Anchor$1;
type CompoundedComponent$n = InternalAnchorType & {
  Link: typeof AnchorLink;
};
declare const Anchor: CompoundedComponent$n;

declare const SelectPlacements: [
  "bottomLeft",
  "bottomRight",
  "topLeft",
  "topRight"
];
type SelectCommonPlacement = (typeof SelectPlacements)[number];

interface InternalSelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends Omit<SelectProps$1<ValueType, OptionType>, "mode"> {
  suffixIcon?: React$1.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  mode?: "multiple" | "tags" | "SECRET_COMBOBOX_MODE_DO_NOT_USE";
  bordered?: boolean;
}
interface SelectProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    | "inputIcon"
    | "mode"
    | "getInputElement"
    | "getRawInputElement"
    | "backfill"
    | "placement"
  > {
  placement?: SelectCommonPlacement;
  mode?: "multiple" | "tags";
  status?: InputStatus;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
  popupClassName?: string;
}
declare const Select: (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
  props: SelectProps<ValueType, OptionType> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<BaseSelectRef> | undefined;
  }
) => React$1.ReactElement) & {
  SECRET_COMBOBOX_MODE_DO_NOT_USE: string;
  Option: typeof Option$2;
  OptGroup: typeof OptGroup;
};

declare const Option$1: rc_select_lib_Option.OptionFC;
interface DataSourceItemObject {
  value: string;
  text: string;
}
type DataSourceItemType = DataSourceItemObject | React$1.ReactNode;
interface AutoCompleteProps<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
> extends Omit<
    InternalSelectProps<ValueType, OptionType>,
    "inputIcon" | "loading" | "mode" | "optionLabelProp" | "labelInValue"
  > {
  dataSource?: DataSourceItemType[];
  status?: InputStatus;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major version.
   *   Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
  popupClassName?: string;
}
declare const RefAutoComplete: (<
  ValueType = any,
  OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType
>(
  props: AutoCompleteProps<ValueType, OptionType> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<BaseSelectRef> | undefined;
  }
) => React$1.ReactElement) & {
  Option: typeof Option$1;
};

type AvatarSize = "large" | "small" | "default" | number | ScreenSizeMap;

interface AvatarProps$1 {
  /** Shape of avatar, options: `circle`, `square` */
  shape?: "circle" | "square";
  size?: AvatarSize;
  gap?: number;
  /** Src of image avatar */
  src?: React$1.ReactNode;
  /** Srcset of image avatar */
  srcSet?: string;
  draggable?: boolean;
  /** Icon to be used in avatar */
  icon?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  className?: string;
  children?: React$1.ReactNode;
  alt?: string;
  crossOrigin?: "" | "anonymous" | "use-credentials";
  onClick?: (e?: React$1.MouseEvent<HTMLElement>) => void;
  onError?: () => boolean;
}

interface GroupProps$1 {
  className?: string;
  children?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  maxCount?: number;
  maxStyle?: React$1.CSSProperties;
  maxPopoverPlacement?: "top" | "bottom";
  maxPopoverTrigger?: "hover" | "focus" | "click";
  size?: AvatarSize;
}
declare const Group$1: React$1.FC<GroupProps$1>;

type CompoundedComponent$m = ForwardRefExoticComponent<
  AvatarProps$1 & RefAttributes<HTMLSpanElement>
> & {
  Group: typeof Group$1;
};
declare const Avatar: CompoundedComponent$m;

interface BackTopProps {
  visibilityHeight?: number;
  onClick?: React$1.MouseEventHandler<HTMLElement>;
  target?: () => HTMLElement | Window | Document;
  prefixCls?: string;
  children?: React$1.ReactNode;
  className?: string;
  style?: React$1.CSSProperties;
  duration?: number;
  visible?: boolean;
}
declare const _default$9: React$1.NamedExoticComponent<BackTopProps>;

type RibbonPlacement = "start" | "end";
interface RibbonProps {
  className?: string;
  prefixCls?: string;
  style?: React$1.CSSProperties;
  text?: React$1.ReactNode;
  color?: LiteralUnion<PresetColorType, string>;
  children?: React$1.ReactNode;
  placement?: RibbonPlacement;
}
declare const Ribbon: React$1.FC<RibbonProps>;

type CompoundedComponent$l = React$1.FC<BadgeProps> & {
  Ribbon: typeof Ribbon;
};
interface BadgeProps {
  /** Number to show in badge */
  count?: React$1.ReactNode;
  showZero?: boolean;
  /** Max count to show */
  overflowCount?: number;
  /** Whether to show red dot without number */
  dot?: boolean;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  scrollNumberPrefixCls?: string;
  className?: string;
  status?: PresetStatusColorType;
  color?: LiteralUnion<PresetColorType, string>;
  text?: React$1.ReactNode;
  size?: "default" | "small";
  offset?: [number | string, number | string];
  title?: string;
  children?: React$1.ReactNode;
}
declare const Badge: CompoundedComponent$l;

interface MenuDividerProps extends React$1.HTMLAttributes<HTMLLIElement> {
  className?: string;
  prefixCls?: string;
  style?: React$1.CSSProperties;
  dashed?: boolean;
}

interface MenuItemType extends MenuItemType$1 {
  danger?: boolean;
  icon?: React$1.ReactNode;
  title?: string;
}
interface SubMenuType extends Omit<SubMenuType$1, "children"> {
  icon?: React$1.ReactNode;
  theme?: "dark" | "light";
  children: ItemType[];
}
interface MenuItemGroupType extends Omit<MenuItemGroupType$1, "children"> {
  children?: ItemType[];
  key?: React$1.Key;
}
interface MenuDividerType extends MenuDividerType$1 {
  dashed?: boolean;
  key?: React$1.Key;
}
type ItemType =
  | MenuItemType
  | SubMenuType
  | MenuItemGroupType
  | MenuDividerType
  | null;

type MenuTheme = "light" | "dark";
interface MenuContextProps {
  prefixCls: string;
  inlineCollapsed: boolean;
  antdMenuTheme?: MenuTheme;
  direction?: DirectionType;
  firstLevel: boolean;
}

interface SiderContextProps {
  siderCollapsed?: boolean;
}
declare const SiderContext: React$1.Context<SiderContextProps>;
type CollapseType = "clickTrigger" | "responsive";
type SiderTheme = "light" | "dark";
interface SiderProps extends React$1.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  collapsible?: boolean;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  reverseArrow?: boolean;
  onCollapse?: (collapsed: boolean, type: CollapseType) => void;
  zeroWidthTriggerStyle?: React$1.CSSProperties;
  trigger?: React$1.ReactNode;
  width?: number | string;
  collapsedWidth?: number | string;
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl" | "xxl";
  theme?: SiderTheme;
  onBreakpoint?: (broken: boolean) => void;
}
declare const Sider: React$1.ForwardRefExoticComponent<
  SiderProps & React$1.RefAttributes<HTMLDivElement>
>;

interface MenuItemProps extends Omit<MenuItemProps$1, "title"> {
  icon?: React$1.ReactNode;
  danger?: boolean;
  title?: React$1.ReactNode;
}
declare class MenuItem extends React$1.Component<MenuItemProps> {
  static contextType: React$1.Context<MenuContextProps>;
  context: MenuContextProps;
  renderItemChildren(inlineCollapsed: boolean): React$1.JSX.Element;
  renderItem: ({ siderCollapsed }: SiderContextProps) => React$1.JSX.Element;
  render(): React$1.JSX.Element;
}

interface TitleEventEntity {
  key: string;
  domEvent:
    | React$1.MouseEvent<HTMLElement>
    | React$1.KeyboardEvent<HTMLElement>;
}
interface SubMenuProps {
  className?: string;
  disabled?: boolean;
  level?: number;
  title?: React$1.ReactNode;
  icon?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  onTitleClick?: (e: TitleEventEntity) => void;
  onTitleMouseEnter?: (e: TitleEventEntity) => void;
  onTitleMouseLeave?: (e: TitleEventEntity) => void;
  popupOffset?: [number, number];
  popupClassName?: string;
  children?: React$1.ReactNode;
  theme?: MenuTheme;
}
declare function SubMenu(props: SubMenuProps): React$1.JSX.Element;

interface MenuProps extends Omit<MenuProps$1, "items"> {
  theme?: MenuTheme;
  inlineIndent?: number;
  items?: ItemType[];
}
declare class Menu extends React$1.Component<MenuProps, {}> {
  static Divider: React$1.FC<MenuDividerProps>;
  static Item: typeof MenuItem;
  static SubMenu: typeof SubMenu;
  static ItemGroup: typeof ItemGroup;
  menu: MenuRef | null;
  focus: (options?: FocusOptions) => void;
  render(): React$1.JSX.Element;
}

type DropdownButtonType =
  | "default"
  | "primary"
  | "ghost"
  | "dashed"
  | "link"
  | "text";
interface DropdownButtonProps extends ButtonGroupProps, DropdownProps {
  type?: DropdownButtonType;
  htmlType?: ButtonHTMLType;
  danger?: boolean;
  disabled?: boolean;
  loading?: ButtonProps["loading"];
  onClick?: React$1.MouseEventHandler<HTMLButtonElement>;
  icon?: React$1.ReactNode;
  href?: string;
  children?: React$1.ReactNode;
  title?: string;
  buttonsRender?: (buttons: React$1.ReactNode[]) => React$1.ReactNode[];
}
type CompoundedComponent$k = React$1.FC<DropdownButtonProps> & {};
declare const DropdownButton: CompoundedComponent$k;

declare const Placements: [
  "topLeft",
  "topCenter",
  "topRight",
  "bottomLeft",
  "bottomCenter",
  "bottomRight",
  "top",
  "bottom"
];
type Placement = (typeof Placements)[number];
type OverlayFunc = () => React$1.ReactElement;
type Align = {
  points?: [string, string];
  offset?: [number, number];
  targetOffset?: [number, number];
  overflow?: {
    adjustX?: boolean;
    adjustY?: boolean;
  };
  useCssRight?: boolean;
  useCssBottom?: boolean;
  useCssTransform?: boolean;
};
type DropdownArrowOptions = {
  pointAtCenter?: boolean;
};
interface DropdownProps {
  menu?: MenuProps;
  autoFocus?: boolean;
  arrow?: boolean | DropdownArrowOptions;
  trigger?: ("click" | "hover" | "contextMenu")[];
  dropdownRender?: (originNode: React$1.ReactNode) => React$1.ReactNode;
  onOpenChange?: (open: boolean) => void;
  open?: boolean;
  disabled?: boolean;
  destroyPopupOnHide?: boolean;
  align?: Align;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  prefixCls?: string;
  className?: string;
  transitionName?: string;
  placement?: Placement;
  overlayClassName?: string;
  overlayStyle?: React$1.CSSProperties;
  forceRender?: boolean;
  mouseEnterDelay?: number;
  mouseLeaveDelay?: number;
  openClassName?: string;
  children?: React$1.ReactNode;
  autoAdjustOverflow?: boolean | AdjustOverflow;
  /** @deprecated Please use `menu` instead */
  overlay?: React$1.ReactElement | OverlayFunc;
  /** @deprecated Please use `open` instead */
  visible?: boolean;
  /** @deprecated Please use `onOpenChange` instead */
  onVisibleChange?: (open: boolean) => void;
}
type CompoundedComponent$j = React$1.FC<DropdownProps> & {
  Button: typeof DropdownButton;
};
declare const Dropdown: CompoundedComponent$j;

interface BreadcrumbItemProps {
  prefixCls?: string;
  separator?: React$1.ReactNode;
  href?: string;
  menu?: DropdownProps["menu"];
  dropdownProps?: DropdownProps;
  onClick?: React$1.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>;
  className?: string;
  children?: React$1.ReactNode;
  /** @deprecated Please use `menu` instead */
  overlay?: DropdownProps["overlay"];
}
type CompoundedComponent$i = React$1.FC<BreadcrumbItemProps> & {
  __ANT_BREADCRUMB_ITEM: boolean;
};
declare const BreadcrumbItem: CompoundedComponent$i;

type CompoundedComponent$h = React$1.FC<{
  children?: React$1.ReactNode;
}> & {};
declare const BreadcrumbSeparator: CompoundedComponent$h;

interface Route {
  path: string;
  breadcrumbName: string;
  children?: Omit<Route, "children">[];
}
interface BreadcrumbProps {
  prefixCls?: string;
  routes?: Route[];
  params?: any;
  separator?: React$1.ReactNode;
  itemRender?: (
    route: Route,
    params: any,
    routes: Array<Route>,
    paths: Array<string>
  ) => React$1.ReactNode;
  style?: React$1.CSSProperties;
  className?: string;
  children?: React$1.ReactNode;
}
type CompoundedComponent$g = React$1.FC<BreadcrumbProps> & {
  Item: typeof BreadcrumbItem;
  Separator: typeof BreadcrumbSeparator;
};
declare const Breadcrumb: CompoundedComponent$g;

declare const locale: PickerLocale;

type CalendarMode = "year" | "month";
type HeaderRender<DateType> = (config: {
  value: DateType;
  type: CalendarMode;
  onChange: (date: DateType) => void;
  onTypeChange: (type: CalendarMode) => void;
}) => React$1.ReactNode;
interface CalendarProps<DateType> {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  locale?: typeof locale;
  validRange?: [DateType, DateType];
  disabledDate?: (date: DateType) => boolean;
  dateFullCellRender?: (date: DateType) => React$1.ReactNode;
  dateCellRender?: (date: DateType) => React$1.ReactNode;
  monthFullCellRender?: (date: DateType) => React$1.ReactNode;
  monthCellRender?: (date: DateType) => React$1.ReactNode;
  headerRender?: HeaderRender<DateType>;
  value?: DateType;
  defaultValue?: DateType;
  mode?: CalendarMode;
  fullscreen?: boolean;
  onChange?: (date: DateType) => void;
  onPanelChange?: (date: DateType, mode: CalendarMode) => void;
  onSelect?: (date: DateType) => void;
}

declare const Calendar: (props: CalendarProps<Moment>) => React$1.JSX.Element;

type TabsType = "line" | "card" | "editable-card";
interface TabsProps extends Omit<TabsProps$1, "editable"> {
  type?: TabsType;
  size?: SizeType;
  hideAdd?: boolean;
  centered?: boolean;
  addIcon?: React$1.ReactNode;
  onEdit?: (
    e: React$1.MouseEvent | React$1.KeyboardEvent | string,
    action: "add" | "remove"
  ) => void;
  children?: React$1.ReactNode;
}
declare function Tabs({
  type,
  className,
  size: propSize,
  onEdit,
  hideAdd,
  centered,
  addIcon,
  children,
  items,
  animated,
  ...props
}: TabsProps): React$1.JSX.Element;
declare namespace Tabs {
  var TabPane: React$1.FC<TabPaneProps>;
}

type CardType = "inner";
type CardSize = "default" | "small";
interface CardTabListType {
  key: string;
  tab: React$1.ReactNode;
  disabled?: boolean;
}
interface CardProps
  extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
  prefixCls?: string;
  title?: React$1.ReactNode;
  extra?: React$1.ReactNode;
  bordered?: boolean;
  headStyle?: React$1.CSSProperties;
  bodyStyle?: React$1.CSSProperties;
  style?: React$1.CSSProperties;
  loading?: boolean;
  hoverable?: boolean;
  children?: React$1.ReactNode;
  id?: string;
  className?: string;
  size?: CardSize;
  type?: CardType;
  cover?: React$1.ReactNode;
  actions?: React$1.ReactNode[];
  tabList?: CardTabListType[];
  tabBarExtraContent?: React$1.ReactNode;
  onTabChange?: (key: string) => void;
  activeTabKey?: string;
  defaultActiveTabKey?: string;
  tabProps?: TabsProps;
}
declare const Card$1: React$1.ForwardRefExoticComponent<
  CardProps & React$1.RefAttributes<HTMLDivElement>
>;

interface CardGridProps extends React$1.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  hoverable?: boolean;
  style?: React$1.CSSProperties;
}
declare const Grid: React$1.FC<CardGridProps>;

interface CardMetaProps {
  prefixCls?: string;
  style?: React$1.CSSProperties;
  className?: string;
  avatar?: React$1.ReactNode;
  title?: React$1.ReactNode;
  description?: React$1.ReactNode;
}
declare const Meta$1: React$1.FC<CardMetaProps>;

type InternalCardType = typeof Card$1;
interface CardInterface extends InternalCardType {
  Grid: typeof Grid;
  Meta: typeof Meta$1;
}
declare const Card: CardInterface;

type CarouselEffect = "scrollx" | "fade";
type DotPosition = "top" | "bottom" | "left" | "right";
interface CarouselProps extends Omit<Settings, "dots" | "dotsClass"> {
  effect?: CarouselEffect;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  slickGoTo?: number;
  dotPosition?: DotPosition;
  children?: React$1.ReactNode;
  dots?:
    | boolean
    | {
        className?: string;
      };
}
interface CarouselRef {
  goTo: (slide: number, dontAnimate?: boolean) => void;
  next: () => void;
  prev: () => void;
  autoPlay: (palyType?: "update" | "leave" | "blur") => void;
  innerSlider: any;
}
declare const Carousel: React$1.ForwardRefExoticComponent<
  CarouselProps & React$1.RefAttributes<CarouselRef>
>;

declare const SHOW_CHILD: "SHOW_CHILD";
declare const SHOW_PARENT: "SHOW_PARENT";
type SingleCascaderProps = Omit<
  SingleCascaderProps$1,
  "checkable" | "options"
> & {
  multiple?: false;
};
type MultipleCascaderProps = Omit<
  MultipleCascaderProps$1,
  "checkable" | "options"
> & {
  multiple: true;
};
type UnionCascaderProps = SingleCascaderProps | MultipleCascaderProps;
type CascaderProps<DataNodeType = any> = UnionCascaderProps & {
  multiple?: boolean;
  size?: SizeType;
  disabled?: boolean;
  bordered?: boolean;
  placement?: SelectCommonPlacement;
  suffixIcon?: React$1.ReactNode;
  options?: DataNodeType[];
  status?: InputStatus;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
};
interface CascaderRef {
  focus: () => void;
  blur: () => void;
}
declare const Cascader: (<
  OptionType extends
    | DefaultOptionType$1
    | BaseOptionType$1 = DefaultOptionType$1
>(
  props: React$1.PropsWithChildren<CascaderProps<OptionType>> & {
    ref?: React$1.Ref<CascaderRef> | undefined;
  }
) => React$1.ReactElement) & {
  displayName: string;
  SHOW_PARENT: typeof SHOW_PARENT;
  SHOW_CHILD: typeof SHOW_CHILD;
};

declare const RowAligns: ["top", "middle", "bottom", "stretch"];
declare const RowJustify: [
  "start",
  "end",
  "center",
  "space-around",
  "space-between",
  "space-evenly"
];
type Responsive = "xxl" | "xl" | "lg" | "md" | "sm" | "xs";
type ResponsiveLike<T> = {
  [key in Responsive]?: T;
};
type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;
type ResponsiveAligns = ResponsiveLike<(typeof RowAligns)[number]>;
type ResponsiveJustify = ResponsiveLike<(typeof RowJustify)[number]>;
interface RowProps extends React$1.HTMLAttributes<HTMLDivElement> {
  gutter?: Gutter | [Gutter, Gutter];
  align?: (typeof RowAligns)[number] | ResponsiveAligns;
  justify?: (typeof RowJustify)[number] | ResponsiveJustify;
  prefixCls?: string;
  wrap?: boolean;
}
declare const Row: React$1.ForwardRefExoticComponent<
  RowProps & React$1.RefAttributes<HTMLDivElement>
>;

declare function useBreakpoint(): Partial<Record<Breakpoint, boolean>>;

declare const _default$8: {
  useBreakpoint: typeof useBreakpoint;
};

type CollapsibleType = "header" | "icon" | "disabled";
interface CollapsePanelProps {
  key: string | number;
  header: React$1.ReactNode;
  /** @deprecated Use `collapsible="disabled"` instead */
  disabled?: boolean;
  className?: string;
  style?: React$1.CSSProperties;
  showArrow?: boolean;
  prefixCls?: string;
  forceRender?: boolean;
  id?: string;
  extra?: React$1.ReactNode;
  collapsible?: CollapsibleType;
  children?: React$1.ReactNode;
}
declare const CollapsePanel: React$1.FC<CollapsePanelProps>;

/** @deprecated Please use `start` | `end` instead */
type ExpandIconPositionLegacy = "left" | "right";
type ExpandIconPosition =
  | "start"
  | "end"
  | ExpandIconPositionLegacy
  | undefined;
interface CollapseProps {
  activeKey?: Array<string | number> | string | number;
  defaultActiveKey?: Array<string | number> | string | number;
  /** 手风琴效果 */
  accordion?: boolean;
  destroyInactivePanel?: boolean;
  onChange?: (key: string | string[]) => void;
  style?: React$1.CSSProperties;
  className?: string;
  bordered?: boolean;
  prefixCls?: string;
  expandIcon?: (panelProps: PanelProps) => React$1.ReactNode;
  expandIconPosition?: ExpandIconPosition;
  ghost?: boolean;
  collapsible?: CollapsibleType;
  children?: React$1.ReactNode;
}
interface PanelProps {
  isActive?: boolean;
  header?: React$1.ReactNode;
  className?: string;
  style?: React$1.CSSProperties;
  showArrow?: boolean;
  forceRender?: boolean;
  /** @deprecated Use `collapsible="disabled"` instead */
  disabled?: boolean;
  extra?: React$1.ReactNode;
  collapsible?: CollapsibleType;
}
type CompoundedComponent$f = React$1.FC<CollapseProps> & {
  Panel: typeof CollapsePanel;
};
declare const Collapse: CompoundedComponent$f;

interface CommentProps {
  /** List of action items rendered below the comment content */
  actions?: Array<React$1.ReactNode>;
  /** The element to display as the comment author. */
  author?: React$1.ReactNode;
  /** The element to display as the comment avatar - generally an antd Avatar */
  avatar?: React$1.ReactNode;
  /** ClassName of comment */
  className?: string;
  /** The main content of the comment */
  content: React$1.ReactNode;
  /** Nested comments should be provided as children of the Comment */
  children?: React$1.ReactNode;
  /** Comment prefix defaults to '.ant-comment' */
  prefixCls?: string;
  /** Additional style for the comment */
  style?: React$1.CSSProperties;
  /** A datetime element containing the time to be displayed */
  datetime?: React$1.ReactNode;
}
declare const Comment: React$1.FC<CommentProps>;

type DatePickerProps = PickerProps<Moment>;
declare const DatePicker: PickerComponentClass<
  PickerProps<Moment> & {
    status?: "" | "warning" | "error" | undefined;
    dropdownClassName?: string | undefined;
    popupClassName?: string | undefined;
  },
  unknown
> & {
  WeekPicker: PickerComponentClass<
    Omit<
      PickerProps<Moment> & {
        status?: "" | "warning" | "error" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
      },
      "picker"
    >,
    unknown
  >;
  MonthPicker: PickerComponentClass<
    Omit<
      PickerProps<Moment> & {
        status?: "" | "warning" | "error" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
      },
      "picker"
    >,
    unknown
  >;
  YearPicker: PickerComponentClass<
    Omit<
      PickerProps<Moment> & {
        status?: "" | "warning" | "error" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
      },
      "picker"
    >,
    unknown
  >;
  RangePicker: PickerComponentClass<
    RangePickerProps<Moment> & {
      dropdownClassName?: string | undefined;
      popupClassName?: string | undefined;
    },
    unknown
  >;
  TimePicker: PickerComponentClass<
    Omit<
      Omit<
        rc_picker_lib_Picker.PickerTimeProps<Moment>,
        "locale" | "generateConfig" | "hideHeader" | "components"
      > & {
        locale?: PickerLocale | undefined;
        size?: SizeType;
        placement?:
          | "bottomLeft"
          | "bottomRight"
          | "topLeft"
          | "topRight"
          | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
      } & {
        status?: "" | "warning" | "error" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
      },
      "picker"
    >,
    unknown
  >;
  QuarterPicker: PickerComponentClass<
    Omit<
      Omit<
        rc_picker_lib_Picker.PickerTimeProps<Moment>,
        "locale" | "generateConfig" | "hideHeader" | "components"
      > & {
        locale?: PickerLocale | undefined;
        size?: SizeType;
        placement?:
          | "bottomLeft"
          | "bottomRight"
          | "topLeft"
          | "topRight"
          | undefined;
        bordered?: boolean | undefined;
        status?: "" | "warning" | "error" | undefined;
      } & {
        status?: "" | "warning" | "error" | undefined;
        dropdownClassName?: string | undefined;
        popupClassName?: string | undefined;
      },
      "picker"
    >,
    unknown
  >;
};

interface DescriptionsItemProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  label?: React$1.ReactNode;
  labelStyle?: React$1.CSSProperties;
  contentStyle?: React$1.CSSProperties;
  children: React$1.ReactNode;
  span?: number;
}

interface DescriptionsProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  bordered?: boolean;
  size?: "middle" | "small" | "default";
  children?: React$1.ReactNode;
  title?: React$1.ReactNode;
  extra?: React$1.ReactNode;
  column?: number | Partial<Record<Breakpoint, number>>;
  layout?: "horizontal" | "vertical";
  colon?: boolean;
  labelStyle?: React$1.CSSProperties;
  contentStyle?: React$1.CSSProperties;
}
declare function Descriptions({
  prefixCls: customizePrefixCls,
  title,
  extra,
  column,
  colon,
  bordered,
  layout,
  children,
  className,
  style,
  size,
  labelStyle,
  contentStyle,
}: DescriptionsProps): React$1.JSX.Element;
declare namespace Descriptions {
  var Item: React$1.FC<DescriptionsItemProps>;
}

interface DividerProps {
  prefixCls?: string;
  type?: "horizontal" | "vertical";
  orientation?: "left" | "right" | "center";
  orientationMargin?: string | number;
  className?: string;
  children?: React$1.ReactNode;
  dashed?: boolean;
  style?: React$1.CSSProperties;
  plain?: boolean;
}
declare const Divider: React$1.FC<DividerProps>;

declare const SizeTypes: ["default", "large"];
type sizeType = (typeof SizeTypes)[number];
interface DrawerProps extends DrawerProps$1 {
  size?: sizeType;
  closable?: boolean;
  closeIcon?: React$1.ReactNode;
  /** Wrapper dom node style of header and body */
  drawerStyle?: React$1.CSSProperties;
  headerStyle?: React$1.CSSProperties;
  bodyStyle?: React$1.CSSProperties;
  footerStyle?: React$1.CSSProperties;
  title?: React$1.ReactNode;
  /**
   * @deprecated `visible` is deprecated which will be removed in next major version. Please use
   *   `open` instead.
   */
  visible?: boolean;
  open?: boolean;
  footer?: React$1.ReactNode;
  extra?: React$1.ReactNode;
  /**
   * @deprecated `afterVisibleChange` is deprecated which will be removed in next major version.
   *   Please use `afterOpenChange` instead.
   */
  afterVisibleChange?: (visible: boolean) => void;
  afterOpenChange?: (open: boolean) => void;
}
declare function Drawer(props: DrawerProps): React$1.JSX.Element;
declare namespace Drawer {
  var displayName: string;
}

/** Form Provider */
interface FormProviderProps
  extends Omit<FormProviderProps$1, "validateMessages"> {
  prefixCls?: string;
}
declare const FormProvider: React$1.FC<FormProviderProps>;

interface ErrorListProps {
  fieldId?: string;
  help?: React$1.ReactNode;
  helpStatus?: ValidateStatus;
  errors?: React$1.ReactNode[];
  warnings?: React$1.ReactNode[];
  className?: string;
  onVisibleChanged?: (visible: boolean) => void;
}
declare function ErrorList({
  help,
  helpStatus,
  errors,
  warnings,
  className: rootClassName,
  fieldId,
  onVisibleChanged,
}: ErrorListProps): React$1.JSX.Element;

interface FormListFieldData {
  name: number;
  key: number;
  /** @deprecated No need anymore Use key instead */
  fieldKey?: number;
}
interface FormListOperation {
  add: (defaultValue?: StoreValue, insertIndex?: number) => void;
  remove: (index: number | number[]) => void;
  move: (from: number, to: number) => void;
}
interface FormListProps {
  prefixCls?: string;
  name: string | number | (string | number)[];
  rules?: ValidatorRule[];
  initialValue?: any[];
  children: (
    fields: FormListFieldData[],
    operation: FormListOperation,
    meta: {
      errors: React$1.ReactNode[];
      warnings: React$1.ReactNode[];
    }
  ) => React$1.ReactNode;
}
declare const FormList: React$1.FC<FormListProps>;

declare function useFormInstance<Value = any>(): FormInstance<Value>;

type InternalFormType = typeof Form$1;
type CompoundedComponent$e = InternalFormType & {
  useForm: typeof useForm;
  useFormInstance: typeof useFormInstance;
  useWatch: typeof useWatch;
  Item: typeof FormItem;
  List: typeof FormList;
  ErrorList: typeof ErrorList;
  Provider: typeof FormProvider;
  /** @deprecated Only for warning usage. Do not use. */
  create: () => void;
};
declare const Form: CompoundedComponent$e;

declare const InternalPreviewGroup: React$1.FC<GroupConsumerProps>;

interface CompositionImage<P> extends React$1.FC<P> {
  PreviewGroup: typeof InternalPreviewGroup;
}
declare const Image: CompositionImage<ImageProps>;

interface GroupProps {
  className?: string;
  size?: "large" | "small" | "default";
  children?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  onMouseEnter?: React$1.MouseEventHandler<HTMLSpanElement>;
  onMouseLeave?: React$1.MouseEventHandler<HTMLSpanElement>;
  onFocus?: React$1.FocusEventHandler<HTMLSpanElement>;
  onBlur?: React$1.FocusEventHandler<HTMLSpanElement>;
  prefixCls?: string;
  compact?: boolean;
}
declare const Group: React$1.FC<GroupProps>;

interface InputFocusOptions extends FocusOptions {
  cursor?: "start" | "end" | "all";
}

interface InputProps
  extends Omit<
    InputProps$1,
    | "wrapperClassName"
    | "groupClassName"
    | "inputClassName"
    | "affixWrapperClassName"
  > {
  size?: SizeType;
  disabled?: boolean;
  status?: InputStatus;
  bordered?: boolean;
  [key: `data-${string}`]: string | undefined;
}

type VisibilityToggle = {
  visible?: boolean;
  onVisibleChange?: (visible: boolean) => void;
};
interface PasswordProps extends InputProps {
  readonly inputPrefixCls?: string;
  readonly action?: string;
  visibilityToggle?: boolean | VisibilityToggle;
  iconRender?: (visible: boolean) => React$1.ReactNode;
}
declare const Password: React$1.ForwardRefExoticComponent<
  PasswordProps & React$1.RefAttributes<InputRef>
>;

interface SearchProps extends InputProps {
  inputPrefixCls?: string;
  onSearch?: (
    value: string,
    event?:
      | React$1.ChangeEvent<HTMLInputElement>
      | React$1.MouseEvent<HTMLElement>
      | React$1.KeyboardEvent<HTMLInputElement>
  ) => void;
  enterButton?: React$1.ReactNode;
  loading?: boolean;
}
declare const Search: React$1.ForwardRefExoticComponent<
  SearchProps & React$1.RefAttributes<InputRef>
>;

interface ShowCountProps {
  formatter: (args: {
    value: string;
    count: number;
    maxLength?: number;
  }) => string;
}
interface TextAreaProps extends TextAreaProps$1 {
  allowClear?: boolean;
  bordered?: boolean;
  showCount?: boolean | ShowCountProps;
  size?: SizeType;
  disabled?: boolean;
  status?: InputStatus;
}
interface TextAreaRef {
  focus: (options?: InputFocusOptions) => void;
  blur: () => void;
  resizableTextArea?: ResizableTextAreaRef;
}
declare const TextArea: React$1.ForwardRefExoticComponent<
  TextAreaProps & React$1.RefAttributes<TextAreaRef>
>;

type CompoundedComponent$d = React$1.ForwardRefExoticComponent<
  InputProps & React$1.RefAttributes<InputRef>
> & {
  Group: typeof Group;
  Search: typeof Search;
  TextArea: typeof TextArea;
  Password: typeof Password;
};
declare const Input: CompoundedComponent$d;

interface InputNumberProps<T extends ValueType = ValueType>
  extends Omit<InputNumberProps$1<T>, "prefix" | "size" | "controls"> {
  prefixCls?: string;
  addonBefore?: React$1.ReactNode;
  addonAfter?: React$1.ReactNode;
  prefix?: React$1.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  bordered?: boolean;
  status?: InputStatus;
  controls?:
    | boolean
    | {
        upIcon?: React$1.ReactNode;
        downIcon?: React$1.ReactNode;
      };
}
declare const _default$7: (<T extends ValueType = ValueType>(
  props: InputNumberProps<T> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<HTMLInputElement> | undefined;
  }
) => React$1.ReactElement) & {
  displayName?: string | undefined;
};

interface BasicProps extends React$1.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  hasSider?: boolean;
}
declare const Layout$1: React$1.ForwardRefExoticComponent<
  BasicProps & React$1.RefAttributes<HTMLElement>
>;
declare const Header: React$1.ForwardRefExoticComponent<
  BasicProps & React$1.RefAttributes<HTMLElement>
>;
declare const Footer: React$1.ForwardRefExoticComponent<
  BasicProps & React$1.RefAttributes<HTMLElement>
>;
declare const Content: React$1.ForwardRefExoticComponent<
  BasicProps & React$1.RefAttributes<HTMLElement>
>;

type InternalLayoutType = typeof Layout$1;
type CompoundedComponent$c = InternalLayoutType & {
  Header: typeof Header;
  Footer: typeof Footer;
  Content: typeof Content;
  Sider: typeof Sider;
  /** @private Internal Context. Do not use in your production. */
  _InternalSiderContext: typeof SiderContext;
};
declare const Layout: CompoundedComponent$c;

interface ListItemProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  extra?: ReactNode;
  actions?: ReactNode[];
  colStyle?: CSSProperties;
}
interface ListItemMetaProps {
  avatar?: ReactNode;
  className?: string;
  children?: ReactNode;
  description?: ReactNode;
  prefixCls?: string;
  style?: CSSProperties;
  title?: ReactNode;
}
declare const Meta: FC<ListItemMetaProps>;
interface ListItemTypeProps
  extends ForwardRefExoticComponent<
    ListItemProps & React__default.RefAttributes<HTMLElement>
  > {
  Meta: typeof Meta;
}

declare const SpinSizes: ["small", "default", "large"];
type SpinSize = (typeof SpinSizes)[number];
type SpinIndicator = React$1.ReactElement<HTMLElement>;
interface SpinProps {
  prefixCls?: string;
  className?: string;
  spinning?: boolean;
  style?: React$1.CSSProperties;
  size?: SpinSize;
  tip?: React$1.ReactNode;
  delay?: number;
  wrapperClassName?: string;
  indicator?: SpinIndicator;
  children?: React$1.ReactNode;
}
type SpinFCType = React$1.FC<SpinProps> & {
  setDefaultIndicator: (indicator: React$1.ReactNode) => void;
};
declare const SpinFC: SpinFCType;

type ColumnCount = number;
interface ListGridType {
  gutter?: number;
  column?: ColumnCount;
  xs?: ColumnCount;
  sm?: ColumnCount;
  md?: ColumnCount;
  lg?: ColumnCount;
  xl?: ColumnCount;
  xxl?: ColumnCount;
}
type ListSize = "small" | "default" | "large";
type ListItemLayout = "horizontal" | "vertical";
interface ListProps<T> {
  bordered?: boolean;
  className?: string;
  style?: React$1.CSSProperties;
  children?: React$1.ReactNode;
  dataSource?: T[];
  extra?: React$1.ReactNode;
  grid?: ListGridType;
  id?: string;
  itemLayout?: ListItemLayout;
  loading?: boolean | SpinProps;
  loadMore?: React$1.ReactNode;
  pagination?: PaginationConfig | false;
  prefixCls?: string;
  rowKey?: ((item: T) => React$1.Key) | keyof T;
  renderItem?: (item: T, index: number) => React$1.ReactNode;
  size?: ListSize;
  split?: boolean;
  header?: React$1.ReactNode;
  footer?: React$1.ReactNode;
  locale?: ListLocale;
}
interface ListLocale {
  emptyText: React$1.ReactNode;
}
declare function List<T>({
  pagination,
  prefixCls: customizePrefixCls,
  bordered,
  split,
  className,
  children,
  itemLayout,
  loadMore,
  grid,
  dataSource,
  size,
  header,
  footer,
  loading,
  rowKey,
  renderItem,
  locale,
  ...rest
}: ListProps<T>): React$1.JSX.Element;
declare namespace List {
  var Item: ListItemTypeProps;
}

declare const Option: React$1.FC<rc_mentions_lib_Option.OptionProps>;
interface MentionProps extends MentionsProps {
  loading?: boolean;
  status?: InputStatus;
  options?: DataDrivenOptionProps[];
}
interface MentionsRef extends MentionsRef$1 {}
interface MentionsConfig {
  prefix?: string | string[];
  split?: string;
}
interface MentionsEntity {
  prefix: string;
  value: string;
}
type CompoundedComponent$b = React$1.ForwardRefExoticComponent<
  MentionProps & React$1.RefAttributes<MentionsRef>
> & {
  Option: typeof Option;
  getMentions: (value: string, config?: MentionsConfig) => MentionsEntity[];
};
declare const Mentions: CompoundedComponent$b;

interface ConfigOptions {
  top?: number;
  duration?: number;
  prefixCls?: string;
  getContainer?: () => HTMLElement;
  transitionName?: string;
  maxCount?: number;
  rtl?: boolean;
}
interface MessageType extends PromiseLike<any> {
  (): void;
}
declare const typeToIcon: {
  info: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  success: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  error: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  warning: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  loading: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
};
type NoticeType = keyof typeof typeToIcon;
interface ArgsProps$1 {
  content: any;
  duration?: number;
  type?: NoticeType;
  prefixCls?: string;
  rootPrefixCls?: string;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  onClose?: () => void;
  icon?: React$1.ReactNode;
  key?: string | number;
  style?: React$1.CSSProperties;
  className?: string;
  onClick?: (e: React$1.MouseEvent<HTMLDivElement>) => void;
}
type ConfigContent = React$1.ReactNode;
type ConfigDuration = number | (() => void);
type JointContent = ConfigContent | ArgsProps$1;
type ConfigOnClose = () => void;
interface MessageInstance {
  info(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  success(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  error(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  warning(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  loading(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  open(args: ArgsProps$1): MessageType;
}
interface MessageApi extends MessageInstance {
  warn(
    content: JointContent,
    duration?: ConfigDuration,
    onClose?: ConfigOnClose
  ): MessageType;
  config(options: ConfigOptions): void;
  destroy(messageKey?: React$1.Key): void;
  useMessage(): [MessageInstance, React$1.ReactElement];
}
declare const _default$6: MessageApi;

type MousePosition = {
  x: number;
  y: number;
} | null;
interface ModalProps {
  /** 对话框是否可见 */
  /**
   * @deprecated `visible` is deprecated which will be removed in next major version. Please use
   *   `open` instead.
   */
  visible?: boolean;
  open?: boolean;
  /** 确定按钮 loading */
  confirmLoading?: boolean;
  /** 标题 */
  title?: React$1.ReactNode;
  /** 是否显示右上角的关闭按钮 */
  closable?: boolean;
  /** 点击确定回调 */
  onOk?: (e: React$1.MouseEvent<HTMLElement>) => void;
  /** 点击模态框右上角叉、取消按钮、Props.maskClosable 值为 true 时的遮罩层或键盘按下 Esc 时的回调 */
  onCancel?: (e: React$1.MouseEvent<HTMLElement>) => void;
  afterClose?: () => void;
  /** 垂直居中 */
  centered?: boolean;
  /** 宽度 */
  width?: string | number;
  /** 底部内容 */
  footer?: React$1.ReactNode;
  /** 确认按钮文字 */
  okText?: React$1.ReactNode;
  /** 确认按钮类型 */
  okType?: LegacyButtonType;
  /** 取消按钮文字 */
  cancelText?: React$1.ReactNode;
  /** 点击蒙层是否允许关闭 */
  maskClosable?: boolean;
  /** 强制渲染 Modal */
  forceRender?: boolean;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  destroyOnClose?: boolean;
  style?: React$1.CSSProperties;
  wrapClassName?: string;
  maskTransitionName?: string;
  transitionName?: string;
  className?: string;
  getContainer?: string | HTMLElement | getContainerFunc | false;
  zIndex?: number;
  bodyStyle?: React$1.CSSProperties;
  maskStyle?: React$1.CSSProperties;
  mask?: boolean;
  keyboard?: boolean;
  wrapProps?: any;
  prefixCls?: string;
  closeIcon?: React$1.ReactNode;
  modalRender?: (node: React$1.ReactNode) => React$1.ReactNode;
  focusTriggerAfterClose?: boolean;
  children?: React$1.ReactNode;
  mousePosition?: MousePosition;
}
type getContainerFunc = () => HTMLElement;
interface ModalFuncProps {
  prefixCls?: string;
  className?: string;
  /**
   * @deprecated `visible` is deprecated which will be removed in next major version. Please use
   *   `open` instead.
   */
  visible?: boolean;
  open?: boolean;
  title?: React$1.ReactNode;
  closable?: boolean;
  content?: React$1.ReactNode;
  onOk?: (...args: any[]) => any;
  onCancel?: (...args: any[]) => any;
  afterClose?: () => void;
  okButtonProps?: ButtonProps;
  cancelButtonProps?: ButtonProps;
  centered?: boolean;
  width?: string | number;
  okText?: React$1.ReactNode;
  okType?: LegacyButtonType;
  cancelText?: React$1.ReactNode;
  icon?: React$1.ReactNode;
  mask?: boolean;
  maskClosable?: boolean;
  zIndex?: number;
  okCancel?: boolean;
  style?: React$1.CSSProperties;
  wrapClassName?: string;
  maskStyle?: React$1.CSSProperties;
  type?: "info" | "success" | "error" | "warn" | "warning" | "confirm";
  keyboard?: boolean;
  getContainer?: string | HTMLElement | getContainerFunc | false;
  autoFocusButton?: null | "ok" | "cancel";
  transitionName?: string;
  maskTransitionName?: string;
  direction?: DirectionType;
  bodyStyle?: React$1.CSSProperties;
  closeIcon?: React$1.ReactNode;
  modalRender?: (node: React$1.ReactNode) => React$1.ReactNode;
  focusTriggerAfterClose?: boolean;
}
declare const Modal$1: React$1.FC<ModalProps>;

type ConfigUpdate =
  | ModalFuncProps
  | ((prevConfig: ModalFuncProps) => ModalFuncProps);
type ModalFunc = (props: ModalFuncProps) => {
  destroy: () => void;
  update: (configUpdate: ConfigUpdate) => void;
};
type ModalStaticFunctions = Record<
  NonNullable<ModalFuncProps["type"]>,
  ModalFunc
>;
declare function modalGlobalConfig({
  rootPrefixCls,
}: {
  rootPrefixCls: string;
}): void;

declare function useModal(): [
  Omit<ModalStaticFunctions, "warn">,
  React$1.ReactElement
];

type ModalType = typeof Modal$1 &
  ModalStaticFunctions & {
    useModal: typeof useModal;
    destroyAll: () => void;
    config: typeof modalGlobalConfig;
  };
declare const Modal: ModalType;

interface DivProps extends React$1.HTMLProps<HTMLDivElement> {
  "data-testid"?: string;
}
type NotificationPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";
type IconType = "success" | "info" | "error" | "warning";
interface ConfigProps {
  top?: number;
  bottom?: number;
  duration?: number;
  prefixCls?: string;
  placement?: NotificationPlacement;
  getContainer?: () => HTMLElement;
  closeIcon?: React$1.ReactNode;
  rtl?: boolean;
  maxCount?: number;
  props?: DivProps;
}
interface ArgsProps {
  message: React$1.ReactNode;
  description?: React$1.ReactNode;
  btn?: React$1.ReactNode;
  key?: string;
  onClose?: () => void;
  duration?: number | null;
  icon?: React$1.ReactNode;
  placement?: NotificationPlacement;
  maxCount?: number;
  style?: React$1.CSSProperties;
  prefixCls?: string;
  className?: string;
  readonly type?: IconType;
  onClick?: () => void;
  top?: number;
  bottom?: number;
  getContainer?: () => HTMLElement;
  closeIcon?: React$1.ReactNode;
  props?: DivProps;
}
interface NotificationInstance {
  success(args: ArgsProps): void;
  error(args: ArgsProps): void;
  info(args: ArgsProps): void;
  warning(args: ArgsProps): void;
  open(args: ArgsProps): void;
}
interface NotificationApi extends NotificationInstance {
  warn(args: ArgsProps): void;
  close(key: string): void;
  config(options: ConfigProps): void;
  destroy(): void;
  useNotification: () => [NotificationInstance, React$1.ReactElement];
}
declare const _default$5: NotificationApi;

interface PageHeaderProps {
  backIcon?: React$1.ReactNode;
  prefixCls?: string;
  title?: React$1.ReactNode;
  subTitle?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  breadcrumb?: BreadcrumbProps | React$1.ReactElement<typeof Breadcrumb>;
  breadcrumbRender?: (
    props: PageHeaderProps,
    defaultDom: React$1.ReactNode
  ) => React$1.ReactNode;
  tags?: React$1.ReactElement<TagType> | React$1.ReactElement<TagType>[];
  footer?: React$1.ReactNode;
  extra?: React$1.ReactNode;
  avatar?: AvatarProps$1;
  onBack?: (e?: React$1.MouseEvent<HTMLDivElement>) => void;
  className?: string;
  ghost?: boolean;
  children?: React$1.ReactNode;
}
declare const PageHeader: React$1.FC<PageHeaderProps>;

interface PopoverProps extends AbstractTooltipProps {
  title?: React$1.ReactNode | RenderFunction;
  content?: React$1.ReactNode | RenderFunction;
}
declare const Popover: React$1.ForwardRefExoticComponent<
  PopoverProps & React$1.RefAttributes<unknown>
>;

type DisabledType = true | false | undefined;

type RadioGroupButtonStyle = "outline" | "solid";
type RadioGroupOptionType = "default" | "button";
interface RadioGroupProps extends AbstractCheckboxGroupProps {
  defaultValue?: any;
  value?: any;
  onChange?: (e: RadioChangeEvent) => void;
  size?: SizeType;
  disabled?: DisabledType;
  onMouseEnter?: React$1.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React$1.MouseEventHandler<HTMLDivElement>;
  name?: string;
  children?: React$1.ReactNode;
  id?: string;
  optionType?: RadioGroupOptionType;
  buttonStyle?: RadioGroupButtonStyle;
  onFocus?: React$1.FocusEventHandler<HTMLDivElement>;
  onBlur?: React$1.FocusEventHandler<HTMLDivElement>;
}
type RadioProps = AbstractCheckboxProps<RadioChangeEvent>;
interface RadioChangeEventTarget extends RadioProps {
  checked: boolean;
}
interface RadioChangeEvent {
  target: RadioChangeEventTarget;
  stopPropagation: () => void;
  preventDefault: () => void;
  nativeEvent: MouseEvent;
}

declare const _default$4: React$1.MemoExoticComponent<
  React$1.ForwardRefExoticComponent<
    RadioGroupProps & React$1.RefAttributes<HTMLDivElement>
  >
>;

type RadioButtonProps = AbstractCheckboxProps<RadioChangeEvent>;
declare const _default$3: React$1.ForwardRefExoticComponent<
  RadioButtonProps & React$1.RefAttributes<any>
>;

type CompoundedComponent$a = React$1.ForwardRefExoticComponent<
  RadioProps & React$1.RefAttributes<HTMLElement>
> & {
  Group: typeof _default$4;
  Button: typeof _default$3;
};
declare const Radio: CompoundedComponent$a;

interface RateProps extends RateProps$1 {
  tooltips?: Array<string>;
}
declare const Rate: React$1.ForwardRefExoticComponent<
  RateProps & React$1.RefAttributes<unknown>
>;

declare const IconMap: {
  success: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  error: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  info: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
  warning: React$1.ForwardRefExoticComponent<
    Omit<_ant_design_icons_lib_components_AntdIcon.AntdIconProps, "ref"> &
      React$1.RefAttributes<HTMLSpanElement>
  >;
};
type ExceptionStatusType = 403 | 404 | 500 | "403" | "404" | "500";
type ResultStatusType = ExceptionStatusType | keyof typeof IconMap;
interface ResultProps {
  icon?: React$1.ReactNode;
  status?: ResultStatusType;
  title?: React$1.ReactNode;
  subTitle?: React$1.ReactNode;
  extra?: React$1.ReactNode;
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  children?: React$1.ReactNode;
}
interface ResultType extends React$1.FC<ResultProps> {
  PRESENTED_IMAGE_404: React$1.FC;
  PRESENTED_IMAGE_403: React$1.FC;
  PRESENTED_IMAGE_500: React$1.FC;
}
declare const Result: ResultType;

interface SegmentedLabeledOptionWithoutIcon extends SegmentedLabeledOption$1 {
  label: SegmentedLabeledOption$1["label"];
}
interface SegmentedLabeledOptionWithIcon
  extends Omit<SegmentedLabeledOption$1, "label"> {
  label?: SegmentedLabeledOption$1["label"];
  /** Set icon for Segmented item */
  icon: React$1.ReactNode;
}
type SegmentedLabeledOption =
  | SegmentedLabeledOptionWithIcon
  | SegmentedLabeledOptionWithoutIcon;
interface SegmentedProps extends Omit<SegmentedProps$1, "size" | "options"> {
  options: (SegmentedRawOption | SegmentedLabeledOption)[];
  /** Option to fit width to its parent's width */
  block?: boolean;
  /** Option to control the display size */
  size?: SizeType;
}
declare const Segmented: React$1.ForwardRefExoticComponent<
  Omit<SegmentedProps, "ref"> & React$1.RefAttributes<HTMLDivElement>
>;

interface SkeletonElementProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  size?: "large" | "small" | "default" | number;
  shape?: "circle" | "square" | "round" | "default";
  active?: boolean;
}

interface AvatarProps extends Omit<SkeletonElementProps, "shape"> {
  shape?: "circle" | "square";
}
declare const SkeletonAvatar: React$1.FC<AvatarProps>;

interface SkeletonButtonProps extends Omit<SkeletonElementProps, "size"> {
  size?: "large" | "small" | "default";
  block?: boolean;
}
declare const SkeletonButton: React$1.FC<SkeletonButtonProps>;

interface SkeletonNodeProps
  extends Omit<SkeletonElementProps, "size" | "shape"> {
  fullSize?: boolean;
  children?: React$1.ReactNode;
}
declare const SkeletonNode: React$1.FC<SkeletonNodeProps>;

interface SkeletonImageProps
  extends Omit<SkeletonElementProps, "size" | "shape"> {}
declare const SkeletonImage: React$1.FC<SkeletonImageProps>;

interface SkeletonInputProps
  extends Omit<SkeletonElementProps, "size" | "shape"> {
  size?: "large" | "small" | "default";
  block?: boolean;
}
declare const SkeletonInput: React$1.FC<SkeletonInputProps>;

type widthUnit = number | string;
interface SkeletonParagraphProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  width?: widthUnit | Array<widthUnit>;
  rows?: number;
}

interface SkeletonTitleProps {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  width?: number | string;
}

type SkeletonAvatarProps = Omit<AvatarProps, "active">;
interface SkeletonProps {
  active?: boolean;
  loading?: boolean;
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  children?: React$1.ReactNode;
  avatar?: SkeletonAvatarProps | boolean;
  title?: SkeletonTitleProps | boolean;
  paragraph?: SkeletonParagraphProps | boolean;
  round?: boolean;
}
type CompoundedComponent$9 = {
  Button: typeof SkeletonButton;
  Avatar: typeof SkeletonAvatar;
  Input: typeof SkeletonInput;
  Image: typeof SkeletonImage;
  Node: typeof SkeletonNode;
};
declare const Skeleton: React$1.FC<SkeletonProps> & CompoundedComponent$9;

type SliderMarks = SliderProps["marks"];
interface SliderTooltipProps {
  prefixCls?: string;
  open?: boolean;
  placement?: TooltipPlacement;
  getPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  formatter?: null | ((value?: number) => React$1.ReactNode);
}
interface SliderBaseProps {
  prefixCls?: string;
  /**
   * @deprecated `tooltipPrefixCls` is deprecated which will be removed in next major version.
   *   Please use `tooltip.prefixCls` instead.
   */
  tooltipPrefixCls?: string;
  reverse?: boolean;
  min?: number;
  max?: number;
  step?: null | number;
  marks?: SliderMarks;
  dots?: boolean;
  included?: boolean;
  disabled?: boolean;
  vertical?: boolean;
  /**
   * @deprecated `tipFormatter` is deprecated which will be removed in next major version. Please
   *   use `tooltip.formatter` instead.
   */
  tipFormatter?: null | ((value?: number) => React$1.ReactNode);
  className?: string;
  id?: string;
  style?: React$1.CSSProperties;
  /**
   * @deprecated `tooltipVisible` is deprecated which will be removed in next major version. Please
   *   use `tooltip.open` instead.
   */
  tooltipVisible?: boolean;
  /**
   * @deprecated `tooltipPlacement` is deprecated which will be removed in next major version.
   *   Please use `tooltip.placement` instead.
   */
  tooltipPlacement?: TooltipPlacement;
  tooltip?: SliderTooltipProps;
  /**
   * @deprecated `getTooltipPopupContainer` is deprecated which will be removed in next major
   *   version. Please use `tooltip.getPopupContainer` instead.
   */
  getTooltipPopupContainer?: (triggerNode: HTMLElement) => HTMLElement;
  autoFocus?: boolean;
}
interface SliderSingleProps extends SliderBaseProps {
  range?: false;
  value?: number;
  defaultValue?: number;
  onChange?: (value: number) => void;
  onAfterChange?: (value: number) => void;
  handleStyle?: React$1.CSSProperties;
  trackStyle?: React$1.CSSProperties;
  railStyle?: React$1.CSSProperties;
}
interface SliderRangeProps extends SliderBaseProps {
  range: true | SliderRange;
  value?: [number, number];
  defaultValue?: [number, number];
  onChange?: (value: [number, number]) => void;
  onAfterChange?: (value: [number, number]) => void;
  handleStyle?: React$1.CSSProperties[];
  trackStyle?: React$1.CSSProperties[];
  railStyle?: React$1.CSSProperties;
}
interface SliderRange {
  draggableTrack?: boolean;
}
declare const Slider: React$1.ForwardRefExoticComponent<
  (SliderSingleProps | SliderRangeProps) & React$1.RefAttributes<unknown>
>;

interface SpaceCompactProps extends React$1.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  size?: SizeType;
  direction?: "horizontal" | "vertical";
  block?: boolean;
}
declare const Compact: React$1.FC<SpaceCompactProps>;

type SpaceSize = SizeType | number;
interface SpaceProps extends React$1.HTMLAttributes<HTMLDivElement> {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  size?: SpaceSize | [SpaceSize, SpaceSize];
  direction?: "horizontal" | "vertical";
  align?: "start" | "end" | "center" | "baseline";
  split?: React$1.ReactNode;
  wrap?: boolean;
}
type CompoundedComponent$8 = React$1.FC<SpaceProps> & {
  Compact: typeof Compact;
};
declare const CompoundedSpace: CompoundedComponent$8;

type valueType = number | string;
type countdownValueType = valueType | string;
type Formatter =
  | false
  | "number"
  | "countdown"
  | ((value: valueType, config?: FormatConfig) => React$1.ReactNode);
interface FormatConfig {
  formatter?: Formatter;
  decimalSeparator?: string;
  groupSeparator?: string;
  precision?: number;
  prefixCls?: string;
}

interface CountdownProps extends StatisticProps {
  value?: countdownValueType;
  format?: string;
  onFinish?: () => void;
  onChange?: (value?: countdownValueType) => void;
}
declare const _default$2: React$1.NamedExoticComponent<CountdownProps>;

type CompoundedComponent$7 = {
  Countdown: typeof _default$2;
};
interface StatisticProps extends FormatConfig {
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  value?: valueType;
  valueStyle?: React$1.CSSProperties;
  valueRender?: (node: React$1.ReactNode) => React$1.ReactNode;
  title?: React$1.ReactNode;
  prefix?: React$1.ReactNode;
  suffix?: React$1.ReactNode;
  loading?: boolean;
  onMouseEnter?: React$1.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React$1.MouseEventHandler<HTMLDivElement>;
}
declare const WrapperStatistic: React$1.FC<StatisticProps> &
  CompoundedComponent$7;

interface StepProps {
  className?: string;
  description?: React$1.ReactNode;
  icon?: React$1.ReactNode;
  onClick?: React$1.MouseEventHandler<HTMLElement>;
  status?: "wait" | "process" | "finish" | "error";
  disabled?: boolean;
  title?: React$1.ReactNode;
  subTitle?: React$1.ReactNode;
  style?: React$1.CSSProperties;
}
interface StepsProps {
  type?: "default" | "navigation";
  className?: string;
  current?: number;
  direction?: "horizontal" | "vertical";
  iconPrefix?: string;
  initial?: number;
  labelPlacement?: "horizontal" | "vertical";
  prefixCls?: string;
  progressDot?: boolean | ProgressDotRender;
  responsive?: boolean;
  size?: "default" | "small";
  status?: "wait" | "process" | "finish" | "error";
  style?: React$1.CSSProperties;
  percent?: number;
  onChange?: (current: number) => void;
  children?: React$1.ReactNode;
  items?: StepProps[];
}
type CompoundedComponent$6 = React$1.FC<StepsProps> & {
  Step: typeof RcSteps.Step;
};
declare const Steps: CompoundedComponent$6;

type SwitchSize = "small" | "default";
type SwitchChangeEventHandler = (
  checked: boolean,
  event: React$1.MouseEvent<HTMLButtonElement>
) => void;
type SwitchClickEventHandler = SwitchChangeEventHandler;
interface SwitchProps {
  prefixCls?: string;
  size?: SwitchSize;
  className?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: SwitchChangeEventHandler;
  onClick?: SwitchClickEventHandler;
  checkedChildren?: React$1.ReactNode;
  unCheckedChildren?: React$1.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  autoFocus?: boolean;
  style?: React$1.CSSProperties;
  title?: string;
  tabIndex?: number;
  id?: string;
}
type CompoundedComponent$5 = React$1.ForwardRefExoticComponent<
  SwitchProps & React$1.RefAttributes<HTMLElement>
> & {};
declare const Switch: CompoundedComponent$5;

interface ColumnProps<RecordType> extends ColumnType<RecordType> {
  children?: null;
}
/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
declare function Column<RecordType>(_: ColumnProps<RecordType>): null;

interface ColumnGroupProps<RecordType>
  extends Omit<ColumnType<RecordType>, "children"> {
  children:
    | React$1.ReactElement<ColumnProps<RecordType>>
    | React$1.ReactElement<ColumnProps<RecordType>>[];
}
/** This is a syntactic sugar for `columns` prop. So HOC will not work on this. */
declare function ColumnGroup<RecordType>(_: ColumnGroupProps<RecordType>): null;

interface TableProps<RecordType>
  extends Omit<
    TableProps$1<RecordType>,
    | "transformColumns"
    | "internalHooks"
    | "internalRefs"
    | "data"
    | "columns"
    | "scroll"
    | "emptyText"
  > {
  dropdownPrefixCls?: string;
  dataSource?: TableProps$1<RecordType>["data"];
  columns?: ColumnsType<RecordType>;
  pagination?: false | TablePaginationConfig;
  loading?: boolean | SpinProps;
  size?: SizeType;
  bordered?: boolean;
  locale?: TableLocale;
  onChange?: (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: TableCurrentDataSource<RecordType>
  ) => void;
  rowSelection?: TableRowSelection<RecordType>;
  getPopupContainer?: GetPopupContainer;
  scroll?: TableProps$1<RecordType>["scroll"] & {
    scrollToFirstRowOnChange?: boolean;
  };
  sortDirections?: SortOrder[];
  showSorterTooltip?: boolean | TooltipProps;
}
declare const ForwardTable: <RecordType extends object = any>(
  props: TableProps<RecordType> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
  }
) => React$1.ReactElement;
type InternalTableType = typeof ForwardTable;
type CompoundedComponent$4 = InternalTableType & {
  SELECTION_COLUMN: typeof SELECTION_COLUMN;
  EXPAND_COLUMN: typeof RcTable.EXPAND_COLUMN;
  SELECTION_ALL: "SELECT_ALL";
  SELECTION_INVERT: "SELECT_INVERT";
  SELECTION_NONE: "SELECT_NONE";
  Column: typeof Column;
  ColumnGroup: typeof ColumnGroup;
  Summary: typeof Summary;
};
declare const Table: CompoundedComponent$4;

interface TimelineItemProps {
  prefixCls?: string;
  className?: string;
  color?: string;
  dot?: React$1.ReactNode;
  pending?: boolean;
  position?: string;
  style?: React$1.CSSProperties;
  label?: React$1.ReactNode;
  children?: React$1.ReactNode;
}

interface TimelineProps {
  prefixCls?: string;
  className?: string;
  /** 指定最后一个幽灵节点是否存在或内容 */
  pending?: React$1.ReactNode;
  pendingDot?: React$1.ReactNode;
  style?: React$1.CSSProperties;
  reverse?: boolean;
  mode?: "left" | "alternate" | "right";
  children?: React$1.ReactNode;
}
type CompoundedComponent$3 = React$1.FC<TimelineProps> & {
  Item: React$1.FC<TimelineItemProps>;
};
declare const Timeline: CompoundedComponent$3;

type SwitcherIcon =
  | React$1.ReactNode
  | ((props: AntTreeNodeProps) => React$1.ReactNode);
type TreeLeafIcon =
  | React$1.ReactNode
  | ((props: AntTreeNodeProps) => React$1.ReactNode);
interface AntdTreeNodeAttribute {
  eventKey: string;
  prefixCls: string;
  className: string;
  expanded: boolean;
  selected: boolean;
  checked: boolean;
  halfChecked: boolean;
  children: React$1.ReactNode;
  title: React$1.ReactNode;
  pos: string;
  dragOver: boolean;
  dragOverGapTop: boolean;
  dragOverGapBottom: boolean;
  isLeaf: boolean;
  selectable: boolean;
  disabled: boolean;
  disableCheckbox: boolean;
}
interface AntTreeNodeProps {
  className?: string;
  checkable?: boolean;
  disabled?: boolean;
  disableCheckbox?: boolean;
  title?: string | React$1.ReactNode;
  key?: Key$1;
  eventKey?: string;
  isLeaf?: boolean;
  checked?: boolean;
  expanded?: boolean;
  loading?: boolean;
  selected?: boolean;
  selectable?: boolean;
  icon?:
    | ((treeNode: AntdTreeNodeAttribute) => React$1.ReactNode)
    | React$1.ReactNode;
  children?: React$1.ReactNode;
  [customProp: string]: any;
}
interface AntTreeNode extends React$1.Component<AntTreeNodeProps, {}> {}
type DraggableFn = (node: DataNode) => boolean;
interface DraggableConfig {
  icon?: React$1.ReactNode | false;
  nodeDraggable?: DraggableFn;
}
interface TreeProps<T extends BasicDataNode = DataNode>
  extends Omit<
    TreeProps$1<T>,
    | "prefixCls"
    | "showLine"
    | "direction"
    | "draggable"
    | "icon"
    | "switcherIcon"
  > {
  showLine?:
    | boolean
    | {
        showLeafIcon: boolean | TreeLeafIcon;
      };
  className?: string;
  /** 是否支持多选 */
  multiple?: boolean;
  /** 是否自动展开父节点 */
  autoExpandParent?: boolean;
  /** Checkable状态下节点选择完全受控（父子节点选中状态不再关联） */
  checkStrictly?: boolean;
  /** 是否支持选中 */
  checkable?: boolean;
  /** 是否禁用树 */
  disabled?: boolean;
  /** 默认展开所有树节点 */
  defaultExpandAll?: boolean;
  /** 默认展开对应树节点 */
  defaultExpandParent?: boolean;
  /** 默认展开指定的树节点 */
  defaultExpandedKeys?: Key$1[];
  /** （受控）展开指定的树节点 */
  expandedKeys?: Key$1[];
  /** （受控）选中复选框的树节点 */
  checkedKeys?:
    | Key$1[]
    | {
        checked: Key$1[];
        halfChecked: Key$1[];
      };
  /** 默认选中复选框的树节点 */
  defaultCheckedKeys?: Key$1[];
  /** （受控）设置选中的树节点 */
  selectedKeys?: Key$1[];
  /** 默认选中的树节点 */
  defaultSelectedKeys?: Key$1[];
  selectable?: boolean;
  /** 点击树节点触发 */
  filterAntTreeNode?: (node: AntTreeNode) => boolean;
  loadedKeys?: Key$1[];
  /** 设置节点可拖拽（IE>8） */
  draggable?: DraggableFn | boolean | DraggableConfig;
  style?: React$1.CSSProperties;
  showIcon?: boolean;
  icon?:
    | ((nodeProps: AntdTreeNodeAttribute) => React$1.ReactNode)
    | React$1.ReactNode
    | TreeProps$1<T>["icon"];
  switcherIcon?: SwitcherIcon | TreeProps$1<T>["switcherIcon"];
  prefixCls?: string;
  children?: React$1.ReactNode;
  blockNode?: boolean;
}

type ExpandAction = false | "click" | "doubleClick";
interface DirectoryTreeProps<T extends BasicDataNode = DataNode>
  extends TreeProps<T> {
  expandAction?: ExpandAction;
}
type DirectoryTreeCompoundedComponent = (<
  T extends BasicDataNode | DataNode = DataNode
>(
  props: React$1.PropsWithChildren<DirectoryTreeProps<T>> & {
    ref?: React$1.Ref<RcTree>;
  }
) => React$1.ReactElement) & {
  displayName?: string;
};
declare const ForwardDirectoryTree: DirectoryTreeCompoundedComponent;

type CompoundedComponent$2 = (<T extends BasicDataNode | DataNode = DataNode>(
  props: React.PropsWithChildren<TreeProps<T>> & {
    ref?: React.Ref<RcTree>;
  }
) => React.ReactElement) & {
  TreeNode: typeof TreeNode;
  DirectoryTree: typeof ForwardDirectoryTree;
};
declare const Tree: CompoundedComponent$2;

interface TreeSelectProps<
  ValueType = any,
  OptionType extends
    | BaseOptionType$2
    | DefaultOptionType$2 = DefaultOptionType$2
> extends Omit<
    TreeSelectProps$1<ValueType, OptionType>,
    | "showTreeIcon"
    | "treeMotion"
    | "inputIcon"
    | "mode"
    | "getInputElement"
    | "backfill"
    | "treeLine"
    | "switcherIcon"
  > {
  suffixIcon?: React$1.ReactNode;
  size?: SizeType;
  disabled?: boolean;
  placement?: SelectCommonPlacement;
  /**
   * @deprecated `dropdownClassName` is deprecated which will be removed in next major
   *   version.Please use `popupClassName` instead.
   */
  dropdownClassName?: string;
  popupClassName?: string;
  bordered?: boolean;
  treeLine?: TreeProps["showLine"];
  status?: InputStatus;
  switcherIcon?:
    | SwitcherIcon
    | TreeSelectProps$1<ValueType, OptionType>["switcherIcon"];
}
declare const TreeSelectRef: <
  ValueType = any,
  OptionType extends
    | BaseOptionType$2
    | DefaultOptionType$2 = DefaultOptionType$2
>(
  props: TreeSelectProps<ValueType, OptionType> & {
    children?: React$1.ReactNode;
  } & {
    ref?: React$1.Ref<BaseSelectRef> | undefined;
  }
) => React$1.ReactElement;
type InternalTreeSelectType = typeof TreeSelectRef;
type CompoundedComponent$1 = InternalTreeSelectType & {
  TreeNode: typeof TreeNode$1;
  SHOW_ALL: typeof SHOW_ALL;
  SHOW_PARENT: typeof SHOW_PARENT$1;
  SHOW_CHILD: typeof SHOW_CHILD$1;
};
declare const TreeSelect: CompoundedComponent$1;

interface TypographyProps$1<C extends keyof JSX.IntrinsicElements>
  extends React$1.HTMLAttributes<HTMLElement> {
  id?: string;
  prefixCls?: string;
  className?: string;
  style?: React$1.CSSProperties;
  children?: React$1.ReactNode;
  ["aria-label"]?: string;
  direction?: DirectionType;
}
interface InternalTypographyProps<C extends keyof JSX.IntrinsicElements>
  extends TypographyProps$1<C> {
  /** @deprecated Use `ref` directly if using React 16 */
  setContentRef?: (node: HTMLElement) => void;
}
declare const Typography$1: React$1.ForwardRefExoticComponent<
  InternalTypographyProps<keyof JSX.IntrinsicElements> &
    React$1.RefAttributes<HTMLElement>
>;

type BaseType = "secondary" | "success" | "warning" | "danger";
interface CopyConfig {
  text?: string;
  onCopy?: (event?: React$1.MouseEvent<HTMLDivElement>) => void;
  icon?: React$1.ReactNode;
  tooltips?: boolean | React$1.ReactNode;
  format?: "text/plain" | "text/html";
}
interface EditConfig {
  text?: string;
  editing?: boolean;
  icon?: React$1.ReactNode;
  tooltip?: boolean | React$1.ReactNode;
  onStart?: () => void;
  onChange?: (value: string) => void;
  onCancel?: () => void;
  onEnd?: () => void;
  maxLength?: number;
  autoSize?: boolean | AutoSizeType;
  triggerType?: ("icon" | "text")[];
  enterIcon?: React$1.ReactNode;
}
interface EllipsisConfig {
  rows?: number;
  expandable?: boolean;
  suffix?: string;
  symbol?: React$1.ReactNode;
  onExpand?: React$1.MouseEventHandler<HTMLElement>;
  onEllipsis?: (ellipsis: boolean) => void;
  tooltip?: React$1.ReactNode | TooltipProps;
}
interface BlockProps<
  C extends keyof JSX.IntrinsicElements = keyof JSX.IntrinsicElements
> extends TypographyProps$1<C> {
  title?: string;
  editable?: boolean | EditConfig;
  copyable?: boolean | CopyConfig;
  type?: BaseType;
  disabled?: boolean;
  ellipsis?: boolean | EllipsisConfig;
  code?: boolean;
  mark?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  keyboard?: boolean;
  italic?: boolean;
}

interface LinkProps
  extends BlockProps<"a">,
    Omit<
      React$1.AnchorHTMLAttributes<HTMLAnchorElement>,
      "type" | keyof BlockProps<"a">
    > {
  ellipsis?: boolean;
}
declare const Link: React$1.ForwardRefExoticComponent<
  LinkProps & React$1.RefAttributes<HTMLElement>
>;

interface ParagraphProps
  extends BlockProps<"div">,
    Omit<
      React$1.HTMLAttributes<HTMLDivElement>,
      "type" | keyof BlockProps<"div">
    > {}
declare const Paragraph: React$1.ForwardRefExoticComponent<
  ParagraphProps & React$1.RefAttributes<HTMLElement>
>;

interface TextProps
  extends BlockProps<"span">,
    Omit<
      React$1.HTMLAttributes<HTMLSpanElement>,
      "type" | keyof BlockProps<"span">
    > {
  ellipsis?: boolean | Omit<EllipsisConfig, "expandable" | "rows" | "onExpand">;
}
declare const _default$1: React$1.ForwardRefExoticComponent<
  TextProps & React$1.RefAttributes<HTMLSpanElement>
>;

declare const TITLE_ELE_LIST: [1, 2, 3, 4, 5];
interface TitleProps
  extends Omit<BlockProps<"h1" | "h2" | "h3" | "h4" | "h5">, "strong">,
    Omit<
      React$1.HTMLAttributes<HTMLHeadElement>,
      "type" | keyof BlockProps<"h1" | "h2" | "h3" | "h4" | "h5">
    > {
  level?: (typeof TITLE_ELE_LIST)[number];
}
declare const Title: React$1.ForwardRefExoticComponent<
  TitleProps & React$1.RefAttributes<HTMLElement>
>;

type TypographyProps = typeof Typography$1 & {
  Text: typeof _default$1;
  Link: typeof Link;
  Title: typeof Title;
  Paragraph: typeof Paragraph;
};
declare const Typography: TypographyProps;

declare const Dragger: React$1.ForwardRefExoticComponent<
  UploadProps<any> & {
    height?: number | undefined;
  } & React$1.RefAttributes<unknown>
>;

declare const Upload$1: React$1.ForwardRefExoticComponent<
  UploadProps<any> & React$1.RefAttributes<unknown>
>;

type InternalUploadType = typeof Upload$1;
type CompoundedComponent<T = any> = InternalUploadType & {
  <U extends T>(
    props: React.PropsWithChildren<UploadProps<U>> & React.RefAttributes<any>
  ): React.ReactElement;
  Dragger: typeof Dragger;
  LIST_IGNORE: string;
};
declare const Upload: CompoundedComponent<any>;

declare const _default: "4.24.16";

declare const theme: null;

export {
  AffixFC as Affix,
  Alert,
  Anchor,
  RefAutoComplete as AutoComplete,
  Avatar,
  _default$9 as BackTop,
  Badge,
  Breadcrumb,
  Button,
  Calendar,
  Card,
  Carousel,
  Cascader,
  Checkbox,
  Col,
  Collapse,
  Comment,
  ConfigProvider,
  DatePicker,
  Descriptions,
  Divider,
  Drawer,
  Dropdown,
  Empty,
  Form,
  _default$8 as Grid,
  Image,
  Input,
  _default$7 as InputNumber,
  Layout,
  List,
  Mentions,
  Menu,
  Modal,
  PageHeader,
  Pagination,
  Popconfirm,
  Popover,
  Progress,
  Radio,
  Rate,
  Result,
  Row,
  Segmented,
  Select,
  Skeleton,
  Slider,
  CompoundedSpace as Space,
  SpinFC as Spin,
  WrapperStatistic as Statistic,
  Steps,
  Switch,
  Table,
  Tabs,
  Tag,
  _default$b as TimePicker,
  Timeline,
  Tooltip,
  Transfer,
  Tree,
  TreeSelect,
  Typography,
  Upload,
  _default$6 as message,
  _default$5 as notification,
  theme,
  _default as version,
};
export type {
  AffixProps,
  AlertProps,
  AnchorLinkProps,
  AnchorProps,
  AutoCompleteProps,
  AvatarProps$1 as AvatarProps,
  BackTopProps,
  BadgeProps,
  BreadcrumbItemProps,
  BreadcrumbProps,
  ButtonProps,
  CalendarProps,
  CardProps,
  CarouselProps,
  CascaderProps,
  CheckboxOptionType,
  CheckboxProps,
  ColProps,
  CollapsePanelProps,
  CollapseProps,
  CommentProps,
  DatePickerProps,
  DescriptionsProps,
  DividerProps,
  DrawerProps,
  DropdownProps as DropDownProps,
  DropdownProps,
  EmptyProps,
  FormInstance,
  FormItemProps,
  FormListFieldData,
  FormListOperation,
  FormProps,
  InputNumberProps,
  InputProps,
  BasicProps as LayoutProps,
  ListProps,
  MentionProps,
  MenuItemProps,
  MenuProps,
  MenuTheme,
  ArgsProps$1 as MessageArgsProps,
  ModalFuncProps,
  ModalProps,
  PageHeaderProps,
  PaginationProps,
  PopconfirmProps,
  PopoverProps,
  ProgressProps,
  RadioChangeEvent,
  RadioGroupProps,
  RadioProps,
  RateProps,
  ResultProps,
  RowProps,
  SegmentedProps,
  SelectProps,
  SiderProps,
  SkeletonProps,
  SliderSingleProps,
  SpaceProps,
  SpinProps,
  StatisticProps,
  StepProps,
  StepsProps,
  SubMenuProps,
  SwitchProps,
  ColumnGroupType as TableColumnGroupType,
  ColumnProps as TableColumnProps,
  ColumnType as TableColumnType,
  ColumnsType as TableColumnsType,
  TablePaginationConfig,
  TableProps,
  TabsProps,
  TagProps,
  TagType,
  TimePickerProps,
  TimeRangePickerProps,
  TimelineItemProps,
  TimelineProps,
  TooltipProps,
  TransferProps,
  AntTreeNodeProps as TreeNodeProps,
  TreeProps,
  TreeSelectProps,
  TypographyProps,
  UploadFile,
  UploadProps,
};
