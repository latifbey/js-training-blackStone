$("button").on("click", function () {
    main();
})

function main() {
    let userInput = getInputValues();
}

function getInputValues() {
    let satir = $("#row").val();
    let kolon = $("#col").val();
    console.log(satir, kolon, 8);
    return {
        satir,
        kolon
    };
}
$("section > div > #first").append("<div>.</div>".repeat(satir*kolon));

     


