import './App.css';
import First from './components/First';
import Second from './components/Second';
import Test from './components/Test';
import Third from './components/Third';
import Fourth from './components/Fourth';
import {Message} from './components/Message';
import {Fifth} from './components/Fifth';
import { Increment } from './components/Increment';
import Button from './components/Button'
import { Sixth } from './components/Sixth';
import Count from './components/Count';
import Eight from './components/Eight';
import Tenth from './components/Tenth';
import Classwork from './components/Classwork';
import Ecom from './components/Ecomm';
import Products from './components/Products';
import Eleventh from './components/Eleventh'
import Twelvth from './components/Twelvth'

function App() {
  return (
    <div className="App">
      <Fourth/>
      <Fifth/>
      <Classwork/>
      <h1>Featured Products</h1>
      <Ecom/>
      <Increment/>
      <First></First>
      <Button/>
      <Sixth/>
      <Count/>
      <Eleventh/>
      <Eight/>
      <Tenth/>
      <Twelvth/>
      <Second></Second>
      <Test></Test>
      <Products/>
      <Message/>
      <Third name="Oluwagbenga Tim" title="Senior dev" bio="            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vitae quisquam quo culpa. Dignissimos, nisi doloremque accusantium ipsam, et ex temporibus atque, dolore in vel neque impedit obcaecati inventore accusamus!" desc="            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vitae quisquam quo culpa. Dignissimos, nisi doloremque accusantium ipsam, et ex temporibus atque, dolore in vel neque impedit obcaecati inventore accusamus!"></Third>
      <Third name="Sinzu Spending" title="Junior dev" bio="            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vitae quisquam quo culpa. Dignissimos, nisi doloremque accusantium ipsam, et ex temporibus atque, dolore in vel neque impedit obcaecati inventore accusamus!" desc="            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non vitae quisquam quo culpa. Dignissimos, nisi doloremque accusantium ipsam, et ex temporibus atque, dolore in vel neque impedit obcaecati inventore accusamus!"></Third>
    </div>
  );
}

export default App;
