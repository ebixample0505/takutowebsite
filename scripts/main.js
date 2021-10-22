document.addEventListener("DOMContentLoaded", function() { new Main });
class Main { constructor() { this.header = document.querySelector(".header"), this.sides = document.querySelectorAll(".side"), this._observers = [], this._init() }
    set observers(e) { this._observers.push(e) }
    get observers() { return this._observers }
    _init() { new MobileMenu, this.hero = new HeroSlider(".swiper-container"), Pace.on("done", this._paceDone.bind(this)) }
    _paceDone() { this._scrollInit() }
    _inviewAnimation(e, i) { i ? e.classList.add("inview") : e.classList.remove("inview") }
    _navAnimation(e, i) { i ? this.header.classList.remove("triggered") : this.header.classList.add("triggered") }
    _sideAnimation(e, i) { i ? this.sides.forEach(e => e.classList.add("inview")) : this.sides.forEach(e => e.classList.remove("inview")) }
    _textAnimation(e, i) { if (i) { new TweenTextAnimation(e).animate() } }
    _toggleSlideAnimation(e, i) { i ? this.hero.start() : this.hero.stop() }
    _destroyObservers() { this.observers.forEach(e => { e.destroy() }) }
    destroy() { this._destroyObservers() }
    _scrollInit() { this.observers = new ScrollObserver(".nav-trigger", this._navAnimation.bind(this), { once: !1 }), this.observers = new ScrollObserver(".cover-slide", this._inviewAnimation), this.observers = new ScrollObserver(".appear", this._inviewAnimation), this.observers = new ScrollObserver(".tween-animate-title", this._textAnimation, { rootMargin: "-200px 0px" }), this.observers = new ScrollObserver(".swiper-container", this._toggleSlideAnimation.bind(this), { once: !1 }), this.observers = new ScrollObserver("#main-content", this._sideAnimation.bind(this), { once: !1, rootMargin: "-300px 0px" }) } }