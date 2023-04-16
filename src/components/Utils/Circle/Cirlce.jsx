

const Circle = ({color,percent,r,cx,cy,stWid}) => {

    const circ = 2*Math.PI * r
    const strokePct = ((100 - percent)*circ)/100

    return (
        <circle r = {r} cx={cx} cy={cy} fill="transparent" stroke={strokePct !== circ ? color : ""} 
        strokeWidth ={stWid} strokeDasharray={circ} strokeDashoffset={percent ? strokePct : 0}></circle>
    )
}

export default Circle