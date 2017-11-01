/**degisken ebatlarda(kullanicinin verdigi bilgilere gore) generik sekilde bir table yapacagiz.
--oncelikle buttona tiklandiginda kullanicinin girdigi bilgileri tutup alacak bir main function yaziyoruz.

*/

$("button").on("click", function () {
    main();
})

function main() {
    let userInput = getInputValues();
    drawTable(userInput);
}

function getInputValues() {
    let satir = +$("#row").val();
    let kolon = +$("#col").val();
    let color= $("#renk").val();
    console.log(satir, kolon,color, 8);
    return {
        satir,
        kolon,
        color
    };
}


function drawTable(satir,kolon,color) {
    
   
        let table = $("<div class='row1'>.</div>").repeat(kolon*satir);
    console.log(table);
        
        let parent = $('<div class="tableparent">').css({
            'height': '200px',
            'width': '200px',
            'background': 'red'
        });
        
        parent.append(table);
        $("#maze").append(parent);
        console.log(table, 5);

    }

$("#maze").html('');
}
