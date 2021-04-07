import "styled-components";
import { FrappeTheme } from "./theme";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends FrappeTheme {}
}
