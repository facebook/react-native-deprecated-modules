/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <MapKit/MapKit.h>

@interface RCTMapAnnotation : MKPointAnnotation <MKAnnotation>

@property (nonatomic, copy) NSString *identifier;
@property (nonatomic, assign) BOOL hasLeftCallout;
@property (nonatomic, assign) BOOL hasRightCallout;
@property (nonatomic, assign) BOOL animateDrop;
@property (nonatomic, strong) UIColor *tintColor;
@property (nonatomic, strong) UIImage *image;
@property (nonatomic, assign) NSUInteger viewIndex;
@property (nonatomic, assign) NSUInteger leftCalloutViewIndex;
@property (nonatomic, assign) NSUInteger rightCalloutViewIndex;
@property (nonatomic, assign) NSUInteger detailCalloutViewIndex;
@property (nonatomic, assign) BOOL draggable;

@end
