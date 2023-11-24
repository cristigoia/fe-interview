import { style, globalStyle } from '@vanilla-extract/css';

const font = "system-ui";
const colorWhite = "#ffffff";
const colorDark = "#000000";
const colorBg = "#E9F4EF";
const colorBgR = "#2F3130";

globalStyle('*', {
  outline: 'none',
});

globalStyle('ul', {
  padding: '0',
  margin: '0',
});

globalStyle('li', {
  listStyleType: 'none',
});

globalStyle('html, body', {
  fontFamily: font,
  fontWeight: 400,
  color: colorDark,
  padding: 0,
  margin: 0,
});

export const header = style({
  position: 'fixed',
  width: '90vw',
  top: 0,
  left: 0,
  right: 0,
  margin: '0 auto',
  display: 'flex',
  height: '60px',
  alignItems: 'center',
  justifyContent: 'space-between',
  zIndex: 9999,
});

export const logo = style({
  width: '80px',
});

export const menu = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  color: colorWhite,
  cursor: 'pointer',
});

export const container = style({
  width: '100%',
  height: '100dvh',
  display: 'flex',
  alignItems: 'end',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  flexWrap: 'wrap',
  backgroundColor: colorBg,
});

export const containerRight = style({
  backgroundColor: colorBgR,
  position: 'fixed',
  right: 0,
  top: 0,
  height: '100vh',
  width: '50vw',
  zIndex: 0,
});

export const chatbox = style({
  position: 'relative',
  left: 0,
  right: 0,
  bottom: '25px',
  margin: '0 auto',
  backgroundColor: '#ffffff90',
  height: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
  borderRadius: '30px',
  padding: '13px 5px',
  width: '590px',
  maxWidth: '90vw',
  fontSize: '18px',
  backdropFilter: 'blur(400px) brightness(200%)',
  zIndex: 11,
  transition: 'all 200ms ease',
  minHeight: '30px',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.025)',
  '@media': {
    'screen and (max-width: 600px)': {
      alignItems: 'end',
    },
  },
});

export const chatboxLeft = style({
  minHeight: '35px',
  width: 'calc(100% - 70px)',
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const chatboxRight = style({
  minWidth: '35px',
  height: '35px',
  display: 'flex',
  alignItems: 'center',
});

export const chatboxActive = style({
  backgroundColor: colorWhite,
});

export const textarea = style({
  border: 0,
  fontSize: '16px',
  lineHeight: 1.3,
  resize: 'none',
  backgroundColor: 'transparent',
  fontFamily: font,
  maxHeight: '150px',
  overflowX: 'hidden',
  overflowY: 'auto',
  padding: 0,
  margin: '0 10px',
  width: '50%',
  boxSizing: 'border-box',
  height: '20px',
  '@media': {
    'screen and (max-width: 600px)': {
      minHeight: '22px',
      marginLeft: '20px',
      width: '100%',
    },
  },
});

export const textareaPlaceholder = style({
  color: colorDark + '15',
  fontSize: '16px',
  fontFamily: font,
  lineHeight: 1.3,
});


export const buttonIcon = style({
  width: '100%',
  height: '100%',
});

export const button = style({
  padding: 0,
  border: 0,
  backgroundColor: 'transparent',
  width: '16px',
  height: '16px',
  margin: '0 15px',
  cursor: 'pointer',
  display: 'none',
});

export const buttonActive = style({
  display: 'block',
});

export const atIcon = style({
  width: '16px',
  height: '16px',
  paddingTop: '3px',
});

export const logoIcon = style({
  margin: '0 0 0 15px',
  height: '19px',
  '@media': {
    'screen and (max-width: 600px)': {
      display: 'none',
    },
  },
});


export const atToggle = style({
  cursor: 'pointer',
});

export const atMenuWrap = style({
  width: '100%',
});

export const atMenu = style({
  position: 'relative',
  left: 0,
  right: 0,
  margin: '0 auto',
  width: '600px',
  maxWidth: '90vw',
  fontSize: '16px',
  borderRadius: '30px',
  bottom: 0,
  paddingBottom: '25px',
  backgroundColor: colorWhite+'90',
  backdropFilter: 'blur(500px) brightness(200%)',
  height: '100%',
  maxHeight: '250px',
  transition: 'all 150ms ease',
  zIndex: 10,
  opacity: 0,
  overflow: 'hidden',
  transform: 'translateY(30px)',
  pointerEvents: 'none',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.025)',
});

export const atMenuActive = style({
  opacity: 1,
  transition: 'all 250ms ease',
  transform: 'translateY(0)',
  pointerEvents: 'all',
});

export const atMenuUl = style({
  overflow: 'scroll',
  height: '100%',
});

export const atMenuLi = style({
  display: 'flex',
  gap: '20px',
  padding: '8px',
  cursor: 'pointer',
  backgroundColor: 'transparent',
  transition: 'all 250ms ease',
  alignItems: 'center',
  ':hover': {
    backgroundColor: colorDark + '15',
	}
});

export const atMenuLiFocused = style({
  backgroundColor: colorDark + '15',
});

export const atMenuLiName = style({
  paddingLeft: '10px',
  opacity: 0.4,
});

export const atMenuImg = style({
  width: '42px',
  height: '42px',
  borderRadius: '30px',
  objectFit: 'cover',
});

export const searchTagWrap = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 600px)': {
      width: '100%',
      marginBottom: '5px',
    },
  },
});

export const searchTag = style({
  position: 'relative',
  fontSize: '16px',
  backgroundColor: colorDark,
  color: '#fefefe',
  padding: '4px 7px',
  borderRadius: '20px',
  display: 'inline-block',
  cursor: 'pointer',
  transition: 'all 150ms ease',
  overflowX: 'hidden',
  top: '2.5px',
  lineHeight: 1.1,
  margin: '0 0 0 15px',
  ':hover': {
    paddingRight: '27px',
  },
});

export const searchTagActive = style({
  display: 'block',
});

export const searchTagCloseIcon = style({
  marginLeft: '7px',
  width: '15px',
  height: '15px',
  position: 'absolute',
  top: '5px',
});