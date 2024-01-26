$(document).ready(function(){
    $('.black_bg').show();
})


$('.close_btn').click(function(){
    $('.black_bg').hide();
})

$('.black_bg').click(function(){
    $('.black_bg').hide();
})

//  모달창





// 스크롤 트리거 플러그인 활성화

gsap.registerPlugin(ScrollTrigger) 

function SectionGroup__init() {
    $('.section-group--horizontal-right').each(function(index, node){
        var $group = $(node);
        var $section = $group.find(' > .section');

        gsap.to($section, {
            xPercent: -100 * ($section.length - 1),
            ease:"none",
            scrollTrigger: {
                trigger: $group,
                start: "top top",
                end: "+=" + ($section.length - 1) + "00%",
                pin: true,
                scrub: true,
                // markers: true
            }
        });
    });
}

SectionGroup__init();

// 가로스크롤 



let observer = new IntersectionObserver((e)=>{
    e.forEach((프로젝트)=>{
        if(프로젝트.isIntersecting){
        프로젝트.target.style.opacity = 1;
        프로젝트.target.style.transform = 'translateX(0px)';
        }else{
        프로젝트.target.style.opacity = 0;
        프로젝트.target.style.transform = 'translateX(-200px)';
        }
    })

})

let zero = document.querySelectorAll('div')
observer.observe(zero[8])


// 이미지 왼쪽에서 오른쪽으로




let observer01 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트01)=>{
        if(프로젝트01.isIntersecting){
        프로젝트01.target.style.opacity = 1;
        프로젝트01.target.style.transform = 'translateX(0px)';
        }else{
        프로젝트01.target.style.opacity = 0;
        프로젝트01.target.style.transform = 'translateX(200px)';
        }
    })

})

let one = document.querySelectorAll('div')
observer01.observe(one[9])



// 텍스트 오른쪽에서 왼쪾으로











let observer02 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트02)=>{
        if(프로젝트02.isIntersecting){
        프로젝트02.target.style.opacity = 1;
        프로젝트02.target.style.transform = 'translateY(0px)';
        }else{
        프로젝트02.target.style.opacity = 0;
        프로젝트02.target.style.transform = 'translateY(100px)';
        }
    })

})

let two = document.querySelectorAll('div')
observer02.observe(two[13])

// 메뉴 텍스트 위에서 아래로



let observer03 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트03)=>{
        if(프로젝트03.isIntersecting){
        프로젝트03.target.style.opacity = 1;
        프로젝트03.target.style.transform = 'translateY(0px)';
        }else{
        프로젝트03.target.style.opacity = 0;
        프로젝트03.target.style.transform = 'translateY(100px)';
        }
    })

})

let three = document.querySelectorAll('div')
observer03.observe(three[15])
observer03.observe(three[16])
observer03.observe(three[17])
observer03.observe(three[18])
observer03.observe(three[19])


// 메뉴 이미지 순차적으로 위에서 아래로



let observer04 = new IntersectionObserver((e)=>{
    e.forEach((프로젝트04)=>{
        if(프로젝트04.isIntersecting){
        프로젝트04.target.style.backgroundColor = '#FFF5BE';
        }else{
        프로젝트04.target.style.backgroundColor = '#FFFFFF';
        }
    })

})

let four = document.querySelectorAll('section')
observer04.observe(four[7])

// section08 백그라운드 색상




