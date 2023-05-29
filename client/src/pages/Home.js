import welcome_bg from "../assets/welcome-bg.png"
const Home = () => {
  return (
    <>
      <div className='container'>
      <div className="row ">
        <div className="col-lg-6 col-md-6 col-sm-12 welcome-description-container">
          <h1 className="main-header">starbucks coffe</h1>
          <h1 className="main-header orange-header">blend</h1>
          <p className='tagline'>Cafeaua a fost întotdeauna o idee bună,<br/> bucurați-vă de cafea acasă</p>
          <button className='main-button'>Afla mai multe</button>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src={welcome_bg}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default Home