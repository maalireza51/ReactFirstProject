function generateCarts(name, age) { return React.createElement('div',{class:'div-row'}, React.createElement('span', null, `name:${name}`), React.createElement('span', null, ' .... '+`age:${age}`)); }
const userdata = [
    {
        name: "alireza",
        age: "25"
    },
    {
        name: "ali",
        age: "22"
    },
    {
        name: "reza",
        age: "18"
    }
];
const carts = userdata.map(data=>{return generateCarts(data.name,data.age)});
const container = React.createElement('div',null,carts);
ReactDOM.render(container,document.getElementById('root'));