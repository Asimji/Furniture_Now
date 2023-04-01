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
  const userName=JSON.parse(localStorage.getItem("input"))||""

    return  (
   
     <div className="nav_up" style={{marginBottom:"50px"}}>
    <div id="navbar" > 
 


<div className="parent-box-1">

       
    <div  className="logo_div">
      <Link to="/"> <img id="logo" src={logo}/></Link> 
    </div>

   <div className="menu_div">
       
        <div id="main_div">
              <Link id="button"  to="/product">Furniture</Link>
            <div id="arif1">
              <div id="b">
                 <div className="div" id="d1">
                     <h5 className="h5"><a href="/">Sofas</a></h5>
                         <ul>
                            <li><a href="/">3 Seater Sofas</a></li>
                            <li><a href="/">2 Seater Sofas</a></li>
                             <li><a href="/">1 Seater Sofas</a></li>
                             <li><a href="/">Sectional Sofas</a></li>
                              <li><a href="/">LHS Seactionals</a></li>
                             <li><a href="/">RHS Sectionals</a></li>
                             <li><a href="/">Futons</a></li>
                             <li><a href="/">Chaise Loungers</a></li>
                            <li><a href="/">Bean Bags</a></li>
                       
                         </ul>
                         </div>
                         <div  id="d2">  
                          <h5 className="h5"><a href="/">Recliners</a></h5>
                          <ul>
                             <li><a href="/">1 Seater Recliners</a></li>
                             <li><a href="/">2 Seater Recliners</a></li>
                             <li><a href="/">3 Seater Recliners</a></li>
                             <li><a href="/">Sofa Chairs</a></li>
                         </ul>
                      </div>
                
                <div id="d3">
                   <h5 className="h5"><a href="/">Chairs</a></h5>
                   <ul>
                    <li><a href="/">Arm Chairs</a></li>
                    <li><a href="/">Rocking Chairs</a></li>
                    <li><a href="/">Folding Chairs</a></li>
                    <li><a href="/">Iconic Chairs</a></li>
                    <li><a href="/">Cafe Chairs</a></li>
                   </ul>

                   </div> 
                   <div id="d4">
                   <h5 className="h5"><a href="/"></a>Centre Tables</h5>
                   <ul>
                    <li><a href="/">Coffee Tables</a></li>
                    <li><a href="/">Coffee Table Sets</a></li>
                    <li><a href="/">Nesting Table Sets</a></li>
                    <li><a href="/">Trunks</a></li>
                    <li><a href="/">Side Tables</a></li>
                   </ul>
                   <h5 className="h5"><a href="/"></a>End Tables</h5>

                 </div> 
               

               <div id="d5">
               <h5 className="h5"><a href="/">Dinning Sets</a></h5>
               <ul>
                   <li><a href="/">4 Seater</a></li>
                   <li><a href="/">6 Seaters</a></li>
                   <li><a href="/">8 Seaters</a></li>
                   <li><a href="/">2 Seaters</a></li>
                   <li><a href="/">Dinning Chairs</a></li>
                   <li><a href="/">Dinning Tables</a></li>
                   <li><a href="/">Crockery Units</a></li>
               </ul>

               </div>
               <div id="d6">
               <h5 className="h5"><a href="/">Bar Furniture</a></h5>
               <h5 className="h5"><a href="/">Bar Cabinate</a></h5>
               <h5 className="h5"><a href="/">Bar Trolley</a></h5>
           </div>
               
             </div>
          </div>
        
      </div>
  




       <div id="main_div">
       <Link id="button"  to="/product">Mattress</Link>
       <div id="arif2">
         <div id="b">
            <div className="div" id="d1">
                <h5 className="h5"><a href="/">King Size</a></h5>
                    <ul>
                       <li><a href="/">King Size</a></li>
                       <li><a href="">Foam</a></li>
                        <li><a href="/">Spring</a></li>
                        <li><a href="/">Latex</a></li>
                         <li><a href="/">Coir</a></li>
                       
                        
                    </ul>
                    </div>
                    <div  id="d2">
                     <h5 className="h5"><a href="/">Queen Size</a></h5>
                     <ul>
                        <li><a href="/">Queen Size</a></li>
                        <li><a href="/">Foam</a></li>
                        <li><a href="/">Soring</a></li>
                        <li><a href="/">Latex</a></li>
                        <li><a href="/">Coir</a></li>
                    
                    </ul>
                 </div>
           <div id="d3">
              <h5 className="h5"><a href="/">Single</a></h5>
              <ul>
             <li><a href="/">Foam</a></li>
             <li><a href="/">Soring</a></li>
             <li><a href="/">Latex</a></li>
             <li><a href="/">Coir</a></li>
              </ul>
              </div>
              <div id="d4">
              <h5 className="h5"><a href="/"></a>Foldable</h5>
              <ul>
               <li><a href="/">King Size</a></li>
               <li><a href="/">Queen Size</a></li>
               <li><a href="/">Single</a></li>
               <li><a href="/">Crib Mattress</a></li>
               <li><a href="/">Pillows</a></li>
               <li><a href="/">Bed Wedges</a></li>
              </ul>
              <h5 className="h5"><a href="/"></a>Plus Size</h5>
            </div>
          <div id="d5">
          <h5 className="h5"><a href="/">Toppers</a></h5>
          <ul>
              <li><a href="/">King Size</a></li>
              <li><a href="/">Queen Size</a></li>
              <li><a href="/">Single</a></li>
              <li><a href="/">Protectors</a></li>
              <li><a href="/">King Size</a></li>
              <li><a href="/">Single</a></li>
              <li><a href="/">Mattress Care</a></li>
          </ul>
          </div>
         
        </div>
     </div>
   </div>






   <div id="main_div">
   <Link id="button"  to="/product">Home Decor</Link>
   <div id="arif3">
     <div id="b">
        <div className="div" id="d1">
            <h5 className="h5"><a href="/">Vases</a></h5>
                <ul>
                   <li><a href="/">Figurines</a></li>
                   <li><a href="/">Collectibles</a></li>
                    <li><a href="/">Photo Frames</a></li>
                    <li><a href="/">Single</a></li>
                     <li><a href="/">Collage</a></li>
                    <li><a href="/">Clip Photo</a></li>
                    <li><a href="/">Table Photo</a></li>
                    <li><a href="/">Screen & Divider</a></li>
                   <li><a href="/">Folding Divider</a></li>
                   <li><a href="/">Hanging Divider</a></li>
          
                  
                </ul>
                </div>
                <div  id="d2">
                 <h5 className="h5"><a href="/">Table Organizer</a></h5>
                 <ul>
                    <li><a href="/">Table Clocks</a></li>
                    <li><a href="/">Decorative Boxes</a></li>
                    <li><a href="/">Desk Organizers</a></li>
                    <li><a href="/">Magazine Racks</a></li>
                    <li><a href="/">Pen Stands</a></li>
                    <li><a href="/">Bookends</a></li>
                    <li><a href="/">Festive Decor</a></li>
                    <li><a href="/">Torans</a></li>
                    <li><a href="/">Rangolis</a></li>
                    <li><a href="/">Christmas</a></li>
                 
                </ul>
             </div>
       <div id="d3">
          <h5 className="h5"><a href="/">Prayer Essentials</a></h5>
          <ul>
           <li><a href="/">Pooja Meralwire</a></li>
           <li><a href="/">Haldi Kumkum Box</a></li>
           <li><a href="/">Diyas</a></li>
           <li><a href="/">Incense Folder</a></li>
           <li><a href="/">Bells</a></li>
           <li><a href="/">Prayer Mats</a></li>
           <li><a href="/">Spritual</a></li>
           <li><a href="/">Pooja Shelves</a></li>
          </ul>
          </div>
          <div id="d4">
          <h5 className="h5"><a href="/"></a>Candles</h5>
          <ul>
           <li><a href="/">Decorative</a></li>
           <li><a href="/">Scented</a></li>
           <li><a href="/">Tea Lights</a></li>
           <li><a href="/">Home Fragrances</a></li>
           <li><a href="/">Candle Stands</a></li>
           <li><a href="/">Candle Holders</a></li>
           <li><a href="/">Tea Light Holders</a></li>
           <li><a href="/">Pots & Planters</a></li>
           <li><a href="/">Desk Pots</a></li>
          </ul>
          <h5 className="h5"><a href="/"></a>Plus Size</h5>
        </div>
      <div id="d5">
      <h5 className="h5"><a href="/">Natural Plants</a></h5>
      <ul>
          <li><a href="/">Indoor</a></li>
          <li><a href="/">Flowering</a></li>
          <li><a href="/">Cacti & Succulents</a></li>
          <li><a href="/">Bonsai</a></li>
          <li><a href="/">Plant Bundles</a></li>
          <li><a href="/">Air Purifier</a></li>
         
      </ul>
      </div>
   
    </div>
 </div>
</div>



<div id="main_div">
<Link id="button"  to="/product">Furnishing</Link>
<div id="arif4">
  <div id="b">
     <div className="div" id="d1">
         <h5 className="h5"><a href="/">Bed Sheets</a></h5>
             <ul>
                <li><a href="/">Single Bed Sheets</a></li>
                <li><a href="/">Queen Bed</a></li>
                 <li><a href="/">Bedsheets</a></li>
                 <li><a href="/">Bedding Sets</a></li>
                  <li><a href="/">Blankets, Quilts & Dohars</a></li>
                 <li><a href="/">Pillows & Pillow Covers</a></li>
                 <li><a href="/">Bed Covers</a></li>
                 <li><a href="/">Diwan Sets</a></li>
                <li><a href="/">Chair Pads & Covers</a></li>
                <li><a href="/">Sofa Covers</a></li>
              
             </ul>
             </div>
             <div  id="d2">
              <h5 className="h5"><a href="/">Bath</a></h5>
              <ul>
                 <li><a href="/">Bath Towels</a></li>
                 <li><a href="/">Hand & Face Towels</a></li>
                 <li><a href="/">Beach Towels</a></li>
                 <li><a href="/">Towels Set</a></li>
                 <li><a href="/">Bath Rugs</a></li>
                 <li><a href="/">Bath Robes</a></li>
                 <li><a href="/">Bathroom Accessories</a></li>
                 <li><a href="/">Shower Curtains</a></li>
              
             </ul>
          </div>
    <div id="d3">
       <h5 className="h5"><a href="/">Home Décor</a></h5>
       <ul>
        <li><a href="/">Plants & Planters</a></li>
        <li><a href="/">Aromas & Candles</a></li>
        <li><a href="/">Clocks</a></li>
        <li><a href="/">Mirrors</a></li>
        <li><a href="/">Wall Décor</a></li>
        <li><a href="/">Festive Decor</a></li>
        <li><a href="/">Pooja Essentials</a></li>
        <li><a href="/">Wall Shelves</a></li>
        <li><a href="/">Fountains</a></li>
        <li><a href="/">Showpieces & Vases</a></li>
       </ul>
       </div>
       <div id="d4">
       <h5 className="h5"><a href="/"></a>Kitchen & Table</h5>
       <ul>
        <li><a href="/">Table Runners</a></li>
        <li><a href="/">Dinnerware & Serveware</a></li>
        <li><a href="/">Cups and Mugs</a></li>
        <li><a href="/">Bakeware & Cookware</a></li>
        <li><a href="/">Kitchen Storage & Tools</a></li>
        <li><a href="/">Bar & Drinkware</a></li>
        <li><a href="/">Table Covers & Furnishings</a></li>
       
       </ul>
       <h5 className="h5"><a href="/"></a>Curtains</h5>
     </div>
   <div id="d5">
   <h5 className="h5"><a href="/">Lamps & Lighting</a></h5>
   <ul>
       <li><a href="/">Floor Lamps</a></li>
       <li><a href="/">Ceiling Lamps</a></li>
       <li><a href="/">Table Lamps</a></li>
       <li><a href="/">Wall Lamps</a></li>
       <li><a href="/">Outdoor Lamps</a></li>
       <li><a href="/">String Lights</a></li>
      
   </ul>
   </div>
   
 </div>
</div>
</div>



<div id="main_div">
<a id="button"  href="/">Kitchen & Dining</a>
<div id="arif5" >
  <div id="b">
     <div className="div" id="d1">
         <h5 className="h5"><a href="/">Serveware</a></h5>
             <ul>
                <li><a href="/">Serving Trays</a></li>
                <li><a href="/">Serving Bowls</a></li>
                 <li><a href="/">Serving Baskets</a></li>
                 <li><a href="/">Appetizer Platters</a></li>
                  <li><a href="/">Cake Stands</a></li>
                 <li><a href="/">Tray Sets</a></li>
                 <li><a href="/">Cheese Boards</a></li>
                 <li><a href="/">Cloche</a></li>
                <li><a href="/">Serving Dishes</a></li>
                <li><a href="/">Cookware</a></li>
                <li><a href="/">Pots and Pans</a></li>
                <li><a href="/">Spatulas</a></li>
              
             </ul>
             </div>
             <div  id="d2">
              <h5 className="h5"><a href="/">Dinnerware</a></h5>
              <ul>
                 <li><a href="/">Dinnerware Sets</a></li>
                 <li><a href="/">Dinner Bowls</a></li>
                 <li><a href="/">Dinner Plates</a></li>
                 <li><a href="/">Sid Plates</a></li>
                 <li><a href="/">Teaware</a></li>
                 <li><a href="/">Tea Cups and</a></li>
                 <li><a href="/">Saucer Sets</a></li>
                 <li><a href="/">Tea Pots</a></li>
                 <li><a href="/">Coffee Mugs</a></li>
                 <li><a href="/">Coffee Tumblers</a></li>
             
              
             </ul>
          </div>
    <div id="d3">
       <h5 className="h5"><a href="/">Bakeware</a></h5>
       <ul>
        <li><a href="/">Tins and Moulds</a></li>
        <li><a href="/">Baking Dishes</a></li>
        <li><a href="/">Knives & Cutlery</a></li>
        <li><a href="/">Knife Sets</a></li>
        <li><a href="/">Serving Cutlery</a></li>
        <li><a href="/">Cutlery Holders</a></li>
       
       </ul>
       </div>
      
   <div id="d5">
   <h5 className="h5"><a href="/">Drinkware</a></h5>
   <ul>
       <li><a href="/">Everyday Glasses</a></li>
       <li><a href="/">Jugs</a></li>
       <li><a href="/">Bottles</a></li>
       <li><a href="/">Sippers</a></li>
       <li><a href="/">Wine Glasses</a></li>
      
   </ul>
   </div>
   <div id="d6">
   <h5 className="h5"><a href="/">Top Brands</a></h5>
   <ul>
    <li><a href="/">Paddington Wood</a></li>
    <li><a href="/">Claire Velvet</a></li>
    <li><a href="/">Gracia Fabric</a></li>
    <li><a href="/">Catalina Fabric</a></li>
    <li><a href="/">Edwina</a></li>
    <li><a href="/">Astra</a></li>
    <li><a href="/">Minerva</a></li>
  
</ul>
<h5 className="h5"><a href="/">Home & Bath</a></h5>
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
        <a href=""><i className="fa-solid fa-user"  id="i2" ></i></a>
        <h5 id="profile_tag"><a  href="/">Profile</a></h5>
        <div id="arif7">
          <div id="b">
             <div className="div" id="d1">
                 <h5 id="lh5">Welcome {userName.name}</h5>
                 <p id="lp">To access account and manage order</p>
           
              {userName===""?<Link id="logincss" to="/login">
              <button id="ls" style={{width:"80px",height:"50px"}} >LOGIN / SIGNUP</button>
              </Link>: <button id="ls" style={{width:"80px",height:"50px"}} onClick={()=>{localStorage.removeItem("input");navigate("/")}}>Logout</button>
                }
                 
              
                 <br/>
                 <>
                     <ul>
                        <li><a href="">Order</a></li>
                        <li><a href="/">Wishlist</a></li>
                         <li><a href="/">Gift card</a></li>
                         <li><a href="/">Contact us</a></li>
                      <li>Furniture_Now   <Link to="/admin"> <button id="insider_span">Admin</button></Link> </li> 
                      
                     </ul>
                    
                    </>
    


                     </div>
                    
            
       
           
         </div>
        </div>
        </div>
        







    </div>

    <div>
        <a href="/"><i className="fa-solid fa-heart font"  id="i1"><span id="count_wish">&nbsp;</span></i></a> 
        <br/>
      <a id="wishlist_tag" href="/">Whishlist</a>
    </div>

    <div>
      <a id="count" href="">  <i className="fa-solid fa-bag-shopping font " id="i1"><span  id="count_cart">&nbsp;</span></i></a>
       <br/>  <a id="cart_tag" href="">Bag</a>
    </div>
</div>

</div> 
</div>
</div>

 )
}
