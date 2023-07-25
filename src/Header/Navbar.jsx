import "./Navbar.css"
import logo from "../Images/Furniture_Now.jpg"
import { useContext } from "react"
import {SearchContext} from "../Context/SearchContext";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar(){

  const val=useContext(SearchContext);
  console.log(val)
  const navigate=useNavigate()

  
  const handleChange=(e)=>{
    val.setQuery(e.target.value)
  }
  const loginToken=JSON.parse(localStorage.getItem('loginToken'))||""
  const userName=JSON.parse(localStorage.getItem("input"))||""

    return  (
   
     <div className="nav_up" style={{marginBottom:"50px"}}>
    <div id="navbar" > 
 


<div className="parent-box-1">

       
    <div  className="logo_div">
      <Link to="/"> <img id="logo" src={logo} alt="Hello"/></Link> 
    </div>

   <div className="menu_div">
       
        <div id="main_div">
              <Link id="button"  to="/product">Furniture</Link>
            <div id="asim1">
              <div id="b">
                 <div className="div" id="d1">
                     <h5 className="h5"><Link to="/product">Sofas</Link></h5>
                         <ul>
                            <li><Link to="/product">3 Seater Sofas</Link></li>
                            <li><Link to="/product">2 Seater Sofas</Link></li>
                             <li><Link to="/product">1 Seater Sofas</Link></li>
                             <li><Link to="/product">Sectional Sofas</Link></li>
                              <li><Link to="/product">LHS Seactionals</Link></li>
                             <li><Link to="/product">RHS Sectionals</Link></li>
                             <li><Link to="/product">Futons</Link></li>
                             <li><Link to="/product">Chaise Loungers</Link></li>
                            <li><Link to="/product">Bean Bags</Link></li>
                       
                         </ul>
                         </div>
                         <div  id="d2">  
                          <h5 className="h5"><Link to="/product">Recliners</Link></h5>
                          <ul>
                             <li><Link to="/product">1 Seater Recliners</Link></li>
                             <li><Link to="/product">2 Seater Recliners</Link></li>
                             <li><Link to="/product">3 Seater Recliners</Link></li>
                             <li><Link to="/product">Sofa Chairs</Link></li>
                         </ul>
                      </div>
                
                <div id="d3">
                   <h5 className="h5"><Link to="/product">Chairs</Link></h5>
                   <ul>
                    <li><Link to="/product">Arm Chairs</Link></li>
                    <li><Link to="/product">Rocking Chairs</Link></li>
                    <li><Link to="/product">Folding Chairs</Link></li>
                    <li><Link to="/product">Iconic Chairs</Link></li>
                    <li><Link to="/product">Cafe Chairs</Link></li>
                   </ul>

                   </div> 
                   <div id="d4">
                   <h5 className="h5"><Link to="/product"></Link>Centre Tables</h5>
                   <ul>
                    <li><Link to="/product">Coffee Tables</Link></li>
                    <li><Link to="/product">Coffee Table Sets</Link></li>
                    <li><Link to="/product">Nesting Table Sets</Link></li>
                    <li><Link to="/product">Trunks</Link></li>
                    <li><Link to="/product">Side Tables</Link></li>
                   </ul>
                   <h5 className="h5"><Link to="/product"></Link>End Tables</h5>

                 </div> 
               

               <div id="d5">
               <h5 className="h5"><Link to="/product">Dinning Sets</Link></h5>
               <ul>
                   <li><Link to="/product">4 Seater</Link></li>
                   <li><Link to="/product">6 Seaters</Link></li>
                   <li><Link to="/product">8 Seaters</Link></li>
                   <li><Link to="/product">2 Seaters</Link></li>
                   <li><Link to="/product">Dinning Chairs</Link></li>
                   <li><Link to="/product">Dinning Tables</Link></li>
                   <li><Link to="/product">Crockery Units</Link></li>
               </ul>

               </div>
               <div id="d6">
               <h5 className="h5"><Link to="/product">Bar Furniture</Link></h5>
               <h5 className="h5"><Link to="/product">Bar Cabinate</Link></h5>
               <h5 className="h5"><Link to="/product">Bar Trolley</Link></h5>
           </div>
               
             </div>
          </div>
        
      </div>
  




       <div id="main_div">
       <Link id="button"  to="/product">Mattress</Link>
       <div id="asim2">
         <div id="b">
            <div className="div" id="d1">
                <h5 className="h5"><Link to="/product">King Size</Link></h5>
                    <ul>
                       <li><Link to="/product">King Size</Link></li>
                       <li><Link to="">Foam</Link></li>
                        <li><Link to="/product">Spring</Link></li>
                        <li><Link to="/product">Latex</Link></li>
                         <li><Link to="/product">Coir</Link></li>
                       
                        
                    </ul>
                    </div>
                    <div  id="d2">
                     <h5 className="h5"><Link to="/product">Queen Size</Link></h5>
                     <ul>
                        <li><Link to="/product">Queen Size</Link></li>
                        <li><Link to="/product">Foam</Link></li>
                        <li><Link to="/product">Soring</Link></li>
                        <li><Link to="/product">Latex</Link></li>
                        <li><Link to="/product">Coir</Link></li>
                    
                    </ul>
                 </div>
           <div id="d3">
              <h5 className="h5"><Link to="/product">Single</Link></h5>
              <ul>
             <li><Link to="/product">Foam</Link></li>
             <li><Link to="/product">Soring</Link></li>
             <li><Link to="/product">Latex</Link></li>
             <li><Link to="/product">Coir</Link></li>
              </ul>
              </div>
              <div id="d4">
              <h5 className="h5"><Link to="/product"></Link>Foldable</h5>
              <ul>
               <li><Link to="/product">King Size</Link></li>
               <li><Link to="/product">Queen Size</Link></li>
               <li><Link to="/product">Single</Link></li>
               <li><Link to="/product">Crib Mattress</Link></li>
               <li><Link to="/product">Pillows</Link></li>
               <li><Link to="/product">Bed Wedges</Link></li>
              </ul>
              <h5 className="h5"><Link to="/product"></Link>Plus Size</h5>
            </div>
          <div id="d5">
          <h5 className="h5"><Link to="/product">Toppers</Link></h5>
          <ul>
              <li><Link to="/product">King Size</Link></li>
              <li><Link to="/product">Queen Size</Link></li>
              <li><Link to="/product">Single</Link></li>
              <li><Link to="/product">Protectors</Link></li>
              <li><Link to="/product">King Size</Link></li>
              <li><Link to="/product">Single</Link></li>
              <li><Link to="/product">Mattress Care</Link></li>
          </ul>
          </div>
         
        </div>
     </div>
   </div>






   <div id="main_div">
   <Link id="button"  to="/product">Home Decor</Link>
   <div id="asim3">
     <div id="b">
        <div className="div" id="d1">
            <h5 className="h5"><Link to="/product">Vases</Link></h5>
                <ul>
                   <li><Link to="/product">Figurines</Link></li>
                   <li><Link to="/product">Collectibles</Link></li>
                    <li><Link to="/product">Photo Frames</Link></li>
                    <li><Link to="/product">Single</Link></li>
                     <li><Link to="/product">Collage</Link></li>
                    <li><Link to="/product">Clip Photo</Link></li>
                    <li><Link to="/product">Table Photo</Link></li>
                    <li><Link to="/product">Screen & Divider</Link></li>
                   <li><Link to="/product">Folding Divider</Link></li>
                   <li><Link to="/product">Hanging Divider</Link></li>
          
                  
                </ul>
                </div>
                <div  id="d2">
                 <h5 className="h5"><Link to="/product">Table Organizer</Link></h5>
                 <ul>
                    <li><Link to="/product">Table Clocks</Link></li>
                    <li><Link to="/product">Decorative Boxes</Link></li>
                    <li><Link to="/product">Desk Organizers</Link></li>
                    <li><Link to="/product">Magazine Racks</Link></li>
                    <li><Link to="/product">Pen Stands</Link></li>
                    <li><Link to="/product">Bookends</Link></li>
                    <li><Link to="/product">Festive Decor</Link></li>
                    <li><Link to="/product">Torans</Link></li>
                    <li><Link to="/product">Rangolis</Link></li>
                    <li><Link to="/product">Christmas</Link></li>
                 
                </ul>
             </div>
       <div id="d3">
          <h5 className="h5"><Link to="/product">Prayer Essentials</Link></h5>
          <ul>
           <li><Link to="/product">Pooja Meralwire</Link></li>
           <li><Link to="/product">Haldi Kumkum Box</Link></li>
           <li><Link to="/product">Diyas</Link></li>
           <li><Link to="/product">Incense Folder</Link></li>
           <li><Link to="/product">Bells</Link></li>
           <li><Link to="/product">Prayer Mats</Link></li>
           <li><Link to="/product">Spritual</Link></li>
           <li><Link to="/product">Pooja Shelves</Link></li>
          </ul>
          </div>
          <div id="d4">
          <h5 className="h5"><Link to="/product"></Link>Candles</h5>
          <ul>
           <li><Link to="/product">Decorative</Link></li>
           <li><Link to="/product">Scented</Link></li>
           <li><Link to="/product">Tea Lights</Link></li>
           <li><Link to="/product">Home Fragrances</Link></li>
           <li><Link to="/product">Candle Stands</Link></li>
           <li><Link to="/product">Candle Holders</Link></li>
           <li><Link to="/product">Tea Light Holders</Link></li>
           <li><Link to="/product">Pots & Planters</Link></li>
           <li><Link to="/product">Desk Pots</Link></li>
          </ul>
          <h5 className="h5"><Link to="/product"></Link>Plus Size</h5>
        </div>
      <div id="d5">
      <h5 className="h5"><Link to="/product">Natural Plants</Link></h5>
      <ul>
          <li><Link to="/product">Indoor</Link></li>
          <li><Link to="/product">Flowering</Link></li>
          <li><Link to="/product">Cacti & Succulents</Link></li>
          <li><Link to="/product">Bonsai</Link></li>
          <li><Link to="/product">Plant Bundles</Link></li>
          <li><Link to="/product">Air Purifier</Link></li>
         
      </ul>
      </div>
   
    </div>
 </div>
</div>



<div id="main_div">
<Link id="button"  to="/product">Furnishing</Link>
<div id="asim4">
  <div id="b">
     <div className="div" id="d1">
         <h5 className="h5"><Link to="/product">Bed Sheets</Link></h5>
             <ul>
                <li><Link to="/product">Single Bed Sheets</Link></li>
                <li><Link to="/product">Queen Bed</Link></li>
                 <li><Link to="/product">Bedsheets</Link></li>
                 <li><Link to="/product">Bedding Sets</Link></li>
                  <li><Link to="/product">Blankets, Quilts & Dohars</Link></li>
                 <li><Link to="/product">Pillows & Pillow Covers</Link></li>
                 <li><Link to="/product">Bed Covers</Link></li>
                 <li><Link to="/product">Diwan Sets</Link></li>
                <li><Link to="/product">Chair Pads & Covers</Link></li>
                <li><Link to="/product">Sofa Covers</Link></li>
              
             </ul>
             </div>
             <div  id="d2">
              <h5 className="h5"><Link to="/product">Bath</Link></h5>
              <ul>
                 <li><Link to="/product">Bath Towels</Link></li>
                 <li><Link to="/product">Hand & Face Towels</Link></li>
                 <li><Link to="/product">Beach Towels</Link></li>
                 <li><Link to="/product">Towels Set</Link></li>
                 <li><Link to="/product">Bath Rugs</Link></li>
                 <li><Link to="/product">Bath Robes</Link></li>
                 <li><Link to="/product">Bathroom Accessories</Link></li>
                 <li><Link to="/product">Shower Curtains</Link></li>
              
             </ul>
          </div>
    <div id="d3">
       <h5 className="h5"><Link to="/product">Home Décor</Link></h5>
       <ul>
        <li><Link to="/product">Plants & Planters</Link></li>
        <li><Link to="/product">Aromas & Candles</Link></li>
        <li><Link to="/product">Clocks</Link></li>
        <li><Link to="/product">Mirrors</Link></li>
        <li><Link to="/product">Wall Décor</Link></li>
        <li><Link to="/product">Festive Decor</Link></li>
        <li><Link to="/product">Pooja Essentials</Link></li>
        <li><Link to="/product">Wall Shelves</Link></li>
        <li><Link to="/product">Fountains</Link></li>
        <li><Link to="/product">Showpieces & Vases</Link></li>
       </ul>
       </div>
       <div id="d4">
       <h5 className="h5"><Link to="/product"></Link>Kitchen & Table</h5>
       <ul>
        <li><Link to="/product">Table Runners</Link></li>
        <li><Link to="/product">Dinnerware & Serveware</Link></li>
        <li><Link to="/product">Cups and Mugs</Link></li>
        <li><Link to="/product">Bakeware & Cookware</Link></li>
        <li><Link to="/product">Kitchen Storage & Tools</Link></li>
        <li><Link to="/product">Bar & Drinkware</Link></li>
        <li><Link to="/product">Table Covers & Furnishings</Link></li>
       
       </ul>
       <h5 className="h5"><Link to="/product"></Link>Curtains</h5>
     </div>
   <div id="d5">
   <h5 className="h5"><Link to="/product">Lamps & Lighting</Link></h5>
   <ul>
       <li><Link to="/product">Floor Lamps</Link></li>
       <li><Link to="/product">Ceiling Lamps</Link></li>
       <li><Link to="/product">Table Lamps</Link></li>
       <li><Link to="/product">Wall Lamps</Link></li>
       <li><Link to="/product">Outdoor Lamps</Link></li>
       <li><Link to="/product">String Lights</Link></li>
      
   </ul>
   </div>
   
 </div>
</div>
</div>



<div id="main_div">
<Link id="button"  to="/product">Kitchen & Dining</Link>
<div id="asim5" >
  <div id="b">
     <div className="div" id="d1">
         <h5 className="h5"><Link to="/product">Serveware</Link></h5>
             <ul>
                <li><Link to="/product">Serving Trays</Link></li>
                <li><Link to="/product">Serving Bowls</Link></li>
                 <li><Link to="/product">Serving Baskets</Link></li>
                 <li><Link to="/product">Appetizer Platters</Link></li>
                  <li><Link to="/product">Cake Stands</Link></li>
                 <li><Link to="/product">Tray Sets</Link></li>
                 <li><Link to="/product">Cheese Boards</Link></li>
                 <li><Link to="/product">Cloche</Link></li>
                <li><Link to="/product">Serving Dishes</Link></li>
                <li><Link to="/product">Cookware</Link></li>
                <li><Link to="/product">Pots and Pans</Link></li>
                <li><Link to="/product">Spatulas</Link></li>
              
             </ul>
             </div>
             <div  id="d2">
              <h5 className="h5"><Link to="/product">Dinnerware</Link></h5>
              <ul>
                 <li><Link to="/product">Dinnerware Sets</Link></li>
                 <li><Link to="/product">Dinner Bowls</Link></li>
                 <li><Link to="/product">Dinner Plates</Link></li>
                 <li><Link to="/product">Sid Plates</Link></li>
                 <li><Link to="/product">Teaware</Link></li>
                 <li><Link to="/product">Tea Cups and</Link></li>
                 <li><Link to="/product">Saucer Sets</Link></li>
                 <li><Link to="/product">Tea Pots</Link></li>
                 <li><Link to="/product">Coffee Mugs</Link></li>
                 <li><Link to="/product">Coffee Tumblers</Link></li>
             
              
             </ul>
          </div>
    <div id="d3">
       <h5 className="h5"><Link to="/product">Bakeware</Link></h5>
       <ul>
        <li><Link to="/product">Tins and Moulds</Link></li>
        <li><Link to="/product">Baking Dishes</Link></li>
        <li><Link to="/product">Knives & Cutlery</Link></li>
        <li><Link to="/product">Knife Sets</Link></li>
        <li><Link to="/product">Serving Cutlery</Link></li>
        <li><Link to="/product">Cutlery Holders</Link></li>
       
       </ul>
       </div>
      
   <div id="d5">
   <h5 className="h5"><Link to="/product">Drinkware</Link></h5>
   <ul>
       <li><Link to="/product">Everyday Glasses</Link></li>
       <li><Link to="/product">Jugs</Link></li>
       <li><Link to="/product">Bottles</Link></li>
       <li><Link to="/product">Sippers</Link></li>
       <li><Link to="/product">Wine Glasses</Link></li>
      
   </ul>
   </div>
   <div id="d6">
   <h5 className="h5"><Link to="/product">Top Brands</Link></h5>
   <ul>
    <li><Link to="/product">Paddington Wood</Link></li>
    <li><Link to="/product">Claire Velvet</Link></li>
    <li><Link to="/product">Gracia Fabric</Link></li>
    <li><Link to="/product">Catalina Fabric</Link></li>
    <li><Link to="/product">Edwina</Link></li>
    <li><Link to="/product">Astra</Link></li>
    <li><Link to="/product">Minerva</Link></li>
  
</ul>
<h5 className="h5"><Link to="/product">Home & Bath</Link></h5>
</div>
 </div>
</div>
</div>
      


<div id="main_div">      
<Link  id="button"  to="/product">Style<sup>New</sup></Link>
   </div>
</div>


</div>
{/* <!-- parent-box-1 end -->

<!-- search part here  --> */}

<div className="parent-box-2">

<div className="div1">
    <input  type="text" name="" id="search" placeholder="Search for products, brands and more" onChange={handleChange}/>
    
        <span><i className="fa-solid fa-magnifying-glass">&nbsp;</i></span> 
        
        <div id="two" ></div>

</div>

<div id="other_div">
    <div>
 
   
     


        <div id="main_div">
        <Link to=""><i className="fa-solid fa-user"  id="i2" ></i></Link>
        <h5 id="profile_tag"><Link  >Profile</Link></h5>
        <div id="asim7">
          <div id="b">
             <div className="div" id="d1">
                 <h5 id="lh5">Welcome {localStorage.getItem("loggedIn")?userName.name:""}</h5>
                 <p id="lp">To access account and manage order</p>
           
              {!loginToken?<Link id="logincss" to="/login">
              <button id="ls" style={{width:"80px",height:"50px"}} >
                LOGIN / SIGNUP
                
                </button>
              </Link>: <button id="ls" style={{width:"80px",height:"50px"}} onClick={()=>{localStorage.removeItem("loginToken");navigate("/")}}>Logout</button>
                }
                 
              
                 <br/>
                 <>
                     <ul>
                        <li><Link >Order</Link></li>
                        <li><Link >Wishlist</Link></li>
                         <li><Link >Gift card</Link></li>
                         <li><Link >Contact us</Link></li>
                      <li>Furniture_Now   <Link to="/admin"> <button id="insider_span">Admin</button></Link> </li> 
                      
                     </ul>
                    
                    </>
    


                     </div>
                    
            
       
           
         </div>
        </div>
        </div>
        







    </div>

    <div>
        <Link ><i className="fa-solid fa-heart font"  id="i1"><span id="count_wish">&nbsp;</span></i></Link> 
        <br/>
      <Link id="wishlist_tag" >Whishlist</Link>
    </div>

    <div>
      <Link id="count" >  <i className="fa-solid fa-bag-shopping font " id="i1"><span  id="count_cart">&nbsp;</span></i></Link>
       <br/>  <Link to={'/cart'} id="cart_tag" >Bag</Link>
    </div>
</div>

</div> 
</div>
</div>

 )
}
