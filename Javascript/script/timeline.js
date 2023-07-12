import './scroll-timeline.js';

const progressBar = document.querySelector('.progress');
const images = document.querySelectorAll('.target-image');

progressBar.animate([
  { transform: 'scaleX(0)' },
  { transform: 'scaleX(1)' }
], {
  timeline: new ScrollTimeline({
    // 기준점, target 은 기준 엘리먼트, edge는 시작점과 끝점, threshole는 얼만큼 보이는 시점에서 시작할지
    scrollOffsets: [
      { target: document.body, edge: 'start', threshold: 1 },
      { target: document.body, edge: 'end', threshold: 1 },
    ]
  })
});
/* timeline 은 new ScrollTimelist({scrollOffsets : []}) */

images.forEach(img => {
  const imgTop = img.offsetTop;
  const imgHeight = img.offsetHeight;
  const pos1 = (imgTop + imgHeight) - window.innerHeight;
  const pos2 = imgTop - 400;

  img.animate([
    { opacity: 0 },
    { opacity: 1 }
  ],{
    timeline: new ScrollTimeline({
      scrollOffsets: [
        new CSSUnitValue(pos1, 'px'),
        new CSSUnitValue(pos2, 'px')
      ]
    })
  });
});