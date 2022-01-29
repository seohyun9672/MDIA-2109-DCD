var c_template = document.createElement("template"); //<template></template> - for later use 

// find c_template and change the things inner HTML
// use template literals to make multiple lines work ``
// do not need everything from the file 
// copy and paste user inferface (all styles and objectivces **but not functionality)

c_template.innerHTML = `
<style>
        body{
            width: 100vw;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .counter{
            background-color:lightblue;
            display: flex;

        }
        /* means only style immediate buttons in counter selector */
        .counter > button{
            border: none;
            border-radius: 5px;
            width: 30px;
            height: 30px;
            background-color: rgb(141, 160, 197);
            margin: 5px;
            
        }/* means only style immediate a div in counter selector */
        .counter > div{
            display: flex;
            justify-content: center;
            align-items: center;
            flex: 1;
        }
        .bar{
            width: 8px;
            height: 15px;
            background-color: lightcoral;
        }
    </style>
</head>

<body>
    <div class="counter">
        <button class="d-but">-</button>
        <div class="number">1</div>
        <button class="i-but">+</button>
    </div>
    <div>
        <div class="bar"></div>
    </div>
`;

class TheCounter extends HTMLElement{
// everytime using this template, it will create a unique child without making a conflict
// push all attributes to unique child
// wrap the user interface style and generate new unique childeren with thier own functionality so that they never conflict
    constructor(){ // a function used when making a unique children 
        super(); // take the all functionalities and html elements and put all of them in the constructor 
        this.attachShadow({mode:"open"}); //the shadow wil be a part of background(shadow)
        this.num =1;
    }
    connectedCallback(){
        //html element speciability
        //an event that gets callback when the tags are connected
        //when connecting tags to the body, decide what to happen
        this.shadowRoot.appendChild(c_template.content.cloneNode(true));
        //when tags are connected, attach the template to the body when it's ready
        this.shadowRoot.querySelector(".i-but").onclick = () => this.inc();
        this.shadowRoot.querySelector(".d-but").onclick = () => this.dec();
    }

    inc(){
        this.num = this.num +1;
        this.shadowRoot.querySelector(".number").innerText = this.num;
        this.shadowRoot.querySelector(".bar").style.width = (this.num*10)+"px"
    }

    dec(){
        this.num = this.num -1;
        this.shadowRoot.querySelector(".number").innerText = this.num;
        this.shadowRoot.querySelector(".bar").style.width = (this.num*10)+"px"
    }
}
customElements.define("the-counter", TheCounter);

//everytime using the-counter, generate new child and attach it to the new the-counter elements 
//do all of above

