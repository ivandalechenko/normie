import './Chart.scss';
import Media from './Media';
export default () => {
    return (
        <div className='Chart'>
            <div className='Chart_top'>
                <div className='Chart_logo free_img'>
                    <img src="/img/logo.png" alt="" />
                </div>
            </div>
            <div className='Chart_bot'>
                <div className='Chart_clouds'>
                    <div className='Chart_cloud1 free_img'>
                        <img src="/img/chartCloud1.svg" alt="" />
                    </div>
                    <div className='Chart_cloud2 free_img'>
                        <img src="/img/chartCloud2.svg" alt="" />
                    </div>
                </div>
                <div className='Chart_decor'>
                    <div className='Chart_chart free_img'>
                        <img src="/img/chart.png" alt="" />
                    </div>
                    <div className='Chart_chel1 free_img'>
                        <img src="/img/chartChel1.png" alt="" />
                    </div>
                    <div className='Chart_chel2 free_img'>
                        <img src="/img/chartChel2.png" alt="" />
                    </div>
                </div>
                <div className='Chart_media'>
                    <Media />
                </div>
            </div>
        </div>
    )
}