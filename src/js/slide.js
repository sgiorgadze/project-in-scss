var picArray = ['orem ipsum, dolor sit amet consectetur adipisicing elit. Nulla rerum est, eligen', '2 Lorem ipsum, dolor sit amet consectetur adipisicing elit ',
    ' 3 Lorem ipsum, dolor sit am'
];
// ubralod dabechdva 
// for (var i = 0; i < picArray.length; i++) {
//     document.write('<img src="' + picArray[i] + '" style="width:100px;">');
// }

var i = 0;
setInterval(slidshow, 1000)

function slidshow() {
    if (i == picArray.length) {
        i = 0;
    }

    document.getElementById("image-container").innerText = (picArray[i]);

    i++;

}