// Author: EdQuinx


const topMenu = document.getElementById('ed-top-menu')
const toggleTopMenuIcon = document.getElementById('ed-toggle-top-menu-icon')

document.addEventListener('click', (e) => {
    if (toggleTopMenuIcon.contains(e.target)) {
        // Click to toggle top menu
        topMenu.classList.toggle('ed-top-menu-expanded')
        topMenu.classList.toggle('hidden')
    } else {
        // Click outside from toggle menu icon
        if (topMenu.classList.contains('ed-top-menu-expanded')) {
            topMenu.classList.remove('ed-top-menu-expanded')
            topMenu.classList.add('hidden')
        }
    }
})