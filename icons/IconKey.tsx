
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

class IconKey extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon ${name}--key ${p.addClass} ${p.className}`
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
                        <g><path d="M19.6 11.4q0-1.8-1.3-3t-3-1.3-3.1 1.3-1.2 3q0 1 .4 1.9-.9-.4-1.8-.4-1.8 0-3.1 1.2t-1.2 3 1.2 3.1 3.1 1.2 3-1.2 1.3-3.1q0-.9-.5-1.8.9.4 1.9.4 1.8 0 3-1.2t1.3-3.1zm19 15.7q0 .4-1.1 1.5T36 29.7q-.2 0-.6-.3t-.9-.8-.8-.9-.6-.6L31 29.3l4.9 4.9q.6.6.6 1.5 0 1-.8 1.8t-1.8.9q-.9 0-1.6-.6l-14.9-15q-4 2.9-8.2 2.9-3.6 0-5.9-2.3T1 17.5q0-3.6 2.1-7T8.7 5t6.9-2.1q3.7 0 6 2.2t2.3 6q0 4.2-3 8.1l8 7.9L31 25q-.1-.1-.6-.5t-.9-.9-.7-.8-.4-.7q0-.3 1.1-1.4t1.5-1.1q.3 0 .5.2l1 1q.9.9 1.9 1.8t1.9 1.9 1.6 1.7.7.9z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconKey;
