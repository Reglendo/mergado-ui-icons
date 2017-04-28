

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

class IconHashtag extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--hashtag`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m22.1 22.9l1.5-5.8h-5.7l-1.4 5.8h5.6z m17.2-11.3l-1.3 5q-0.1 0.5-0.7 0.5h-7.3l-1.4 5.8h6.9q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.2 5q-0.1 0.5-0.7 0.5h-7.3l-1.8 7.3q-0.2 0.5-0.7 0.5h-5q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.7-7h-5.7l-1.8 7.3q-0.1 0.5-0.7 0.5h-5q-0.3 0-0.5-0.2-0.2-0.3-0.2-0.6l1.8-7h-7q-0.3 0-0.5-0.3-0.2-0.2-0.2-0.6l1.3-5q0.1-0.5 0.7-0.5h7.3l1.4-5.8h-6.9q-0.4 0-0.6-0.2-0.2-0.3-0.1-0.6l1.2-5q0.1-0.6 0.7-0.6h7.3l1.8-7.3q0.2-0.5 0.7-0.5h5q0.4 0 0.6 0.2 0.2 0.3 0.1 0.7l-1.7 6.9h5.7l1.8-7.3q0.1-0.5 0.7-0.5h5q0.3 0 0.5 0.2 0.2 0.3 0.2 0.7l-1.8 6.9h7q0.3 0 0.5 0.3 0.2 0.3 0.2 0.6z"></path></g>
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

export default IconHashtag

