
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

class IconZboziCzSmall extends React.PureComponent<Props, {}> {
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon muk-icon--zbozi-cz-small ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M37.836 15.292c-5.4 2.7-19.471 7.042-21.357 7.692-1.232.425-5.296 1.888-5.514 3.432-.3 2.145 4.485 2.686 7.256 3.02 1.868.227 6.427.73 10.57.508 4.03-.218 9.67-1.082 9.791-.18.142 1.048-6.88 3.58-9.722 4.25-2.421.573-9.917 1.742-14.912 1.622-4.153-.1-10.886-.646-13.308-4.7-.845-1.414-.845-4.246-.05-5.475.883-1.365 1.845-2.723 3.98-3.662 4.07-1.791 22.563-8.677 23.123-8.797 1.237-.267 2.865-1.068-.391-1.333-2.577-.212-5.16-.348-7.745-.348a77.398 77.398 0 0 0-3.707.109c-.992.05-2.135.153-2.908-.626-.686-.692-1.238-2.042-1.394-3.007-.145-.904.18-1.667.899-2.202 1.535-1.144 3.93-1.011 5.729-.968.954.024 6.426.456 8.21.603 4.701.39 11.343 1.263 13.369 6.086 1.111 2.65-1.918 3.976-1.918 3.976" fill="#dc1f27"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconZboziCzSmall;
