
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

class IconUserMd extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--user-md ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M13.1 30q0 .6-.5 1t-1 .4-1-.4-.4-1 .4-1 1-.4 1 .4.5 1zm22.8 1.4q0 2.7-1.6 4.2T30 37.1H10.5q-2.7 0-4.4-1.5t-1.6-4.2q0-1.6.1-3t.6-3 1-3T8 20.1t2.7-1.4q-.5 1.2-.5 2.7V26q-1.3.4-2.1 1.5T7.4 30q0 1.8 1.2 3t3 1.3 3.1-1.3 1.2-3q0-1.4-.8-2.5t-2-1.5v-4.6q0-1.4.5-2 3 2.3 6.6 2.3t6.6-2.3q.6.6.6 2v1.5q-2.4 0-4.1 1.6t-1.7 4.1v2q-.7.6-.7 1.5t.7 1.6 1.5.6 1.5-.6.6-1.6q0-.9-.7-1.5v-2q0-1.2.9-2t2-.9 2 .9.8 2v2q-.7.6-.7 1.5t.6 1.6 1.5.6 1.6-.6.6-1.6q0-.9-.7-1.5v-2q0-1.5-.8-2.9t-2.1-2.1v-2.9q0-.5-.2-1.1t-.3-.8q1.5.3 2.7 1.3t1.8 2.3 1.1 3 .5 3 .1 3zm-7.1-20q0 3.6-2.5 6.1T20.2 20t-6-2.5-2.6-6.1 2.6-6 6-2.5 6.1 2.5 2.5 6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUserMd;
