

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

class IconRenren extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--renren`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m28.3 35q-3.8 2.1-8.2 2.1-4.4 0-8.2-2.1 3.1-1.9 5.2-4.7t3-5.9q0.8 3.2 2.9 5.9t5.3 4.7z m-11.1-31.8v10.8q0 5.6-2.8 10.3t-7.4 6.8q-4-4.8-4-11.1 0-4.1 1.9-7.8t5.1-6 7.2-3z m20.1 16.8q0 6.3-4.1 11.1-4.5-2.2-7.3-6.8t-2.9-10.3v-10.8q4 0.6 7.3 3t5.1 6 1.9 7.8z"></path></g>
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

export default IconRenren

