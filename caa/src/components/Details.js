import React, { useEffect } from 'react'
import basicCard from '../static/images/basic-card.png';
import plusCard from '../static/images/plus-card.png';
import premierCard from '../static/images/premier-card.png';

const Details = (planName) => {
    const plans = {
        "basic": {  name: "Basic",
                    price: "75",
                    imgSrc: basicCard,
                    blurb: "Perfect for those close to home.",
                    benefits: ["Four service calls", 
                        "Towing distance of 10 km per call¹",        
                        "Free emergency fuel delivery. Fuel costs extra.",
                        "Mobile battery service²",
                        "Unlimited general practioner consults per year at a 20% discounted rate with Maple",
                        "Member pricing on CAA Premium Battery purchase²",
                        "Member pricing on Canadian passport photos",
                        "CAA Bike Assist™³",
                        "Member pricing on merchandise⁴",
                        "Saving and earn at over 124,000 locations across North America",
                        "Road Trip Accident Assistance⁵",
                        "Car and Bike coverage"]},
        "plus": {   name: "Plus",
                    price: "119",
                    imgSrc: plusCard,
                    blurb: "Perfect for the commuters and those who love to travel.",
                    benefits: [
                        "Four service call",
                        "Towing distance of 200 km per call¹",
                        "Free emergency fuel and delivery.",
                        "Mobile battery service²",
                        "Member pricing on CAA Premium Battery purchase²",
                        "2 FREE general practitioner consults per year with Maple",
                        "Free Canadian passport photos",
                        "CAA Bike Assist™³",
                        "Additional 5% off Member pricing on merchandise⁴",
                        "Saving and earn at over 124,000 locations across North America",
                        "Road Trip Accident Assistance⁵",
                        "Car, Bike and Motorcycle coverage"]},
        "premier": {name: "Premier",
                    price: "149",
                    imgSrc: premierCard,
                    blurb: "The ultimate in roadside assistance.",
                    benefits: [
                        "Five service call",
                        "Towing distance of 320 km on one call and 200 km on four calls¹",
                        "Member pricing on CAA Premium Battery purchase plus 20 CAA Dollars®²",
                        "5 FREE general practitioner consults per year with Maple",
                        "Free Canadian passport photos",
                        "CAA Bike Assist™³",
                        "Additional 10% off Member pricing for merchandise⁴",
                        "Saving and earn at over 124,000 locations across North America",
                        "Road Trip Accident Assistance⁵",
                        "Car, Bike and Motorcycle coverage",
                        "Road Trip Interruption Assistance⁶",
                        "Vehicle return benefit"]}}


    var selectedplan = {}
    var otherplan1 = {}
    var otherplan2 = {}
    var benComponents = []
    
    // useEffect(() => { return () => {
        if (planName.planName === "basic") {
            selectedplan = plans['basic']
            otherplan1 = plans['plus']
            otherplan2 = plans['premier']
            
        } else if (planName.planName === "plus") {
            selectedplan = plans['plus']
            otherplan1 = plans['basic']
            otherplan2 = plans['premier']
    
        } else if (planName.planName === "premier") {
            selectedplan = plans['premier']
            otherplan1 = plans['basic']
            otherplan2 = plans['plus']
    
        }
    
        // console.log(selectedplan.name)
        selectedplan.benefits.map((benefit) => {
            benComponents.push(
            <div className = "benefit">
                <div className = "tick-outer">
                    <div className = "tick">✓</div>
                </div>
                <div className = 'ben-p-outer'>
                    <p>{benefit}</p>
                </div>
            </div>)
        })

        // console.log(benComponents)
        
    // };}, [])
    

  return (
    <div>
        <div className = "roadCardStyle pageCard">
          <div>
                <p className = "cardTitle">PROFILE</p>
                <p className = "cardDesc">View Your Profile Information</p>
          </div>
        </div>      


        <div className = "selected">
            <div>
                <img src = {selectedplan.imgSrc} alt = {`${selectedplan.name} Card`}/>
            </div>
            <div>
                <p className = "plan-title">
                {selectedplan.name}
                </p>
                <p className = "plan-price">
                ${selectedplan.price}<b>/year</b>
                </p>
                <div className = "detail-benefits">
                    {benComponents}
                </div>
            </div>
        </div>

        <hr className = "hr-details"/>

        <div className = "other-options">
            <div className = "other1 other-option">
                <div>
                    <img src = {otherplan1.imgSrc} alt = {`${otherplan1.name} Card`}/>
                </div>
                <div>
                    <p className = "plan-title">{otherplan1.name}</p>
                    <p>{otherplan1.blurb}</p>
                    <button>Learn More</button>
                </div>
            </div>
            <div className = "other2 other-option">
                <div>
                    <img src = {otherplan2.imgSrc} alt = {`${otherplan2.name} Card`}/>
                </div>
                <div>
                    <p className = "plan-title">{otherplan2.name}</p>
                    <p>{otherplan2.blurb}</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>

        {/* <div className = "plan-options">
          <div className = "plan-option">
            <p className = "plan-title">
              Basic
            </p>
            <p className = "plan-price">
              $75/<b>year</b>
            </p>
            <img src = {basicCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              <div className = "benefit">
                <div className = "tick-outer"><div className = "tick">✓</div></div><div className = 'ben-p-outer'><p></p></div>
              </div>
            </div>            
          </div>
          <div className = "plan-option">
          <p className = "plan-title">
              Plus
            </p>
            <p className = "plan-price">
              $119/<b>year</b>
            </p>
            <img src = {plusCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              
            </div> 
          </div>
          <div className = "plan-option">
          <p className = "plan-title">
              Premier
            </p>
            <p className = "plan-price">
              $149/<b>year</b>
            </p>
            <img src = {premierCard} alt = "BasicCard"/>
            <button>Join Now</button>
            <div className = "benefits">
              
            </div> 
          </div>


        </div>  */}
    </div>
  )
}

export default Details