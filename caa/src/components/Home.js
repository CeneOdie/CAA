import React from 'react'
import basicCard from '../static/images/basic-card.png';
import plusCard from '../static/images/plus-card.png';
import premierCard from '../static/images/premier-card.png';

const Home = () => {
  return (
    <div className = "page-content-div">

        <div className = "homeCardStyle pageCard">
          <div>
              <p className = "cardTitle">MEMBERSHIP</p>
              <p className = "cardDesc">Compare CAA Membership - Towing Coverage, Roadside Benefits, and More</p>
          </div>
        </div>       

        <div className = "plan-options">
          <div className = "plan-option">
            <p className = "plan-title">
              Basic
            </p>
            <p className = "plan-price">
              $75<b>/year</b>
            </p>
            <img src = {basicCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              <div className = "benefit">
              
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Four service calls</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Towing distance of 10 km per call¹</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Free emergency fuel delivery. Fuel costs extra.</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Mobile battery service²</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Unlimited general practioner consults per year at a 20% discounted rate with Maple</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase²</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Member pricing on Canadian passport photos</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Member pricing on merchandise⁴</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer"><div className="checkmark">
                  <div className="checkmark_stem"></div>
                  <div className="checkmark_kick"></div>
              </div></div><div className = 'ben-p-outer'><p>Car and Bike coverage</p></div>
              </div>
            </div>            
          </div>
          <div className = "plan-option">
          <p className = "plan-title">
              Plus
            </p>
            <p className = "plan-price">
              $119<b>/year</b>
            </p>
            <img src = {plusCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Four service calls</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Towing distance of 200 km per call¹</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Free emergency fuel and delivery.</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Mobile battery service²</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase²</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>2 FREE general practitioner consults per year with Maple</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Free Canadian passport photos</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Additional 5% off Member pricing on merchandise⁴</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Car, Bike and Motorcycle coverage</p></div>
              </div>
            </div> 
          </div>
          <div className = "plan-option">
          <p className = "plan-title">
              Premier
            </p>
            <p className = "plan-price">
              $149<b>/year</b>
            </p>
            <img src = {premierCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Five service calls</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Towing distance of 320 km on one call and 200 km on four calls¹</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Member pricing on CAA Premium Battery purchase plus 20 CAA Dollars®²</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>5 FREE general practitioner consults per year with Maple</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Free Canadian passport photos</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>CAA Bike Assist™³</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Additional 10% off Member pricing for merchandise⁴</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Saving and earn at over 124,000 locations across North America</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Road Trip Accident Assistance⁵</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Car, Bike and Motorcycle coverage</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Road Trip Interruption Assistance⁶</p></div>
              </div>
              <div className = "benefit">
                <div className = "tick-outer">
                  <div className="checkmark">
                    <div className="checkmark_stem"></div>
                    <div className="checkmark_kick"></div>
                  </div>
                </div>
                <div className = 'ben-p-outer'><p>Vehicle return benefit</p></div>
              </div>
            </div> 
          </div>
        </div> 
    </div>
  )
}

export default Home