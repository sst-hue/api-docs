[auto-mwapi-lib](../README.md) / [Exports](../modules.md) / [Gameplay](../modules/Gameplay.md) / [Gameplay](../modules/Gameplay.Gameplay.md) / EffectLogical

# Class: EffectLogical

[Gameplay](../modules/Gameplay.md).[Gameplay](../modules/Gameplay.Gameplay.md).EffectLogical

**`Author`**

邓洪兵

**`Description`**

效果逻辑对象

**`Network Status`**

usage:双端

**`Precautions`**

范围双端，效果仅客户端

## Hierarchy

- [`GameObject`](Core.Core.GameObject.md)

  ↳ **`EffectLogical`**

## Table of contents

### Constructors

- [constructor](Gameplay.Gameplay.EffectLogical.md#constructor)

### Accessors

- [circleRadius](Gameplay.Gameplay.EffectLogical.md#circleradius)
- [cubeHeight](Gameplay.Gameplay.EffectLogical.md#cubeheight)
- [cubeLength](Gameplay.Gameplay.EffectLogical.md#cubelength)
- [cubeWidget](Gameplay.Gameplay.EffectLogical.md#cubewidget)
- [effectRangeShape](Gameplay.Gameplay.EffectLogical.md#effectrangeshape)
- [effectRangeType](Gameplay.Gameplay.EffectLogical.md#effectrangetype)
- [forwardVector](Gameplay.Gameplay.EffectLogical.md#forwardvector)
- [guid](Gameplay.Gameplay.EffectLogical.md#guid)
- [isVisible](Gameplay.Gameplay.EffectLogical.md#isvisible)
- [lockState](Gameplay.Gameplay.EffectLogical.md#lockstate)
- [name](Gameplay.Gameplay.EffectLogical.md#name)
- [netStatus](Gameplay.Gameplay.EffectLogical.md#netstatus)
- [parent](Gameplay.Gameplay.EffectLogical.md#parent)
- [rectangleHeight](Gameplay.Gameplay.EffectLogical.md#rectangleheight)
- [rectangleWidget](Gameplay.Gameplay.EffectLogical.md#rectanglewidget)
- [relativeLocation](Gameplay.Gameplay.EffectLogical.md#relativelocation)
- [relativeRotation](Gameplay.Gameplay.EffectLogical.md#relativerotation)
- [relativeScale](Gameplay.Gameplay.EffectLogical.md#relativescale)
- [rightVector](Gameplay.Gameplay.EffectLogical.md#rightvector)
- [sectorAngle](Gameplay.Gameplay.EffectLogical.md#sectorangle)
- [sectorRadius](Gameplay.Gameplay.EffectLogical.md#sectorradius)
- [segmentAngle](Gameplay.Gameplay.EffectLogical.md#segmentangle)
- [segmentHeight](Gameplay.Gameplay.EffectLogical.md#segmentheight)
- [segmentRadius](Gameplay.Gameplay.EffectLogical.md#segmentradius)
- [sphereRadius](Gameplay.Gameplay.EffectLogical.md#sphereradius)
- [staticStatus](Gameplay.Gameplay.EffectLogical.md#staticstatus)
- [tag](Gameplay.Gameplay.EffectLogical.md#tag)
- [transform](Gameplay.Gameplay.EffectLogical.md#transform)
- [upVector](Gameplay.Gameplay.EffectLogical.md#upvector)
- [useUpdate](Gameplay.Gameplay.EffectLogical.md#useupdate)
- [worldLocation](Gameplay.Gameplay.EffectLogical.md#worldlocation)
- [worldRotation](Gameplay.Gameplay.EffectLogical.md#worldrotation)
- [worldScale](Gameplay.Gameplay.EffectLogical.md#worldscale)

### Methods

- [addDestroyCallback](Gameplay.Gameplay.EffectLogical.md#adddestroycallback)
- [asyncGetScriptByName](Gameplay.Gameplay.EffectLogical.md#asyncgetscriptbyname)
- [attachToGameObject](Gameplay.Gameplay.EffectLogical.md#attachtogameobject)
- [clone](Gameplay.Gameplay.EffectLogical.md#clone)
- [deleteDestroyCallback](Gameplay.Gameplay.EffectLogical.md#deletedestroycallback)
- [destroy](Gameplay.Gameplay.EffectLogical.md#destroy)
- [detachFromGameObject](Gameplay.Gameplay.EffectLogical.md#detachfromgameobject)
- [getBoundingBoxSize](Gameplay.Gameplay.EffectLogical.md#getboundingboxsize)
- [getBounds](Gameplay.Gameplay.EffectLogical.md#getbounds)
- [getChildByGuid](Gameplay.Gameplay.EffectLogical.md#getchildbyguid)
- [getChildByName](Gameplay.Gameplay.EffectLogical.md#getchildbyname)
- [getChildren](Gameplay.Gameplay.EffectLogical.md#getchildren)
- [getChildrenBoxCenter](Gameplay.Gameplay.EffectLogical.md#getchildrenboxcenter)
- [getCollision](Gameplay.Gameplay.EffectLogical.md#getcollision)
- [getForwardVector](Gameplay.Gameplay.EffectLogical.md#getforwardvector)
- [getInRangeAllActor](Gameplay.Gameplay.EffectLogical.md#getinrangeallactor)
- [getRelativeLocation](Gameplay.Gameplay.EffectLogical.md#getrelativelocation)
- [getRelativeRotation](Gameplay.Gameplay.EffectLogical.md#getrelativerotation)
- [getRelativeScale](Gameplay.Gameplay.EffectLogical.md#getrelativescale)
- [getRightVector](Gameplay.Gameplay.EffectLogical.md#getrightvector)
- [getScriptByGuid](Gameplay.Gameplay.EffectLogical.md#getscriptbyguid)
- [getScriptByName](Gameplay.Gameplay.EffectLogical.md#getscriptbyname)
- [getScripts](Gameplay.Gameplay.EffectLogical.md#getscripts)
- [getSourceAssetGuid](Gameplay.Gameplay.EffectLogical.md#getsourceassetguid)
- [getTransform](Gameplay.Gameplay.EffectLogical.md#gettransform)
- [getUpVector](Gameplay.Gameplay.EffectLogical.md#getupvector)
- [getWorldLocation](Gameplay.Gameplay.EffectLogical.md#getworldlocation)
- [getWorldRotation](Gameplay.Gameplay.EffectLogical.md#getworldrotation)
- [getWorldScale](Gameplay.Gameplay.EffectLogical.md#getworldscale)
- [isRunningClient](Gameplay.Gameplay.EffectLogical.md#isrunningclient)
- [onDestroy](Gameplay.Gameplay.EffectLogical.md#ondestroy)
- [onStart](Gameplay.Gameplay.EffectLogical.md#onstart)
- [onUpdate](Gameplay.Gameplay.EffectLogical.md#onupdate)
- [ready](Gameplay.Gameplay.EffectLogical.md#ready)
- [serverCubeWidget](Gameplay.Gameplay.EffectLogical.md#servercubewidget)
- [serverSegmentAngle](Gameplay.Gameplay.EffectLogical.md#serversegmentangle)
- [serverSegmentHeight](Gameplay.Gameplay.EffectLogical.md#serversegmentheight)
- [serverSegmentRadius](Gameplay.Gameplay.EffectLogical.md#serversegmentradius)
- [setCollision](Gameplay.Gameplay.EffectLogical.md#setcollision)
- [setLocationAndRotation](Gameplay.Gameplay.EffectLogical.md#setlocationandrotation)
- [setRelativeLocation](Gameplay.Gameplay.EffectLogical.md#setrelativelocation)
- [setRelativeRotation](Gameplay.Gameplay.EffectLogical.md#setrelativerotation)
- [setRelativeScale](Gameplay.Gameplay.EffectLogical.md#setrelativescale)
- [setTransform](Gameplay.Gameplay.EffectLogical.md#settransform)
- [setVisibility](Gameplay.Gameplay.EffectLogical.md#setvisibility)
- [setWorldLocation](Gameplay.Gameplay.EffectLogical.md#setworldlocation)
- [setWorldRotation](Gameplay.Gameplay.EffectLogical.md#setworldrotation)
- [setWorldScale](Gameplay.Gameplay.EffectLogical.md#setworldscale)
- [startPlay](Gameplay.Gameplay.EffectLogical.md#startplay)
- [stopPlay](Gameplay.Gameplay.EffectLogical.md#stopplay)
- [asyncFind](Gameplay.Gameplay.EffectLogical.md#asyncfind)
- [asyncSpawnGameObject](Gameplay.Gameplay.EffectLogical.md#asyncspawngameobject)
- [find](Gameplay.Gameplay.EffectLogical.md#find)
- [findGameObjectByTag](Gameplay.Gameplay.EffectLogical.md#findgameobjectbytag)
- [getGameObjectByName](Gameplay.Gameplay.EffectLogical.md#getgameobjectbyname)
- [getGameObjectsByName](Gameplay.Gameplay.EffectLogical.md#getgameobjectsbyname)
- [spawnGameObject](Gameplay.Gameplay.EffectLogical.md#spawngameobject)

## Constructors

### constructor

• **new EffectLogical**()

#### Inherited from

[GameObject](Core.Core.GameObject.md).[constructor](Core.Core.GameObject.md#constructor)

## Accessors

### circleRadius

• `get` **circleRadius**(): `number`

**`Description`**

获取圆形半径

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8567

• `set` **circleRadius**(`inCircleRadius`): `void`

**`Description`**

设置圆形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCircleRadius` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8572

___

### cubeHeight

• `get` **cubeHeight**(): `number`

**`Description`**

获取立方体宽度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8649

• `set` **cubeHeight**(`inCubeHeight`): `void`

**`Description`**

设置立方体宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8654

___

### cubeLength

• `get` **cubeLength**(): `number`

**`Description`**

获取立方体高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8659

• `set` **cubeLength**(`inCubeLength`): `void`

**`Description`**

设置立方体高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeLength` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8664

___

### cubeWidget

• `get` **cubeWidget**(): `number`

**`Description`**

获取立方体长度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8627

• `set` **cubeWidget**(`inCubeWidget`): `void`

**`Description`**

设置立方体长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inCubeWidget` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8632

___

### effectRangeShape

• `get` **effectRangeShape**(): [`EffectRangeShape3D`](../enums/Gameplay.Gameplay.EffectRangeShape3D.md)

**`Description`**

获取效果形状

#### Returns

[`EffectRangeShape3D`](../enums/Gameplay.Gameplay.EffectRangeShape3D.md)

#### Defined in

Gameplay/index.d.ts:8557

• `set` **effectRangeShape**(`inEffectRangeShape`): `void`

**`Description`**

设置效果形状3D

#### Parameters

| Name | Type |
| :------ | :------ |
| `inEffectRangeShape` | [`EffectRangeShape3D`](../enums/Gameplay.Gameplay.EffectRangeShape3D.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8562

___

### effectRangeType

• `get` **effectRangeType**(): [`EffectRangeType`](../enums/Gameplay.Gameplay.EffectRangeType.md)

**`Description`**

获取效果类型

#### Returns

[`EffectRangeType`](../enums/Gameplay.Gameplay.EffectRangeType.md)

#### Defined in

Gameplay/index.d.ts:8547

• `set` **effectRangeType**(`inEffectRangeType`): `void`

**`Description`**

设置效果类型

#### Parameters

| Name | Type |
| :------ | :------ |
| `inEffectRangeType` | [`EffectRangeType`](../enums/Gameplay.Gameplay.EffectRangeType.md) |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8552

___

### forwardVector

• `get` **forwardVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.forwardVector

#### Defined in

Core/index.d.ts:405

___

### guid

• `get` **guid**(): `string`

**`Description`**

获取对象的guid（唯一标识一个对象的字符串）。

**`Effect`**

调用端生效

#### Returns

`string`

#### Inherited from

Core.GameObject.guid

#### Defined in

Core/index.d.ts:38

___

### isVisible

• `get` **isVisible**(): `boolean`

**`Description`**

获取当前物体是否显示

**`Effect`**

调用端生效

#### Returns

`boolean`

bool

#### Inherited from

Core.GameObject.isVisible

#### Defined in

Core/index.d.ts:496

___

### lockState

• `get` **lockState**(): `boolean`

**`Description`**

获取是否锁定

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:452

• `set` **lockState**(`v`): `void`

**`Description`**

设置是否锁定

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.lockState

#### Defined in

Core/index.d.ts:447

___

### name

• `get` **name**(): `string`

**`Description`**

返回当前物体名称

**`Effect`**

调用端生效

#### Returns

`string`

名称

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:167

• `set` **name**(`name`): `void`

**`Description`**

设置物体名称

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:需要设置的名称 |

#### Returns

`void`

#### Inherited from

Core.GameObject.name

#### Defined in

Core/index.d.ts:173

___

### netStatus

• `get` **netStatus**(): [`NetStatus`](../enums/Type.Type.NetStatus.md)

**`Description`**

获取当前物体同步状态

**`Effect`**

调用端生效

#### Returns

[`NetStatus`](../enums/Type.Type.NetStatus.md)

Type.NetStatus

#### Inherited from

Core.GameObject.netStatus

#### Defined in

Core/index.d.ts:502

___

### parent

• `get` **parent**(): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

获取当前父物体

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)

父物体

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:458

• `set` **parent**(`newParent`): `void`

**`Description`**

设置父物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`GameObject`](Core.Core.GameObject.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.parent

#### Defined in

Core/index.d.ts:463

___

### rectangleHeight

• `get` **rectangleHeight**(): `number`

**`Description`**

获取矩形宽度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8587

• `set` **rectangleHeight**(`rectangleHeight`): `void`

**`Description`**

设置矩形宽度

#### Parameters

| Name | Type |
| :------ | :------ |
| `rectangleHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8592

___

### rectangleWidget

• `get` **rectangleWidget**(): `number`

**`Description`**

获取矩形长度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8577

• `set` **rectangleWidget**(`inRectangleWidget`): `void`

**`Description`**

设置矩形长度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inRectangleWidget` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8582

___

### relativeLocation

• `get` **relativeLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:304

• `set` **relativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeLocation

#### Defined in

Core/index.d.ts:310

___

### relativeRotation

• `get` **relativeRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:330

• `set` **relativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeRotation

#### Defined in

Core/index.d.ts:336

___

### relativeScale

• `get` **relativeScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:356

• `set` **relativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:缩放 |

#### Returns

`void`

#### Inherited from

Core.GameObject.relativeScale

#### Defined in

Core/index.d.ts:362

___

### rightVector

• `get` **rightVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.rightVector

#### Defined in

Core/index.d.ts:419

___

### sectorAngle

• `get` **sectorAngle**(): `number`

**`Description`**

获取扇形角度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8607

• `set` **sectorAngle**(`inSectorAngle`): `void`

**`Description`**

设置扇形角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSectorAngle` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8612

___

### sectorRadius

• `get` **sectorRadius**(): `number`

**`Description`**

获取扇形半径

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8597

• `set` **sectorRadius**(`inSectorRadius`): `void`

**`Description`**

设置扇形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSectorRadius` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8602

___

### segmentAngle

• `get` **segmentAngle**(): `number`

**`Description`**

获取扇形体角度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8691

• `set` **segmentAngle**(`inSegmentAngle`): `void`

**`Description`**

设置扇形体角度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentAngle` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8696

___

### segmentHeight

• `get` **segmentHeight**(): `number`

**`Description`**

获取扇形体高度

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8713

• `set` **segmentHeight**(`inSegmentHeight`): `void`

**`Description`**

设置扇形体高度

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentHeight` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8718

___

### segmentRadius

• `get` **segmentRadius**(): `number`

**`Description`**

获取扇形半径

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8669

• `set` **segmentRadius**(`inSegmentRadius`): `void`

**`Description`**

设置扇形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSegmentRadius` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8674

___

### sphereRadius

• `get` **sphereRadius**(): `number`

**`Description`**

获取球形半径

#### Returns

`number`

#### Defined in

Gameplay/index.d.ts:8617

• `set` **sphereRadius**(`inSphereRadius`): `void`

**`Description`**

设置球形半径

#### Parameters

| Name | Type |
| :------ | :------ |
| `inSphereRadius` | `number` |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8622

___

### staticStatus

• `get` **staticStatus**(): `boolean`

**`Description`**

获取是否静态

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.staticStatus

#### Defined in

Core/index.d.ts:442

___

### tag

• `get` **tag**(): `string`

**`Description`**

获取当前物体的Tag

**`Effect`**

调用端生效

#### Returns

`string`

Tag

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:185

• `set` **tag**(`tag`): `void`

**`Description`**

设置当前物体的Tag

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `tag` | `string` | usage:Tag |

#### Returns

`void`

#### Inherited from

Core.GameObject.tag

#### Defined in

Core/index.d.ts:179

___

### transform

• `get` **transform**(): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体transform

**`Effect`**

调用端生效

#### Returns

[`Transform`](Type.Type.Transform.md)

transform

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:205

• `set` **transform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:要设置的transform |

#### Returns

`void`

#### Inherited from

Core.GameObject.transform

#### Defined in

Core/index.d.ts:211

___

### upVector

• `get` **upVector**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

Core.GameObject.upVector

#### Defined in

Core/index.d.ts:392

___

### useUpdate

• `get` **useUpdate**(): `boolean`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Returns

`boolean`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:437

• `set` **useUpdate**(`v`): `void`

**`Description`**

是否使用更新

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | `boolean` |

#### Returns

`void`

#### Inherited from

Core.GameObject.useUpdate

#### Defined in

Core/index.d.ts:432

___

### worldLocation

• `get` **worldLocation**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:230

• `set` **worldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldLocation

#### Defined in

Core/index.d.ts:235

___

### worldRotation

• `get` **worldRotation**(): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Effect`**

调用端生效

#### Returns

[`Rotation`](Type.Type.Rotation.md)

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:254

• `set` **worldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldRotation

#### Defined in

Core/index.d.ts:260

___

### worldScale

• `get` **worldScale**(): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

#### Returns

[`Vector`](Type.Type.Vector.md)

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:279

• `set` **worldScale**(`v`): `void`

**`Description`**

设置物体的是世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type |
| :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) |

#### Returns

`void`

#### Inherited from

Core.GameObject.worldScale

#### Defined in

Core/index.d.ts:284

## Methods

### addDestroyCallback

▸ **addDestroyCallback**(`callback`): `void`

**`Description`**

添加物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[addDestroyCallback](Core.Core.GameObject.md#adddestroycallback)

#### Defined in

Core/index.d.ts:616

___

### asyncGetScriptByName

▸ **asyncGetScriptByName**(`name`): `Promise`<`Script`\>

**`Description`**

异步获得当前物体下的指定脚本 客户端不维系父子关系

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`Promise`<`Script`\>

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncGetScriptByName](Core.Core.GameObject.md#asyncgetscriptbyname)

#### Defined in

Core/index.d.ts:563

___

### attachToGameObject

▸ **attachToGameObject**(`obj`): `void`

**`Description`**

将物体附着到指定物体上

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj` | [`GameObject`](Core.Core.GameObject.md) | usage:物体 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[attachToGameObject](Core.Core.GameObject.md#attachtogameobject)

#### Defined in

Core/index.d.ts:583

___

### clone

▸ **clone**(`inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

复制对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inReplicates?` | `boolean` | usage:是否复制 default:true |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

克隆的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[clone](Core.Core.GameObject.md#clone)

#### Defined in

Core/index.d.ts:543

___

### deleteDestroyCallback

▸ **deleteDestroyCallback**(`callback`): `void`

**`Description`**

移除物体Destroy事件回调

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callback` | (...`arg`: `unknown`[]) => `void` | usage:回调事件 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[deleteDestroyCallback](Core.Core.GameObject.md#deletedestroycallback)

#### Defined in

Core/index.d.ts:622

___

### destroy

▸ **destroy**(): `void`

**`Description`**

删除对象

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[destroy](Core.Core.GameObject.md#destroy)

#### Defined in

Core/index.d.ts:146

___

### detachFromGameObject

▸ **detachFromGameObject**(): `void`

**`Description`**

将此物体与当前附着的物体分离

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[detachFromGameObject](Core.Core.GameObject.md#detachfromgameobject)

#### Defined in

Core/index.d.ts:588

___

### getBoundingBoxSize

▸ **getBoundingBoxSize**(`nonColliding?`, `includeFromChildActors?`, `outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体包围盒大小

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `nonColliding?` | `boolean` | usage:表示要在边界框中包含非碰撞组件 default:false |
| `includeFromChildActors?` | `boolean` | usage:如果为 true，则递归子物体 default:false |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBoundingBoxSize](Core.Core.GameObject.md#getboundingboxsize)

#### Defined in

Core/index.d.ts:598

___

### getBounds

▸ **getBounds**(`onlyCollidingComponents`, `OriginOuter`, `BoxExtentOuter`, `includeFromChildActors?`): `void`

**`Description`**

获取Gameobject边界

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onlyCollidingComponents` | `boolean` | usage:是否只包含有碰撞的组件。 |
| `OriginOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject的中心点坐标。 |
| `BoxExtentOuter` | [`Vector`](Type.Type.Vector.md) | usage:传出参数，设置为Gameobject尺寸的一半。 |
| `includeFromChildActors?` | `boolean` | usage:是否递归包含子物体 default:undefined |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getBounds](Core.Core.GameObject.md#getbounds)

#### Defined in

Core/index.d.ts:194

___

### getChildByGuid

▸ **getChildByGuid**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据Guid查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByGuid](Core.Core.GameObject.md#getchildbyguid)

#### Defined in

Core/index.d.ts:536

___

### getChildByName

▸ **getChildByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

根据名称查找子物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名称 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

查找的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildByName](Core.Core.GameObject.md#getchildbyname)

#### Defined in

Core/index.d.ts:529

___

### getChildren

▸ **getChildren**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取Children 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildren](Core.Core.GameObject.md#getchildren)

#### Defined in

Core/index.d.ts:522

___

### getChildrenBoxCenter

▸ **getChildrenBoxCenter**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取所有子对象包围盒中心点(不包含父对象,父对象不可用返回[0,0,0])

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Type.Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getChildrenBoxCenter](Core.Core.GameObject.md#getchildrenboxcenter)

#### Defined in

Core/index.d.ts:610

___

### getCollision

▸ **getCollision**(): [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

**`Description`**

返回碰撞状态

**`Effect`**

调用端生效

#### Returns

[`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md)

碰撞状态

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getCollision](Core.Core.GameObject.md#getcollision)

#### Defined in

Core/index.d.ts:480

___

### getForwardVector

▸ **getForwardVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向前向量

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getForwardVector](Core.Core.GameObject.md#getforwardvector)

#### Defined in

Core/index.d.ts:413

___

### getInRangeAllActor

▸ **getInRangeAllActor**(): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

获取范围内的所有Gameobject

**`Effect`**

调用端生效

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Gameobject数组

#### Defined in

Gameplay/index.d.ts:8542

___

### getRelativeLocation

▸ **getRelativeLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对位置

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeLocation](Core.Core.GameObject.md#getrelativelocation)

#### Defined in

Core/index.d.ts:318

___

### getRelativeRotation

▸ **getRelativeRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取相对旋转

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

旋转角度

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeRotation](Core.Core.GameObject.md#getrelativerotation)

#### Defined in

Core/index.d.ts:344

___

### getRelativeScale

▸ **getRelativeScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取相对缩放

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

相对缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRelativeScale](Core.Core.GameObject.md#getrelativescale)

#### Defined in

Core/index.d.ts:370

___

### getRightVector

▸ **getRightVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向右向量

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getRightVector](Core.Core.GameObject.md#getrightvector)

#### Defined in

Core/index.d.ts:427

___

### getScriptByGuid

▸ **getScriptByGuid**(`guid`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:guid |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByGuid](Core.Core.GameObject.md#getscriptbyguid)

#### Defined in

Core/index.d.ts:570

___

### getScriptByName

▸ **getScriptByName**(`name`): `Script`

**`Description`**

获得当前物体下的指定脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:名字 |

#### Returns

`Script`

Script

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScriptByName](Core.Core.GameObject.md#getscriptbyname)

#### Defined in

Core/index.d.ts:556

___

### getScripts

▸ **getScripts**(): `Script`[]

**`Description`**

获得当前物体下的所有脚本 客户端不维系父子关系 推荐使用Find替代

**`Effect`**

调用端生效

#### Returns

`Script`[]

Array<Script>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getScripts](Core.Core.GameObject.md#getscripts)

#### Defined in

Core/index.d.ts:549

___

### getSourceAssetGuid

▸ **getSourceAssetGuid**(): `string`

**`Description`**

获取当前物体使用资源的GUID

**`Effect`**

调用端生效

#### Returns

`string`

资源的GUID

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getSourceAssetGuid](Core.Core.GameObject.md#getsourceassetguid)

#### Defined in

Core/index.d.ts:628

___

### getTransform

▸ **getTransform**(`outer?`): [`Transform`](Type.Type.Transform.md)

**`Description`**

返回当前物体Transform

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Transform 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Transform`](Type.Type.Transform.md) | usage:接收转换数据的 Transform 对象 default:null |

#### Returns

[`Transform`](Type.Type.Transform.md)

Transform

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getTransform](Core.Core.GameObject.md#gettransform)

#### Defined in

Core/index.d.ts:219

___

### getUpVector

▸ **getUpVector**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取当前物体的向上向量

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

Vector

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getUpVector](Core.Core.GameObject.md#getupvector)

#### Defined in

Core/index.d.ts:399

___

### getWorldLocation

▸ **getWorldLocation**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界坐标

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象\

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界位置坐标

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldLocation](Core.Core.GameObject.md#getworldlocation)

#### Defined in

Core/index.d.ts:243

___

### getWorldRotation

▸ **getWorldRotation**(`outer?`): [`Rotation`](Type.Type.Rotation.md)

**`Description`**

获取物体的世界旋转

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Rotation 对象,建议传入 outer 来减少 new 对象

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Rotation`](Type.Type.Rotation.md) | usage:接收转换数据的 Rotation 对象 default:null |

#### Returns

[`Rotation`](Type.Type.Rotation.md)

世界旋转

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldRotation](Core.Core.GameObject.md#getworldrotation)

#### Defined in

Core/index.d.ts:268

___

### getWorldScale

▸ **getWorldScale**(`outer?`): [`Vector`](Type.Type.Vector.md)

**`Description`**

获取物体的世界缩放

**`Effect`**

调用端生效

**`Precautions`**

如果 outer 不为空, 返回 outer,否则返回一个新的 Vector 对象,建议传入 outer 来减少 new 对象

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `outer?` | [`Vector`](Type.Type.Vector.md) | usage:接收转换数据的 Vector 对象 default:null |

#### Returns

[`Vector`](Type.Type.Vector.md)

世界缩放

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getWorldScale](Core.Core.GameObject.md#getworldscale)

#### Defined in

Core/index.d.ts:292

___

### isRunningClient

▸ **isRunningClient**(): `boolean`

**`Description`**

是否为客户端

**`Effect`**

调用端生效

#### Returns

`boolean`

true为客户端

#### Inherited from

[GameObject](Core.Core.GameObject.md).[isRunningClient](Core.Core.GameObject.md#isrunningclient)

#### Defined in

Core/index.d.ts:49

___

### onDestroy

▸ `Protected` **onDestroy**(): `void`

**`Description`**

周期函数 被销毁时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onDestroy](Core.Core.GameObject.md#ondestroy)

#### Defined in

Core/index.d.ts:17

___

### onStart

▸ `Protected` **onStart**(): `void`

**`Description`**

周期函数 脚本开始执行时调用

**`Effect`**

调用端生效

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onStart](Core.Core.GameObject.md#onstart)

#### Defined in

Core/index.d.ts:12

___

### onUpdate

▸ `Protected` **onUpdate**(`dt`): `void`

**`Description`**

周期函数 useUpdate 设置为 true 后,每帧被执行,设置为false,不会执行

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `dt` | `number` | usage:与上一帧的延迟 单位:秒 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[onUpdate](Core.Core.GameObject.md#onupdate)

#### Defined in

Core/index.d.ts:23

___

### ready

▸ **ready**(): `Promise`<[`EffectLogical`](Gameplay.Gameplay.EffectLogical.md)\>

**`Description`**

GameObject准备好后返回

**`Effect`**

调用端生效

#### Returns

`Promise`<[`EffectLogical`](Gameplay.Gameplay.EffectLogical.md)\>

准备好的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[ready](Core.Core.GameObject.md#ready)

#### Defined in

Core/index.d.ts:122

___

### serverCubeWidget

▸ **serverCubeWidget**(`inCubeWidget`): `void`

author 邓洪兵

**`Description`**

在服务器上设置Cube宽度

**`Effect`**

设置Cube高度

**`Example`**

使用示例:在服务器上设置Cube宽度并自动同步
```
 serverCubeWidget(CubeWidget)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inCubeWidget` | `number` | usage:number |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8644

___

### serverSegmentAngle

▸ **serverSegmentAngle**(`inSegmentAngle`): `void`

author 邓洪兵

**`Description`**

在服务器上设置Segment角度

**`Effect`**

设置Segment角度

**`Example`**

使用示例:在服务器上设置角度并自动同步
```
 serverSegmentAngle(SegmentAngle)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSegmentAngle` | `number` | usage:number |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8708

___

### serverSegmentHeight

▸ **serverSegmentHeight**(`inSegmentHeight`): `void`

author 邓洪兵

**`Description`**

在服务器上设置Segment高度

**`Effect`**

设置Segment高度

**`Example`**

使用示例:在服务器上设置高度并自动同步
```
 serverSegmentHeight(SegmentHieght)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSegmentHeight` | `number` | usage:number |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8730

___

### serverSegmentRadius

▸ **serverSegmentRadius**(`inSegmentRadius`): `void`

author 邓洪兵

**`Description`**

在服务器上设置Segment半径

**`Effect`**

设置Segment半径

**`Example`**

使用示例:在服务器上设置半径并自动同步
```
 serverSegmentRadius(SegmentRadius)
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `inSegmentRadius` | `number` | usage:number |

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8686

___

### setCollision

▸ **setCollision**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置碰撞状态

**`Effect`**

调用端生效

**`Precautions`**

建议双端物体设置碰撞，单端物体设置碰撞可能会导致拉扯的情况

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) \| [`CollisionStatus`](../enums/Type.Type.CollisionStatus.md) | usage: 碰撞状态（Type.CollisionStatus 或者 Type.PropertyStatus） |
| `propagateToChildren?` | `boolean` | usage: 是否传递给子节点 default: false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setCollision](Core.Core.GameObject.md#setcollision)

#### Defined in

Core/index.d.ts:471

___

### setLocationAndRotation

▸ **setLocationAndRotation**(`location`, `rotation`): `void`

**`Description`**

同时设置物体的世界位置与旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:世界位置 |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setLocationAndRotation](Core.Core.GameObject.md#setlocationandrotation)

#### Defined in

Core/index.d.ts:383

___

### setRelativeLocation

▸ **setRelativeLocation**(`location`): `void`

**`Description`**

设置相对位置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `location` | [`Vector`](Type.Type.Vector.md) | usage:位置 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeLocation](Core.Core.GameObject.md#setrelativelocation)

#### Defined in

Core/index.d.ts:324

___

### setRelativeRotation

▸ **setRelativeRotation**(`rotation`): `void`

**`Description`**

设置相对旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeRotation](Core.Core.GameObject.md#setrelativerotation)

#### Defined in

Core/index.d.ts:350

___

### setRelativeScale

▸ **setRelativeScale**(`scale`): `void`

**`Description`**

设置相对缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `scale` | [`Vector`](Type.Type.Vector.md) | usage:要设置的相对缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setRelativeScale](Core.Core.GameObject.md#setrelativescale)

#### Defined in

Core/index.d.ts:376

___

### setTransform

▸ **setTransform**(`transform`): `void`

**`Description`**

设置当前物体transform

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `transform` | [`Transform`](Type.Type.Transform.md) | usage:transform |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setTransform](Core.Core.GameObject.md#settransform)

#### Defined in

Core/index.d.ts:225

___

### setVisibility

▸ **setVisibility**(`status`, `propagateToChildren?`): `void`

**`Description`**

设置GameObject是否被显示

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `status` | [`PropertyStatus`](../enums/Type.Type.PropertyStatus.md) | usage:状态 |
| `propagateToChildren?` | `boolean` | usage: 是否设置子物体 default:false |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setVisibility](Core.Core.GameObject.md#setvisibility)

#### Defined in

Core/index.d.ts:487

___

### setWorldLocation

▸ **setWorldLocation**(`v`): `void`

**`Description`**

设置物体的世界坐标

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage: 要设置的世界坐标 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldLocation](Core.Core.GameObject.md#setworldlocation)

#### Defined in

Core/index.d.ts:249

___

### setWorldRotation

▸ **setWorldRotation**(`rotation`): `void`

**`Description`**

设置物体的世界旋转

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotation` | [`Rotation`](Type.Type.Rotation.md) | usage:要设置的世界旋转 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldRotation](Core.Core.GameObject.md#setworldrotation)

#### Defined in

Core/index.d.ts:274

___

### setWorldScale

▸ **setWorldScale**(`v`): `void`

**`Description`**

设置物体的世界缩放

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `v` | [`Vector`](Type.Type.Vector.md) | usage:要设置的世界缩放 |

#### Returns

`void`

#### Inherited from

[GameObject](Core.Core.GameObject.md).[setWorldScale](Core.Core.GameObject.md#setworldscale)

#### Defined in

Core/index.d.ts:298

___

### startPlay

▸ **startPlay**(): `void`

**`Description`**

播放效果

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8531

___

### stopPlay

▸ **stopPlay**(): `void`

**`Description`**

停止效果

**`Effect`**

调用端生效

#### Returns

`void`

#### Defined in

Gameplay/index.d.ts:8536

___

### asyncFind

▸ `Static` **asyncFind**(`guid`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

通过guid异步查找Gamobject,默认是五秒,可以通过 `core.setGlobalAsyncOverTime(5000);
` 来设置

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的guid |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncFind](Core.Core.GameObject.md#asyncfind)

#### Defined in

Core/index.d.ts:161

___

### asyncSpawnGameObject

▸ `Static` **asyncSpawnGameObject**(`assetId`, `inReplicates?`): `Promise`<[`GameObject`](Core.Core.GameObject.md)\>

**`Description`**

异步构造一个 GameObject 资源不存在会先去下载资源再去创建

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

`Promise`<[`GameObject`](Core.Core.GameObject.md)\>

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[asyncSpawnGameObject](Core.Core.GameObject.md#asyncspawngameobject)

#### Defined in

Core/index.d.ts:138

___

### find

▸ `Static` **find**(`guid`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过Guid查找Gameobject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `guid` | `string` | usage:物体的Guid |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

Guid对应的物体

#### Inherited from

[GameObject](Core.Core.GameObject.md).[find](Core.Core.GameObject.md#find)

#### Defined in

Core/index.d.ts:153

___

### findGameObjectByTag

▸ `Static` **findGameObjectByTag**(`InTag`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过自定义Tag获取GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `InTag` | `string` | usage:自定义Tag |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

Array<GameObject>

#### Inherited from

[GameObject](Core.Core.GameObject.md).[findGameObjectByTag](Core.Core.GameObject.md#findgameobjectbytag)

#### Defined in

Core/index.d.ts:577

___

### getGameObjectByName

▸ `Static` **getGameObjectByName**(`name`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

返回第一个查找到的对象，如有多个同名对象，随机返回一个

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectByName](Core.Core.GameObject.md#getgameobjectbyname)

#### Defined in

Core/index.d.ts:516

___

### getGameObjectsByName

▸ `Static` **getGameObjectsByName**(`name`): [`GameObject`](Core.Core.GameObject.md)[]

**`Description`**

通过名字查找物体

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | usage:物体名字 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)[]

返回所有查找到的对象

#### Inherited from

[GameObject](Core.Core.GameObject.md).[getGameObjectsByName](Core.Core.GameObject.md#getgameobjectsbyname)

#### Defined in

Core/index.d.ts:509

___

### spawnGameObject

▸ `Static` **spawnGameObject**(`assetId`, `inReplicates?`): [`GameObject`](Core.Core.GameObject.md)

**`Description`**

构造一个 GameObject

**`Effect`**

调用端生效

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `assetId` | `string` | usage:资源的GUID |
| `inReplicates?` | `boolean` | usage:是否同步 default:默认服务端同步 |

#### Returns

[`GameObject`](Core.Core.GameObject.md)

构造的GameObject

#### Inherited from

[GameObject](Core.Core.GameObject.md).[spawnGameObject](Core.Core.GameObject.md#spawngameobject)

#### Defined in

Core/index.d.ts:130