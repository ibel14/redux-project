import {createStore} from 'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state +1;
      case 'DEC':
        return state -1;
        case 'CLR':
        return 0;
    default:
      return state;
  }
}

let store = createStore(counter);

const inc = () => ({type: 'INC'});
const dec = () => ({type: 'DEC'});
const clr = () => ({type: 'CLR'});

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc());
});

document.getElementById('dec').addEventListener('click', () => {
  store.dispatch(dec());
});
document.getElementById('clr').addEventListener('click', () => {
  store.dispatch(clr());
});


const update = () => {
  document.getElementById('counter').textContent = store.getState();
}

store.subscribe(update);