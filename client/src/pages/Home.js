import welcome_bg from "../assets/welcome-bg.png";
import coffeeTeaImage from "../assets/Coffee-Tea-Plantations-feature.jpg";
import coffeeBg from "../assets/coffee-bg.jpg";
import roastedCoffee from "../assets/roasted-coffee.jpg";
import product1 from '../assets/products/product1.png';
import product2 from '../assets/products/product2.png';
import product3 from '../assets/products/product3.png';
import author1 from '../assets/authors/author1.jpg';

import SecondaryHeader from "../components/SecondaryHeader";
import ProductCard from "../components/ProductCard";
import {Carousel} from "react-bootstrap";
const Home = () => {
  const productList = [
    {
      image: product1,
      name: 'Starucks Veranda Blend',
      oldPrice: 1234,
      actualPrice: 1794,
    },
    {
      image: product2,
      name: 'Starucks Veranda Blend',
      oldPrice: 2499,
      actualPrice: 1794,
    },
    {
      image: product3,
      name: 'Starucks Veranda Blend',
      oldPrice: 2499,
      actualPrice: 12313,
    },
    {
      image: product2,
      name: 'Starucks Veranda Blend',
      oldPrice: 2499,
      actualPrice: 12334,
    }
  ]
  
  const reviewList = [
    {
      authorAvatar: author1,
      authorName: 'tulei_livia',
      feedback: 'Raportul calitate-pret este foarte bun. Voi cumpara mai multe de aici. Manageri foarte amabili.'
    },
    {
      authorAvatar: author1,
      authorName: 'tulei_livia',
      feedback: 'Raportul calitate-pret este foarte bun. Voi cumpara mai multe de aici. Manageri foarte amabili.'
    },
    {
      authorAvatar: author1,
      authorName: 'tulei_livia',
      feedback: 'Raportul calitate-pret este foarte bun. Voi cumpara mai multe de aici. Manageri foarte amabili.'
    },
    {
      authorAvatar: author1,
      authorName: 'tulei_livia',
      feedback: 'Raportul calitate-pret este foarte bun. Voi cumpara mai multe de aici. Manageri foarte amabili.'
    }
  ]
  return (
    <>
      <div className='container'>
        <div className="row welcome-block">
          <div className="col-lg-6 col-md-12 col-sm-12 welcome-description-container">
            <h1 className="main-header">starbucks coffee</h1>
            <h1 className="main-header orange-header">blend</h1>
            <p className='tagline'>Cafeaua a fost întotdeauna o idee bună,<br/> bucurați-vă de cafea acasă</p>
            <button className='main-button'>Afla mai multe</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 main-image-container">
            <img src={welcome_bg}/>
          </div>
        </div>
        
        <div className='row starbucks-properties-container align-items-center'>
          <div className='col-lg-6 col-md-12 col-sm-12 properties-images-container'>
            <div className='properties-main-image' style={{backgroundImage: `url(${coffeeTeaImage})`}}></div>
            <div className='row properties-second-image-container'>
              <div className='col-5'>
                <div style={{backgroundImage: `url(${roastedCoffee})`}}></div>
              </div>
              <div className='col-7'>
                <div style={{backgroundImage: `url(${coffeeBg})`}}></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12 properties-text-container'>
            <SecondaryHeader title={'proprietatile cafelei'}/>
            <p className='properties-text-paragraph'>În America Latină, fermele de cafea sunt adesea conduse de familii care au propriile case pe același teren în care este cultivată cafeaua.
            </p>
            <p className='properties-text-paragraph'>De zeci de ani bem cafea cu acești fermieri, stând pe verandele lor, admirând frumusețea luxuriantă a arborilor de cafea răspândiți în depărtare.</p>
            <p className='properties-text-paragraph'>Cel mai adesea era cafea ușor prăjită așa. Ne-au trebuit peste 80 de încercări pentru a le face corect - moale și aromat, cu o moliciune plăcută.</p>
            <p className='properties-text-paragraph'>Bucurați-vă de cafeaua delicioasă pe care o cunoașteți și pe care o iubiți, acum cu un nou design de ambalaj.</p>
          </div>
        </div>
        
        <div className='products-container'>
          <SecondaryHeader title={'gusturi preferate'}/>
          <div className='row'>
            {
              productList.map(product => {
                return (
                  <div className='col-lg-3 col-md-6 col-sm-12 mt-4'>
                    <ProductCard
                      image={product.image}
                      name={product.name}
                      oldPrice={product.oldPrice}
                      actualPrice={product.actualPrice}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        
        
        <div className='carousel-container'>
          <SecondaryHeader title={'recenzii'}/>
          <Carousel>
            {
              reviewList.map(feedback => {
                return (
                  <Carousel.Item className='carousel-purple-bg'>
                    <div style={{height: "450px"}}></div>
                    <Carousel.Caption>
                      <div className='feedback-user-avatar' style={{backgroundImage: `url(${feedback.authorAvatar})`}}></div>
                      <h3 className='feedback-user-nickname'>@{feedback.authorName}</h3>
                      <p className='feedback-user-comment'>{feedback.feedback}</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default Home