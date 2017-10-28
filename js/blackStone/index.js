$("button").on("click", function(){
    main();
})

function main(){
    let satir = $("#row").val();
    let kolon = $("#col").val();
    console.log(satir,kolon,8);
    return satir,kolon;
}