export enum DataType {
  TEXT = 'TEXT',
  NUM = 'NUM',
  DATE = 'DATE',
  SELECT = 'SELECT', // 单选
  NUM_CODE = 'NUM_CODE',
  /** 关联表单 */
  OBJECT = 'OBJECT',
  /** 关联表单字段 */
  OBJECT_ATTRIBUTE = 'OBJECT_ATTRIBUTE',
  /** 选单来源 */
  SOURCE_OBJECT = 'SOURCE_OBJECT',
  SOURCE_OBJECT_LINE = 'SOURCE_OBJECT_LINE',
  ATTACHMENT = 'ATTACHMENT',
  MULTI_TEXT = 'MULTI_TEXT',
  /** 复选关联表单 */
  MULTI_OBJECT = 'MULTI_OBJECT', // 复选关联表单
  BASE = 'BASE', // 基础数据
  BOOLEAN = 'BOOLEAN', // 开关类型数据
  MULTI_SELECT = 'MULTI_SELECT', // 多选
  RADIO = 'RADIO', // 宽度
  DIVIDER = 'DIVIDER', // 分割线
  PICTURE = 'PICTURE', // 图片
  FUNCTION_FIELD = 'FUNCTION_FIELD', // 函数类型
  AREA = 'AREA', // 国家地区
  LOCATION = 'LOCATION', // 地理位置
  DATE_INTERVAL = 'DATE_INTERVAL', // 日期区间
  TABLE_CHILD = 'TABLE_CHILD', // 新子表
  EXIST_TABLE_CHILD = 'EXIST_TABLE_CHILD', // 已有表单
  TABLE_RELATION = 'TABLE_RELATION', // 关联表单
  PROGRESS_BAR = 'PROGRESS_BAR', // 进度条
  DICT = 'DICT', // 字典
  RICH_TEXT = 'RICH_TEXT',
}

export interface FieldItem {
  /** 格式： templateApiName.fieldApiName */
  fullApiName: string;
  /** 字段apiname */
  fieldApiName: string;
  /** 字段名称 */
  fieldName: string;
  /** 表单apiName */
  templateApiName: string;
  /** 字段类型 */
  dataType: DataType;
  /** 表单名称 */
  templateName: string;
  /** 字段约束 */
  dataTypeConstraint?: DataTypeConstraintValue[];
  /** 关联字段源字段约束 */
  sourceDataTypeConstraint?: DataTypeConstraintValue[];
}
