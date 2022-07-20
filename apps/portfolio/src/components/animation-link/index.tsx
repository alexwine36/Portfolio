import TransitionLink from 'gatsby-plugin-transition-link';
import React, { Suspense } from 'react';
// import Cover from './Cover';
// import Fade from './Fade';
// import MorphTo from './MorphTo';
// import PaintDrip from './PaintDrip';
// import SwipeOver from './Swipe';

// const GSAP = loadable.lib(() => import('gsap'));

/* eslint-disable-next-line */
export interface AnimationLinkProps {}

const Cover = React.lazy(() => import('./Cover'));
const Fade = React.lazy(() => import('./Fade'));
const MorphTo = React.lazy(() => import('./MorphTo'));
const PaintDrip = React.lazy(() => import('./PaintDrip'));
const SwipeOver = React.lazy(() => import('./Swipe'));

export function AnimationLink(allProps: any) {
  const { children, ...props } = allProps;
  return (
    <Suspense fallback={<div>Loading</div>}>
      <React.Fragment>
        {props.cover && <Cover {...props}>{children}</Cover>}
        {props.fade && <Fade {...props}>{children}</Fade>}
        {props.paintDrip && <PaintDrip {...props}>{children}</PaintDrip>}
        {props.swipe && <SwipeOver {...props}>{children}</SwipeOver>}
        {!!props.morph && <MorphTo {...props}>{children}</MorphTo>}

        {!props.cover &&
          !props.fade &&
          !props.paintDrip &&
          !props.swipe &&
          !props.morph && (
            <TransitionLink {...props}>{children}</TransitionLink>
          )}
      </React.Fragment>
    </Suspense>
  );
}

export default AnimationLink;
