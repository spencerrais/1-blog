import '../Foot/Foot.css';

function Foot() {
    return(
        <footer className="foot">
            <ul className="foot-list">
                <li><a href='https://www.linkedin.com/in/spencerraisanen/'><i className="fab fa-linkedin"></i></a></li>
                <li><a href="https://github.com/spencerrais"><i className="fab fa-github-square"></i></a></li>
                <li><a href="https://gitlab.com/spencerraisanen"><i className="fa-brands fa-gitlab"></i></a></li>
                <li><a href="mailto:spencerraisanen@live.com"><i className="fa-solid fa-envelope"></i></a></li>
            </ul>
        </footer>
    )
}

export default Foot;