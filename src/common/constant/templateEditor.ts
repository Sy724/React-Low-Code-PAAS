import {DataType} from "../types";

export const defaultFields: {
  name: string;
  status: string;
  dataType: DataType;
  system: boolean;
  type: string;
  dataTypeConstraintValues: any[];
}[] = [
  {
    "name": "单行文本",
    "status": "ENABLE",
    "dataType": DataType.TEXT,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"单行文本\"}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请输入\"}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "MAX_LENGTH",
        "name": "最大长度",
        "value": "{\"value\":1000}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "UNIQUE",
        "name": "唯一",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "LIMITED_FORMAT",
        "name": "限定格式"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.TEXT,
        "dataTypeConstraint": "CAN_SCAN_INPUT",
        "name": "支持扫码录入",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "多行文本",
    "status": "ENABLE",
    "dataType": DataType.MULTI_TEXT,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"多行文本\"}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请输入\"}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "DEFAULT_HEIGHT",
        "name": "默认高度",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "MAX_LENGTH",
        "name": "最大长度",
        "value": "{\"value\":1000}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "UNIQUE",
        "name": "唯一",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "LIMITED_FORMAT",
        "name": "限定格式"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "CAN_SCAN_INPUT",
        "name": "支持扫码录入",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_TEXT,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "数字",
    "status": "ENABLE",
    "dataType": DataType.NUM,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"数字\"}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请输入\"}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "MAX_LENGTH",
        "name": "最大长度",
        "value": "{\"value\":18}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "UNIQUE",
        "name": "唯一",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "LIMITED_FORMAT",
        "name": "限定格式"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "NUM_DIGIT",
        "name": "小数位数",
        "value": "{\"value\":2}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "NUM_PADDING_ZERO",
        "name": "小数补零",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "NUM_ZERO_DONT_SHOW",
        "name": "为零不显示",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "LIMIT_UP",
        "name": "上限",
        "value": "{\"upEnable\":false}"
      },
      {
        "dataType": DataType.NUM,
        "dataTypeConstraint": "LIMIT_LOW",
        "name": "下限",
        "value": "{\"lowEnable\":false}"
      }
    ]
  },
  {
    "name": "开关",
    "status": "ENABLE",
    "dataType": DataType.BOOLEAN,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"开关\"}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "ALTERNATION",
        "name": "正反选项",
        "value": "{\"trueValue\":\"开启\",\"falseValue\":\"关闭\"}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.BOOLEAN,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "日期",
    "status": "ENABLE",
    "dataType": DataType.DATE,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"日期\"}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请选择\"}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{\"value\":{}}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "TIME",
        "name": "选择时间",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "SET_TIME_RANGE",
        "name": "预设范围",
        "value": "{\"value\":[]}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.DATE,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "日期区间",
    "status": "ENABLE",
    "dataType": DataType.DATE_INTERVAL,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"日期区间\"}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{\"value\":{}}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "TIME",
        "name": "选择时间",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "SET_TIME_RANGE",
        "name": "预设范围",
        "value": "{\"value\":[]}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.DATE_INTERVAL,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "单选",
    "status": "ENABLE",
    "dataType": DataType.SELECT,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"单选\"}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请选择\"}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "SETTING_SELECT",
        "name": "选项配置",
        "value": "{\"selectWay\":\"INPUT\",\"selectType\":[]}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "VIEW_TYPE",
        "name": "展示形态",
        "value": "{\"value\":\"DROP_DOWN\"}"
      },
      {
        "dataType": DataType.SELECT,
        "dataTypeConstraint": "CAN_UPDATE",
        "name": "支持新增",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "复选",
    "status": "ENABLE",
    "dataType": DataType.MULTI_SELECT,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"复选\"}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请选择\"}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "VIEW_TYPE",
        "name": "展示形态",
        "value": "{\"value\":\"DROP_DOWN\"}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "SETTING_SELECT",
        "name": "选项配置",
        "value": "{\"selectWay\":\"INPUT\",\"selectType\":[]}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "CAN_UPDATE",
        "name": "支持新增",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.MULTI_SELECT,
        "dataTypeConstraint": "MAX_SELECT",
        "name": "最大选择数",
        "value": "{\"value\":10}"
      }
    ]
  },
  {
    "name": "关联表单",
    "status": "ENABLE",
    "dataType": DataType.OBJECT,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"关联表单\"}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":1}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "PLACEHOLDER",
        "name": "占位提示",
        "value": "{\"value\":\"请选择\"}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "DEFAULT_VALUE",
        "name": "默认值",
        "value": "{}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":true}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "OBJECT_FIELD",
        "name": "表单字段"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "CAN_SCAN_INPUT",
        "name": "支持扫码录入",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "UNIQUE",
        "name": "唯一",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "SHOW_API_NAMES",
        "name": "下拉显示",
        "value": "{}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "POPUP_SHOW_API_NAMES",
        "name": "弹窗显示",
        "value": "{}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "DATA_CONDITION",
        "name": "数据过滤",
        "value": "{}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "AUTO_FILL",
        "name": "自动填充",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT,
        "dataTypeConstraint": "CAN_UPDATE",
        "name": "支持新增",
        "value": "{\"value\":false}"
      }
    ]
  },
  {
    "name": "关联表单字段",
    "status": "ENABLE",
    "dataType": DataType.OBJECT_ATTRIBUTE,
    "system": false,
    "type": "OBJECT",
    "dataTypeConstraintValues": [
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "FIELD_NAME",
        "name": "字段名称",
        "value": "{\"value\":\"关联表单字段\"}"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "API_NAME",
        "name": "API name"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "STATUS",
        "name": "状态",
        "value": "{\"value\":3}"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "EXPLANATION",
        "name": "说明"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "REQUIRED",
        "name": "必填",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "DATA_SAVE",
        "name": "数据保存",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "OBJECT_FIELD",
        "name": "表单字段"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "SELECT",
        "name": "筛选",
        "value": "{\"value\":false}"
      },
      {
        "dataType": DataType.OBJECT_ATTRIBUTE,
        "dataTypeConstraint": "SORT",
        "name": "排序",
        "value": "{\"value\":false}"
      }
    ]
  },
  // {
  //   "name": "复选关联表单",
  //   "status": "ENABLE",
  //   "dataType": DataType.MULTI_OBJECT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"复选关联表单\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{\"value\":\"请选择\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "OBJECT_FIELD",
  //       "name": "表单字段"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SORT",
  //       "name": "排序",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SHOW_API_NAMES",
  //       "name": "下拉显示",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "POPUP_SHOW_API_NAMES",
  //       "name": "弹窗显示",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_CONDITION",
  //       "name": "数据过滤",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "CAN_UPDATE",
  //       "name": "支持新增",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "选单来源",
  //   "status": "ENABLE",
  //   "dataType": DataType.SOURCE_OBJECT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"选单来源\"}"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":3}"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "OBJECT",
  //       "name": "表单"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{\"value\":\"请输入\"}"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.SOURCE_OBJECT,
  //       "dataTypeConstraint": "UNIQUE",
  //       "name": "唯一",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "人员",
  //   "status": "ENABLE",
  //   "dataType": DataType.MULTI_OBJECT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"人员\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{\"value\":\"请选择\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{\"value\":[{\"type\":\"CURRENT\",\"value\":\"JSON_OBJECT(CONCAT(\\\"[{'id':\\\",CONCAT(\\\"'\\\",LOGINUSERID(),\\\"'\\\"),\\\",\\\",\\\"'name':\\\",CONCAT(\\\"'\\\",LOGINUSERNAME(),\\\"'\\\"),\\\"}]\\\"))\"}],\"type\":\"CUSTOM\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明",
  //       "value": "{\"value\":\"请选择相关成员\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "OBJECT_FIELD",
  //       "name": "表单字段",
  //       "value": "{\"objectApiName\":\"staff\",\"templateApiName\":\"staff\",\"templateFieldApiName\":\"name\",\"relationFieldDataType\":\"TEXT\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SORT",
  //       "name": "排序",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SHOW_API_NAMES",
  //       "name": "下拉显示",
  //       "value": "{\"showFields\":[{\"apiName\":\"name\",\"main\":true}]}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "POPUP_SHOW_API_NAMES",
  //       "name": "弹窗显示",
  //       "value": "{\"showFields\":[{\"apiName\":\"name\",\"main\":true}]}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_CONDITION",
  //       "name": "数据过滤",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "CAN_UPDATE",
  //       "name": "支持新增",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "MULTI_OBJECT_TYPE",
  //       "name": "复选关联表单组件类型",
  //       "value": "{\"value\":\"STAFF\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SINGLE_SELECT",
  //       "name": "是否是单选",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "部门",
  //   "status": "ENABLE",
  //   "dataType": DataType.MULTI_OBJECT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"部门\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{\"value\":\"请选择\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{\"value\":[{\"type\":\"CURRENT\",\"value\":\"JSON_OBJECT(CONCAT(\\\"[{'id':\\\",CONCAT(\\\"'\\\",LOGINUSERDEPTID(),\\\"'\\\"),\\\",\\\",\\\"'name':\\\",CONCAT(\\\"'\\\",LOGINUSERDEPTNAME(),\\\"'\\\"),\\\"}]\\\"))\"}],\"type\":\"CUSTOM\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明",
  //       "value": "{\"value\":\"请选择相关部门\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "OBJECT_FIELD",
  //       "name": "表单字段",
  //       "value": "{\"objectApiName\":\"department\",\"templateApiName\":\"department\",\"templateFieldApiName\":\"name\",\"relationFieldDataType\":\"TEXT\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SORT",
  //       "name": "排序",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SHOW_API_NAMES",
  //       "name": "下拉显示",
  //       "value": "{\"showFields\":[{\"apiName\":\"name\",\"main\":true}]}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "POPUP_SHOW_API_NAMES",
  //       "name": "弹窗显示",
  //       "value": "{\"showFields\":[{\"apiName\":\"name\",\"main\":true}]}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "DATA_CONDITION",
  //       "name": "数据过滤",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "CAN_UPDATE",
  //       "name": "支持新增",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "MULTI_OBJECT_TYPE",
  //       "name": "复选关联表单组件类型",
  //       "value": "{\"value\":\"DEPARTMENT\"}"
  //     },
  //     {
  //       "dataType": DataType.MULTI_OBJECT,
  //       "dataTypeConstraint": "SINGLE_SELECT",
  //       "name": "是否是单选",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "国家地区",
  //   "status": "ENABLE",
  //   "dataType": DataType.AREA,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"国家地区\"}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "ACCURACY",
  //       "name": "精准度",
  //       "value": "{\"value\":\"CITY\"}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.AREA,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "地理位置",
  //   "status": "ENABLE",
  //   "dataType": DataType.LOCATION,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"地理位置\"}"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.LOCATION,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "附件",
  //   "status": "ENABLE",
  //   "dataType": DataType.ATTACHMENT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"附件\"}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name",
  //       "value": "{\"value\":\"支持格式：pdf、svg、txt、jpg、jpeg、png、bmp、gif、rar、zip、xlsx、xls、docx、doc、heic、ppt、pptx、7z、gz、tar、key、glb、gltf、dwg、dxf、stl、stp、step、ipt、iam、prt、igs、iges、obj、jt、json\"}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "MAX_UPLOADED_NUM",
  //       "name": "最大上传数",
  //       "value": "{\"value\":20}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明",
  //       "value": "{\"value\":\"支持格式：pdf、svg、txt、jpg、jpeg、png、bmp、gif、rar、zip、xlsx、xls、docx、doc、heic、ppt、pptx、7z、gz、tar、key、glb、gltf、dwg、dxf、stl、stp、step、ipt、iam、prt、igs、iges、obj、jt、json\"}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.ATTACHMENT,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{}"
  //     }
  //   ]
  // },
  // {
  //   "name": "图片",
  //   "status": "ENABLE",
  //   "dataType": DataType.PICTURE,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"图片\"}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name",
  //       "value": "{\"value\":\"支持格式：jpg、jpeg、png、gif\"}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "MAX_UPLOADED_NUM",
  //       "name": "最大上传数",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明",
  //       "value": "{\"value\":\"支持格式：jpg、jpeg、png、gif\"}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.PICTURE,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     }
  //   ]
  // },
  // {
  //   "name": "富文本",
  //   "status": "ENABLE",
  //   "dataType": DataType.RICH_TEXT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"富文本\"}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "DEFAULT_HEIGHT",
  //       "name": "默认高度",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "PLACEHOLDER",
  //       "name": "占位提示",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "DEFAULT_VALUE",
  //       "name": "默认值",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.RICH_TEXT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "进度条",
  //   "status": "ENABLE",
  //   "dataType": DataType.PROGRESS_BAR,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"进度条\"}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "DATA_SOURCE",
  //       "name": "数据源",
  //       "value": "{\"value\":{\"numerator\":{\"type\":\"CUSTOM\",\"value\":0},\"denominator\":{\"type\":\"CUSTOM\",\"value\":{\"min\":0,\"max\":100}}}}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "INTERVAL",
  //       "name": "间隔",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "COLOR",
  //       "name": "颜色",
  //       "value": "{\"value\":{\"type\":\"CUSTOM\",\"value\":\"#1463FF\"}}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "CALIBRATION",
  //       "name": "刻度",
  //       "value": "{\"value\":{\"enabled\":false,\"value\":[]}}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "PROGRESS",
  //       "name": "进度显示",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "SORT",
  //       "name": "排序",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.PROGRESS_BAR,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     }
  //   ]
  // },
  // {
  //   "name": "字典",
  //   "status": "ENABLE",
  //   "dataType": DataType.DICT,
  //   "system": false,
  //   "type": "OBJECT",
  //   "dataTypeConstraintValues": [
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "FIELD_NAME",
  //       "name": "字段名称",
  //       "value": "{\"value\":\"字典\"}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "API_NAME",
  //       "name": "API name"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "STATUS",
  //       "name": "状态",
  //       "value": "{\"value\":1}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "EXPLANATION",
  //       "name": "说明"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "SELECT",
  //       "name": "筛选",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "DATA_SAVE",
  //       "name": "数据保存",
  //       "value": "{\"value\":true}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "SPLIT",
  //       "name": "支持拆分",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "DICT_KV",
  //       "name": "键值",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "SHOW_API_NAMES",
  //       "name": "下拉显示",
  //       "value": "{}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "CAN_UPDATE",
  //       "name": "支持新增",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "REQUIRED",
  //       "name": "必填",
  //       "value": "{\"value\":false}"
  //     },
  //     {
  //       "dataType": DataType.DICT,
  //       "dataTypeConstraint": "DICT_COUNT",
  //       "name": "个数",
  //       "value": "{}"
  //     }
  //   ]
  // }
]
