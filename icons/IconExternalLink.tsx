

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

class IconExternalLink extends React.Component<Props, State> {

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
                    <g><path d="M31.4 20.7v7.2q0 2.6-1.9 4.5T25 34.3H6.4q-2.6 0-4.5-1.9T0 27.9V9.3q0-2.7 1.9-4.6t4.5-1.8h15.7q.4 0 .6.2t.2.5V5q0 .3-.2.5t-.6.2H6.4Q5 5.7 3.9 6.8t-1 2.5v18.6q0 1.4 1 2.5t2.5 1H25q1.5 0 2.5-1t1.1-2.5v-7.2q0-.3.2-.5t.5-.2h1.4q.3 0 .5.2t.2.5zM40 1.4v11.5q0 .5-.4 1t-1 .4-1-.4l-4-4-14.5 14.6q-.2.2-.5.2t-.5-.2l-2.6-2.6q-.2-.2-.2-.5t.2-.5L30.1 6.4l-4-4q-.4-.4-.4-1t.4-1 1-.4h11.5q.6 0 1 .4t.4 1z"></path></g>
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

export default IconExternalLink

