/*  В html маємо ієрархію ul.root>li{Item $}*3>ul*2>li{Item $}*5 (emmet pattern).
    1. Написати скрипт, який додасть клас `last` усім останнім li у групах.
    2. Написати функцію setFirstItemClassName(level), де level - це номер рівня вкладеності, у якому необхідно
       зробити зміни. Функція setFirstItemClassName має встановити першому li рівня клас `first`.
    * при додаванні класів - повинен змінитися колір фону на червоний (first) та зелений (last),
      з анімацією - затримка 2 секунди.
*/

// Приклад для setFirstItemClassName(2)

const root = document.querySelector('.root');

// 1
function lastItemClassName() {
    // перший рівень "li" після "root"
    const liArray = [...root.children];

    // додавання фону для останнього "li" після "root"
    liArray.at(-1).classList.add('last');

    // кожен "ul" що знаходиться в "li"
    liArray.forEach(liElem => {
        const innerUls = [...liElem.children];

        // для кожного останнього "li"
        innerUls.forEach(innerUl => innerUl.querySelector('li:last-of-type').classList.add('last'));
    });
}

// 2
function setFirstItemClassName(level) {
    if (level === 1) {
        // перший рівень "li" після "root"
        const liArray = [...root.children];
        liArray.at(0).classList.add('first');
    }
    else if (level === 2) {
        // перший рівень "li" після "root"
        const liArray = [...root.children];

        // кожен "ul" що знаходиться в "li"
        liArray.forEach(liElem => {
            const innerUls = [...liElem.children];

            // для кожного першого "li"
            innerUls.forEach(innerUl => innerUl.querySelector('li').classList.add('first'));
        });
    }
    else {
        root.querySelector('li:first-of-type').classList.remove('first');
    }
}

setTimeout(() => {
    lastItemClassName();
    setFirstItemClassName(2);
}, 2000);