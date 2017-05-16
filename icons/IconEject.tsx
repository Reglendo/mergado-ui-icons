

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

class IconEject extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--eject`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m3.3 21.9l15.9-15.9q0.4-0.4 1-0.4t1 0.4l15.8 15.9q0.4 0.4 0.3 0.7t-0.7 0.3h-32.9q-0.5 0-0.7-0.3t0.3-0.7z m32.6 12.4h-31.4q-0.6 0-1.1-0.4t-0.4-1v-5.8q0-0.5 0.4-1t1.1-0.4h31.4q0.6 0 1 0.4t0.4 1v5.8q0 0.5-0.4 1t-1 0.4z"></path></g>
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

export default IconEject

