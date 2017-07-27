

import * as React from "react"

export interface Props {
    size?: number
    text?: string
    title?: string
    style?: any
    addClass?: string
    viewBox?: string
}
export interface State {
}

class IconBadgePno extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {},
        addClass: "",
        title: "",
        viewBox: "0 0 39.999997 40",
    }

    render() {
        let className = `${this.name} ${this.name}--badge-pno ${this.props.addClass}`

        return (
            <span className={className} style={this.props.style} title={this.props.title}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={this.props.viewBox}
                >
                    <g><g   id="layer1" transform="translate(-313.84214,-492.80427)">    <g id="g4290-2" transform="matrix(0.04454194,0,0,0.04454209,313.84214,492.80423)">      <g id="g4248-5">        <path  d="M 775.425,419.082 C 760.987,261.635 636.571,137.162 478.949,122.808 l 0,-122.807 -59.869,0 0,122.807 C 261.458,137.161 137.044,261.634 122.602,419.081 l -122.602,0 0,59.869 122.602,0 c 14.442,157.389 138.856,281.861 296.479,296.303 l 0,122.775 59.869,0 0,-122.775 C 636.571,760.812 760.986,636.339 775.426,478.95 l 122.604,0 0,-59.869 -122.605,0 z m -326.41,299.341 c -148.735,0 -269.409,-120.672 -269.409,-269.408 0,-148.766 120.673,-269.409 269.409,-269.409 148.793,0 269.406,120.644 269.406,269.409 0,148.738 -120.613,269.408 -269.406,269.408 z" id="path4252-9"></path>      </g>    </g>    <g transform="scale(0.99999831,1.0000017)" style={{"fill":"#000000","fillOpacity":1,"stroke":"none","strokeWidth":1,"strokeLinecap":"butt","strokeLinejoin":"miter","strokeOpacity":1}} id="text4311-3">      <path d="m 328.06223,510.02975 q 0,1.20843 0.20933,1.80789 0.21885,0.58994 0.69461,0.58994 0.91346,0 0.91346,-2.39783 0,-2.3788 -0.91346,-2.3788 -0.47576,0 -0.69461,0.58994 -0.20933,0.58043 -0.20933,1.78886 z m 4.21523,-0.019 q 0,2.1885 -0.84685,3.29226 -0.84685,1.09425 -2.48347,1.09425 -1.57,0 -2.42637,-1.1228 -0.85637,-1.13231 -0.85637,-3.26371 0,-4.34845 3.28274,-4.34845 1.60807,0 2.46444,1.13231 0.86588,1.1228 0.86588,3.21614 z m 6.54646,-4.14863 -7.71683,13.91123 -2.28364,0 7.71682,-13.91123 2.28365,0 z m -1.01812,9.72454 q 0,1.20843 0.20933,1.80789 0.21885,0.58994 0.69461,0.58994 0.91346,0 0.91346,-2.39783 0,-2.3788 -0.91346,-2.3788 -0.47576,0 -0.69461,0.58994 -0.20933,0.58043 -0.20933,1.78886 z m 4.21523,-0.019 q 0,2.17898 -0.84685,3.28274 -0.84686,1.09425 -2.48347,1.09425 -1.57001,0 -2.42638,-1.12279 -0.85637,-1.13231 -0.85637,-3.2542 0,-4.34845 3.28275,-4.34845 1.60807,0 2.46444,1.13231 0.86588,1.12279 0.86588,3.21614 z" style={{"fill":"#000000"}} id="path5061"></path>    </g>  </g></g>
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

export default IconBadgePno

