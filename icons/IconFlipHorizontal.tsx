

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

class IconFlipHorizontal extends React.Component<Props, State> {

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
                    <g><g id="g3394" transform="matrix(0,1,-1,0,40.621095,6.9813581e-8)">    <path  id="path3357-6" d="m 33.38156,3.7812812 0,15.2196908 -24.9982253,0 z" style={{"fillRule":"evenodd","strokeWidth":1.37589288,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1,"fill":"none"}}></path>    <path  id="path3357-3-7" d="m 33.381559,37.460909 0,-15.219691 -24.9982235,0 z" style={{"fillRule":"evenodd","strokeWidth":1.37589288,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}}></path>  </g></g>
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

export default IconFlipHorizontal

