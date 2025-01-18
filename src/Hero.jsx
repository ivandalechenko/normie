import './Hero.scss';
import Media from "./Media"
import RunText from "./RunText"

export default () => {
    return (
        <div className='Hero'>
            <div className='Hero_top'>
                <div className='Hero_header container'>
                    <RunText>
                        VALUE INVESTING. FUTURE OF PAYMENTS. BALANCED PORTFOLIO.
                    </RunText>
                    <Media />
                </div>
            </div>
            <div className='Hero_content container'>
                MEET $NORMIE, THE COMBAT UNIT OF THE $XRP ARMY!
            </div>
            <div className='Hero_bot'>
                <div className='Hero_clouds'>
                    <div className='Hero_clouds_1 free_img'>
                        <img src="/img/heroCloud1.svg" alt="" />
                    </div>
                    <div className='Hero_clouds_2 free_img'>
                        <img src="/img/heroCloud2.svg" alt="" />
                    </div>
                </div>
                <div className='Hero_decor container'>
                    <img src="/img/hero.webp" alt="" />
                </div>
            </div>
        </div>
    )
}