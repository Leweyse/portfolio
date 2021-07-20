import React from 'react';

class Description extends React.Component {
  render = () => {
    return (
        <>
            <section id="about_section">
              <div className="about-container">
                  <div className="about_description">
                      <h2 id="about-title">My name is Daryl</h2>
                      <h3>I'm a Web Developer</h3>
                      <br />
                      <p>Since I decided to turn my passion into a career, I have been self-taught for much of my time in this world. I am passionate about web development, and I continually challenge myself to learn something new. I value being able to share knowledge with other people, it is exciting to create something with a group that shares your enthusiasm. I am looking to hone my skills and create new, increasingly ambitious projects.</p>
                  </div>
                  <div className="about-languages">
                    <h2>What Can I Do</h2>
                    <ul>
                      <p>
                        HTML5
                        <li>Handlebars</li>
                      </p>
                      <p>
                        CSS3
                        <li>CSS Grid</li>
                        <li>CSS Flex</li>
                        <li>SASS & SCSS</li>
                      </p>
                      <p>
                        JavaScript
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>Passport</li>
                        <li>React JS</li>
                        <li>React Spring</li>
                        <li>React Router</li>
                      </p>
                    </ul>
                  </div>
                  <div className="about-languages">
                    <ul>
                      <p>
                        MongoDB
                        <li>MongoDB Compass</li>
                        <li>Documents and Collections</li>
                        <li>Aggregation: Map-Reduce</li>
                        <li>PassportJS validation</li>
                        <li>Protect Data with BcryptJS</li>
                        <li>MongoDB Atlas</li>
                      </p>
                      <p>
                        Git
                        <li>Version Control</li>
                      </p>
                    </ul>
                  </div>
              </div>
            </section>
        </>
    )
  }
}

export default Description;