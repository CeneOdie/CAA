import React from 'react'
import basicCard from '../static/images/basic-card.png';
import plusCard from '../static/images/plus-card.png';
import premierCard from '../static/images/premier-card.png';

const Profile = (user) => {
    var cardImg = ""
    var profileUser = user.user
    console.log(profileUser)
    if (profileUser.tier === "Basic") {
        cardImg = basicCard
    } else if (profileUser.tier === "Plus") {
        cardImg = plusCard        
    } else if (profileUser.tier === "Premier") {
        cardImg = premierCard                
    }
  return (
    <div className='page-content-div'>
        <div className = "roadCardStyle pageCard">
        <div>
            <p className = "cardTitle">PROFILE</p>
            <p className = "cardDesc">View Your Profile Information</p>
        </div>
        </div>       

        <div className='profile-div'>
            <div className='profile-card'>
                <div className='profile-info'>
                    <div>
                        <img src={cardImg} alt = {`${profileUser.tier} Card`}/>
                    </div>
                    <div className='profile-person'>
                        <p>Name: {profileUser.name}</p>
                        <p>Membership: {profileUser.membership}</p>
                        <p>Expiry Date: {profileUser.expiry_date}</p>
                        <p>CAA Dollar Balance: ${profileUser.caa_balance}</p>
                        <p>Tier: {profileUser.tier}</p>
                    </div>
                </div>
                <div className='profile-options'>
                    <button>Shop and Earn</button>
                    <button>Renew Membership</button>
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Profile