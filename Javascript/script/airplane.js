import './scroll-timeline.js';

const timelineSpace = document.querySelector('.airplane-scroll-timeline');
const airplane = document.querySelector('.airplane');

airplane.animate([
  { offsetDistance: '100%' },
  { offsetDistance: '0%' }
], {
  timeline: new ScrollTimeline({
    scrollOffsets: [
      { target: timelineSpace, edge: 'start', threshold: 1},
      { target: timelineSpace, edge: 'end', threshold: 1}
    ]
  })
});
