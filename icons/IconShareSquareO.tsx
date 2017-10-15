

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

class IconShareSquareO extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--share-square-o ${this.props.addClass}`

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
                    <g><path d="M32.9 22.1v5.8q0 2.6-1.9 4.5t-4.5 1.9H7.9q-2.6 0-4.5-1.9t-1.9-4.5V9.3q0-2.7 1.9-4.6t4.5-1.8h5.7q.3 0 .5.2t.2.5q0 .6-.5.7-1.8.6-3 1.3-.2.1-.4.1H7.9q-1.4 0-2.5 1.1t-1 2.5v18.6q0 1.4 1 2.5t2.5 1h18.6q1.5 0 2.5-1t1.1-2.5v-4.8q0-.4.4-.7.6-.3 1.2-.8.3-.4.8-.2.4.2.4.7zM38.2 11l-8.6 8.6q-.4.4-1 .4-.2 0-.5-.1-.9-.4-.9-1.3v-4.3h-3.6q-7.2 0-9.7 2.9-2.7 3.1-1.7 10.6.1.5-.4.7-.2.1-.3.1-.4 0-.6-.3-.2-.3-.4-.7t-.9-1.5-1.1-2.3-.9-2.5-.4-2.7q0-1.1.1-2.1t.3-2 .6-1.9 1.1-1.9 1.5-1.6 2.1-1.4 2.8-1.1 3.6-.6 4.3-.3h3.6V1.4q0-.9.9-1.3.3-.1.5-.1.6 0 1 .4L38.2 9q.4.4.4 1t-.4 1z"></path></g>
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

export default IconShareSquareO

