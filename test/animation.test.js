import attrAnimation from '../src/attrAnimation.js'

test('displays a user after a click', () => {
  // Set up our document body
  document.body.innerHTML =
    `
    <div id="box">
      <span>展开</span>
    </div>
  `
  var box = document.getElementById('box')
  attrAnimation(this, {
    "left": -200,
    "opacity": 30
  })
  attrAnimation(this, {
    "left": 0,
    "opacity": 100
  })
  expect(box.currentStyle['left']).toEqual(0);
  expect(box.currentStyle['opacity']).toEqual(100);
})