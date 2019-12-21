export function handleToggle(elt) {

        const classAccordion = elt.target.parentElement.nextElementSibling;

        if(classAccordion.style.display === '' || classAccordion.style.display === 'none') classAccordion.style.display = 'block'

        else classAccordion.style.display = 'none'
}