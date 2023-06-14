
const dadosJson = './dados.json'


    fetch(dadosJson)
    .then((response) => response.json())
    .then((json) => {
        const x = json.drops
        x.map((item) => {
            console.log(item)
        })
    })