// - Распостранение событий
// - Делегирование событий

const refs = {
    parent: document.querySelector('#parent'),
    child: document.querySelector('#child'),
    innerChild: document.querySelector('#inner-child')
}

refs.parent.addEventListener('click', onParentClick)
refs.child.addEventListener('click', onChildClick)
refs.innerChild.addEventListener('click', onInnerChildClick)

// window.addEventListener('click', (ev) => {
//     console.log('evt.target', ev.target)
//     console.log('evt.currentTraget', ev.currentTarget)
// })

function onParentClick(evt) {
    console.log('onParentClick')
    console.log('onParentClick -> evt.target', evt.target)
    console.log('onParentClick -> evt.currentTraget', evt.currentTarget)
}

function onChildClick(evt) {
    console.log('onChildClick')
    console.log('onChildClick -> evt.target', evt.target)
    console.log('onChildClick -> evt.currentTraget', evt.currentTarget)
}

function onInnerChildClick(evt) {
    console.log('onInnerChildClick')
    console.log('onInnerChildClick -> evt.target', evt.target)
    console.log('onInnerChildClick -> evt.currentTraget', evt.currentTarget)
}