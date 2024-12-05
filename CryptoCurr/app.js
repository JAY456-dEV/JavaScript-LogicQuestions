// const tbody = document.querySelector('.tableBody')


// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         'X-API-KEY': '79YTmm2S7IN6dC1szxl/TlJ9zQEDi6Ri71rq4ZnQ+m0='
//     }
// };

// let DataSearch;

// datatch('https://openapiv1.coinstats.app/coins', options)
//     .then((res) => {
//         return res.json();
//     })
//     .then((data) => {
//         dataFor(data.result);
//         DataSearch = data.result;
//     })

// const search = document.querySelector('.search')

// search.addEventListener('input', function (e) {
//     console.log(e.target.value.toLowerCase())
//     let FilteredData = DataSearch.filter((data) => data.name.toLowerCase().includes(e.target.value.toLowerCase()))
//     dataFor(FilteredData)
//     console.log(FilteredData)
// })


// function dataFor(data) {
//     let show = ''
//     data.map((curr) => {
//         // console.log(curr)
//         return show += `<tr>
//                 <td>${curr.rank}</td>
//                 <td>${curr.name}</td>
//                 <td><img src=${curr.icon}  alt="" /></td>
//                 <td>${curr.marketCap}</td>
//                 <td>${curr.price}</td>
//                 <td>${curr.totalSupply}</td>
//                 <td>${curr.volume}</td>
//             </tr>`
//     })
//     tbody.innerHTML = show
// }

const tbody = document.querySelector('.tableBody')


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        'X-API-KEY': '79YTmm2S7IN6dC1szxl/TlJ9zQEDi6Ri71rq4ZnQ+m0='
    }
};

let DataSearch;

fetch('https://openapiv1.coinstats.app/coins', options)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        dataFor(data.result);
        DataSearch = data.result;
    })

const search = document.querySelector('.search')


let searchName = ''

search.addEventListener('input', function (e) {
    searchName = e.target.value.toLowerCase()
})



function dataFor(data) {
    console.log(searchName)
    let show = ''
    data.filter((data) => data.name.toLowerCase().includes(searchName)).map((curr) => {
        // console.log(curr)
        return show += `<tr>
                <td>${curr.rank}</td>
                <td>${curr.name}</td>
                <td><img src=${curr.icon}  alt="" /></td>
                <td>${curr.marketCap}</td>
                <td>${curr.price}</td>
                <td>${curr.totalSupply}</td>
                <td>${curr.volume}</td>
            </tr>`
    })
    tbody.innerHTML = show
}
