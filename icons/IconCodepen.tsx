

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
}
export interface State {
}

class IconCodepen extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--codepen ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m4.8 26.1l13.5 9v-8l-7.5-5z m-1.4-3.2l4.3-2.9-4.3-2.9v5.8z m18.3 12.2l13.5-9-6-4-7.5 5v8z m-1.7-11l6.1-4.1-6.1-4.1-6.1 4.1z m-9.2-6.2l7.5-5v-8l-13.5 9z m21.5 2.1l4.3 2.9v-5.8z m-3.1-2.1l6-4-13.5-9v8z m10.8-4v12.2q0 0.9-0.8 1.4l-18.2 12.2q-0.5 0.3-1 0.3t-1-0.3l-18.2-12.2q-0.8-0.5-0.8-1.4v-12.2q0-0.9 0.8-1.4l18.2-12.2q0.5-0.3 1-0.3t1 0.3l18.2 12.2q0.8 0.5 0.8 1.4z"></path></g>
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

export default IconCodepen

