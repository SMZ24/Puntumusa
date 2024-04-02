const button = document.querySelector('#button');
const canvas = document.querySelector('#confetti');

const jsConfetti = new JSConfetti();
const kiss = decodeURIComponent(escape("\xF0\x9F\x98\x98"))
const blink = decodeURIComponent(escape("\xF0\x9F\x98\x89"))
const panda = decodeURIComponent(escape("\xF0\x9F\x90\xBC"))
const pinkheart = decodeURIComponent(escape("\xF0\x9F\x92\x97"))
const redheart = decodeURIComponent(escape("\xF0\x9F\x92\x96"))
const inlove = decodeURIComponent(escape("\xF0\x9F\x98\x8D"))
const hamster = decodeURIComponent(escape("\xF0\x9F\x90\xB9"))
const cherry = decodeURIComponent(escape("	\xF0\x9F\x8C\xB8"))
const smile = decodeURIComponent(escape("\xF0\x9F\x98\x8A"))
const pig = decodeURIComponent(escape("\xF0\x9F\x90\xBD"))
const pigFace = decodeURIComponent(escape("\xF0\x9F\x90\xB7"))


button.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: [kiss, blink,  panda, pinkheart, redheart, inlove, hamster, cherry, smile, pig, pigFace],
    })
    jsConfetti.addConfetti()
})

