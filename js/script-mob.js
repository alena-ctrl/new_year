function initForIPhone() {
    const froheBlock = document.querySelector("#frohe-block");
    const buttonOpen = document.getElementById("button");
    const firstPage = document.getElementById("first-page");
    const isIPhone = /iPhone/i.test(navigator.userAgent);

    if (isIPhone) {
        gsap.set(froheBlock, { height: "auto", margin: "10px" });
        gsap.set(".balls", { margin: "0 auto", textAlign: "center" });

        const tl = gsap.timeline({ defaults: { ease: "power1.out", duration: 0.5 } });

        tl.from("#first-page", { autoAlpha: 0 })
            .from("#snow_1 > *", { stagger: 0.04 })
            .from("#right-circle > *", { stagger: 0.1 }, "<")
            .from("#snow_2 > g", { x: -150, stagger: 0.1 });
    }
}

window.addEventListener("load", initForIPhone);

gsap.defaults({
    ease: "power1.out", // Сглаживает анимацию
    duration: 0.5, // Уменьшаем продолжительность
});

tl.from("#first-page", { autoAlpha: 0 })
    .from("#snow_1 > *", { stagger: 0.04 }) // Увеличиваем паузы между элементами
    .from("#right-circle > *", { stagger: 0.1 }, "<")
    .from("#snow_2 > g", { x: -150, stagger: 0.1, ease: "power1.inOut" }); // Сглаживаем движение


