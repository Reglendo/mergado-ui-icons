

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

class IconMergado extends React.Component<Props, State> {

    readonly name = "muk-icon";

    public static defaultProps: Props = {
        size: 15,
        style: {}
    }

    render() {
        let className = `${this.name} ${this.name}--mergado`

        return (
            <span className={className} style={this.props.style}>
                <svg className={`${this.name}__image`} preserveAspectRatio='xMidYMid meet'
                     fill='currentColor'
                     height={this.props.size}
                     width={this.props.size}
                     viewBox={`0 0 40 40`}
                >
                    <g><path d="M 0,-3.5700404e-5 20,19.999964 l -20,20 z" style={{"color":"#000000","clipRule":"nonzero","display":"inline","overflow":"visible","visibility":"visible","opacity":1,"isolation":"auto","mixBlendMode":"normal","colorInterpolation":"sRGB","colorInterpolationFilters":"linearRGB","solidColor":"#000000","solidOpacity":1,"fill":"#7fba2c","fillOpacity":1,"fillRule":"nonzero","stroke":"none","strokeWidth":5,"strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":4,"strokeDasharray":"5, 15","strokeDashoffset":0,"strokeOpacity":1,"colorRendering":"auto","imageRendering":"auto","shapeRendering":"auto","textRendering":"auto","enableBackground":"accumulate"}} id="path3" ></path>  <path d="m 0,39.999964 20,-20 20,20 z" style={{"color":"#000000","clipRule":"nonzero","display":"inline","overflow":"visible","visibility":"visible","opacity":1,"isolation":"auto","mixBlendMode":"normal","colorInterpolation":"sRGB","colorInterpolationFilters":"linearRGB","solidColor":"#000000","solidOpacity":1,"fill":"#007b20","fillOpacity":1,"fillRule":"nonzero","stroke":"none","strokeWidth":5,"strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":4,"strokeDasharray":"5, 15","strokeDashoffset":0,"strokeOpacity":1,"colorRendering":"auto","imageRendering":"auto","shapeRendering":"auto","textRendering":"auto","enableBackground":"accumulate"}} id="path5" ></path>  <path d="m 40,39.999964 -20,-20 L 40,-3.5700404e-5 Z" style={{"color":"#000000","clipRule":"nonzero","display":"inline","overflow":"visible","visibility":"visible","opacity":1,"isolation":"auto","mixBlendMode":"normal","colorInterpolation":"sRGB","colorInterpolationFilters":"linearRGB","solidColor":"#000000","solidOpacity":1,"fill":"#00a9b8","fillOpacity":1,"fillRule":"nonzero","stroke":"none","strokeWidth":5,"strokeLinecap":"round","strokeLinejoin":"miter","strokeMiterlimit":4,"strokeDasharray":"5, 15","strokeDashoffset":0,"strokeOpacity":1,"colorRendering":"auto","imageRendering":"auto","shapeRendering":"auto","textRendering":"auto","enableBackground":"accumulate"}} id="path7" ></path></g>
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

export default IconMergado

