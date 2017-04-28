

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

class IconStackOverflow extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--stack-overflow`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="m31.8 36.4h-25v-10.7h-3.6v14.3h32.1v-14.3h-3.5v10.7z m-21.1-11.7l0.8-3.5 17.5 3.7-0.8 3.5z m2.3-8.3l1.5-3.3 16.2 7.6-1.5 3.2z m4.5-8l2.3-2.7 13.7 11.4-2.3 2.8z m8.9-8.4l10.6 14.3-2.8 2.2-10.7-14.4z m-16 32.8v-3.5h17.8v3.5h-17.8z"></path></g>
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

export default IconStackOverflow

