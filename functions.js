function Found() {
    document.getElementById("find").innerHTML = "Here's a cookie 🍪";
}
function Reveal1() {
    if(document.getElementById("playlist").innerHTML == "Playlist"){
        document.getElementById("playlist").innerHTML = "Playlist <ul><li>Noita</li> <li>Undermine</li> <li>Smash Bros</li> <li>Breath of the Wild</li> <li>Binding of Isaac</li> <li>Subnautica</li> <li>Don't Starve</li> <li>Hollow Knight</li> <li>Valo</li> <li>Cuphead</li> <li>SMO and SMM</li> <li>Legends Arceus</li> <li>Elden Ring</li> <li>Genshin</li> <li>Silksong</li> </ul>";
    }
    else{
        document.getElementById("playlist").innerHTML = "Playlist";
    }
}

//check use var instead
function Reveal2() {
    document.getElementById("binge").innerHTML = "Binge:<ul><li>That 70s show</li><li>HIMYM</li><li>Friends</li><li>The Office</li><li>BBT</li><li>2broke</li><li>Agents of Shield</li><li>Gotham</li><li>All DCU/marvel</li><li>B99</li><li>Superstore</li><li>Man with a plan</li><li>Good place</li><li>Two and a half men</li><li>Lucifer</li></ul>";
}
function Reveal3() {
    document.getElementById("excel").innerHTML = "Excel Projects<ul><li>Minesweeper</li><li>Brick Breaker</li><li>Flipbook</li></ul>";
}
function Reveal4() {
    document.getElementById("write").innerHTML = "Write<ul><li>Invisible</li><li>This isnt a wedding its a warzone</li><li>Idols</li><li>Conflict</li></ul>";
}
function Reveal5() {
    document.getElementById("lang").innerHTML = "Languages<ul><li>Python</li><li>C,C++,C#</li><li>Java</li></ul>With knowledge of Command line, Git and Ubuntu";
}

//check better drop downs
//<!--Try importing math.random(), also how to alternate, also better way for list?-->
