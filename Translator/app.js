const url = 'https://google-translate1.p.rapidapi.com/language/translate/v2/languages';
const options = {
	method: 'GET',
	headers: {
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Key': 'd70947dec3msh1b81a2439576af8p189983jsn9d7e09b360e1',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
	}
};

fetch(url).then((res)=>{
    return res.json()
    .then((data)=>{
        console.log(data)
    })
})