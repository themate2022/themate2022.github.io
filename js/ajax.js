window.onload = function() {
	importPage('/');
}

async function fetchHtmlAsText(url) {
    return await (await fetch(url)).text();
}

async function importPage(page) {
    let contents = document.getElementById('contents');
    contents.classList.add('pre-animation');
    let html = await fetchHtmlAsText(getUrlPath(page));
    setTimeout(function(){
        contents.innerHTML = html;
        contents.classList.remove('pre-animation');
    },150)
}

function getUrlPath(req){
    if(req==='/') return './pages/home.html'
    return './pages'+req+'.html';
}