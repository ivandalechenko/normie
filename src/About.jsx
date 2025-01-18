import './About.scss';
import RunText from './RunText';
export default () => {
    return (
        <div className='About'>
            <div className='About_top'>
                <div className='About_content container'>
                    <div className='About_content_element'>
                        NEVER TRADE AGAINST THE NORMIE
                    </div>
                    <div className='About_content_element'>
                        EMBRACE THE FAITH
                    </div>
                    <div className='About_content_element'>
                        CA: SOON
                    </div>
                </div>
            </div>
            <div className='About_bot'>
                <div className='About_clouds'>
                    <div className="About_clouds_1 free_img">
                        <img src="/img/secondCloud1.svg" alt="" />
                    </div>
                    <div className="About_clouds_2 free_img">
                        <img src="/img/secondCloud2.svg" alt="" />
                    </div>
                    <div className="About_clouds_3 free_img">
                        <img src="/img/secondCloud3.svg" alt="" />
                    </div>
                </div>
                <div className='About_decor container'>
                    <div className='About_decor_left free_img'>
                        <img src="/img/secondChel1.png" alt="" />
                    </div>
                    <div className='About_decor_right free_img'>
                        <img src="/img/secondChel2.png" alt="" />
                    </div>
                </div>
                <div className='About_run container'>
                    <RunText>
                        <a href="https://x.com/hashtag/XRPARMY?src=hashtag_click" target='_blank'>XRPARMY</a> <a href="https://x.com/hashtag/XRP589?src=hashtag_click" target='_blank'>XRP589</a> <a href="https://x.com/hashtag/XRPCommunity?src=hashtag_click" target='_blank'>XRPCommunity</a> <a href="https://x.com/hashtag/XRPHolders?src=hashtag_click" target='_blank'>XRPHolders</a> <a href="https://x.com/hashtag/XRPL?src=hashtag_click" target='_blank'>XRPL</a> <a href="https://x.com/hashtag/Ripple?src=hashtag_click" target='_blank'>Ripple</a> <a href="https://x.com/hashtag/XRPLedger?src=hashtag_click" target='_blank'>XRPLedger</a> <a href="https://x.com/hashtag/XRPARMY?src=hashtag_click" target='_blank'>XRPARMY</a> <a href="https://x.com/hashtag/XRP589?src=hashtag_click" target='_blank'>XRP589</a>
                    </RunText>
                </div>
            </div>
        </div>
    )
}