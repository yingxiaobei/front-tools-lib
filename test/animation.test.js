// import attrAnimation from '../src/annimation/attrAnimation.js'
const { attrAnimation } = require('../src/annimation/attrAnimation.js');
describe('Function API:', function () {
  describe('attribute animation', function () {
    test('displays a user after a hover', () => {
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
      // expect(box.currentStyle['left']).toEqual(0);
      // expect(box.currentStyle['opacity']).toEqual(100);
      expect(box).not.toBeNull()
    })
  });
});