"use strict";

var variables = {
    addEventListeners: function(){

        var controls = document.querySelectorAll('.filter input');

        // Add Listener to all the controls
        controls.forEach(input => input.addEventListener('input', variables.handleUpdate));

    },
    handleUpdate: function(){
        const suffix = this.dataset.sizing || '';

        // Change the variable in the Document
        document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

        // Change the Label
        var label = document.querySelector(`label[for="${this.name}"] span`);
        label.innerText = this.value + suffix;

        // Change the CSS
        var css = document.querySelector(`.css span.${this.name}`);
        css.innerText = this.value + suffix;

    },
    init: function(){
        variables.addEventListeners();
    }
};


window.onload = function(){
    variables.init();
};
