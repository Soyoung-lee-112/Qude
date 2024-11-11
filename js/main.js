window.onload = function () {
    const menuOpen = document.querySelector('.gnb .menuOpen');
    const menuBox = document.querySelector('.gnb .menuBox');

    menuOpen.addEventListener('click', () => {
        menuBox.classList.toggle('on');
    })

    gsap.registerPlugin(ScrollTrigger); // GSAP 라이브러리의 스크롤트리거를 등록

    // 01 visual 
    gsap.timeline({
        scrollTrigger: {
            trigger: '.visual',
            start: '100% 100%',
            end: "100% 0%", 
            scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar, 숫자가 클수록 애니가 더 부드러워짐 (1-3)
            // markers: true,
        }
    })
    .to('.logoWrap #j', {x:-150, y:250, rotate:20, ease:'none', duration:5},0)
    .to('.logoWrap #y', {x:-30, y:150, rotate:-10, ease:'none', duration:5},0)
    .to('.logoWrap #o', {x:0, y:400, rotate:-10, ease:'none', duration:5},0)
    .to('.logoWrap #u', {x:50, y:300, rotate:10, ease:'none', duration:5},0)
    .to('.logoWrap #n', {x:100, y:100, rotate:-10,yease:'none', duration:5},0)
        .to('.logoWrap #g', { x: 50, y: 400, rotate: 20, yease: 'none', duration: 5 }, 0)
    
    // 02 공통, .mainTextBox .title i
    gsap.utils.toArray('.mainTextBox .title i').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true,
            }
        })
        .fromTo(selector,{overflow:'hidden', y: 150,}, {y: 0, ease:'none', duration:5},0)
    });
    // 03 공통,  .subText p
    gsap.utils.toArray('.subText p').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '100% 100%',
                end: '100% 100%',
                scrub: 1,
                // markers: true,
            }
        })
        .fromTo(selector,{opacity:0, y: 100,}, {opacity:1, y: 0, ease:'none', duration:5},0)
    });

    // 04 con1 .textAni text change gsap animation

    const textAniList = document.querySelectorAll('.con1 .textAni li');
    let textAni = gsap.timeline({ repeat: -1 });

    for (let i = 0; i < textAniList.length; i++){
        textAni.to(textAniList[i], 0.8 ,{ opacity: 1, repeat: 1, delay: 0, x: 0, yoyo: true, ease: 'power4.out' })
    }
    textAni.play();

    // 05 .con4 .listBox .box ScrollTrigger Animation
    gsap.utils.toArray('.con4 .listBox .box').forEach((selector) => {
        gsap.timeline({
            scrollTrigger: {
                trigger: selector,
                start: '0% 20%',
                end: '0% 0%',
                scrub: 1,
                // markers: true,
            }
        })
        .to(selector, {transform: 'rotateX(-10deg) scale(0.9)', transformOrigin: 'top', filter: 'brightness(0.3)'},0)
    });

    //06 .con3 .listBox card Animation
    gsap.utils.toArray('.con3 .listBox li').forEach((selector, t) => {
        ScrollTrigger.create({ // 'S' 대문자 임을 주의!
            trigger: selector,
            start: 'top bottom',
            onEnter: () => { //스크롤위치가 '시작'을 지나 앞으로 이동할 때(시작지점을 지나 스크롤을 아랫방향으로 내릴 때 진행되고 위쪽으로 올릴 땐 진행되지 않음)
                gsap.set(selector, {
                    rotationX: '-65deg',
                    z: '-500px',
                    opacity: 0,
                }),
                gsap.to(selector, {
                    rotationX: 0,
                    z: '0',
                    opacity: 1,
                    delay: t % 3 * 0.05,
                })
            },
            // markers: true
        })
        
    });

    // 07 .con5 .listBox li mouseover Event
    const listBox = document.querySelectorAll('.con5 .listBox li');
    const imgBox = document.querySelector('.con5 .imgBox');
    const img = document.querySelector('.con5 .imgBox img');

    for (let i = 0; i < listBox.length; i++){
        listBox[i].addEventListener('mouseover', () => {
            img.src = `images/img${i}.jpg`;
            gsap.set(imgBox, { scale: 0, opacity: 0, duration: .4 }),
            gsap.to(imgBox, { scale: 1, opacity: 1, duration: .4 })
            
        })
        listBox[i].addEventListener('mousemove', (e) => {
            let imgBoxX = e.pageX + 20;
            let imgBoxY = e.pageY - 20;

            imgBox.style.left = imgBoxX + 'px';
            imgBox.style.top = imgBoxY + 'px';
        })
        listBox[i].addEventListener('mouseout', () => {
            gsap.to(imgBox, { scale: 0, opacity: 0, duration: .4 })
        })
    }

    gsap.timeline({
        scrollTrigger: {
            trigger: '.con5',
            start: '0% 100%',
            end: '100% 0%',
            toggleClass : {
                targets: '.wrap',
                className:'on'
            }
        }
    })

    //08 footer .logoWrap Animation
    gsap.timeline({
        scrollTrigger: 'footer',
        start: '0% 100%',
        end: '100% 0%',
        scrub: 1,
        markers: true,
    })
    .to('.logoWrap', { top: '20%', ease: 'none', duration: 5 }, 0)
    
    
    // 09 loading 
    const loading = document.querySelector('.loading');
    const rotate = document.querySelectorAll('.rotate');
    const opacity = document.querySelectorAll('.opacity');

    setTimeout(() => loading.classList.add('scene1'), 0),
    setTimeout(() => loading.classList.add('scene2'), 1500),
    setTimeout(() => loading.classList.remove('scene1', 'scene2'), 2500),
    setTimeout(() => rotate.forEach(rotate => rotate.classList.add('on')), 2500),
    setTimeout(() => opacity.forEach(rotate => rotate.classList.add('on')), 2500);


    //10  .con6 h2 ScrollTrigger Animation
        gsap.timeline({
            scrollTrigger: {
                trigger: '.con6',
                start: '-100% 20%',
                end: '0% 0%',
                scrub: 1,
                // markers: true,
            }
        })
        .to('.con6 h2', {
        x: () => window.innerWidth * -0.2, // 화면 너비의 50%만큼 이동 (동적 값)
        y: 0,
        z: 0,
        ease: "none"},0)

}