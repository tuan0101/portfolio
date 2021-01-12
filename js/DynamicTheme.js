let theme = localStorage.getItem('theme')
if(theme == null){
	setTheme('light')
}else{
	setTheme(theme)
}

let themeDots;

document.addEventListener('DOMContentLoaded', function() {
    themeDots = document.getElementsByClassName('theme-dot');
    for (var i=0; themeDots.length > i; i++){
        themeDots[i].addEventListener('click', function(){
            let mode = this.dataset.mode
            // console.log('Option clicked:', mode)
            setTheme(mode)
        })
    }
  });


// /portfolio/css for gh-page branch
function setTheme(mode){
	if(mode == 'light'){
		document.getElementById('theme-style').href = '/portfolio/css/default.css'
	}

	if(mode == 'blue'){
        document.getElementById('theme-style').href = '/portfolio/css/blue.css'
	}

	if(mode == 'green'){
		document.getElementById('theme-style').href = '/portfolio/css/green.css'
	}

	if(mode == 'purple'){
		document.getElementById('theme-style').href = '/portfolio/css/purple.css'
	}

	localStorage.setItem('theme', mode)
}