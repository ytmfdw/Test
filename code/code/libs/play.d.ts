export as namespace Play;

interface Promise<T> {
  then(fun: Function, err?: Function): any;
}

declare class EventEmitter<T> {
  on<K extends keyof T>(event: K, listener: (payload: T[K]) => any): this;

  on(evt: string, listener: Function): this;

  once<K extends keyof T>(event: K, listener: (payload: T[K]) => any): this;

  once(evt: string, listener: Function): this;

  off<K extends keyof T>(evt: K | string, listener?: Function): this;

  emit<K extends keyof T>(evt: K | string, ...args: any[]): boolean;
}

export class AVEvent {
  /** 连接成功 */
  static CONNECTED: string;
  /** 连接失败 */
  static CONNECT_FAILED: string;
  /** 断开连接 */
  static DISCONNECTED: string;
  /** 加入到大厅 */
  static LOBBY_JOINED: string;
  /** 离开大厅 */
  static LOBBY_LEFT: string;
  /** 大厅房间列表变化 */
  static LOBBY_ROOM_LIST_UPDATED: string;
  /** 创建房间成功 */
  static ROOM_CREATED: string;
  /** 创建房间失败 */
  static ROOM_CREATE_FAILED: string;
  /** 加入房间成功 */
  static ROOM_JOINED: string;
  /** 加入房间失败 */
  static ROOM_JOIN_FAILED: string;
  /** 有新玩家加入房间 */
  static PLAYER_ROOM_JOINED: string;
  /** 有玩家离开房间 */
  static PLAYER_ROOM_LEFT: string;
  /** 玩家活跃属性变化 */
  static PLAYER_ACTIVITY_CHANGED: string;
  /** 主机变更 */
  static MASTER_SWITCHED: string;
  /** 离开房间 */
  static ROOM_LEFT: string;
  /** 被踢出房间 */
  static ROOM_KICKED: string;
  /** 房间自定义属性变化 */
  static ROOM_CUSTOM_PROPERTIES_CHANGED: string;
  /** 玩家自定义属性变化 */
  static PLAYER_CUSTOM_PROPERTIES_CHANGED: string;
  /** 自定义事件 */
  static CUSTOM_EVENT: string;
  /** 错误事件 */
  static ERROR: string;
}

export enum ReceiverGroup {
  /** 其他人（除了自己之外的所有人） */
  Others,
  /** 所有人（包括自己） */
  All,
  /** 主机客户端 */
  MasterClient,
}

interface CustomProperties {
  [key: string]: any;
}

interface CustomEventData {
  [key: string]: any;
}

interface ErrorEvent {
  code: number;
  detail: string;
}

declare interface PlayEvent {
  connected: void;
  connectFailed: ErrorEvent;
  disconnected: void;
  lobbyJoined: void;
  lobbyLeft: void;
  lobbyRoomListUpdate: void;
  roomCreated: void;
  roomCreateFailed: ErrorEvent;
  roomJoined: void;
  roomJoinFailed: ErrorEvent;
  newPlayerJoinedRoom: {
    newPlayer: Player;
  };
  playerLeftRoom: {
    leftPlayer: Player;
  };
  playerActivityChanged: {
    player: Player;
  };
  masterSwitched: {
    newMaster: Player;
  };
  roomLeft: void;
  roomKicked: {
    code: number;
    msg: string;
  };
  roomCustomPropertiesChanged: {
    changedProps: CustomProperties;
  };
  playerCustomPropertiesChanged: {
    player: Player;
    changedProps: CustomProperties;
  };
  customEvent: {
    eventId: number | string;
    eventData: CustomEventData;
    senderId: number;
  };
  error: ErrorEvent;
}

export class LobbyRoom {
  readonly roomName: string;

  readonly maxPlayerCount: number;

  readonly expectedUserIds: string[];

  readonly emptyRoomTtl: number;

  readonly playerTtl: number;

  readonly playerCount: number;

