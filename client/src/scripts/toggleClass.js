export default {
    toggle: args => {
        let items = document.querySelectorAll(args.target)
        for (let x = 0; x < items.length; x++) {
            items[x].classList.toggle(args.classes)
        }
    }
}
