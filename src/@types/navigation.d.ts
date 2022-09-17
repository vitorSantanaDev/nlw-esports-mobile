import { IGame } from "../interfaces/game";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Home: undefined;
      Game: IGame | undefined;
    }
  }
}
