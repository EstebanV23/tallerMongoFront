export const variantsNavbar = {
  initial: {
    opacity: 0,
    x: -300
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      delayChildren: 0.2,
      striggerChildren: 0.1
    }
  }
}

export const variantsNavbarItem = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: {
    opacity: 1,
    y: 0
  }
}
