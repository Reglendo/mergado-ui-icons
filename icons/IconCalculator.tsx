

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

class IconCalculator extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
    }

    render() {
        let className = `${this.name} ${this.name}--calculator ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m10.1 34.3q0-1.2-0.9-2t-2-0.9-2 0.9-0.8 2 0.8 2 2 0.8 2-0.8 0.9-2z m8.5 0q0-1.2-0.8-2t-2-0.9-2 0.9-0.9 2 0.9 2 2 0.8 2-0.8 0.8-2z m-8.5-8.6q0-1.2-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2 2 0.9 2-0.9 0.9-2z m17.1 8.6q0-1.2-0.8-2t-2-0.9-2.1 0.9-0.8 2 0.8 2 2.1 0.8 2-0.8 0.8-2z m-8.6-8.6q0-1.2-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2 2 0.9 2-0.9 0.8-2z m-8.5-8.6q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2.1 2 0.8 2-0.8 0.9-2.1z m17.1 8.6q0-1.2-0.8-2t-2-0.8-2.1 0.8-0.8 2 0.8 2 2.1 0.9 2-0.9 0.8-2z m-8.6-8.6q0-1.1-0.8-2t-2-0.8-2 0.8-0.9 2 0.9 2.1 2 0.8 2-0.8 0.8-2.1z m17.2 17.2v-8.6q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2v8.6q0 1.1 0.8 2t2 0.8 2-0.8 0.9-2z m-8.6-17.2q0-1.1-0.8-2t-2-0.8-2.1 0.8-0.8 2 0.8 2.1 2.1 0.8 2-0.8 0.8-2.1z m8.6-7.1v-5.7q0-0.6-0.4-1t-1-0.4h-28.6q-0.6 0-1 0.4t-0.4 1v5.7q0 0.6 0.4 1t1 0.4h28.6q0.5 0 1-0.4t0.4-1z m0 7.1q0-1.1-0.9-2t-2-0.8-2 0.8-0.8 2 0.8 2.1 2 0.8 2-0.8 0.9-2.1z m2.8-14.2v34.2q0 1.2-0.8 2.1t-2 0.8h-31.4q-1.2 0-2.1-0.8t-0.8-2.1v-34.2q0-1.2 0.8-2.1t2.1-0.8h31.4q1.1 0 2 0.8t0.8 2.1z"></path></g>
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

export default IconCalculator

