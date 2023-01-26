export const navAnimate = {
    hidden: {
        y: -50,
        opacity: 0,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 140
        }
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 80,
            delay: 1
        }
    }
}