// add new todo and update counter

const newtodo = document.querySelector('.new-todo');
const todolist = document.querySelector('.todo-list');
let count = document.querySelector('.count');
let length = document.querySelectorAll('.notfinished').length;



newtodo.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        let newItem = document.createElement("li");
        newItem.innerHTML = `<input type="checkbox" id="" class="checkbox notfinished"> <label for=""></label><span>${newtodo.value}</span><button class="del-btn"><img src="/images/icon-cross.svg" alt="" class="delete"></button>`;
        todolist.prepend(newItem);

        newtodo.value = '';
        length = document.querySelectorAll('.notfinished').length;
        count.innerText = `${length} items left.`

    }

})



// add class if finished, if not finished, update counter

todolist.addEventListener('change', function (e) {

    if (e.target.checked) {
        e.target.classList.add('finished');
        e.target.classList.remove('notfinished');
    } else {
        e.target.classList.add('notfinished');
        e.target.classList.remove('finished');
    }

    length = document.querySelectorAll('.notfinished').length;
    count.innerText = `${length} items left.`

});

// delete 

todolist.addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        e.target.parentElement.parentElement.remove();
        length = document.querySelectorAll('.notfinished').length;
        count.innerText = `${length} items left.`
    }

})


// filter: all: active: if!checked, completed: if checked

let filterAll = document.querySelector('.all');
let filterActive = document.querySelector('.active');
let filterCompleted = document.querySelector('.completed');
let clearCompleted = document.querySelector('.clear');

filterActive.addEventListener('click', function () {
    filterActive.classList.add('clickedfilter');
    filterAll.classList.remove('clickedfilter');
    filterCompleted.classList.remove('clickedfilter');
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let box of checkboxes) {
        if (box.classList.contains('finished')) {
            box.parentElement.style.display = "none";
        } else if (box.classList.contains('notfinished')) {
            box.parentElement.style.display = "flex";
        }
    }
});

filterCompleted.addEventListener('click', function () {
    filterCompleted.classList.add('clickedfilter');
    filterAll.classList.remove('clickedfilter');
    filterActive.classList.remove('clickedfilter');
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let box of checkboxes) {
        if (box.classList.contains('notfinished')) {
            box.parentElement.style.display = "none";
        } else if (box.classList.contains('finished')) {
            box.parentElement.style.display = "flex";
        }
    }
})


filterAll.addEventListener('click', function () {
    filterAll.classList.add('clickedfilter');
    filterActive.classList.remove('clickedfilter');
    filterCompleted.classList.remove('clickedfilter');
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let box of checkboxes) {
        box.parentElement.style.display = "flex";
    }
})

clearCompleted.addEventListener('click', function () {
    let checkboxes = document.querySelectorAll('.checkbox');
    for (let box of checkboxes) {
        if (box.classList.contains('finished')) {
            box.parentElement.remove();
        }
    }
})


// change theme

let changeTheme = document.querySelector('.change-theme');

changeTheme.addEventListener('click', function () {
    let img = changeTheme.firstChild;

    if (img.classList.contains('dark')) {
        // change icon
        img.src = '/images/icon-moon.svg';
        // remove dark class
        img.classList.remove('dark');
        document.querySelector('body').classList.remove('dark');
    } else {
        // change icon
        img.src = '/images/icon-sun.svg';
        // add dark class
        img.classList.add('dark');
        document.querySelector('body').classList.add('dark');
    }
});