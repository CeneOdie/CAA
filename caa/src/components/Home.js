import React from 'react'
import basicCard from '../static/images/basic-card.png';
import plusCard from '../static/images/plus-card.png';
import premierCard from '../static/images/premier-card.png';

const Home = () => {
  return (
    <div class = "page-content-div">
        <div class = "homeCardStyle">
          <div>
              <p class = "cardTitle">MEMBERSHIP</p>
              <p class = "cardDesc">Compare CAA Membership - Towing Coverage, Roadside Benefits, and More</p>
          </div>
        </div>       

        <div class = "plan-options">
          <div class = "plan-option">
            <p class = "plan-title">
              Basic
            </p>
            <p class = "plan-price">
              $75/<b>year</b>
            </p>
            <img src = {basicCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div class = "benefits">
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Four service call</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Towing distance of 10 km per call¹</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Free emergency fuel delivery. Fuel costs extra.</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Mobile battery service²</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Unlimited general practioner consults per year at a 20% discounted rate with Maple</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase²</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Member pricing on Canadian passport photos</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Member pricing on merchandise⁴</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Car and Bike coverage</p></div>
              </div>
            </div>            
          </div>
          <div class = "plan-option">
          <p class = "plan-title">
              Plus
            </p>
            <p class = "plan-price">
              $119/<b>year</b>
            </p>
            <img src = {plusCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div class = "benefits">
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Four service call</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Towing distance of 200 km per call¹</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Free emergency fuel and delivery.</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Mobile battery service²</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase²</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>2 FREE general practitioner consults per year with Maple</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Free Canadian passport photos</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Additional 5% off Member pricing on merchandise⁴</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Car, Bike and Motorcycle coverage</p></div>
              </div>
            </div> 
          </div>
          <div class = "plan-option">
          <p class = "plan-title">
              Premier
            </p>
            <p class = "plan-price">
              $149/<b>year</b>
            </p>
            <img src = {premierCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div class = "benefits">
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Five service call</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Towing distance of 320 km on one call and 200 km on four calls¹</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase plus 20 CAA Dollars®²</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>5 FREE general practitioner consults per year with Maple</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Free Canadian passport photos</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Additional 10% off Member pricing for merchandise⁴</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Car, Bike and Motorcycle coverage</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Road Trip Interruption Assistance⁶</p></div>
              </div>
              <div class = "benefit">
                <div class = "tick-outer"><div class = "tick">✓</div></div><div class = 'ben-p-outer'><p>Vehicle return benefit</p></div>
              </div>
            </div> 
          </div>


        </div> 
    </div>
  )
}

export default Home