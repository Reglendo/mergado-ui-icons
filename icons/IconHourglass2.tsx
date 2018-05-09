
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string | Element
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconHourglass2 extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--hourglass-2 ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M34.4 2.9q0 5.8-2.3 10.3t-6 6.8q3.6 2.4 6 6.8t2.3 10.3h2.2q.3 0 .5.2t.2.6v1.4q0 .3-.2.5t-.5.2H3.7q-.3 0-.5-.2t-.2-.5v-1.4q0-.4.2-.6t.5-.2h2.2q0-5.8 2.3-10.3t6-6.8q-3.6-2.4-6-6.8T5.9 2.9H3.7q-.3 0-.5-.2T3 2.1V.7q0-.3.2-.5t.5-.2h32.9q.3 0 .5.2t.2.5v1.4q0 .4-.2.6t-.5.2h-2.2zm-2.8 0H8.7q0 4.6 1.9 8.5h19.1q1.9-3.9 1.9-8.5zM30.3 30q-1.2-3.1-3.2-5.4t-4.4-3.2h-5.1q-2.3 1-4.4 3.2T10 30h20.3z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconHourglass2;
