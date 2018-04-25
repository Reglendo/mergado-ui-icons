
import * as React from "react"
export interface Props { 
    size?: number 
    text?: string 
    title?: string 
    style?: any 
    addClass?: string 
    viewBox?: string 
    color?: string 
    textFirst?: boolean 
    className?: string 
}

class IconBattery0 extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--battery-0 ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M38.1 14.4q.9 0 1.6.7t.6 1.5v6.8q0 .9-.6 1.5t-1.6.7v2.8q0 1.2-.8 2t-2 .8H2.8q-1.2 0-2-.8t-.8-2V11.6q0-1.2.8-2t2-.8h32.5q1.1 0 2 .8t.8 2v2.8zm0 9v-6.8h-2.2v-5q0-.2-.2-.4t-.4-.2H2.8q-.2 0-.4.2t-.2.4v16.8q0 .2.2.4t.4.2h32.5q.2 0 .4-.2t.2-.4v-5h2.2z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBattery0;
