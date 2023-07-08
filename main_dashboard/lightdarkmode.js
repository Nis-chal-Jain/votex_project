function lightDarkMode() {
    let mainTogglebutton = document.getElementById("maintoggle");
    let navBarColor = document.querySelector("nav")


    if (mainTogglebutton.className =="fa-solid fa-toggle-off fa-2x") {
        mainTogglebutton.className = "fa-solid fa-toggle-on fa-2x"
        navBarColor.style.backgroundColor= "#0E8388"
        document.body.backgroundColor= "#0c141c"
    } else {
        mainTogglebutton.className = "fa-solid fa-toggle-off fa-2x";
         navBarColor.style.backgroundColor= "green"
    }
}