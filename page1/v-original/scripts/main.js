

let btn_more = document.getElementById("btn-show-more")
let icon_cima = "icons/btn_up.png"
let icon_baixo = "icons/btn_down.png"
//evenrto de clique
function btn_show_more()
{
    if (btn_more.getAttribute("src") == icon_baixo)
    {
        btn_more.setAttribute("src", icon_cima)
        document.getElementById("show").style.display = "block"


    }
    else 
    {
        btn_more.setAttribute("src", icon_baixo)
        document.getElementById("show").style.display = "none"
    }
}
