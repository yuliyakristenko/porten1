let wrapper = document.querySelector('.second-line-wrapper');
let nav = document.getElementsByClassName('nav');

document.querySelector('.btn-burger').addEventListener('click', () => {
	wrapper.classList.toggle('second-line-wrapper--active-nav');

	if (wrapper.classList.contains('second-line-wrapper--active-nav')) {
		hideScroll();
	} else {
		showScroll();
	}
});

const hideScroll = () => {
	const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	nav.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	nav.style.paddingRight = '';
};

const resetNav = () => {
	wrapper.classList.remove('second-line-wrapper--active-nav');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px';
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
};
