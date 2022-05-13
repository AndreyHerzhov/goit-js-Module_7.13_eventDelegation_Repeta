/*
 * Делегирование
 * - один из многих
 * - несколько из многих и Set
 */

// const tagsContainer = document.querySelector('.js-tags')
// let selectedTag = null;

// // console.log(tagsContainer)

// tagsContainer.addEventListener('click', onTagsConntainerClick)

// function onTagsConntainerClick(evt) {
//     if(evt.target.nodeName !== 'BUTTON') {
//         return;
//     }

//     const currenActiveBtn = document.querySelector('.tags__btn--active')
    
//     // if(currenActiveBtn) {
//     //     currenActiveBtn.classList.remove('tags__btn--active')
//     // }
    
//     currenActiveBtn?.classList.remove('tags__btn--active') // заменяет if

//     const nextActiveBtn = evt.target
//     nextActiveBtn.classList.add('tags__btn--active')
//     selectedTag = nextActiveBtn.dataset.value

//     console.log(selectedTag)
// }


const tagsContainer = document.querySelector('.js-tags')
const selectedTags = new Set();

// selectedTags.add(5)
// selectedTags.add(5)
// selectedTags.add(5)

// selectedTags.add(3)
// selectedTags.add(3)
// selectedTags.add(3)

// selectedTags.add({a: 1})
// selectedTags.add({a: 1})

tagsContainer.addEventListener('click', onTagsConntainerClick)

function onTagsConntainerClick(evt) {
    if(evt.target.nodeName !== 'BUTTON') {
        return;
    }
    // evt.target.classList.toggle('tags__btn--active')
    // selectedTags.add(evt.target.dataset.value)

    const btn = evt.target
    const tag = btn.dataset.value
    const isActive = btn.classList.contains('tags__btn--active')
    if(isActive) {
        selectedTags.delete(tag)
    } else {
        selectedTags.add(tag)
    }

    btn.classList.toggle('tags__btn--active')
    console.log(selectedTags)
}


    
 