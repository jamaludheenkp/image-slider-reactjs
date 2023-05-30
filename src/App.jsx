
import './App.scss';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import ImageSlider from './components/image-slider/ImageSlider';
import { RandomImages } from './assets/images'


function App() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div style={{
        width: '800px',
        height: '700px',
        backgroundColor: '#fff',
        padding: '20px'
      }}>
        <ImageSlider images={RandomImages} />
      </div>
    </div>
  );
}

export default App;
