import React, { useRef, useState } from 'react'

function ChangeColor() {
    const refDiv = useRef()

    const [typeofcolor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('')

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length)
    }

    function randomHexColor() {
        let color = '#'

        let totalHex = 'ABCDEF1234567890'

        for (let i = 0; i < 6; i++) {
            color += totalHex[randomColorUtility(totalHex.length)]
        }
        setColor(color)
    }

    function GenrateRGB() {
        const r = randomColorUtility(256)
        const g = randomColorUtility(256)
        const b = randomColorUtility(256)

        setColor(`rgb(${r},${g},${b})`)
        // refDiv.current.style.backgroundColor = `rgb(${r},${g},${b})`
        // refDiv.current.innerText = `rgb(${r},${g},${b})`
    }



    return (
        <>
            <div style={{ backgroundColor: color }} className='showcolor'>{color}</div>
            <button className='btn1' onClick={randomHexColor}>
                Genrate randomHexColor
            </button>
            <button className='btn2' onClick={GenrateRGB}>
                Genrate RGB
            </button>
            <button className='btn3' >
                Genrate RandomColor
            </button>
        </>
    )
}

export default ChangeColor