
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

class IconUserPlus extends React.PureComponent<Props, {}> {
    shouldComponentUpdate() { return false }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--user-plus ${p.addClass} ${p.className}`
        return (
                <span className={className} style={p.style} title={p.title}>
                    {p.textFirst && textEl }
                    <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                        fill={p.color}
                        stroke={p.color}
                        strokeWidth={0}
                        height={p.size}
                        width={p.size}
                        viewBox={p.viewBox}
                    >
                        <g><path d="M13.7 20q-3.1 0-5.3-2.2t-2.2-5.3 2.2-5.2 5.3-2.2 5.2 2.2 2.2 5.2-2.2 5.3-5.2 2.2zm18.6 2.5h6.8q.3 0 .5.2t.2.4v3.7q0 .3-.2.5t-.5.2h-6.8v6.8q0 .2-.2.4t-.4.2H28q-.3 0-.5-.2t-.2-.4v-6.8h-6.8q-.3 0-.4-.2t-.2-.5v-3.7q0-.2.2-.4t.4-.2h6.8v-6.8q0-.3.2-.5t.4-.2h3.8q.2 0 .4.2t.2.5v6.8zM18 26.8q0 1 .7 1.8t1.8.7h5v4.6q-1.4 1-3.4 1H5.2q-2.4 0-3.8-1.3T0 29.9q0-1 .1-2t.2-2.1.6-2.2.8-1.8 1.2-1.6 1.7-1.1 2.1-.3q.4 0 .8.3 1.5 1.2 3 1.8t3.2.6 3.2-.6 3-1.8q.3-.3.7-.3 2.6 0 4.2 1.8h-4.3q-1 0-1.7.8t-.8 1.7v3.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconUserPlus;
