(function(w,d,undefined){

    let el_html = d.documentElement;
    let el_body = d.getElementsByTagName('body')[0];
    let header = d.getElementById('header');

    let menuIsStuck = function () {

        let wScrollTop	= w.pageYOffset || el_body.scrollTop;
        let regexp		= /(nav\-is\-stuck)/i;
        let classFound	= el_html.className.match( regexp );
        let navHeight	= header.offsetHeight;
        let bodyRect	= el_body.getBoundingClientRect();
        let scrollValue	= 600;

        // si le scroll est d'au moins 600 et la class nav-is-stuck n'existe pas sur HTML
        if ( wScrollTop > scrollValue && !classFound ) {
            el_html.className = el_html.className + ' nav-is-stuck';
            el_body.style.paddingTop = navHeight + 'px';
        }

        // si le scroll est inférieur à 2 et la class nav-is-stuck existe
        if ( wScrollTop < 2 && classFound ) {
            el_html.className = el_html.className.replace( regexp, '' );
            el_body.style.paddingTop = '0';
        }

    };

    let onScrolling = function () {
        menuIsStuck();
        // on pourrait faire plein d'autres choses ici
    };

    // quand on scroll
    w.addEventListener('scroll', function(){
        w.requestAnimationFrame( onScrolling );
    });

}(window, document));