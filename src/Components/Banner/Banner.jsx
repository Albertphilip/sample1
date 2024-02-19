import React from 'react'
import './Banner.css'
import hand_shake from '../Assets/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg3MTQ4ODMtaW1hZ2Uta3d2eGhqbGIuanBn.webp'
import worker_img1 from '../Assets/worker_img2.webp';
import worker_img2 from '../Assets/worker_img3.webp';
import progress_bar_img from '../Assets/porgress_bar.png';




function Banner() {
  return (
<div>
    <div className='main'>
        
      <div className="main_child1">
        <div className="text">
        <h1 className='protest-riot-regular'>Great Communication<br/>Leads to great works.</h1>
        <h6 className='text2'>"It takes months to find a customer,Seconds to lose one."-<br/> Vince Lombardi</h6>
        <button className="button" > Sign up</button>
        
        </div>
        </div>
        <div className="main_child2">
            <div className="img">
            <img className="img_hand_shake"src={hand_shake} alt="" /> 
                </div>   
        </div>
      
    </div>
    <div className="worker_bar">
    <div className="worker_child1">
        <div className="img_frame">
  
           
            {/*image  */}

            <div class="container1">

  <div className="image-stack">
    <div className="image-stack__item image-stack__item--top">
      <img src={worker_img1} alt=""/>
    </div>
    <div className="image-stack__item image-stack__item--bottom">
      <img src={worker_img2} alt=""/>
      </div>    
</div>
        </div>
        {/*------------------------------------------------------ */}  
    </div>
    </div>
   

    <div className="worker_child2">
    <div className="text3">
        <h6 className='joinknow_text' style={{paddingBottom:'10px'}}>  <font color="orangered">JOIN KNOW</font></h6>
        <h1 className='protest-riot-regular'>Let's Start<br/>The Journey With As.</h1>
        <h6 className='text4'>"Nothing ever comes to one, that is worth having, except as a result of hard work." —<br/> Booker T. Washington. </h6>
        <button className="button" style={{marginTop:'15px'}}> Join Know</button>
        
        </div>
    </div>
    </div>

      {/*progress bar*/}
    <div className="progress_bar">
        <img className='porgress_bar_img'src={progress_bar_img} alt="" />

    </div>
    {/*bakki footer oka */}
    <h1>footer</h1>
    </div>
    
  )
}

export default Banner
