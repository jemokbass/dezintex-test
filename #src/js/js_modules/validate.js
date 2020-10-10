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
