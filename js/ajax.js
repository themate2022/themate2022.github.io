window.onload = function() {
	importPage('/');
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(page) {
    let contents = document.getElementById('contents');
    let html = await fetchHtmlAsText(getUrlPath(page));
    contents.classList.add('pre-animation');
    setTimeout(function(){
        contents.innerHTML = html;
        contents.classList.remove('pre-animation');
    },150)
}

function getUrlPath(req){
    if(req==='/') return './pages/home.html'
    return './pages'+req+'.html';
}