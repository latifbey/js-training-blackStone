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

function getRandomNumber(limit) {
    return Math.floor(Math.random() * limit) + 1;
}

function drawTable({ color, col, row })  {
    const xCoordiante = getRandomNumber(row);
    const yCoordiante = getRandomNumber(col);

    console.log('coordiantes x, y', xCoordiante, yCoordiante);
    const container = $('<div class="parent">');
    for (let i = 0; i < row; i++) {
        const rows = $('<div class="row">');
        for (let k = 0; k < col; k++) {
            const areaLength = $('#maze').width() / col;
            const cell = $('<div class="col">')
                .css('width', `${areaLength}`)
                .css('background', `${color}`)
                .css('border', '1px solid gray')
                .css('height', `${areaLength}`);

            rows.append(cell);
        }
        container.append(rows);
    }
    // Add all to dom 
    $('#maze').html(container);
    // Here we add the black random selected box.
    $('.parent .row:nth-child(' + xCoordiante + ') .col:nth-child(' + yCoordiante + ')').css('background', 'black')
        .css('color', 'white')
        .text(xCoordiante + ',' + yCoordiante);

}
