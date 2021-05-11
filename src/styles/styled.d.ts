import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      lines: string;
      text: string;
      logoText: string,
      whiteColor: string;
      navFill: string;
   }
  }
}