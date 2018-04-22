
import * as React from "react"
import shallowCompare from "shallow-compare"
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

class IconBarcode extends React.PureComponent<Props, {}> {
    shouldComponentUpdate(nextProps) { return shallowCompare(this,this.props,nextProps) }
    public static defaultProps: Props = { 
        size: 15,
        viewBox: "0 0 40 40",
        color: 'currentColor',
    }
    render() {
        const p = this.props
        const name = "muk-icon";
        const textEl = p.text ? <span className={`muk-icon__text`}>{p.text}</span> : false
        const className = `muk-icon m--barcode ${p.className || ""}`
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
                        <g className={`m-group`}><path d="M1.4 34.3H0V2.9h1.4v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-.7V2.9h.7v31.4zm3.5 0h-.7V2.9h.7v31.4zm3.5 0h-1.4V2.9h1.4v31.4zm2.8 0H14V2.9h.7v31.4zm1.4 0h-.7V2.9h.7v31.4zm1.4 0h-.6V2.9h.6v31.4zm3.6 0h-1.5V2.9H21v31.4zm3.5 0h-1.5V2.9h1.5v31.4zm2.8 0H26V2.9h1.4v31.4zm2.8 0h-1.4V2.9h1.4v31.4zm2.1 0h-1.4V2.9h1.4v31.4zm4.2 0h-2.1V2.9h2.1v31.4zm1.4 0h-.7V2.9h.7v31.4zm2.1 0h-1.4V2.9H40v31.4z"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconBarcode;
