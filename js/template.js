var WHITE_ICON = './images/icon-white.svg';
var GRAY_ICON = './images/icon-gray.svg';

var onBtnClick = function (t, opts) {
  console.log('Someone clicked the button');
};

window.TrelloPowerUp.initialize({
  'board-buttons': function (t, opts) {
    return [{
      // we can either provide a button that has a callback function
      icon: WHITE_ICON,
      text: 'Callback',
      callback: onBtnClick
    }, {
      // or we can also have a button that is just a simple url
      // clicking it will open a new tab at the provided url
      icon: WHITE_ICON,
      text: 'URL',
      url: 'https://trello.com/inspiration',
      target: 'Inspiring Boards' // optional target for above url
    }];
  }
});
