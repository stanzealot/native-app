import React, { useRef, useState } from 'react'
import Details from '../../common/Details';
import { copyToClipboard } from '../../utilities/clipboardUtils';
import Status from '../../common/Status';
import TableHeaderSearch from '../../common/TableHeaderSearch';
import Chart from '../../overview/Chart';
function CreditReports() {
    const refLink = useRef(null);
    const [isDownload,setIsDownload] = useState(false)
    const toggleDownload = ()=>{
      setIsDownload(!isDownload)
    }
    const data =[
        { name: "Jan", Total: 1200 },
        { name: "Feb", Total: 2100 },
        { name: "Mar", Total: 800 },
        { name: "Apr", Total: 1600 },
        { name: "May", Total: 900 },
        { name: "June", Total: 1700 },
        { name: "July", Total: 1700 },
        { name: "August", Total: 1700 },
      ];
    return (
      <div className='data_customer'>
        <div className='topbar_identity'>
          <div className='link-bar-left'>
              <img src="/images/Avatar.svg" alt='avater' />
              <div className='link-right'>
                  <h5 className='text_h3'>ARM Limited</h5>
                  <div className='link-right-copy'>
                      <input ref={refLink} className='input_link_copy' type='text' value="64a85678gshs65678sh6s8678" />
                      <img onClick={copyToClipboard.bind(null,refLink)} src='/images/copy.svg' alt="copy" />
                  </div> 
              </div>
          </div>
        </div>
          
        <div className='credit_reports'>
            <h3 className='credit_reports_title'>Credit score</h3>
            {/* credit report item */}
            <div className='credit_reports_items'>
                {/*  */}
                <div className='credit_report_item'>
                    <div className='credit_item_content'>
                        <h5 className='credit_item_title'>CRC bureau</h5>
                        <p className='credit_item_desc'>Generated 13-10-2023</p>
                    </div>
                    <img src='/images/customers/crc.svg' alt='bureau' />
                </div>
                <div className='credit_report_item'style={{background:"#EEEAF7"}}>
                    <div className='credit_item_content' >
                        <h5 className='credit_item_title' style={{color:"#795CBC"}}>First Central bureau</h5>
                        <p className='credit_item_desc' style={{color:"#9E87CE"}}>Generated 13-10-2023</p>
                    </div>
                    <img src='/images/customers/first.svg' alt='bureau' />
                </div>
                <div className='credit_report_item' style={{background:"#F3FAF9"}}>
                    <div className='credit_item_content' >
                        <h5 className='credit_item_title' style={{color:"#2EBDB6"}}>Credit Registry bureau </h5>
                        <p className='credit_item_desc' style={{color:"#58CAC5"}}>Generated 13-10-2023</p>
                    </div>
                    <img src='/images/customers/credit.svg' alt='bureau' />
                </div>
            </div>

            <div className='credit_reports_items'>
               <img src='/images/customers/circularBar.svg' alt='circular' /> 
               <img src='/images/customers/circularBar.svg' alt='circular' /> 
               <img src='/images/customers/circularBar.svg' alt='circular' /> 
            </div>

            
           
        </div>
        <div className='credit_report_chart' >
            <div className='credit_chart_title_container'>

                <h1 className='credit_chart_title'>Credit history</h1>
                <img src='/images/threeDot.svg' alt='dot' />
            </div>
                <Chart 
                main
                data={data}
                />
        </div>

        <div className='risk_indicator'>
            <div className='credit_chart_title_container'>
                <h1 className='credit_chart_title'>Credit history</h1>
                <img src='/images/threeDot.svg' alt='dot' />
            </div>

            <div className='risk_indicator_items'>
                <div className='risk_indicator_item'>
                    <p className='risk_indicator_num'>74%</p>
                    <p className='risk_indicator_title'>Payment history</p>
                    <p className='risk_indicator_desc'>The percentage of payments that you have made on time</p>
                </div>
                <div className='risk_indicator_item'>
                    <p className='risk_indicator_num'>0</p>
                    <p className='risk_indicator_title'>Payment history</p>
                    <p className='risk_indicator_desc'>The percentage of payments that you have made on time</p>
                </div>
                <div className='risk_indicator_item'>
                    <p className='risk_indicator_num'>3 yrs</p>
                    <p className='risk_indicator_title'>Payment history</p>
                    <p className='risk_indicator_desc'>The percentage of payments that you have made on time</p>
                </div>
                <div className='risk_indicator_item'>
                    <p className='risk_indicator_num'>100</p>
                    <p className='risk_indicator_title'>Payment history</p>
                    <p className='risk_indicator_desc'>The percentage of payments that you have made on time</p>
                </div>
            </div>
        </div>
      </div>
    )
}

export default CreditReports
