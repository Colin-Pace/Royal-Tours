import './About.css';

 
function About() {
   return (
    <div className="About">
      <div id="personnelImages">
        <div id="colinImage">
          <img 
            src={require("../Photos/AbdulRahimRathore.jpeg")} 
            alt="ColinPicture" 
            width="280" 
            height="350"/>
          <p>Abdul Rahim Rathore</p>
        </div>

        <div id="abdulRahimImage">
          <img 
            src={require("../Photos/ColinPicture.png")} 
            alt="ColinPicture" 
            width="280" 
            height="350"/>
          <p>Colin Pace</p>
        </div>
      </div>

      <div id = "aboutDescription">
        <p>Abdul Rahim Rathore lives in the city of Makrana, in the Indian state of Rajasthan. From a young age, Abdul was interested in different cultures and languages. He started studying English as a child and developed throughout school, eventually reaching conversational proficiency. His interests include spending time with family and friends, watching cricket, and continuing to study languages like English.</p>

        <p>Colin Pace lives in the city of Austin, in the state of Texas in the United States. Colin has studied multiple languages, and he focuses on Hindi, a language he studied while a graduate student at The University of Texas at Austin. He also lived for four years in India, developing his Hindi abilities. Colin is a web developer and made the website for the company. Colin keeps a vlog on YouTube and a blog on Medium for his interests in Hindi and science.</p>

        <p>Abdul and Colin met one another while Colin was a student of Hindi at The American Institute of Indian Studies in Jaipur, Rajasthan. Quickly becoming friends, they helped one another in a language exchange. When the opportunity arose for Colin to join Abdul in the tourism company, Colin jumped at the chance, applying his web development and content creation skills to the new role. Together, Abdul and Colin hope to provide an incredible and authentic tourism experience.</p>
      </div>
    </div>
  );
}

export default About;
