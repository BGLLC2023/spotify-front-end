
import './App.css';
import ChartComponent from './components/genres-component.jsx';
import SubscriptionComponent from './components/subscriptions.jsx';
import ConversionsComponent from './components/ad-conversion.jsx';
import FeaturesComponent from './components/desired features.jsx';

function App() {
  return (
    <div className="App">
     
     
      <div className='components' >
        <ChartComponent />
        <FeaturesComponent />
        <SubscriptionComponent />
        <ConversionsComponent />
        
      </div>
      
    </div>
  );
}

export default App;
