import { environmentKeysType } from "../types/environmentKeys.type";

export class EnvironmentSingleton {
    private static _instance: EnvironmentSingleton;
    static getInstance() {
        if (!this._instance) {
            this._instance = new EnvironmentSingleton();
        }
        return EnvironmentSingleton._instance;
    }

    getEnvironmentValue(environmentKey: environmentKeysType): string {
        return import.meta.env[environmentKey] ?? '';
    }
}