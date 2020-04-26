function show_modal(element){
    document.querySelector('.modal-container').style.display = 'block'
    // Blur everything except modal
    document.querySelector('div:not(.modal-container)').classList.add('blur-content')
    // Modal should be hidden when clicked anywhere except on modal
    document.querySelector('.modal-container:not(.modal)').addEventListener('click', function(element){
        if(document.querySelector('.modal-container').style.display !== 'none'){
            if(element.target.className === 'modal-container'){
                hide_modal(element)
            }
        }
    })
}

function hide_modal(element){
    document.querySelector('.modal-container').style.display = 'none'
    document.querySelector('div:not(.modal-container)').classList.remove('blur-content')
}