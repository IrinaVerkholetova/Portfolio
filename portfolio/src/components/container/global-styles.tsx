import styled, {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

export interface CustomTheme {
  theme?: {
    body?: string;
    text?: string;
    background?: string;
    backgroundGrey?: string;
    backgroundDarkGrey?: string;
    paragraph?: string;
    headerOrange?: string;
    headerGreen?: string;
    white?: string;

    themePrimary?: string;
    themeLighterAlt?: string;
    themeLighter?: string;
    themeLight?: string;
    themeTertiary?: string;
    themeSecondary?: string;
    themeDarkAlt?: string;
    themeDark?: string;
    themeDarker?: string;
    neutralLighterAlt?: string;
    neutralLighter?: string;
    neutralLight?: string;
    neutralQuaternaryAlt?: string;
    neutralQuaternary?: string;
    neutralTertiaryAlt?: string;
    neutralTertiary?: string;
    neutralSecondary?: string;
    neutralPrimaryAlt?: string;
    neutralPrimary?: string;
    neutralDark?: string;
    black?: string;
    primaryBackground?: string;
    primaryText?: string;
    bodyBackground?: string;
    bodyText?: string;
    disabledBackground?: string;
    disabledText?: string;
  };
}

export const GlobalStyles: GlobalStyleComponent<
  CustomTheme,
  DefaultTheme
> = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    padding: 0;
    margin: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  h1, h3 {
    margin: 0;
  }

  h2 {
    margin: 10px 0;
  }


  header {
    padding: 10px 50px;

  footer {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
  }

  small {
    display: block;
  }

  button {
    display: block;
  }

  a, label, span, select, input {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.text};
  }
`;

export const Card = styled.div`
  width: 350px;
  height: 200px;
  margin: 10px 0;
  background: ${(props) => props.theme.backgroundGrey};
`;

export const CardTitle = styled.h4`
  color: ${(props) => props.theme.paragraph};
`;

export const CardBody = styled.div`
  padding: 0 20px 10px 20px;
`;

export const Triangle = styled.div`
  width: 10px;
  top: 0;
  left: 0;
  border: 10px solid transparent;
  border-left: ${(props) => `10px solid ${props.theme.headerOrange}`};
  border-top: ${(props) => `10px solid ${props.theme.headerOrange}`};
`;
