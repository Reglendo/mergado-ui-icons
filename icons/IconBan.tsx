

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

class IconBan extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--ban`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m32.3 19.9q0-3.6-2-6.6l-16.8 16.9q3.1 1.9 6.6 1.9 2.5 0 4.8-0.9t3.8-2.6 2.6-3.9 1-4.8z m-22.3 6.7l16.8-16.8q-3-2.1-6.7-2.1-3.3 0-6.1 1.7t-4.4 4.4-1.6 6.1q0 3.6 2 6.7z m27.3-6.7q0 3.5-1.4 6.7t-3.6 5.5-5.5 3.7-6.7 1.3-6.6-1.3-5.5-3.7-3.6-5.5-1.4-6.7 1.4-6.7 3.6-5.4 5.5-3.7 6.6-1.4 6.7 1.4 5.5 3.7 3.6 5.4 1.4 6.7z"></path></g>
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

export default IconBan
