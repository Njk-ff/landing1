const down = document.querySelector(".scroll-8")
const butUp = document.querySelector(".butUp")
const butDown = document.querySelectorAll(".butDown")

butDown.forEach(element => {
    element.addEventListener("click", function (e) {
        down.scrollIntoView({behavior: "smooth"});
    });
});

butUp.addEventListener("click", function (e) {
    document.body.scrollIntoView({behavior: "smooth"});
});



// ///

// мог бы и через цикл ＞﹏＜

const block_2 = document.querySelector(".block-2__scroll")
const block_2But = document.querySelector(".block-2__but")


block_2But.addEventListener("click", function (e) {
    console.log('123')
    block_2.scrollIntoView({behavior: "smooth"});
});

const block_3 = document.querySelector(".block-3__scroll")
const block_3But = document.querySelector(".block-3__but")


block_3But.addEventListener("click", function (e) {
    console.log('123')
    block_3.scrollIntoView({behavior: "smooth"});
});

const block_4 = document.querySelector(".block-4__scroll")
const block_4But = document.querySelector(".block-4__but")


block_4But.addEventListener("click", function (e) {
    console.log('123')
    block_4.scrollIntoView({behavior: "smooth"});
});

const block_5 = document.querySelector(".block-5__scroll")
const block_5But = document.querySelector(".block-5__but")


block_5But.addEventListener("click", function (e) {
    console.log('123')
    block_5.scrollIntoView({behavior: "smooth"});
});

const block_6 = document.querySelector(".block-6__scroll")
const block_6But = document.querySelector(".block-6__but")


block_6But.addEventListener("click", function (e) {
    console.log('123')
    block_6.scrollIntoView({behavior: "smooth"});
});

const block_7 = document.querySelector(".block-7__scroll")
const block_7But = document.querySelector(".block-7__but")


block_7But.addEventListener("click", function (e) {
    console.log('123')
    block_7.scrollIntoView({behavior: "smooth"});
});



