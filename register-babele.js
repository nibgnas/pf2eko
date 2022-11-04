Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'pf2eko',
			lang: 'ko',
			dir: 'compendium'
		});
	}
});
