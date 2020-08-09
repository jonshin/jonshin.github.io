gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ease: "none", duration: 2});

// create a sequence that moves 3 of the panels in from different directions 
const tl = gsap.timeline();
tl.fromTo(".orange",  { yPercent: -100, x: 0}, {yPercent: 0}, )
	.addLabel("snap")
	.fromTo(".windows", {yPercent: 100, y: 0}, {yPercent: 0}, 0)
	.fromTo(".two", {yPercent: 100, y: 0}, {yPercent: 0}, 0)
	.fromTo(".phone", {yPercent: -100, y: 0}, {yPercent: 0}, 0)

	.fromTo(".purple",  { yPercent: -100, x: 0}, {yPercent: 0}, 2.25)
	.addLabel("snap2")
	.fromTo(".slums", {yPercent: 100, y: 0}, {yPercent: 0}, 2.25)
	.fromTo(".three",  { yPercent: 100, x: 0}, {yPercent: 0}, 2.25)
	.fromTo(".beanie", {yPercent: -100, y: 0}, {yPercent: 0}, 2.25)

	.fromTo(".green",  { yPercent: -100, x: 0}, {yPercent: 0}, 5.5)
	.addLabel("snap3")
	.fromTo(".crowd", {yPercent: 100, y: 0}, {yPercent: 0}, 5.5)
	.fromTo(".four",  { yPercent: 100, x: 0}, {yPercent: 0}, 5.5)
	.fromTo(".shoes", {yPercent: -100, y: 0}, {yPercent: 0}, 5.5)

	.fromTo(".grey", {yPercent: -100, y: 0}, {yPercent: 0}, 7.75)
	.addLabel("snap4")
	.fromTo(".market", {yPercent: 100, y: 0}, {yPercent: 0}, 7.75)
	.fromTo(".five", {yPercent: 100, y: 0}, {yPercent: 0}, 7.75)
	.fromTo(".subway", {yPercent: -100, y: 0}, {yPercent: 0}, 7.75)

	// .fromTo(".beige", {yPercent: -100, y: 0}, {yPercent: 0}, 10)
	// .addLabel("snap5")
	// .fromTo(".signs2", {yPercent: 100, y: 0}, {yPercent: 0}, 10)
	// .fromTo(".six", {yPercent: 100, y: 0}, {yPercent: 0}, 10)
	// .fromTo(".mask2", {yPercent: -100, y: 0}, {yPercent: 0}, 10)
  ;

// pin the container and link the animation to the scrollbar (scrub: true). We could easily embed this in the gsap.timeline() to shorten things a bit, but this is to show that you can create the ScrollTrigger separately if you prefer. 
ScrollTrigger.create({
  animation: tl,
  trigger: "#container",
  start: "top top",
  end: "+=15000", 
  scrub: true,
  pin: true,
  anticipatePin: 1,
  // snap: {
  //   snapTo: "labels", // snap to the closest label in the timeline
  //   duration: {min: 0.2, max: 1}, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
  //   delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
  // }
});

// ScrollTrigger.create({
//   start: 1,
//   end: () => ScrollTrigger.maxScroll(window) - 1,
//   onLeaveBack: self => self.scroll(ScrollTrigger.maxScroll(window) - 2),
//   onLeave: self => self.scroll(2)
// }).scroll(2);
