function darkmode(){
    const button = document.querySelector('#darkModeButton')
    const imgDm = document.querySelector('#darkModeButton img')
    const html = document.querySelector('html')

    if(localStorage.getItem('darkmode')){
        html.classList.add('darkmode')
        imgDm.classList.add('darkOn')
        imgDm.src = '../../assets/img/sun.svg'
    }

    button.addEventListener('click', () =>{
        html.classList.toggle('darkmode')

        imgDm.classList.toggle('darkOn')

        const dmPref = localStorage.getItem('darkmode')
        
        if(!dmPref){
            localStorage.setItem('darkmode', true)
        }
        if(dmPref){
            localStorage.removeItem('darkmode')
        }

        if(imgDm.classList.contains('darkOn')){
            imgDm.src = '../../assets/img/sun.svg'
        }else{
            imgDm.src = '../../assets/img/moon.svg'
        }
    })
}
darkmode()