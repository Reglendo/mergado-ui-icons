

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

class IconCopy extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--copy`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m37.9 8.6q0.9 0 1.5 0.6t0.6 1.5v27.2q0 0.9-0.6 1.5t-1.5 0.6h-21.5q-0.9 0-1.5-0.6t-0.6-1.5v-6.5h-12.2q-0.9 0-1.5-0.6t-0.6-1.5v-15q0-0.9 0.4-2t1.1-1.7l9.1-9.1q0.6-0.6 1.7-1.1t2-0.4h9.3q0.9 0 1.5 0.6t0.6 1.5v7.4q1.5-0.9 2.9-0.9h9.3z m-12.2 4.7l-6.7 6.7h6.7v-6.7z m-14.3-8.5l-6.6 6.6h6.6v-6.6z m4.4 14.4l7.1-7.1v-9.2h-8.6v9.2q0 0.9-0.6 1.6t-1.6 0.6h-9.2v14.3h11.4v-5.7q0-0.9 0.4-2t1.1-1.7z m21.3 17.9v-25.7h-8.5v9.3q0 0.9-0.7 1.5t-1.5 0.7h-9.3v14.2h20z"></path></g>
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

export default IconCopy

