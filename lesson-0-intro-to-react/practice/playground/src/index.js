const app = document.getElementById('app');

// Create a button element using React.createElement
// padding 10px, className of cta-button
// text click  <span>Click Me </span>

const span = React.createElement('span', {
  key: 'hey'
}, 'Good Bye')
const span2 = React.createElement('span', {
  key:'paul'
}, 'Click Me')
const div = React.createElement('div', {
  key:'key'
}, 'I am a div')
const children = [span,span2,div]
const button = React.createElement(
  'button',
  {
    className: 'cta-button',
    style: {
      padding: '10px',
    },
  },
  children
);

function createSpan(options = {}, children = []){
  return React.createElement('span', options, children)
}

// this piece of component is a small example of something i will be doing over and over
function Chef(props){
  return (
    <div>{props.chef}
      <img src= {props.src} alt= {props.alt} />
      <button onClick={props.work}>Make it happen</button>
    </div>
    );
}

function work(){
  console.log('its happen..')
}

ReactDOM.render(<Chef chef="Devonte" src="https://placeholder.com/150" alt="placeholder" work={work}/>,app);
