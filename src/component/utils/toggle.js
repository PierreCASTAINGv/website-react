export function handleToggle(elt) {
        
        const classAccordion = elt.target.parentElement.nextElementSibling;

        if(classAccordion.style.display === '' || classAccordion.style.display === 'none') { 

                let c = 0;
                const list = document.querySelectorAll('.accordion');
                for (c of list) {
                        c.style.display = 'none';
                }
        classAccordion.style.display = 'block';
        }
        
        else classAccordion.style.display = 'none';
}