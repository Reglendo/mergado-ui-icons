

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

class IconGoogle extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--google ${this.props.addClass}`

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
                    <g><path d="M20.1 17.5h16.2q.3 1.5.3 2.9 0 4.8-2 8.7T28.8 35t-8.7 2.1q-3.5 0-6.6-1.3T8 32.1t-3.7-5.4T3 20t1.3-6.7T8 7.9t5.5-3.7 6.6-1.3q6.7 0 11.5 4.4L27 11.8q-2.8-2.6-6.9-2.6-2.8 0-5.3 1.4t-3.9 4T9.5 20t1.4 5.4 3.9 4 5.3 1.4q2 0 3.6-.5t2.7-1.3 1.8-1.9 1.2-1.9.5-1.8h-9.8v-5.9z"></path></g>
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

export default IconGoogle

