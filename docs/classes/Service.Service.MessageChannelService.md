[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Service](../modules/Service.md) / [Service](../modules/Service.Service.md) / MessageChannelService

# Class: MessageChannelService

[Service](../modules/Service.md).[Service](../modules/Service.Service.md).MessageChannelService

**`Author`**

zifei.wu

**`Instance`**

**`Description`**

支持各端的通信，233、MW 引擎、Web 和游戏项目可以互相直接进行业务上的消息传递，无需修改引擎代码

**`Network Status`**

usage: 客户端

**`Precautions`**

单例类，请使用 getInstance 获取对象。TS 端想要收到某消息并执行回调函数需要提前
调用 registerAction 进行绑定。消息需要是 Json 格式的字符串并包含“action”字段
否则无法被通道转发。在 PIE 下无法连接到 233、Web 端。
如果游戏在后台收到消息，通道会将消息缓存并在游戏回到前台后一并发送。

**`Example`**

使用示例:通道的注册、发送的使用示例

```
// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调
Service.MessageChannelService.getInstance().registerAction("ts.test.myaction", this, OnCall);
// 发送message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"到通道上，所有注册了该消息中action的端才可以收到该消息
Service.MessageChannelService.getInstance().send("{\"action\":\"ts.test.myaction\",\"data\":{}}");
// 指定一个目标端toWhom发送消息message，对方无需提前注册就可以收到该消息
Service.MessageChannelService.getInstance().sendTo(toWhom, message);
```

## Table of contents

### Constructors

- [constructor](Service.Service.MessageChannelService.md#constructor)

### Methods

- [registerAction](Service.Service.MessageChannelService.md#registeraction)
- [send](Service.Service.MessageChannelService.md#send)
- [sendTo](Service.Service.MessageChannelService.md#sendto)
- [getInstance](Service.Service.MessageChannelService.md#getinstance)

## Constructors

### constructor

• **new MessageChannelService**()

## Methods

### registerAction

▸ **registerAction**(`action`, `caller`, `onCall`): `void`

**`Description`**

注册需要收到消息的 action 以及对应要调用的回调函数

**`Effect`**

通道会识别包含该 action 的消息并调用对应的回调函数

**`Precautions`**

未被注册的消息不会被 TS 层接收，哪怕对方指定目标是 TS 也不会调用回调函数（未注册）
注册 action 需要在收到消息之前，请保证注册时机足够早

**`Example`**

使用示例:通道注册 action

```
// 注册action:ts.test.myaction，对包含action的消息，调用OnCall回调
Service.MessageChannelService.getInstance().registerAction("ts.test.myaction", this, OnCall);
```

#### Parameters

| Name     | Type                         | Description                                                       |
| :------- | :--------------------------- | :---------------------------------------------------------------- |
| `action` | `string`                     | usage:需要被注册的 action，通道收到该 action 的消息会调用对应回调 |
| `caller` | `any`                        | usage:调用者，一般传 this                                         |
| `onCall` | (`data`: `string`) => `void` | usage:通道收到消息后应该执行的对应的回调函数                      |

#### Returns

`void`

#### Defined in

Service/index.d.ts:325

---

### send

▸ **send**(`message`): `void`

**`Description`**

发送消息到通道上

**`Effect`**

将消息发送到通道，所有注册了该消息 action 的端才能收到该消息

**`Precautions`**

如果通道上没有端注册了该消息的 action 则这条消息不会发送给任何对象
如果通道上有多个端注册了该消息的 action 则所有注册者都能收到该消息
发送消息的时机要晚于对方注册的时机
消息需要是 Json 格式的字符串，包含"action"字段

**`Example`**

使用示例:通道广播消息

```
// 发送message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"到通道上，所有注册了该消息中action的端才可以收到该消息
Service.MessageChannelService.getInstance().send("{\"action\":\"ts.test.myaction\",\"data\":{}}");
```

#### Parameters

| Name      | Type     | Description          |
| :-------- | :------- | :------------------- |
| `message` | `string` | usage:需要发送的消息 |

#### Returns

`void`

#### Defined in

Service/index.d.ts:345

---

### sendTo

▸ **sendTo**(`toWhom`, `message`): `void`

**`Description`**

发送消息给指定对象

**`Effect`**

将消息发送给指定对象，对方无需提前注册

**`Precautions`**

如果通道上有多个端注册了该消息，仍只会发给指定的对象
消息需要是 Json 格式的字符串，包含"action"字段

**`Example`**

使用示例:通道私发消息

```
// 指定一个目标端toWhom:Client发送消息message:"{\"action\":\"ts.test.myaction\",\"data\":{}}"，对方无需提前注册就可以收到该消息
Service.MessageChannelService.getInstance().sendTo(Service.MessageChannelReceiver.Client, "{\"action\":\"ts.test.myaction\",\"data\":{}}");
```

#### Parameters

| Name      | Type                                                                           | Description                                         |
| :-------- | :----------------------------------------------------------------------------- | :-------------------------------------------------- |
| `toWhom`  | [`MessageChannelReceiver`](../enums/Service.Service.MessageChannelReceiver.md) | usage:指定的对象，使用枚举值 MessageChannelReceiver |
| `message` | `string`                                                                       | usage:需要发送的消息                                |

#### Returns

`void`

#### Defined in

Service/index.d.ts:360

---

### getInstance

▸ `Static` **getInstance**(): [`MessageChannelService`](Service.Service.MessageChannelService.md)

**`Description`**

获取 API 实例进行调用

**`Effect`**

获取 API 实例进行调用

**`Precautions`**

无

**`Example`**

使用示例:通道发送消息

```
// 通过实例调用函数发送消息
Service.MessageChannelService.getInstance().send(message);
```

#### Returns

[`MessageChannelService`](Service.Service.MessageChannelService.md)

返回 API 实例用以调用相关功能函数

#### Defined in

Service/index.d.ts:309
