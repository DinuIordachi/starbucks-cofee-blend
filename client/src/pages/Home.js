import welcome_bg from "../assets/welcome-bg.png";
import coffeeTeaImage from "../assets/Coffee-Tea-Plantations-feature.jpg";
import coffeeBg from "../assets/coffee-bg.jpg";
import SecondaryHeader from "../components/SecondaryHeader";
const Home = () => {
  return (
    <>
      <div className='container'>
        <div className="row welcome-block">
          <div className="col-lg-6 col-md-6 col-sm-12 welcome-description-container">
            <h1 className="main-header">starbucks coffee</h1>
            <h1 className="main-header orange-header">blend</h1>
            <p className='tagline'>Cafeaua a fost întotdeauna o idee bună,<br/> bucurați-vă de cafea acasă</p>
            <button className='main-button'>Afla mai multe</button>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 main-image-container">
            <img src={welcome_bg}/>
          </div>
        </div>
        
        <div className='row starbucks-properties-container'>
          <div className='col-lg-6 col-md-6 col-sm-12 properties-images-container'>
            <div className='properties-main-image' style={{backgroundImage: `url(${coffeeTeaImage})`}}></div>
            <div className='row properties-second-image-container'>
              <div className='col-lg-5 col-md-5'>
                <div style={{backgroundImage: `url(${coffeeTeaImage})`}}></div>
              </div>
              <div className='col-lg-7 col-md-7'>
                <div style={{backgroundImage: `url(${coffeeBg})`}}></div>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12 properties-text-container'>
            <SecondaryHeader title={'proprietatile cafelei'}/>
            <p className='properties-text-paragraph'>În America Latină, fermele de cafea sunt adesea conduse de familii care au propriile case pe același teren în care este cultivată cafeaua.
            </p>
            <p className='properties-text-paragraph'>De zeci de ani bem cafea cu acești fermieri, stând pe verandele lor, admirând frumusețea luxuriantă a arborilor de cafea răspândiți în depărtare.</p>
            <p className='properties-text-paragraph'>Cel mai adesea era cafea ușor prăjită așa. Ne-au trebuit peste 80 de încercări pentru a le face corect - moale și aromat, cu o moliciune plăcută.</p>
            <p className='properties-text-paragraph'>Bucurați-vă de cafeaua delicioasă pe care o cunoașteți și pe care o iubiți, acum cu un nou design de ambalaj.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home