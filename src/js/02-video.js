import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
import throttle from 'lodash.throttle';

const onPlay = function (data) {
  localStorage.setItem('videoplayer-current-time', data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

let time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time);
