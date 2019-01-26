let changeColor = document.getElementById('changecolor');

chrome.storage.sync.get('coloc', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});
