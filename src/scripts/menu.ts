const menu = document.querySelector('.menu')

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expand') === 'true'
  console.log({isExpanded})
  menu.setAttribute('aria-expand', `${!isExpanded}`)
})
