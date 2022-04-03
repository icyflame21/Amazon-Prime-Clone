import './Before_Login.css'
function Before_Login() {   
    return (
            <>
         <div className="container">
        <div className="navbar" >
            <a href="#home"><img src="primelogo.png" className="p"/></a>
            <a href="#news"><i className="fa fa-globe g" aria-hidden="true" ></i></a>
            <div className="dropdown">
              <button className="dropbtn">EN
                <i className="fa fa-caret-down"></i>
              </button>
              <div className="dropdown-content">
                <a href="#">Bahasa Indonesia</a>
                <a href="#">Dansk</a>
                <a href="#">Deutsch</a>
                <a href="#">English</a>
                <a href="#">Espanol</a>
                <a href="#">Francais</a>
                <a href="#">Italiano</a>
                <a href="#">Nederlands</a>
                <hr className="l"> </hr>
                <div className="d1">
                  <a href="#">Norsk</a>
                  <a href="#">Polski</a>
                  <a href="#">Portuhues(Brasil)</a>
                  <a href="#">Suomi</a>
                  <a href="#">Svenska</a>
                  <a href="#">Turkce</a>
                  <a href="#">Pyccknn</a>
                  <a href="#">हिन्दी</a>
                </div>
            </div> 
           
          </div>
          <a href="#news" className="e">Sign In</a>
          </div>
          <img src="amazon1.png" className="s" data-aos="flip-up"/>
          <p className="k" data-aos="zoom-in">Welcome to Prime Video</p>
          <p class="t">Join Prime to watch the latest movies, TV shows<br/> and award-winning Amazon Originals</p>
          <button className="button button2">Login to join Prime</button>
          
    </div>
    <div className="w">
      <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-Living-Room-V2._CB524587855_SY1200_FMJPG_.jpg" />
      <div className="w1">
      <p className="k2" data-aos="fade-up-left">Great Entertainment</p>
      <p className="t2">With your Prime membership, you have access to <br/>exclusive Amazon Originals, blockbuster Bollywood movies, regional movies and more.</p><br/><br/>
      <button className="button button2" style="margin-left: 10px;">Get started</button>
      </div>

    </div>
    <div className="y">
      <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/PRIME_multi-benefit_MAGNET_2X._CB1519820207_SY1200_FMJPG_.jpg" />
      <div className="y1">
      <p className="k3" data-aos="fade-up-right">One membership, many benefits</p>
      <p className="t3">Your Prime membership now also includes ad-free music along <br/>with  unlimited free, fast delivery on eligible items, exclusive <br/> access to deals & more.</p><br/><br/>
      <button className="button button2" >Get started</button><br/>
      <p className="t4">*Go to amazon.in/prime for more information</p>
      </div>

    </div>
    <div className="z">
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/MLP_Template_Image_Left._SY1200_FMJPG_.jpg" />
      <div className="z1">
      <p className="k4" data-aos="fade-up-left">Even better with Fire TV Stick</p>
      <p className="t5">The biggest movies and TV shows are always better on a big <br/>screen. Simply plug in your Amazon Fire TV Stick and stream on <br/> any HDTV. Press the voice button on the remote and say the name <br/> of the title you want to watch to find it in seconds.</p><br/><br/>
      <button className="button button2" style="margin-left: 740px;" >Get started</button><br/>
      
      </div>

    </div>
    <div className="r">
     
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Devices.jpg" className="i2 " data-aos="flip-left"/>
      <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/PV_Benefits_Download_IN.jpg" className="i3" data-aos="fade-down"/>
   <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/Magellan_MLP/300x300_Tile_1.png" className="i4" data-aos="fade-right"/>
    

    <div className="o">
           <p>Watch anywhere
             <br/>
             <span className="g7">Enjoy from the web or with the Prime Video<br/> app  on your phone, tablet, or <br/>select Smart TVs — <br/>on up to 3 devices at once.</span>
           </p>
           <p className="o1">Download and go
            <br/>
            <span className="g1">Watch offline on the Prime Video app<br/> when you download titles to <br/>your iPhone, iPad, Tablet,<br/> or Android device.</span>
           </p>
           <p className="o2">
             Data Saver
             <br/>
             <span className="g2">Control data usage while downloading <br/>and watching videos on select phones <br/>or tablets.</span>
            </p>
    </div>
    <div>
      <img src="https://m.media-amazon.com/images/G/01/digital/video/Magellan_MLP/IN-kids-30Jan._CB1517304519_SY1200_FMJPG_.jpg" className="h"/>
      <div className="z1">
        <p className="k8" data-aos="fade-up-right">Family Friendly</p>
        <p className="t8">With easy to use Parental Controls and a dedicated <br/>kids page, enjoy secure, ad-free kids entertainment.<br/> Kids can enjoy popular TV shows like Peppa Pig,<br/> Powerpuff Girls, and Chhota Bheem.</p><br/><br/>
        <button className="button button2" style="margin-left: 140px;" >Get started</button><br/>
        
        </div>
    </div>
    <div className="gr">
      <img src="primelogo.png" className="p1"/>
 <a href="#" style="color:rgb(39, 182, 201);margin-left: -300px;">Terms and Privacy Notice &nbsp &nbsp &nbsp &nbsp Send us feedback &nbsp &nbsp &nbsp Help </a>
 <p style="color:#fff;margin-left: 490px;margin-top: 20px;">© 1996-2020, Amazon.com, Inc. or its affiliates</p>
            </div>
        </div>
  </>          
   
)
}

export { Before_Login}
