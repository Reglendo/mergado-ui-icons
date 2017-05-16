

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

class IconFolderOpen extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--folder-open`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m39.9 21.2q0 0.6-0.6 1.4l-7.2 8.4q-0.9 1.1-2.5 1.9t-3.1 0.7h-23.1q-0.7 0-1.3-0.3t-0.5-0.9q0-0.6 0.6-1.4l7.2-8.4q0.9-1.1 2.5-1.8t3.1-0.8h23.1q0.7 0 1.3 0.3t0.5 0.9z m-7.2-7.3v3.4h-17.7q-2 0-4.2 1t-3.5 2.5l-7.3 8.6q0-0.1 0-0.3t0-0.3v-20.4q0-1.9 1.4-3.3t3.4-1.4h6.8q1.9 0 3.3 1.4t1.4 3.3v0.7h11.6q1.9 0 3.4 1.4t1.4 3.4z"></path></g>
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

export default IconFolderOpen
