
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

class IconSpotify extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--spotify ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M28.2 27q0-.7-.7-1.1-4.3-2.6-10-2.6-3 0-6.4.8-.9.2-.9 1.1 0 .5.3.8t.8.3q.1 0 .8-.2 2.9-.6 5.4-.6 5.1 0 8.9 2.3.4.3.7.3.4 0 .7-.3t.4-.8zm2.1-4.8q0-.9-.8-1.4-5.3-3.1-12.2-3.1-3.4 0-6.8.9-1 .3-1 1.5 0 .5.3.9t1 .4q.1 0 .8-.2 2.7-.7 5.6-.7 6.2 0 10.9 2.8.5.3.9.3.5 0 .9-.4t.4-1zm2.4-5.5q0-1.1-.9-1.6-2.8-1.6-6.5-2.5t-7.7-.8q-4.5 0-8.1 1.1-.5.1-.9.5t-.3 1.1q0 .7.5 1.2t1.1.4q.2 0 .9-.1 3-.9 6.8-.9 3.6 0 7 .8t5.6 2.1q.5.3.9.3.7 0 1.1-.5t.5-1.1zm4.6 3.3q0 4.7-2.3 8.6t-6.3 6.2-8.6 2.3-8.6-2.3-6.2-6.2T3 20t2.3-8.6 6.2-6.2 8.6-2.3 8.6 2.3 6.3 6.2 2.3 8.6z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconSpotify;
