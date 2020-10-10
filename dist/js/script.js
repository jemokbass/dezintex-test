//ALL_SCRIPTS
'use strict'
//MODULES

//PLACEHOLDER for input, for textarea
function placeholders() {
   const input = document.querySelectorAll('.input'),
      textarea = document.querySelectorAll('.textarea');
   if (input) {
      input.forEach(item => {
         item.addEventListener('focus', function (e) {
            item.setAttribute('placeholder', '')
         });
         const place = item.placeholder;
         item.addEventListener('blur', function (e) {
            item.setAttribute('placeholder', place)
         });
      })
   }
   if (textarea) {
      textarea.forEach(item => {
         item.addEventListener('focus', function (e) {
            item.setAttribute('placeholder', '')
         });
         const place = item.placeholder;
         item.addEventListener('blur', function (e) {
            item.setAttribute('placeholder', place)
         });
      })
   }
   return
}

//INPUT MASK
function mask() {
   const form = document.querySelectorAll('.form')
   if (form) {
      form.forEach(i => {
         const inputMask = document.querySelectorAll('[name]');
         inputMask.forEach(item => {
            item.addEventListener('input', (e) => {
               let attr = item.getAttribute('name');
               if (attr === 'form[tel]') {
                  let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
                  e.target.value = !x[2] ? x[1] : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
               }
               if (attr === 'form[name]') {
                  e.target.value = e.target.value.replace(/[0-9]/g, '')
               }
               if (attr === 'form[email]') {
               }
               else return false;
            })
         })
      })
   } else return false;
}

//VALIDATE
const validate = () => {
   const form = document.querySelectorAll('.form')
   form.forEach(i => {
      i.addEventListener('submit', (e) => {
         if (e.target) {
            e.preventDefault();
            const formTarget = e.target;

            if (!e.target.classList.contains('error')) {
               const inputMask = document.querySelectorAll('[name]');
               inputMask.forEach((item, index, array) => {
                  if (item.value == '') {
                     formTarget.classList.add('error')
                     setTimeout(() => {
                        formTarget.classList.remove('error')
                     }, 3000);
                  }
                  const attr = item.getAttribute('name'),
                     invalid = () => {
                        item.insertAdjacentHTML('beforebegin', '<div class="invalid">Поле пустое</div>')
                        item.parentNode.style.border = "1px solid red"
                        setTimeout(() => {
                           item.previousSibling.remove();
                           item.parentNode.style.border = ""
                        }, 3000)
                     };
                  const valid = item.parentNode.style.border = "2px solid green";
                  if (attr === 'form[name]') {
                     if (item.value === '' || item.value === null) {
                        invalid()
                     }
                     if (!item.value === '' || !item.value === null) {
                        valid
                     }
                  }
                  if (attr === 'form[tel]') {
                     if (item.value.length <= 9) {
                        invalid()
                     }
                     if (item.value.length === 10) {
                        valid
                     }
                  }
                  if (!formTarget.classList.contains('error') && array !== '') {
                     const formData = item.value
                     console.log(formData)
                     function modalWindow() {
                        document.body.insertAdjacentHTML('beforebegin', '<div class="modal"><div class="modal__window">Всё успешно!</div></div>')
                        document.querySelector('.modal__window').insertAdjacentHTML('beforeend', ` Ваши данные: ${formData}`)
                     }
                  }
               })
            }
         }

      })
   })
}


//PLUGINS_JS

//WEBP IMAGE IN WEBSITES
function testWebP(callback) {
   let webP = new Image();
   webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});



window.addEventListener('DOMContentLoaded', () => {
   placeholders();
   mask();
   validate();
})
