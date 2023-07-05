import React from 'react';
import './HomePage.css';
import logoImage from './logo.png';

// This is a click funtion if you click here 
const HomePage = () => {
  const handlebootcampsClick = () => {
    window.location.href = 'https://curioustechnologies.org/';
  };
  const HomePageClick= () => {
    window.location.href = 'https://curioustechnologies.org/';
  };

  const handleFAQClick = () => {
    window.location.href = 'https://www.cpalgorithm.com';
  };

  const handleAboutUsClick = () => {
    window.location.href = 'https://www.geeksforgeeks.org';
  };
  const handlecoursesClick = () => {
    window.location.href = 'https://www.geeksforgeeks.org';
  };

  return (
    <div>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src={logoImage} alt="Logo" />
          </div>
          <li><a href="#web" onClick={HomePageClick}>Home</a></li>
          <li><a href="#web" onClick={handlecoursesClick}>Courses</a></li>
          <li><a href="#web" onClick={handlebootcampsClick}>Bootcamps</a></li>
          <li><a href="#program" onClick={handleFAQClick}>FAQs</a></li>
          <li><a href="#course" onClick={handleAboutUsClick}>About Us</a></li>
        </ul>

        <div className="rightNav">
          <input type="text" name="search" id="search" />
          <button className="btn btn-sm">Search</button>
        </div>
      </nav>

      <section className="firstsection">
        <div className="box-main">
          <div className="firstHalf">
            <h1 className="text-big" id="web">
              Web Technology
            </h1>
            <p className="text-small">
              HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is the combination of Hypertext and Markup language. Hypertext defines the link between the web pages. A markup language is used to define the text document within tags, which defines the structure of web pages. HTML is a markup language that is used by the browser to manipulate text, images, and other content to display it in the required format.
            </p>
          </div>
        </div>
      </section>

      <section className="secondsection">
        <div className="box-main">
          <div className="secondHalf">
            <h1 className="text-big" id="program">
              C++ Programming
            </h1>
            <p className="text-small">
            C++ is the most used and most popular programming language developed by Bjarne Stroustrup. C++ is a high-level and object-oriented programming language. This language allows developers to write clean and efficient code for large applications and software development, game development, and operating system programming. It is an expansion of the C programming language to include Object Oriented Programming(OOPs) and is used to develop programs for computers. This C++ Tutorial will cover all the basic to advanced topics of C++ like C++ basics, C++ functions, C++ classes,OOPs and STL concepts.
            </p>
          </div>
        </div>
      </section>

      <section className="secondsection">
        <div className="box-main">
          <div className="secondHalf">
            <h1 className="text-big" id="program">
              C Programming
            </h1>
            <p className="text-small">
              C is a procedural programming language. It was initially developed by Dennis Ritchie as a system programming language to write an operating system. The main features of the C language include low-level access to memory, a simple set of keywords, and a clean style. These features make the C language suitable for system programming like operating systems or compiler development.
            </p>
          </div>
        </div>
      </section>

      <section className="secondsection">
        <div className="box-main">
          <div className="secondHalf">
            <h1 className="text-big" id="program">
              Python Programming
            </h1>
            <p className="text-small">
            This Python Tutorial is very well suited for Beginners, and also for experienced programmers with other programming languages like C++ and Java. This specially designed Python tutorial will help you learn Python Programming Language in the most efficient way, with topics from basics to advanced (like Web-scraping, Django, Deep-Learning, etc.) with examples.


            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="paras">
          <h1 className="sectionTag text-big">Java</h1>
          <p className="sectionSubTag text-small">
            Java has been one of the most popular programming languages for many years. Java is Object Oriented. However, it is not considered pure object-oriented as it provides support for primitive data types (like int, char, etc.). The Java code is first compiled into bytecode (machine-independent code). Then, the bytecode is run on the Java Virtual Machine (JVM) regardless of the underlying architecture.
          </p>
        </div>

        <div className="thumbnail">
          <img src={logoImage} alt="laptop image" />
        </div>
      </section>



      <footer className="background">
        <p className="text-footer">
          Copyright ©-All rights are reserved
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
