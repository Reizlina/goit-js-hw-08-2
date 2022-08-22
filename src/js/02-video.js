import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from 'lodash.throttle';

player.on(
  'timeupdate',
  throttle(e => {
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);

const onPlay = function () {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
};
player.on('play', onPlay);
