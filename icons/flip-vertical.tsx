

import * as React from "react"

export interface Props {
    /** Icon type */
    type: string
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconFlipVertical extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        type: "reglendo",
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--${this.props.type}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><g id="g3394" transform="translate(-0.84745756,-0.62109513)">    <path  id="path3357-6" d="m 33.38156,3.7812812 0,15.2196908 -24.9982253,0 z" style={{"fill":"#000000","fillRule":"evenodd","stroke":"#000000","strokeWidth":1.37589288,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}}></path>    <path  id="path3357-3-7" d="m 33.381559,37.460909 0,-15.219691 -24.9982235,0 z" style={{"fill":"#ffffff","fillRule":"evenodd","stroke":"#000000","strokeWidth":1.37589288,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}}></path>  </g></g>
                </svg>
                {this.props.text ? (
                    <span className={`${this.name}__text`}>
                        {this.props.text}
                    </span>
                ) : null}
            </span>
        )
    }
}

export default IconFlipVertical

