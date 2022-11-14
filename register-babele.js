Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'pf2e-ko',
			lang: 'ko',
			dir: 'compendium'
		});
	}
});
