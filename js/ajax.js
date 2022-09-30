window.onload = function() {
	importPage('/');
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(page) {
    document.getElementById('contents').innerHTML = await fetchHtmlAsText(getUrlPath(page));
}

function getUrlPath(req){
    if(req==='/') return './pages/home.html'
    return './pages'+req+'.html';
}