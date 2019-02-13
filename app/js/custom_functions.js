function auto_login() {

  function setNativeValue(element, value) {
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
    if (valueSetter && valueSetter !== prototypeValueSetter) {
      prototypeValueSetter.call(element, value);
    } else {
      valueSetter.call(element, value);
    }
    element.dispatchEvent(new Event('input', { bubbles: true }));
  }
   
  setNativeValue(document.getElementById("username"), 'enterusernamehere');
  setNativeValue(document.getElementById("password"), 'enterpasswordhere');
       document.getElementsByTagName('button')[0].click();
}

function auto_fullscreen(){

      var header = document.getElementsByClassName('ubntHeaderPanel--sdn')[0];
      header.parentNode.removeChild(header);

      var menubar = document.querySelectorAll('#main > div > div > div > div > div > div:first-child ')[0];
      menubar.parentNode.removeChild(menubar);

      var viewselector = document.querySelectorAll('#main > div > div > div > div > div > div > div > div:first-child ')[0];
      viewselector.parentNode.removeChild(viewselector);

      var resizable = document.querySelectorAll('#main > div > div > div > div > div > div > div > div > div > div > div > div')[0];
      resizable.style.maxWidth = '100%';
}
