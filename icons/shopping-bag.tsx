

import * as React from "react"

export interface Props {
    /** Size */
    size?: number
    /** Icon text */
    text?: string
    /** Icon title */
    title?: string
    style?: any
}
export interface State {
}

class IconShoppingBag extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--shopping-bag`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.2 31.4l0.8 7q0.1 0.6-0.4 1.1-0.4 0.5-1 0.5h-37.2q-0.6 0-1-0.5-0.5-0.5-0.4-1.1l0.8-7h38.4z m-2.1-18.7l2 17.3h-38.2l2-17.3q0-0.5 0.4-0.9t1-0.4h5.7v2.9q0 1.2 0.8 2t2.1 0.8 2-0.8 0.8-2v-2.9h8.6v2.9q0 1.2 0.8 2t2 0.8 2.1-0.8 0.8-2v-2.9h5.7q0.6 0 1 0.4t0.4 0.9z m-8.5-4.1v5.7q0 0.6-0.5 1t-1 0.4-1-0.4-0.4-1v-5.7q0-2.4-1.7-4.1t-4-1.6-4 1.6-1.7 4.1v5.7q0 0.6-0.4 1t-1 0.4-1-0.4-0.5-1v-5.7q0-3.6 2.5-6.1t6.1-2.5 6.1 2.5 2.5 6.1z"></path></g>
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

export default IconShoppingBag

