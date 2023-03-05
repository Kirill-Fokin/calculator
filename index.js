
const buttons = document.querySelector('.calc-wrapper');

let selectedBtn;

buttons.onclick = function(event) {
  let target = event.target; 

  if (target.classList.contains('answer')) {
    return
  } else  if (target.classList.contains('clear')) {
    if (selectedBtn) { // убрать существующую подсветку, если есть
      selectedBtn.classList.remove('whiteLight');
    }
    return
  } else if  (target.classList.contains('btn')) {
     whiteLight(target); 
    } else {
      return
    }
  }


function whiteLight(btn) {
  if (selectedBtn) { // убрать существующую подсветку, если есть
    selectedBtn.classList.remove('whiteLight');
  }
  selectedBtn = btn;
  selectedBtn.classList.add('whiteLight'); // подсветить новый td
}

  

let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['1','2','3','4','5','6','7','8','9','0'];
const action = ['-','+','x',':'];

//экран 

const out = document.querySelector('.inp')
out.value =  0;

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.value = 0;
}

document.querySelector('.clear').onclick = clearAll;

document.querySelector('.calc-wrapper').onclick = (event) => {
  
  //нажата не кнопка 
   if (!event.target.classList.contains('btn')) return; 
   // нажата кнопка AC
      if (event.target.classList.contains('ac')) return; 
      
      out.textContent = '';
      // получаем нажатую кнопку 
      const key = event.target.textContent;

      //кнопки 0-9
      if (digit.includes(key)) {
        if ((b === '' && sign === '')) {
        
        a += key;
        
        out.value = a;
      }
      else if  (a !=='' && b!=='' && finish) {
       b = key;
       finish = false;
       out.value = b; 
      } else {
          b+= key;
          out.value = b;
      }
        console.log(a, b, sign );
      }

     
     //кнопки знак + - / *
      if (action.includes(key)) {
        sign = key;
        out.value = sign;
        console.log(a, b, sign);
        return;
      }
      if (key === '=') {
       switch (sign) {
        case '+':
            a = (+a) + (+b);
            break;
            case '-':
            a = (+a) - (+b);
            break;
            case ':':
              if (b === '0') {
                out.value = 'Error'
                getRed()
               setTimeout(redOff, 5000) 
                a = '';
                b = ''
                sign = '';
                return
              } else {
            a = (+a) / (+b);
              }
            break;
            case 'x':
            a = (+a) * (+b);
            break;

       }
       finish = true;
       out.value = a;
       if (value = '228') {
        document.querySelector('.sav').classList.add('open')
       } 
       
              console.log(a,b ,sign)
    
}


} 
function getRed(){
 document.querySelector('.wrapper').classList.add('red');
 setTimeout(redOff(), 3000)

}


function redOff(){
  document.querySelector('.wrapper').classList.remove('red');
 
 }