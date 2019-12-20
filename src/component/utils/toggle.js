export function Toggle(e) {
        e.preventDefault();
        let getdisplay = document.querySelector('.accordion').style.display;
        //console.log(getdisplay);
        if(getdisplay === "none") document.querySelector('.accordion').style.display = "block"
        else document.querySelector('.accordion').style.display = "none";
       
}