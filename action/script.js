let btn = document.querySelectorAll('button'),
    wrap = document.querySelector('.wrapper'),
    link = document.querySelector('a');

/*
btn[0].onclick = function () {
    alert("You have pressed first button");
};

btn[0].onclick = function () {
    alert("You have again pressed first button");
};*/
/*btn[0].addEventListener('click', function (event) {
    console.log('Event happened: ' + event.type + 'on element ' + event.target);
});

wrap.addEventListener('click', function () {
    console.log('Event happened: ' + event.type + 'on element ' + event.target);
});*/

link.addEventListener('click', function(){
    event.preventDefault();
    console.log('Event occured: ' + event.type + 'on element ' + event.target);
});

btn.forEach(function (item) {
    item.addEventListener('mouseleave', function () {
        console.log("Exit");
    });
});
/*
btn[0].addEventListener('mouseenter', function () {
    alert('You are on first button');
});*/
