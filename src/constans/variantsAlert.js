export const variantsAlert = {
  initial: {
    opacity: 0,
    y: -50
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      delayChildren: 0.2,
      striggerChildren: 0.1
    }
  }
}

export const variantsAlertItem = {
  initial: {
    opacity: 0,
    y: -10
  },
  animate: {
    opacity: 1,
    y: 0
  }
}
