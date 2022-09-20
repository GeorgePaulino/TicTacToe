var lang = {
    title: ["Tic Tac Toe"],
    play: ["Play"],
    by: ["By:"],
    design: ["Design by:"],
    player: ["Player"],
    quotey: ["Dear Yada... How deep is your love? ♡"],
    quotel: ["Luan happy birthday mate. - 09 / 17"]
};

var language_selected = 0;
function changeLanguage(i:number){
    language_selected = i;
}
export {lang, changeLanguage};