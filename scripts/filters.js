let albuns = products
function eventButton(){
    const listButtons = document.querySelectorAll('#listButtons li')
    const ul = document.querySelector('#renderMusical')

    listButtons.forEach(list=>{
        list.addEventListener('click', (e)=>{
            listButtons.forEach(buttonList=>{
                buttonList.classList.remove('button__activeted')
                e.target.classList.add('button__activeted')
            })

            ul.innerHTML = ''

            let genderName = e.target.innerText

            if(genderName === "Todos"){
                document.querySelector('#inputRange').value = rangeMax()
                document.querySelector('#valueFiltered').innerText = `Até R$ ${rangeMax()}.00`
                
                albuns = products
                
                addRender(albuns, checkValue())
            }else{
                albuns = []

                products.forEach(album=> album.category.forEach(gender=> {
                    if(gender.includes(genderName)){
                        albuns.push(album)
                    }
                }))

                addRender(albuns, checkValue())
            }
        })
    })  
}
eventButton()
inputRange()

function inputRange(){
    const inputRange = document.querySelector('#inputRange')
    const pValue = document.querySelector('#valueFiltered')

    inputRange.max = rangeMax()
    inputRange.value = rangeMax()
    pValue.innerText = `Até R$ ${rangeMax()}.00`

    inputRange.addEventListener('input', (e)=>{

        document.querySelector('#renderMusical').innerHTML = ''

        pValue.innerText = `Até R$ ${checkValue()}.00`

        addRender(albuns, checkValue())
    })
}
function rangeMax(){
    return Math.max(...products.map(obj=> obj.price))
}
function rangeMin(){
    return Math.min(...products.map(obj=> obj.price))
}

function checkValue(){
    return document.querySelector('#inputRange').value
}