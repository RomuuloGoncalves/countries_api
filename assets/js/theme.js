/*Troca de tema*/
/*Temas*/
let choose = true
var root = document.querySelector(":root")
const theme = {
    light() {
        root.style.setProperty('--background', 'hsla(0, 3%, 77%, 0.655)');
        root.style.setProperty('--background-dark', 'hsl(0, 0%, 52%)');
        root.style.setProperty('--font', 'hsl(0, 0%, 0%)');

    },
    dark() {
        root.style.setProperty('--background', 'hsl(209, 23%, 22%)');
        root.style.setProperty('--background-dark', 'hsl(207, 26%, 17%)');
        root.style.setProperty('--font', 'hsl(0, 0%, 100%)');
    }
}

function changeTheme() {
    if(choose){
        theme.light()
        choose = false
    }else{
        theme.dark()
        choose = true
    }
}

changeTheme()
changeTheme()