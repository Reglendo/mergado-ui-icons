

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

class IconTags extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--tags`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m9.5 10.5q0-1.2-0.8-1.9t-1.9-0.8-1.9 0.8-0.8 1.9 0.8 1.9 1.9 0.8 1.9-0.8 0.8-1.9z m22.7 12.2q0 1.1-0.8 1.9l-10.4 10.5q-0.8 0.8-2 0.8-1.1 0-1.9-0.8l-15.2-15.2q-0.8-0.8-1.3-2.2t-0.6-2.5v-8.8q0-1.1 0.8-1.9t1.9-0.8h8.9q1.1 0 2.5 0.5t2.1 1.4l15.2 15.2q0.8 0.8 0.8 1.9z m8.2 0q0 1.1-0.8 1.9l-10.5 10.5q-0.8 0.8-1.9 0.8-0.8 0-1.2-0.3t-1.2-1l10-10q0.8-0.8 0.8-1.9 0-1.1-0.8-1.9l-15.2-15.2q-0.8-0.8-2.1-1.4t-2.5-0.5h4.7q1.2 0 2.5 0.5t2.2 1.4l15.2 15.2q0.8 0.8 0.8 1.9z"></path></g>
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

export default IconTags
