import './Media.scss';
export default () => {
    return (
        <div className='Media'>
            <a href='https://x.com/xrpnormie' target='_blank' className='Media_element'>
                <img src="/img/x.svg" alt="" />
            </a>
            <a href='https://t.me/thenormieportal' target='_blank' className='Media_element'>
                <img src="/img/tg.svg" alt="" />
            </a>
            <a href='https://dexscreener.com/xrpl/4e4f524d49450000000000000000000000000000.rwtz99naqudaxzhjnqvn9okosewtwjqycp_xrp' target='_blank' className='Media_element'>
                <img src="/img/dex.svg" alt="" />
            </a>
        </div>
    )
}