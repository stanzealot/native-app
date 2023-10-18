import React, { useState } from 'react'
import ProductItem from './ProductItem'
import DataItem from './DataItem'
import WhyItem from './WhyItem'
import { AnimationOnScroll } from 'react-animation-on-scroll'

function Main() {
  const [activeTab, setActiveTab] = useState('payment');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='landing-main'>
        <div className='main-wrapper'>
            <div className='flick-product-content'>
                <div className='flick-product'>
                    <p className='flick-product-p'>FLICK PRODUCTS</p>
                    <h4 className='flick-product-h'>A fully integrated suite of </h4>
                    <h4 className='flick-product-h'>
                    Payments and Financial Data Products 
                    </h4>
                    <div className='flick-product-btn'>
                        <p onClick={() => handleTabClick('payment')} className={`flick-product-btn1 ${activeTab === 'payment' ? 'active' : ''}`}>Payments</p>
                        <p onClick={() => handleTabClick('data')} className={`flick-product-btn1 ${activeTab === 'data' ? 'active' : ''}`}>Data</p>
                    </div>
                </div>
                <AnimationOnScroll animateIn="fadeInUp" duration={2} delay={200} animateOnce={true}> 
                <div className={`flick-product-items ${activeTab === 'payment'||  activeTab === 'data' ? 'selected' : ''}`}>
                    {activeTab === 'payment' && (
                        <>
          
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Checkout"
                        desc="Prebuilt checkout to help you accept payments seamlessly"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Instant Settlement"
                        desc="Quick and automated settlements"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Pay-Outs"
                        desc="Easy payouts to local banks."
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Virtual Accounts"
                        desc="Open local bank account and collect payments"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Pay-Ins"
                        desc="Accept credit cards, debit cards, or transfers in 100+ Countries"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Recurring Payments"
                        desc="Accept recurring payments in multiple currencies"
                        />
                        </>
                    )}
                    {activeTab === 'data' && (
                        <>
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Identity Verification"
                        desc="Global KYC and anti-fraud"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Bank Account Verification"
                        desc="Bank account-holder information"
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Transaction History"
                        desc="Get transaction history to make informed decisioning."
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Account Balances"
                        desc="Real-time balance checks "
                        />
                        <ProductItem 
                        img="/images/productItem.svg"
                        title="Income"
                        desc="Income and employment verification"
                        />
                        </>
                     )}
                   
                </div>
                </AnimationOnScroll> 
            </div>
            {/*  */}

            <div className='landing-getstarted'>
                <div className='getstarted-content'>
                    <h3 className='getstarted-content-h'>Get started, and <br/> start FLICKING today!</h3>
                    <p className='getstarted-content-p'>
                     Take an online coding bootcamp or learn in-person at one of our state-of-the-art campuses, which are designed to provide dynamic, accelerated learning experiences.
                    </p>
                </div>
                
                <AnimationOnScroll animateIn="zoomIn" duration={2} delay={200} animateOnce={true}> 
                    <img src='/images/getstartedimg.svg' alt='hero' />
                </AnimationOnScroll>
                
            </div>


        </div>
            {/*  */}
        <div className='data-tools'>
            <div className='data-tools-wrapper'>
                <div className='data-tool-content'>
                    <p className='usecase'>USE CASES</p>
                    <h3 className='finance-title'>Financial and Data tools for all use cases</h3>
                    <p className='finance-desc'>Learn how you can make the most of our products</p>
                </div>

                <div className='data-tool-grid'>
                    <DataItem 
                    subtitle="Lending & Credit"
                    title="Give out loans confidently"
                    desc="Seamlessly verify identities and financial data with precision."
                    />
                    <DataItem 
                    subtitle="Investing"
                    title="Recurring Payments made simple"
                    desc="Set up recurring payments, ensuring timely contributions and investment management"
                    />
                    <DataItem 
                    subtitle="E-commerce"
                    title="Easy pre-built Checkout"
                    desc="Enhance your customers experience with Flick’s prebuilt checkout solution, making online transactions smooth and hassle-free"
                    />
                    <DataItem 
                    subtitle="FMCG"
                    title="Easy payouts to supplier and partners"
                    desc="Use Flick's streamlined pay-out solutions to ensure swift and secure transaction with partners and suppliers"
                    />
                    <DataItem 
                    subtitle="Digital Banking "
                    title="Aggregate all banking accounts in one place"
                    desc="Flick's digital banking feature empowers users to manage all their banking accounts in a single platform, promoting convenience and control."
                    />
                      
                </div>

                
            </div>
        </div>
        <div className='api-sdk'>
            <div className='api-sdk-wrapper'>

                <div className='api-sdk-img'>
                    <div className='api-sdk-right'>
                        <div className='api-sdk-content'>
                            <h4 className='api-sdk-title'>Built with <br /> Developers in Mind</h4>
                            {/* <div className='api-sdk-btn'>
                                <p className='api-btn api-active'>API</p>
                                <p className='api-btn'>SDK</p>
                            </div> */}
                        </div>
                        <div className='sdk_text'>

                            <div className='sdk-labels'>
                                <h1 className='sdk-headings'>Seamless API</h1>
                                <p className='sdk-paragraphs'>Implement any or all of Flick's products with just a few lines of code in any language</p>
                            </div>
                            <div className='sdk-labels'>
                                <h1 className='sdk-headings'>Customizable Widget </h1>
                                <p className='sdk-paragraphs'>Launch your user-experience with our flexible widget flow</p>
                            </div>
                            <div className='sdk-labels'>
                                <h1 className='sdk-headings'>StandBy Support</h1>
                                <p className='sdk-paragraphs'>Reach-out anytime for technical support or contribute to our community</p>
                            </div>

                            <button className='explore-btn'>
                            Explore our API  <img style={{display:"inline",marginLeft:"6px"}} src="/images/explore.svg" alt='explore'/>
                            </button>
                        </div>
                    </div>
                    <AnimationOnScroll animateIn="fadeInRight" duration={2} delay={200} animateOnce={true}> 
                        <img src='/images/apisdk.svg' alt='api' />
                    </AnimationOnScroll>
                </div>
            </div>
        </div>

        {/*  */}

        <div className='why-flick'>
            <div className='why-wrapper'>
                <div className='why-content'>
                    <p className='why-subtitle'>WHY FLICK?</p>
                    <h1 className='why-title'>Aggregate all banking accounts in one place </h1>
                </div>

                <div className='why-img'>
                    <img src="/images/why.svg" alt='why'/>
                    <div className='why-right'>
                        <WhyItem
                        line
                        title="All-in-One Convenience:" 
                        desc="Simplify your operations by managing payments and data seamlessly within a single interface."
                        />
                        <WhyItem
                        line
                        title="Expert Support" 
                        desc="Whether you have questions, need technical assistance, or want to explore the full potential of Flick's features, our experts are here to help."
                        />
                        <WhyItem
                        line
                        title="Trusted Expertise" 
                        desc="Flick is your licensed and certified partner, backed by industry expertise and compliance. "
                        />
                        <WhyItem
                        line
                        title="Transparent and Reliable" 
                        desc="Flick will handle your payments securely and efficiently, ensuring that transactions are completed without any hiccups."
                        />
                        <WhyItem
                        line
                        title="Enhance Customer Experiences" 
                        desc="By leveraging Flick's cutting-edge payment solutions, you can provide your customers with seamless payment experiences."
                        />
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Main
