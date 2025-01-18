import { useEffect, useState } from 'react';
import './RunText.scss';
export default ({ children }) => {
    const [keyId, setkeyId] = useState(0);

    useEffect(() => {
        setkeyId(Math.random())
    }, [])

    return (
        <div className='RunText'>
            {Array(5)
                .fill(0)
                .map((_, index) => {
                    return <span key={`runText-${index}-${keyId}`} >
                        {children}
                    </span>
                })}
        </div>
    )
}