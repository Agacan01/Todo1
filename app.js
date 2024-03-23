"use strict";
$(document).ready(function () {
    $('.btn').click(function (e) {
        e.preventDefault();
        if (!$.trim($('input').val()) == '') {
            let c = d => {
                for (let i = 0; i < d; i++) {
                    $('.minitbox').append(`<h3>${d}</h3>`);
                }
            }
            let l = m => Number(m) ? c(m) : $('.minibox').append(`<h2>${m}</h2>`);
            l($('input').val());
        }
        $('input').val('')
    });
});