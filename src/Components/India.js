import './India.css';


function India() {
   return (
      <div className="India">
        <img 
          id="IndiaFlag"
          src={require("../Photos/flag.jpg")} 
          alt="IndianFlag" 
          width="850" 
          height="400"
        />

        <div id = "IndiaDescription">
          <p>India is an incredible country. The country has a rich and vibrant history of religions such as Hinduism, Buddhism, and Islam. It has diverse ethnic groups and languages. It has one of the largest economies in the world. In all of these aspects, India offers a vast wealth of opportunities for a tourist to explore. Read on to learn more about this incredible country.</p>

          <p>India has an ancient history. Although there was a prehistoric settlement in the Indus Valley Civilization, the country of India today often traces its historical origin to the early Vedic settlers in the subcontinent. These people brought with them collections of religious hymns known as the Vedas, which forms the foundation of the Hindu religion today. The books consider religious rituals, chants to the gods, and topics about existence like dharma or religious duty.</p>

          <img 
            className="IndiaImage"
            src={require("../Photos/om.jpg")} 
            alt="IndianFlag" 
            width="850" 
            height="400"
          />
          <h3 className="pictureDescription">The Symbol of Om</h3>

          <p>The communities of the early settlers eventually, over the next few hundred years, formed great empires, in the Maurya Empire and the Gupta Empire. Ashoka of the Mauryan Empire, after conquering most of the subcontinent, renounced his warrior lifestyle and converted the entire kingdom to Buddhism, leaving inscriptions in stone throughout the realm that remain today at places like Sanchi.</p>

          <p>During these early kingdoms, great epics like the Mahabharata and the Ramayana were compiled by bards and storytellers for kings. The epics focus on princes as they negotiate the dynamics of their kingdoms, utilizing religious precepts in their lifestyles. In one section of the Mahabharata called the Bhagavad Gita, the character of Krishna famously reveals his true, divine identity to Arjuna and instructs him on the proper behavior for him in battle.</p>

          <img 
            className="IndiaImage"
            src={require("../Photos/rama.jpg")} 
            alt="IndianFlag" 
            width="850" 
            height="400"
          />
          <h3 className="pictureDescription">A Statue of Rama and the Sita</h3>

          <p>About a millennium later, Islamic princes invaded the subcontinent and set up kingdoms in the north and, later, in the south. The Islamic kingdoms lasted in India until the mid 19th century. Famous monuments from their time remain in the Lodi Gardens in Delhi and the Taj Mahal in Agra. The Mughal emperor Shah Jahan even created an administrative capital in Delhi, what he called Shahjahanabad. In addition to architectural marvels, the Islamic princes developed in India a cultural tradition that both Indian and Pakistani Muslims claim as their heritage – in religion, culture, and language.</p>

          <p>During the 19th century, the British colonizers took control of the kingdoms of the subcontinent and united them politically for the first time under the British Raj. Almost a century of colonialism led to the development among Indians of the independence movement. Led by historical luminaries such as Mahatma Gandhi and Jawaharlal Nehru, the independence movement is marked by several important sub-movements like the Civil Disobedience Movement (1930 – 1934) and the Quit India Movement (1942).</p>
 
          <img 
            className="IndiaImage"
            src={require("../Photos/gandhi.jpg")} 
            alt="IndianFlag" 
            width="850" 
            height="400" 
          />
          <h3 className="pictureDescription">A Picture of Gandhi on a Banknote</h3>

          <p>Achieving independence in 1947, India then set out on a modernization campaign that led to the development of a high-tech, advanced society in many realms of the country. Cities like Bangalore and New Delhi are important tech hubs. Cities like Kolkata, Chennai, and Mumbai remain cosmopolitan centers of culture, politics, and economics.</p>

          <p>With all of this history, modern India is an incredible place for a tourist to journey, to learn about the different layers of history and their intricacies that reveal the authentic ideas of Indian society. Consider the opportunities to learn about, and then tour, the majestic Taj Mahal in Agra or beautiful pink city of Jaipur. Your adventure awaits! </p>
        </div>
    </div>
  );
}

export default India;
