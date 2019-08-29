console.log('%c JNF INFO','color:green;');

var control
var group_1
var group_2

var group_1_current
var group_2_current

var group_1_timer
var group_2_timer

document.addEventListener("DOMContentLoaded", function(event) { 
    group_1_current = 0
    group_2_current = 0

    group_1_timer = setInterval(function(){current_plus(1); switch_slide()}, 3000);
    group_2_timer = setInterval(function(){current_plus(2); switch_slide()}, 3000);

    control = [
        {element : document.getElementById('control_l_1'), action : 'left',  group : 1}, 
        {element : document.getElementById('control_r_1'), action : 'right', group : 1},
        {element : document.getElementById('control_l_2'), action : 'left',  group : 2}, 
        {element : document.getElementById('control_r_2'), action : 'right', group : 2},
    ];
    group_1 = [
        document.getElementById('slide_1_0'),
        document.getElementById('slide_1_1'),
        document.getElementById('slide_1_2'), 
        document.getElementById('slide_1_3'),   
    ];
    group_2 = [
        document.getElementById('slide_2_0'),
        document.getElementById('slide_2_1'),
        document.getElementById('slide_2_2'),  
        document.getElementById('slide_2_3'),  
    ];
    control.forEach(function(item) {
        item.element.addEventListener('click', on_control_click, ['ass']);
        item.element.addEventListener("click", function(){
                on_control_click({action : item.action, group : item.group});
            }, false);
    });
    switch_slide();
});

function on_control_click(params){
    
    switch(params.group) {
        case 1:  
            console.log('group 1');
            switch(params.action){
                case 'left':
                    current_minus(1)
                break;
                case 'right':
                    current_plus(1);
                break;
            }
        clearInterval(group_1_timer);
        break;
      
        case 2: 
            console.log('group 2');
            switch(params.action){
                case 'left':
                    current_minus(2)
                break;
                case 'right':
                    current_plus(2);
                break;
            }
        clearInterval(group_2_timer);
        break;
    }
    switch_slide();
}

function current_plus(group){
    switch(group) {
        case 1: 
            group_1_current += 1;
            if (group_1_current >= group_1.length) {
                group_1_current = 0
            } 
        break;
        case 2: 
            group_2_current += 1;
            if (group_2_current >= group_2.length) {
                group_2_current = 0
            } 
        break;
    }
}

function current_minus(group){
    switch(group) {
        case 1: 
            group_1_current -= 1;
            if (group_1_current < 0) {
                group_1_current = group_1.length - 1
            } 
        break;
        case 2: 
            group_2_current -= 1;
            if (group_2_current < 0) {
                group_2_current = group_2.length - 1
            } 
        break;
    }
}

function switch_slide(){
    group_1.forEach(function(item) {
        item.style.opacity = '0';
    });
    group_1[group_1_current].style.opacity = '1';

    group_2.forEach(function(item) {
        item.style.opacity = '0';
    });
    group_2[group_2_current].style.opacity = '1';
}
