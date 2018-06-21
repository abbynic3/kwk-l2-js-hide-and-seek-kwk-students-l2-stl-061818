//Code your solution here
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget(target) {
 return document.querySelector('#nested div.target')
}

function increaseRankBy(n) {
  return document.querySelectorAll('.ranked-list')
}

function deepestChild() {
  return document.querySelector('div#grand-node')
}