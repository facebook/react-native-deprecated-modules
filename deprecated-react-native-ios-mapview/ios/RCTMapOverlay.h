/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

#import <MapKit/MapKit.h>

@interface RCTMapOverlay : MKPolyline <MKAnnotation>

@property (nonatomic, copy) NSString *identifier;
@property (nonatomic, strong) UIColor *strokeColor;
@property (nonatomic, assign) CGFloat lineWidth;

@end
