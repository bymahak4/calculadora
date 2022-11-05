$(document).ready(function(){
    var value   = '0';
    var buttons = document.getElementsByTagName('button');
    
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (el) => {
            var elVal = el.target.innerHTML;
            
            if(document.getElementById('result').innerHTML.length < 15) {
                if(/\.\d+$/g.test(value)) elVal = elVal.replace(/\./, '');
                if(/[+-/%*]$/.test(value) && /[+-/%*]$/.test(elVal)) elVal = elVal.replace(/[+-/%*=]$/, '');
                if(document.getElementById('result').innerHTML === '0' && !/[+-/%.*ACE]/.test(elVal) && elVal !== '=') {
                    value = elVal;
                    document.getElementById('result').innerHTML = value;
            } else if(elVal !== '=' && elVal !== 'AC' && elVal !== 'CE'){
                value += elVal;
                if(/^0-/.test(value)) value = '-';
                document.getElementById('result').innerHTML = value;
            }
                if(elVal === '=') {
                    value = eval(value);
                    if(value.toString().length > 14) value = value.toString().slice(0, 16);
                    document.getElementById('result').innerHTML = value;
                }
            }

            if(elVal === 'AC') {
                value = 0;
                document.getElementById('result').innerHTML = '0';
            }
            
            if(elVal === 'CE') {
                if(value.toString().length > 1) {
                    value = value.replace(/.$/, '');
                } else {
                    value = 0;
                }
                document.getElementById('result').innerHTML = value;
            }
        });
    }
});