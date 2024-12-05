const navs = document.querySelectorAll('.navs')

const data = [
    {
        name: 'History',
        para: 'm baby wolf pickled schlitz try-hard normcore marfa man bun mumblecore vice pop-up XOXO lomo kombuchaglossier bicycle rights. Umami kinfolk salvia jean shorts offal venmo. Knausgaard tilde try-hard, wokefixiebanjo man bun. Small batch tumeric mustache tbh wayfarers 8-bit shaman chartreuse tacos. Viral directtradehoodie ugh chambray, craft beer pork belly flannel tacos single-origin coffee art party migas plaidpop-up'
    },

    {
        name: 'Vision',
        para: 'Man bun PBR&B keytar copper mug prism, hell of helvetica. Synth crucifix offal deep v hella biodiesel. Church-key listicle polaroid put a bird on it chillwave palo santo enamel pin, tattooed meggings franzen la croix cray. Retro yr aesthetic four loko tbh helvetica air plant, neutra palo santo tofu mumblecore. Hoodie bushwick pour-over jean shorts chartreuse shabby chic. Roof party hammock master cleanse pop-up truffaut, bicycle rights skateboard affogato readymade sustainable deep v live-edge schlitz narwhal.list itemlist itemlist item'
    },

    {
        name: 'Goals',
        para: 'Chambray authentic truffaut, kickstarter brunch taxidermy vape heirloom four dollar toast raclette shoreditch church-key. Poutine etsy tote bag, cred fingerstache leggings cornhole everyday carry blog gastropub. Brunch biodiesel sartorial mlkshk swag, mixtape hashtag marfa readymade direct trade man braid cold-pressed roof party. Small batch adaptogen coloring book heirloom. Letterpress food truck hammock literally hell of wolf beard adaptogen everyday carry. Dreamcatcher pitchfork yuccie, banh mi salvia venmo photo booth quinoa chicharrones.'
    }
]

const mainpara = document.querySelector('.mainpara')

navs.forEach((btns) => {
    btns.addEventListener('click', function (e) {
        console.log(e.target.innerText)
        let show = data.filter((data) => {
            if (data.name.includes(e.target.innerText)) {
                mainpara.innerHTML = `<span class="mainhead">${data.name}</span>
            <div class="paragraph">${data.para}</div>`
            }
        })
    })
})