import React, {useState, useEffect} from "react";
import "./support.scss";

const questions = [
  {
    id: 1,
    question: 'Can I purchase Moodle courses from WordPress and then automatically enroll in the course?',
    answer: 'Yes, with MooWoodle, when a user purchases a Moodle course from a WordPress site, upon successful payment, students receive an email with the Moodle course link and login access.',
  },
    {
    id: 2,
    question: 'My Test Connection is showing an error, what should I do?',
    answer: 'If there is an error in the Test Connection, it indicates a configuration issue on the Moodle end. First, ensure you have followed our documentation and configured the settings correctly. If the issue persists, review the error logs and address them. Once the Test Connection runs smoothly, the connection between Moodle and WordPress has been successfully established.',
  },
    {
    id: 3,
    question: 'Can I sell Moodle courses through subscriptions?',
    answer: 'Yes, you can sell Moodle courses through subscriptions using MooWoodle Pro.',
  },
      {
    id: 4,
    question: 'Can I sync all users from Moodle to WordPress and vice versa?',
    answer: 'Yes, with MooWoodle Pro, you can sync all users from Moodle to WordPress and WordPress to Moodle. Real-time synchronization is also supported.',
  },
  
]

function FAQ(props) {    
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchChange = e => {
      setSearchTerm(e.target.value);
    };
    
    useEffect(() => {
      const results = props.data.filter(item=>
        item.question.toLowerCase().includes(searchTerm)
      );
      setSearchResults(results);
    }, [searchTerm]);
    
    return (    
      <div className='container'>
        <h2 className="heading">How can we help you?</h2>
        <section className='faq'>
         {searchResults.map(item => <Question question={item.question} answer={item.answer} />)}
        </section>      
      </div>
    )
  }

  const Question = props => {
    const [isActive, setActive] = React.useState(false);
    const handleClick = (id) => {
     setActive(!isActive)
   }
     return(
       <div className="question-wrapper">
       <div className='question' id={props.id}>
         <h3>{props.question}</h3>
         <button onClick={() => handleClick(props.id)}>
            <svg className={isActive? 'active' : ''} viewBox="0 0 320 512" width="100" title="angle-down">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z" />
            </svg>
         </button>     
       </div>
       <div className={isActive? 'answer active' : 'answer'}>{props.answer}</div>
       </div>
     )
   }

const Support = () => {
  const url = "https://www.youtube.com/embed/fL7wPVYopTU?si=zS1TSj-YU-yx2Nr9";

  const supportLink = [
    {
      title: "Get in Touch with Support",
      icon: "mail",
      description: "Reach out to the support team for assistance or guidance.",
      link: "https://dualcube.com/forums/",
    },
    {
      title: "Explore Documentation",
      icon: "submission-message",
      description: "Understand the plugin and its settings.",
      link: "https://dualcube.com/docs/moowoodle-free-pro-plugin-installation/-",
    },
    {
      title: "Contribute Here",
      icon: "support",
      description: "To participation in product enhancement.",
      link: "https://github.com/dualcube/moowoodle",
    },
  ];


  return (
    <>
      <div className="dynamic-fields-wrapper">
        <div className="support-container">
          <div className="support-header-wrapper">
            <h1 className="support-heading">
              Thank you for using Product Stock Manager & Notifier for
              WooCommerce
            </h1>
            <p className="support-subheading">
              We want to help you enjoy a wonderful experience with all of our
              products.
            </p>
          </div>
          <div className="support-container-wrapper">
            <div className="video-support-wrapper">
              <iframe
                src={url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              />
            </div>
            <div className="support-quick-link">
              {supportLink?.map((item, index) => {
                return (
                  <>
                    <div key={index} className="support-quick-link-items">
                      <div className="icon-bar">
                        <i className={`admin-font font-${item.icon}`}></i>
                      </div>
                      <div className="content">
                        <a href={item.link} target="_blank">{item.title}</a>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
          <div className="faq-wrapper">
          <FAQ data={questions}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
