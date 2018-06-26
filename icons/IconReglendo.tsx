
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element | JSX.Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconReglendo extends React.Component<Props, {}> {
    shouldComponentUpdate(nextProps) { return this.props.text !== nextProps.text }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--reglendo ${p.className || ""}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`m-image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g className={`m-group`}><path d="M20.05 0c-2.795 0-5.392.546-7.743 1.497-2.765 1.117-5.188 2.8-7.127 4.93a13.1 13.1 0 0 1 4.168 1.59 13.552 13.552 0 0 1 3.193 2.625c.367.41.702.85 1.02 1.303A13.948 13.948 0 0 1 16.111 20c0 2.505-.656 4.847-1.791 6.873a7.535 7.535 0 0 1 1.357 3.07c.087.452.143.91.144 1.387v.011a7.453 7.453 0 0 1-1.037 3.772c-.795 1.363-1.987 2.445-3.431 3.05 1.706.777 3.57 1.31 5.543 1.594.991.143 2 .244 3.046.244C31.557 40 40 30.995 40 20v-.112C40 8.895 31.664 0 20.05 0m4.901 15.593c-.442 0-.862-.094-1.252-.248a3.585 3.585 0 0 1-2.245-3.349c0-.065.015-.128.019-.194.098-1.893 1.611-3.4 3.479-3.4 1.934 0 3.5 1.61 3.5 3.595 0 1.987-1.567 3.596-3.501 3.596" fill="#2d95d3"></path><path d="M13.562 11.945a13.866 13.866 0 0 0-1.021-1.302c-.926-1.033-2-1.92-3.193-2.625a13.098 13.098 0 0 0-4.168-1.59C2.104 9.804.234 14.253.035 19.147c-.011.337-.034.67-.035 1.012.009 3.11.7 6.04 1.927 8.658.692-1.95 2.142-3.518 4.006-4.3a6.983 6.983 0 0 1 2.711-.553c.216 0 .422.047.635.065.722.065 1.395.274 2.038.54 1.189.493 2.232 1.27 3.003 2.302a14.006 14.006 0 0 0 1.791-6.873c0-3.012-.953-5.784-2.55-8.054m11.003 2.496c1.091 0 1.973-.907 1.973-2.028 0-1.125-.882-2.03-1.973-2.03-1.09 0-1.976.905-1.976 2.03 0 1.12.885 2.029 1.976 2.029" fill="#29235c"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconReglendo;
