var titles = [
  "@",
  "@K",
  "@Kh",
  "@Kha",
  "@Khan",
  "@Khanh",
  "@KhanhDev",
  "@Khan",
  "@Kha",
  "@Kh",
  "@K",
  "@Khan",
  "@Khanh",
  "@K"
];

function changeTitle() {
  var index = 0;

  setInterval(function() {
      document.title = titles[index];
      index = (index + 1) % titles.length;
  }, 1000);
}

changeTitle();
