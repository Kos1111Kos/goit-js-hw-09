import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".feedback-form"),t=e.querySelector('input[name="email"]'),a=e.querySelector('textarea[name="message"]'),o="feedback-form-state",n=JSON.parse(localStorage.getItem(o));n&&(t.value=n.email,a.value=n.message),e.addEventListener("input",function(){const s={email:t.value,message:a.value};localStorage.setItem(o,JSON.stringify(s))}),e.addEventListener("submit",function(s){s.preventDefault();const m={email:t.value,message:a.value};console.log(m),localStorage.removeItem(o),t.value="",a.value=""})});
//# sourceMappingURL=commonHelpers2.js.map
