/**degisken ebatlarda(kullanicinin verdigi bilgilere gore) generik sekilde bir table yapacagiz.
--oncelikle buttona tiklandiginda kullanicinin girdigi bilgileri tutup alacak bir main function yaziyoruz.

*/

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


function tableDraw(userInput) {
    $("#maze").html('');
    kolon.forEach(function () {
        let table = $("<div>.</div>".repeat(parseInt(kolon)));
        
        let parent = $('<div class="tableparent">').css({
            'height': '200px',
            'width': '200px',
            'background': 'red'
        });
        
        parent.append(table);
        $("#maze").append(parent);
        console.log(table, 5);

    })


}
