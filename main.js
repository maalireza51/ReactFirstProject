function generateCarts(name, age) { 
    const content = React.createElement('div',{class:'span-row'}, React.createElement('span', null, `name:${name}`), React.createElement('span', null, ' .... '+`age:${age}`));
    const main = React.createElement('div',{class:"main"},content);
    return main;
}
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