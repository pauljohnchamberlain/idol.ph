const HowItWorks = () => {
  return (
    <div>
      <div className='row-holder'>
        <h2 className='row-title' id='howitworks'>
          How idol Works
        </h2>
        <h3 className="row-subtitle">
          Everything you need to run your influencer campaigns, and more.
        </h3>
        <div className="steps-holder">
          <div className="step-holder">
            <img
              loading="lazy"
              className="step-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step1.png"
              alt="Influencer posing"
            />
            <div className="step-txt-holder">
              <div className="step-num">1</div>
              <h3 className="step-title">Search Influencers</h3>
              <div className="step-txt">
                Search through thousands of vetted Instagram, Facebook, and
                YouTube influencers.
              </div>
            </div>
          </div>
          <div className="step-holder">
            <img
              loading="lazy"
              className="step-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step2.png"
              alt="Influencer posing"
            />
            <div className="step-txt-holder">
              <div className="step-num">2</div>
              <h3 className="step-title">Purchase Securely</h3>
              <div className="step-txt">
                Safely purchase through us. We hold your payment until the work
                is completed.
              </div>
            </div>
          </div>
          <div className="step-holder">
            <img
              loading="lazy"
              className="step-img"
              src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/step3.png"
              alt="Influencer posing"
            />
            <div className="step-txt-holder">
              <div className="step-num">3</div>
              <h3 className="step-title">Receive Quality Content</h3>
              <div className="step-txt">
                Receive your high quality content from influencers directly
                through the platform.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row-holder">
        <div className="features-holder">
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/money.svg"
                alt="Money icon"
                loading="lazy"
              />
              No Upfront Cost
            </div>
            <div className="feature-txt">
              Search influencers for free. No subscriptions, contracts or hidden
              fees.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/check.svg"
                alt="Check icon"
                loading="lazy"
              />
              Vetted Influencers
            </div>
            <div className="feature-txt">
              Every influencer is vetted by us. Always receive high-quality,
              professional content.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/chat.svg"
                alt="Chat icon"
                loading="lazy"
              />
              Instant Chat
            </div>
            <div className="feature-txt">
              Instantly chat with influencers and stay in touch throughout the
              whole transaction.
            </div>
          </div>
          <div className="feature-holder">
            <div className="feature-title">
              <img
                className="feature-img"
                src="https://d5ik1gor6xydq.cloudfront.net/websiteImages/creatorMarketplace/secure.svg"
                alt="Lock icon"
                loading="lazy"
              />
              Secure Purchases
            </div>
            <div className="feature-txt">
              Your money is held safely until you approve the influencer’s work.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
