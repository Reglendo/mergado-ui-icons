

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
    className?: string
}
export interface State {
}

class IconVenusDouble extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 40 40",
        color: 'currentColor',
        textFirst: false,
        className: "",
    }

    render() {
        let className = `muk-icon ${this.name}--venus-double ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M40 11.8q.2 3.5-1.2 6.5t-4.2 5-6 2.3v5.8h5q.3 0 .5.2t.2.5v1.5q0 .3-.2.5t-.5.2h-5v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5H14.3v5q0 .3-.2.5t-.5.2h-1.5q-.3 0-.5-.2t-.2-.5v-5h-5q-.3 0-.5-.2t-.2-.5v-1.5q0-.3.2-.5t.5-.2h5v-5.8q-3.3-.3-6-2.3t-4.2-5T0 11.8q.4-4.6 3.7-7.9T11.6.1q4.6-.5 8.4 2.1Q23.8-.4 28.4.1q4.6.4 7.9 3.8t3.7 7.9zm-20 8q2.9-2.9 2.9-6.9t-2.9-7q-2.9 2.9-2.9 7t2.9 6.9zm-7.1 3.1q2.5 0 4.8-1.3-3.4-3.7-3.4-8.7 0-5 3.4-8.8-2.3-1.2-4.8-1.2-4.2 0-7.1 2.9t-2.9 7.1 2.9 7 7.1 3zm12.8 8.5v-5.8q-3-.3-5.7-2.1-2.7 1.8-5.7 2.1v5.8h11.4zm1.4-8.5q4.2 0 7.1-3t2.9-7-2.9-7.1-7.1-2.9q-2.5 0-4.8 1.2 3.4 3.8 3.4 8.8 0 5-3.4 8.7 2.3 1.3 4.8 1.3z"></path></g>
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

export default IconVenusDouble

