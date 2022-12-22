# interface

## BBS_RESULT

社区列表详细

```typescript
interface BBS_RESULT {
  /** 审核状态(1-审核中,2-审核通过,3-审核失败) */
  examineStatus: BBS_STATUS_ENUM;
  /** 游戏名称 */
  gameName: string;
  /** 社区号昵称 */
  nickname: string;
  /** 开发者社区号 Id */
  id: number;
  /** 更新时间(2000/01/01) */
  updateTime: string;
  /** 社区头像 */
  headImg: string;
  /** 社区号 id */
  officialUserId: string;
  /** 帖子 id */
  gameCircleId: string;
}
```

## IPropertyOptions

用户属性标记的参数选项

```typescript
interface IPropertyOptions {
  /** @description 该属性在编辑器中的显示名称，如果不设置则默认为变量名 */
  displayName?: string;
  /** @description 该属性在编辑器中的提示内容 */
  tooltip?: string;
  /** @description 是否覆盖父类的属性 */
  override?: boolean;
  /** @description 是否同步 */
  replicated?: boolean;
  /** @description 属性同步修改后的回调函数 */
  onChanged?: string | ((path: string[]) => void);
  /** @description 是否广播 */
  multicast?: boolean;
  /** @description 组名 */
  group?: string;
  /** @description 是否在编辑器里隐藏 */
  hideInEditor?: boolean;
  /** @description 是否为只读属性 */
  readonly?: boolean;
  /** @description 范围（只有number生效）*/
  range?: IRangeOptions;
  /** @description 是否为资源类型，目前仅支持字符串 */
  asset?: Type.AssetType | Array<Type.AssetType>;
  /** @description 数组的默认值 */
  arrayDefault?: unknown;
  /** @description 捕获其他属性 */
  capture?: boolean;
  /** @description 是否为组件 */
  enumType?: {
    [key: string | number]: string | number;
  };
  /** @description Select Options */
  selectOptions?: {
    [key: string]: string;
  };
  /** @description Editor监听属性变更 */
  onChangedInEditor?: string | (() => void);
  /** @description 是否为资源 */
  isAsset?: boolean;
}
```

### 案例

```
// 一堆代码
...
```