
const Footer = () => {
    return (
        <nav class="navbar">
        <div class="max-width">
            <div class="pheading"><a href=""> Crypto<span style="color:  rgb(13, 236, 9)">Mania.</span></a></div>
            <ul class="menu">
                <li><a href="#cryptocurrencies">Cryptocurrencies</a></li>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">bitcoin</a></li>
                            <li><a href="#">etherum</a></li>
                            <li><a href="#">tether</a></li>
                            <li><a href="#">bnb</a></li>
                        </ul>
                    </div> 
                <li><a href="#exchanges">Exchanges</a></li>
                    <div class="sub-menu">
                        <ul>
                            <li><a href="#">crypto to crypto</a></li>
                            <li><a href="#">fiat to fiat</a></li>
                            <li><a href="#">fiat to crypto</a></li>
                            <li><a href="#">crypto to fiat</a></li>
                            </ul>
                        </div>
                <li><a href="#roadmap">Roadmap</a></li>
                <li><a href="#community">Community</a></li>
                <li><a href="#getstarted">Get Started</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>
    )
}

export default Footer