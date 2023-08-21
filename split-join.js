let lyric = 'Tumi Bondhu Kala Pakhi.Ami Jeno Ki Bosonto Kale Tumay Bolte Parini. Sada Sada Kala Kala';

let parts = lyric.split(' ');
// console.log(parts);

let parts1 = lyric.split('.');
// console.log(parts1);

let parts2 = lyric.split('');
// console.log(parts2);


let lyric1 = 'Tumi Bondhu Kala Pakhi.Ami Jeno Ki Bosonto Kale Tumay Bolte Parini. Sada Sada Kala Kala';


let partial = lyric1.slice(20,56);
console.log(partial);

let partial1 = lyric1.substring(20,56);
console.log(partial1);


let newSong = [
  'Tumi Bondhu Kala Pakhi',
  'Ami Jeno Ki Bosonto Kale Tumay Bolte Parini',
  'Sada Sada Kala Kala'
];

let newLyric = newSong.join(' ; ');
console.log(newLyric);



