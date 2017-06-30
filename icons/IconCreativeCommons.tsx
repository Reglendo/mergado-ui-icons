

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

class IconCreativeCommons extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
    }

    render() {
        let className = `${this.name} ${this.name}--creative-commons ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m13.5 27.5q3.4 0 5.7-2.3 0.4-0.4 0.1-0.8l-1-1.8q-0.1-0.3-0.5-0.4-0.4-0.1-0.6 0.2l-0.1 0.1q-0.1 0.1-0.3 0.2t-0.4 0.3-0.5 0.3-0.6 0.3-0.8 0.3-0.8 0q-1.7 0-2.8-1.1t-1.1-2.8q0-1.7 1.1-2.8t2.7-1.1q0.8 0 1.6 0.3t1.1 0.6l0.4 0.3q0.2 0.3 0.6 0.2 0.3 0 0.5-0.3l1.2-1.7q0.3-0.5-0.1-0.9 0-0.1-0.2-0.2t-0.7-0.6-1.1-0.6-1.5-0.5-1.9-0.2q-3.3 0-5.5 2.1t-2.2 5.4q0 3.3 2.2 5.4t5.5 2.1z m14.1 0q3.4 0 5.7-2.3 0.3-0.4 0.1-0.8l-1-1.8q-0.2-0.3-0.6-0.4-0.3-0.1-0.6 0.2l-0.1 0.1q-0.1 0.1-0.2 0.2t-0.4 0.3-0.5 0.3-0.7 0.3-0.7 0.3-0.9 0q-1.7 0-2.7-1.1t-1.1-2.8q0-1.7 1-2.8t2.8-1.1q0.8 0 1.6 0.3t1.1 0.6l0.3 0.3q0.3 0.3 0.6 0.2 0.4 0 0.6-0.3l1.1-1.7q0.3-0.5 0-0.9-0.1-0.1-0.3-0.2t-0.6-0.6-1.1-0.6-1.5-0.5-1.9-0.2q-3.3 0-5.5 2.1t-2.2 5.4q0 3.3 2.1 5.4t5.6 2.1z m-7.6-23.9q-3.3 0-6.4 1.3t-5.2 3.5-3.5 5.2-1.3 6.4 1.3 6.4 3.5 5.2 5.2 3.5 6.4 1.3 6.4-1.3 5.2-3.5 3.5-5.2 1.3-6.4-1.3-6.4-3.5-5.2-5.2-3.5-6.4-1.3z m0-3.6q4.1 0 7.8 1.6t6.4 4.2 4.2 6.4 1.6 7.8-1.6 7.8-4.2 6.4-6.4 4.2-7.8 1.6-7.8-1.6-6.4-4.2-4.2-6.4-1.6-7.8 1.6-7.8 4.2-6.4 6.4-4.2 7.8-1.6z"></path></g>
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

export default IconCreativeCommons

