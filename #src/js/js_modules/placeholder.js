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
