import '../pages/Home.css';

function Home() {
    return(
        <div>
            <section id="welcome-section" className= 'welcome-section'>
                <h1>Hello, I am Spencer Raisanen</h1>
                <p>an analyst & developer with a theoretical background in mathematics and statistics
                currently open to opportunities within the blockchain industry</p>
                <a href="#info-section"><i className="fas fa-chevron-down"></i></a>
            </section>
            <section id="info-section" className='info-section'>    
                <h2>Skills</h2>
                <ul>
                    <li>Critical & Independent Thinking</li>
                    <li>Mathematics & Statistics</li>
                    <li>Machine Learning</li>
                    <li>Programming (Javascript, Python, Solidity & SQL)</li>
                    <li>Data Transformation, Engineering, and Analysis</li>

                </ul>
            </section> 
        </div>
    )
}

export default Home;