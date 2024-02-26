import './Home.css';


function Home() {
  return (
    <div className="Home">
      <section id="home">
        <div class="scroll-container">
          <img src={require("../Photos/parliament.jpg")} alt="parliament" width="400" height=
          "400"/>
          <img src={require("../Photos/tajMahal.jpg")} alt="tajMahal" width="600" height=
          "400"/>
          <img src={require("../Photos/holi.jpg")} alt="holi" width="600" height=
          "400"/>
          <img src={require("../Photos/courtPillars.jpg")} alt="courtPillars" width="400" height=
          "400"/>
          <img src={require("../Photos/elephantStatue.jpg")} alt="elephantStatue" width="300" height=
          "400"/>
          <img src={require("../Photos/peacock.jpg")} alt="parliament" width="300" height=
          "400"/>
          <img src={require("../Photos/train.jpg")} alt="parliament" width="600" height=
          "400"/>
          <img src={require("../Photos/rickshaw.jpg")} alt="parliament" width="400" height=
          "400"/>
          <img src={require("../Photos/sadhus.jpg")} alt="parliament" width="600" height=
          "400"/>
          <img src={require("../Photos/dance.jpg")} alt="parliament" width="600" height=
          "400"/>
          <img src={require("../Photos/ghat.jpg")} alt="parliament" width="400" height=
          "400"/>
          <img src={require("../Photos/camel.jpg")} alt="parliament" width="600" height=
          "400"/>
          <img src={require("../Photos/street.jpg")} alt="parliament" width="300" height=
          "400"/>
          <img src={require("../Photos/waterCarrier.jpg")} alt="parliament" width="300" height=
          "400"/>
          <img src={require("../Photos/elephant.jpg")} alt="parliament" width="600" height=
          "400"/>
          <img src={require("../Photos/jaipur.jpg")} alt="parliament" width="400" height=
          "400"/>
          <img src={require("../Photos/goldenTemple.jpg")} alt="parliament" width="400" height=
          "400"/>
          <img src={require("../Photos/ornament.jpg")} alt="parliament" width="600" height=
          "400"/>
        </div> 

        <div id = "homeDescription">
          <p>Welcome to the website of Royal Tours! Scroll through the above images to see more pictures of incredible India!</p>
            
          <p>Here you will find information about the business, the tour packages we offer, and information about India. Royal Tours is a business owned by Abdul Rahim Rathore. Abdul started the business a few years ago, offering tours of India to Indian and foreign tourists alike. Abdul speaks English, as well as a few Indian languages, and he is experienced in showing a variety of people around the amazing country of India.</p>

          <p>Royal Tours offers two types of packages, each of which can be personalized for the client’s interests. The first package is the Explore Package. Here you will find all types of experiences to explore. The Explore Package tours include the following experiences: adventure, culture, wedding, food, rural areas, heritage, royal, herbal tours. The Explore Package can additionally offer transportation services.</p>

          <p>The second type of package is the Health and Wellness Package. Included in this package are medical and yoga tours. Additionally, the package offers tours for medical training and disease diagnosis.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
