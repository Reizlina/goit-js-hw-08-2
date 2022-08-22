import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from 'lodash.throttle';

const onPlay = function () {
  const time = localStorage.getItem('videoplayer-current-time');
  player.setCurrentTime(time);
};

player.on(
  'timeupdate',
  throttle(e => {
    console.log(e.seconds);
    localStorage.setItem('videoplayer-current-time', e.seconds);
  }, 1000)
);
player.on('play', onPlay);
