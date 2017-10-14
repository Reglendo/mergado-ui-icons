

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

class IconCalculator extends React.Component<Props, State> {

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
                    <g><path d="M10.1 34.3q0-1.2-.9-2t-2-.9-2 .9-.8 2 .8 2 2 .8 2-.8.9-2zm8.5 0q0-1.2-.8-2t-2-.9-2 .9-.9 2 .9 2 2 .8 2-.8.8-2zm-8.5-8.6q0-1.2-.9-2t-2-.8-2 .8-.8 2 .8 2 2 .9 2-.9.9-2zm17.1 8.6q0-1.2-.8-2t-2-.9-2.1.9-.8 2 .8 2 2.1.8 2-.8.8-2zm-8.6-8.6q0-1.2-.8-2t-2-.8-2 .8-.9 2 .9 2 2 .9 2-.9.8-2zm-8.5-8.6q0-1.1-.9-2t-2-.8-2 .8-.8 2 .8 2.1 2 .8 2-.8.9-2.1zm17.1 8.6q0-1.2-.8-2t-2-.8-2.1.8-.8 2 .8 2 2.1.9 2-.9.8-2zm-8.6-8.6q0-1.1-.8-2t-2-.8-2 .8-.9 2 .9 2.1 2 .8 2-.8.8-2.1zm17.2 17.2v-8.6q0-1.1-.9-2t-2-.8-2 .8-.8 2v8.6q0 1.1.8 2t2 .8 2-.8.9-2zm-8.6-17.2q0-1.1-.8-2t-2-.8-2.1.8-.8 2 .8 2.1 2.1.8 2-.8.8-2.1zm8.6-7.1V4.3q0-.6-.4-1t-1-.4H5.8q-.6 0-1 .4t-.4 1V10q0 .6.4 1t1 .4h28.6q.5 0 1-.4t.4-1zm0 7.1q0-1.1-.9-2t-2-.8-2 .8-.8 2 .8 2.1 2 .8 2-.8.9-2.1zm2.8-14.2v34.2q0 1.2-.8 2.1t-2 .8H4.4q-1.2 0-2.1-.8t-.8-2.1V2.9q0-1.2.8-2.1T4.4 0h31.4q1.1 0 2 .8t.8 2.1z"></path></g>
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

export default IconCalculator

