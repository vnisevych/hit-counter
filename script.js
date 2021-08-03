class HitRunner extends HTMLElement {
	// Inside the constructor, we define all the functionality the element will have when an instance of it is instantiated. In this case we attach a shadow root to the custom element, use some DOM manipulation to create the element's internal shadow DOM structure — which is then attached to the shadow root — and finally attach some CSS to the shadow root to style it.
	constructor() {
  	// Always call super first in constructor
  	super();
    // Create a shadow root
		this.attachShadow({mode: 'open'}); // sets and returns 'this.shadowRoot'
    
    this.count = 0; //state
		
    const btn = document.createElement('button');
    btn.setAttribute('class', 'btn');
    btn.setAttribute('type', 'button');
    btn.textContent = "Click to count";
    btn.addEventListener('click', this.increaseCount.bind(this));
    
    this.shadowRoot.appendChild(btn);
   
    const timer = document.createElement('div');
    timer.setAttribute('class', 'timer');
    timer.textContent = this.count;
    this.shadowRoot.appendChild(timer);
    
    const style = document.createElement('style'); // to style my el
    style.textContent = `
    	:host { /* pointer to shadowRoot element */
      	display: flex;
        justify-content: space-around;
        align-items: center;
        border: 1px solid black;
        width: 300px;
        padding: 30px;
      }
      
    	.btn {
        background-color: lightblue;
        border-radius: 5px;
        padding: 10px;
        border: 1px solid black;
        box-shadow: 0 0 4px black;
      }
    `;
    
    // attach the created elements to the shadow DOM
    this.shadowRoot.appendChild(style);
  }
  
  increaseCount() {
      this.shadowRoot.querySelector('.timer').textContent = ++ this.count;
  }
}

customElements.define('hit-runner', HitRunner); // returns information on what custom el is registered 
