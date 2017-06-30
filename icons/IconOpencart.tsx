

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

class IconOpencart extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--opencart ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m26.7 31.6q0 1.2-0.9 2.1t-2 0.8-2-0.8-0.9-2.1 0.9-2 2-0.8 2 0.8 0.9 2z m-13.1 0q0 1.2-0.9 2.1t-2 0.8-2.1-0.8-0.8-2.1 0.8-2 2.1-0.8 2 0.8 0.9 2z m-13.6-26.1q1 1 1.9 1.8t2.2 1.5 2.3 1.1 2.9 0.8 3.5 0.5 4.4 0.3 5.3 0.2 6.6 0q2.4 0 4.2 0.1t3.2 0.3 2.2 0.5 1.2 0.7 0.4 0.9-0.3 1.1-1 1.3-1.6 1.6-2 1.9-2.4 2.1q-3.3 2.7-5 4.3 0.5-0.9 1.3-1.9t1.7-1.9 1.6-1.7 1.5-1.6 0.9-1.4 0.2-1.2-0.8-1-2-0.7-3.6-0.4-5.3-0.1q-2.9 0-5.5-0.1t-4.5-0.4-3.5-0.8-2.8-0.9-2.2-1-1.6-1.2-1.2-1.3-0.9-1.2-0.7-1.2-0.6-1z"></path></g>
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

export default IconOpencart

