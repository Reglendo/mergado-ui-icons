
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

class IconTarget4 extends React.PureComponent<Props, {}> {
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
        const className = `muk-icon muk-icon--target-4 ${p.className || ""}`
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
                        <g className={`m-group`}><g aria-label="4" id="text5116">    <path d="m 19.736104,15.634358 -4.121062,6.103468 h 4.121062 z m -0.624995,-3.095679 h 4.179654 v 9.199147 h 2.080062 v 2.724588 h -2.080062 v 2.656229 H 19.736104 V 24.462414 H 13.27131 v -3.222631 z" id="path5235"></path>  </g>  <path d="M34.539 18.667A14.576 14.576 0 0 0 21.333 5.47V0h-2.666v5.47A14.576 14.576 0 0 0 5.46 18.667H0v2.666h5.46a14.583 14.583 0 0 0 13.207 13.198V40h2.666v-5.469A14.583 14.583 0 0 0 34.54 21.333H40v-2.666h-5.461zM20 32c-6.625 0-12-5.375-12-12 0-6.626 5.375-12 12-12 6.628 0 12 5.374 12 12 0 6.625-5.372 12-12 12z" id="path4559"></path></g>
                    </svg>
                    {!p.textFirst && textEl }
                </span>
            )
    }
}
export default IconTarget4;
