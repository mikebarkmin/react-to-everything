import color from 'color';
import { Platform, Dimensions, PixelRatio } from 'react-native';
import colors from './colors';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const platformStyle = undefined;

const brandPrimary = {
  normal: (platform === 'ios') ? '#007aff' : colors.primary.normal,
  lighter: colors.primary.lighter,
  darker: colors.primary.darker,
};
const brandSecondary = {
  normal: colors.secondary.normal,
  lighter: colors.secondary.lighter,
  darker: colors.secondary.darker,
};
const brandText = {
  primary: '#1F1F1F',
  secondary: '#787878',
  disabled: '#939393',
};
const brandInfo = '#00FF00';
const brandSuccess = '#5cb85c';
const brandDanger = '#d9534f';
const brandWarning = '#f0ad4e';
const brandSidebar = '#252932';

export default {
  platformStyle,
  platform,
    // AndroidRipple
  androidRipple: true,
  androidRippleColor: 'rgba(256, 256, 256, 0.3)',
  androidRippleColorDark: 'rgba(0, 0, 0, 0.15)',

    // Badge
  badgeBg: brandSecondary.normal,
  badgeColor: '#fff',
    // New Variable
  badgePadding: (platform === 'ios') ? 3 : 0,

    // Button
  btnFontFamily: (platform === 'ios') ? 'System' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

    // CheckBox
  CheckboxRadius: (platform === 'ios') ? 13 : 0,
  CheckboxBorderWidth: (platform === 'ios') ? 1 : 2,
  CheckboxPaddingLeft: (platform === 'ios') ? 4 : 2,
  CheckboxPaddingBottom: (platform === 'ios') ? 0 : 5,
  CheckboxIconSize: (platform === 'ios') ? 21 : 14,
  CheckboxIconMarginTop: (platform === 'ios') ? undefined : 1,
  CheckboxFontSize: (platform === 'ios') ? (23 / 0.9) : 18,
  DefaultFontSize: 17,
  checkboxBgColor: brandPrimary.lighter,
  checkboxSize: 20,
  checkboxTickColor: '#fff',

    // New Variable
  get defaultTextColor() {
    return this.textColor;
  },


  get btnPrimaryBg() {
    return this.brandPrimary.normal;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (platform === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: '#fff',

    // Color
  brandPrimary: brandPrimary.normal,
  brandInfo,
  brandSuccess,
  brandDanger,
  brandWarning,
  brandSidebar,


    // Font
  fontFamily: (platform === 'ios') ? 'System' : 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


    // Footer
  footerHeight: 55,
  footerDefaultBg: (platform === 'ios') ? '#F8F8F8' : brandPrimary.lighter,


    // FooterTab
  tabBarTextColor: (platform === 'ios') ? '#6b6b6b' : brandPrimary.lighter,
  tabBarTextSize: (platform === 'ios') ? 14 : 11,
  activeTab: (platform === 'ios') ? brandPrimary.darker : brandText.primary,
  sTabBarActiveTextColor: brandPrimary.darker,
  tabBarActiveTextColor: (platform === 'ios') ? brandPrimary.darker : '#fff',
  tabActiveBgColor: (platform === 'ios') ? brandPrimary.lighter : brandPrimary.normal,

    // Tab
  tabDefaultBg: (platform === 'ios') ? '#F8F8F8' : brandPrimary.normal,
  topTabBarTextColor: (platform === 'ios') ? '#6b6b6b' : brandPrimary.lighter,
  topTabBarActiveTextColor: (platform === 'ios') ? brandPrimary.darker : '#fff',
  topTabActiveBgColor: (platform === 'ios') ? brandPrimary.lighter : undefined,
  topTabBarBorderColor: (platform === 'ios') ? '#a7a6ab' : '#fff',
  topTabBarActiveBorderColor: (platform === 'ios') ? brandPrimary.darker : '#fff',


    // Header
  toolbarBtnColor: (platform === 'ios') ? brandPrimary.normal : '#fff',
  toolbarDefaultBg: (platform === 'ios') ? '#F8F8F8' : brandPrimary.normal,
  toolbarHeight: (platform === 'ios') ? 64 : 56,
  toolbarIconSize: (platform === 'ios') ? 20 : 22,
  toolbarSearchIconSize: (platform === 'ios') ? 20 : 23,
  toolbarInputColor: (platform === 'ios') ? '#CECDD2' : '#fff',
  searchBarHeight: (platform === 'ios') ? 30 : 40,
  toolbarInverseBg: '#222',
  toolbarTextColor: (platform === 'ios') ? '#000' : '#fff',
  toolbarDefaultBorder: (platform === 'ios') ? '#a7a6ab' : brandPrimary.normal,
  iosStatusbar: 'dark-content',
  get statusBarColor() {
    return color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: 'Ionicons',
  iconFontSize: (platform === 'ios') ? 30 : 28,
  iconMargin: 7,
  iconHeaderSize: (platform === 'ios') ? 33 : 24,


    // InputGroup
  inputFontSize: 17,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 50,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (platform === 'ios') ? 37 : 30,
  lineHeight: (platform === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#c9c9c9',
  listDividerBg: '#f4f4f4',
  listItemHeight: 45,
  listBtnUnderlayColor: '#DDD',

    // Card
  cardBorderColor: '#ccc',

    // Changed Variable
  listItemPadding: (platform === 'ios') ? 10 : 12,

  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (platform === 'ios') ? 25 : 23,
  radioSelectedColorAndroid: brandPrimary.normal,

    // New Variable
  radioBtnLineHeight: (platform === 'ios') ? 29 : 24,

  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: brandText.primary,
  inverseTextColor: '#fff',
  noteFontSize: 14,


    // Title
  titleFontfamily: (platform === 'ios') ? 'System' : 'Roboto_medium',
  titleFontSize: (platform === 'ios') ? 17 : 19,
  subTitleFontSize: (platform === 'ios') ? 12 : 14,
  subtitleColor: (platform === 'ios') ? brandText.secondary : '#FFF',

    // New Variable
  titleFontColor: (platform === 'ios') ? brandText.primary : '#FFF',


    // Other
  borderRadiusBase: (platform === 'ios') ? 5 : 2,
  borderWidth: (1 / PixelRatio.getPixelSizeForLayoutSize(1)),
  contentPadding: 10,

  get darkenHeader() {
    return color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
  deviceWidth,
  deviceHeight,

    // New Variable
  inputGroupRoundedBorderRadius: 30,
};
