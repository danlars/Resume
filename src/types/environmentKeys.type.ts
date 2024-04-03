import {environmentKey} from '../constants/environmentKey.const';

export type environmentKeysType = typeof environmentKey[keyof typeof environmentKey];