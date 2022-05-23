// eslint-disable-next-line strict
module.exports = function checkagent(ua) {
  const isWindowsPhone = /(?:Windows Phone)/.test(ua),
    isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
    isAndroid = /(?:Android)/.test(ua),
    isFireFox = /(?:Firefox)/.test(ua),
    // eslint-disable-next-line no-unused-vars
    isChrome = /(?:Chrome|CriOS)/.test(ua),
    isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
    isPhone = /(?:iPhone)/.test(ua) && !isTablet,
    isPc = !isPhone && !isAndroid && !isSymbian,
    isWechat = /(?:MicroMessenger)/.test(ua);
  const equipment = {
    isTablet,
    isPhone,
    isAndroid,
    isPc,
    isWechat,
  };
  if (equipment.isAndroid || equipment.isPhone || equipment.isWechat) {
    return 0;
  } else if (equipment.isTablet) {
    return 1;
  } else if (equipment.isPc) {
    return 2;
  }
};

/*
返回值:
0 手机
1 平板
2 pc
*/