  readonly customRoomPropertiesForLobby: CustomProperties;
}

export class Player {
  readonly userId: string;

  readonly actorId: number;

  readonly isLocal: boolean;

  readonly isMaster: boolean;

  readonly isActive: boolean;

  setCustomProperties(
    properties: CustomProperties,
    opts?: {
      expectedValues?: CustomProperties;
    }
  ): Promise<void>;

  readonly customProperties: CustomProperties;
}

export class Room {
  readonly name: string;

  readonly opened: boolean;

  readonly visible: boolean;

  readonly maxPlayerCount: number;

  readonly master: Player;

  readonly masterId: number;

  readonly expectedUserIds: string[];

  readonly playerList: Player[];

  getPlayer(actorId: number): Player;

  setCustomProperties(
    properties: CustomProperties,
    opts?: {
      expectedValues?: CustomProperties;
    }
  ): Promise<void>;

  readonly customProperties: CustomProperties;

  setOpened(opened: boolean): Promise<void>;

  setVisible(visible: boolean): Promise<void>;

  setMaster(newMasterId: number): Promise<void>;

  sendEvent(
    eventId: number | string,
    eventData?: CustomEventData,
    options?: {
      receiverGroup?: ReceiverGroup;
      targetActorIds?: number[];
    }
  ): Promise<void>;

  kickPlayer(
    actorId: number,
    opts?: {
      code?: number;
      msg?: string;
    }
  ): Promise<void>;

  leave(): Promise<void>;
}

export class Client extends EventEmitter<PlayEvent> {
  readonly room: Room;

  readonly player: Player;

  userId: string;

  constructor(opts: {
    appId: string;
    appKey: string;
    userId: string;
    ssl?: boolean;
    feature?: string;
    gameVersion?: string;
  });

  connect(): Promise<Client>;

  reconnect(): Promise<Client>;

  reconnectAndRejoin(): Promise<Room>;

  close(): Promise<void>;

  joinLobby(): Promise<void>;

  leaveLobby(): Promise<void>;

  createRoom(opts?: {
    roomName?: string;
    roomOptions?: Object;
    expectedUserIds?: string[];
  }): Promise<Room>;

  joinRoom(
    roomName: string,
    opts?: {
      expectedUserIds?: string[];
    }
  ): Promise<Room>;

  rejoinRoom(roomName: string): Promise<Room>;

  joinOrCreateRoom(
    roomName: string,
    opts?: {
      roomOptions?: Object;
      expectedUserIds: string[];
    }
  ): Promise<Room>;

  joinRandomRoom(opts?: {
    matchProperties?: Object;
    expectedUserIds?: string[];
  }): Promise<Room>;

  setRoomOpened(opened: boolean): Promise<void>;

  setRoomVisible(visible: boolean): Promise<void>;

  setMaster(newMasterId: number): Promise<void>;

  sendEvent(
    eventId: number | string,
    eventData?: CustomEventData,
    options?: {
      receiverGroup?: ReceiverGroup;
      targetActorIds?: number[];
    }
  ): Promise<void>;

  leaveRoom(): Promise<void>;

  kickPlayer(
    actorId: number,
    opts?: {
      code?: number;
      msg?: string;
    }
  ): Promise<void>;

  pauseMessageQueue(): void;
  resumeMessageQueue(): void;
}

export enum CreateRoomFlag {
  FixedMaster = 1,
  MasterUpdateRoomProperties = 2,
}

export function setAdapters(newAdapters: { WebSocket: Function }): void;

export enum LogLevel {
  Debug,
  Warn,
  Error,
}

export function setLogger(logger: {
  Debug: (...args: any[]) => any;
  Warn: (...args: any[]) => any;
  Error: (...args: any[]) => any;
}): void;

export enum PlayErrorCode {
  OPEN_WEBSOCKET_ERROR = 10001,
  SEND_MESSAGE_STATE_ERROR = 10002,
}
