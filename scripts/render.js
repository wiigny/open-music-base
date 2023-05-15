const ul = document.querySelector('#renderMusical')
products.forEach(albums => ul.append(makeRender(albums)))
function addRender(array, valor){
    ul.innerHTML = ''
    
    array.forEach(music => {
        if(music.price <= valor){
            ul.appendChild(makeRender(music))
        }
    })
    if(valor < rangeMin()){
        let p = document.createElement('p')
        p.innerText = 'Nenhum Album Encontrado'
        p.classList = 'text3'
        ul.appendChild(p)
    }
}


function makeRender(obj){   

    let li = document.createElement('li')
        let divImg = document.createElement('div')
            let img = document.createElement('img')
                img.src = obj.img
        divImg.appendChild(img)
        
        let divInfo = document.createElement('div')
            divInfo.classList = 'display__flex gap25 flex__direction-column'
            let divSpan = document.createElement('div')
                divSpan.classList = 'display__flex gap30'
                let spanGroup = document.createElement('span')
                    spanGroup.classList = 'text2'
                    spanGroup.id = 'musicGroup'
                    spanGroup.innerText = obj.band
                let spanYear = document.createElement('span')
                    spanYear.classList = 'text2'
                    spanYear.id = 'musicYear'
                    spanYear.innerText = obj.year
            divSpan.append(spanGroup,spanYear)

            let h3 = document.createElement('h3')
                h3.classList = 'title2'
                h3.id = 'albumName'
                h3.innerText = obj.title

            let divPrice = document.createElement('div')
                divPrice.classList = 'display__flex justify__S-B align__itens-center'
                let p = document.createElement('p')
                    p.classList = 'text3'
                    p.id = 'price'
                    p.innerText = `R$ ${obj.price}.00`
                let button = document.createElement('p')
                    button.classList = 'text2 button__filters-buy'
                    button.id = 'buy'
                    button.innerText = 'Comprar'
            divPrice.append(p, button)
        divInfo.append(divSpan, h3, divPrice)
    li.append(divImg, divInfo)
    
    return li
}
