

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

class IconFilm extends React.Component<Props, State> {

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
        let className = `muk-icon ${this.name}--film ${this.props.addClass} ${this.props.className}`

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
                    <g><path d="M8 34.6V32q0-.6-.4-1t-1-.4H4q-.6 0-.9.4t-.4 1v2.6q0 .6.4 1t.9.3h2.6q.6 0 1-.3t.4-1zm0-8V24q0-.6-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.6q0 .6.4 1t.9.4h2.6q.6 0 1-.4t.4-1zm0-7.9V16q0-.5-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.6q.6 0 1-.4t.4-.9zm21.2 15.9V24q0-.6-.4-.9t-.9-.4H12q-.6 0-1 .4t-.4.9v10.6q0 .6.4 1t1 .3h15.9q.5 0 .9-.3t.4-1zM8 10.7V8q0-.5-.4-.9t-1-.4H4q-.6 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.6q.6 0 1-.4t.4-.9zm29.2 23.9V32q0-.6-.4-1t-.9-.4h-2.7q-.5 0-.9.4t-.4 1v2.6q0 .6.4 1t.9.3h2.7q.5 0 .9-.3t.4-1zm-8-15.9V8q0-.5-.4-.9t-.9-.4H12q-.6 0-1 .4t-.4.9v10.7q0 .5.4.9t1 .4h15.9q.5 0 .9-.4t.4-.9zm8 7.9V24q0-.6-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.6q0 .6.4 1t.9.4h2.7q.5 0 .9-.4t.4-1zm0-7.9V16q0-.5-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.7q.5 0 .9-.4t.4-.9zm0-8V8q0-.5-.4-.9t-.9-.4h-2.7q-.5 0-.9.4t-.4.9v2.7q0 .5.4.9t.9.4h2.7q.5 0 .9-.4t.4-.9zm2.7-3.3v27.9q0 1.4-1 2.3t-2.4 1H3.3q-1.3 0-2.3-1t-1-2.3V7.4Q0 6 1 5t2.3-.9h33.2q1.4 0 2.4.9t1 2.4z"></path></g>
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

export default IconFilm

