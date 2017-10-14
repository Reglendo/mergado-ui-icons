

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
}
export interface State {
}

class IconFlipVertical extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
    }

    render() {
        let className = `muk-icon ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                {this.props.text && this.props.textFirst &&
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
                <svg className={`muk-icon__image`} preserveAspectRatio='xMidYMid meet'
                     fill={this.props.color}
                     stroke={this.props.color}
                     strokeWidth={0}
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><path style={{"lineHeight":"normal","fontVariantLigatures":"normal","fontVariantPosition":"normal","fontVariantCaps":"normal","fontVariantNumeric":"normal","fontVariantAlternates":"normal","fontFeatureSettings":"normal","textIndent":0,"textAlign":"start","textDecorationLine":"none","textDecorationStyle":"solid","textDecorationColor":"#000","textTransform":"none","textOrientation":"mixed","shapePadding":0,"isolation":"auto","mixBlendMode":"normal"}} d="M33.851 1.965l-1.047.637L5.71 19.098h28.141zm-1.377 2.45V17.72H10.617zM5.71 20.961l2.565 1.563 25.576 15.57V20.96z" color="#000" font-weight="400" font-family="sans-serif" white-space="normal" overflow="visible" fill-rule="evenodd"></path></g>
                </svg>
                {this.props.text && !this.props.textFirst && 
                    <span className={`muk-icon__text`}>
                        {this.props.text}
                    </span>
                }
            </span>
        )
    }
}

export default IconFlipVertical

