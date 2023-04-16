const CircleText = ({text,fSize,x,y}) =>{
    return(
        <text
          x={x}
          y={y}
          dominantBaseline="central"
          textAnchor="middle"
          fontSize={fSize}
        >
          {text}
        </text>
    )
}

export default CircleText