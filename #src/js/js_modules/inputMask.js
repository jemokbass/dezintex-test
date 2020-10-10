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
