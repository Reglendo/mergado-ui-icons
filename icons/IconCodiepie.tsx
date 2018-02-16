
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

class IconCodiepie extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon ${name}--codiepie ${p.addClass} ${p.className}`
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
                        <g><path d="M35.6 15.2q1.2 0 1.9.6t.7 1.9-.8 1.8-2 .6h-3.1V24h-.5v-8.8h3.8zm3.6 13.1l-.1.3-.1.2q-2.6 5.1-7.4 8.2T21 40q-4.1 0-7.8-1.6t-6.4-4.2-4.2-6.4T1 20t1.6-7.8 4.2-6.4 6.4-4.2T21 0q5.4 0 10.1 2.8t7.4 7.5l.2.5-3 1.5q-2.4 1.2-3.7 1.9-.1 0-10.7 6 8.6 4 17.9 8.1zM21 39.5q5.6 0 10.3-3t7.2-7.9l-6.4-2.9q-1.6 3.1-4.6 4.9T21 32.5q-3.4 0-6.2-1.7t-4.6-4.5T8.5 20t1.7-6.2 4.6-4.6T21 7.5t6.3 1.7 4.5 4.5l6.3-3.2q-2.6-4.6-7.2-7.3T21 .5q-2.7 0-5.2.7t-4.7 1.9-3.9 3.1-3.1 3.9-1.9 4.7-.7 5.2.7 5.2 1.9 4.7 3.1 3.9 3.9 3.1 4.7 1.9 5.2.7z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconCodiepie;
